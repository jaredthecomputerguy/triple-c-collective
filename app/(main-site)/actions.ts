"use server";

import { Resend } from "resend";
import WelcomeEmail from "@/lib/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_GENERAL_AUDIENCE_ID;
const fromEmail = process.env.RESEND_FROM_EMAIL;

const emailQueue: SendWelcomeEmailInfo[] = [];
let isProcessingQueue = false;
let lastRequestTime = 0;

interface SendWelcomeEmailInfo {
  toEmail: string;
  firstName?: string;
  lastName?: string;
}

// Ensure only one request is processed at a time
async function processQueue() {
  if (isProcessingQueue) return;
  isProcessingQueue = true;

  while (emailQueue.length > 0) {
    const now = Date.now();
    const timeSinceLastRequest = now - lastRequestTime;

    if (timeSinceLastRequest < 1000) {
      console.log(`Rate limit delay: Waiting ${1000 - timeSinceLastRequest}ms`);
      await new Promise((res) => setTimeout(res, 1000 - timeSinceLastRequest));
    }

    const { toEmail, firstName, lastName } = emailQueue.shift()!;
    lastRequestTime = Date.now(); // Update timestamp before processing

    try {
      // Check if email already exists in audience
      const { data: listAudienceData, error: listAudienceError } =
        await resend.contacts.list({ audienceId });

      if (listAudienceError || !listAudienceData) {
        console.error("Error fetching audience list:", listAudienceError);
        continue;
      }

      if (listAudienceData.data.some((contact) => contact.email === toEmail)) {
        console.log("Already subscribed:", toEmail);
        continue;
      }

      // Create contact
      const { data: createContactData, error: createContactError } =
        await resend.contacts.create({
          email: toEmail,
          firstName,
          lastName,
          unsubscribed: false,
          audienceId,
        });

      if (createContactError || !createContactData) {
        console.error("Error creating contact:", createContactError);
        continue;
      }

      // Send email (again, enforce rate limit delay)
      lastRequestTime = Date.now();
      await new Promise((res) => setTimeout(res, 1000)); // Ensure delay before sending email

      const { data: sendEmailData, error: sendEmailError } =
        await resend.emails.send({
          from: fromEmail,
          to: [toEmail],
          subject: "Welcome to the Triple C Newsletter!",
          react: WelcomeEmail({ contactId: createContactData.id }),
        });

      if (sendEmailError) {
        console.error("Error sending email:", sendEmailError);
      } else {
        console.log("Welcome email sent:", sendEmailData?.id);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    }
  }

  isProcessingQueue = false;
}

// Function to add requests to the queue
export async function sendWelcomeEmailAction(user: SendWelcomeEmailInfo) {
  if (emailQueue.some((entry) => entry.toEmail === user.toEmail)) {
    console.log("Duplicate request detected, ignoring:", user.toEmail);
    return { error: "You have already requested a subscription!" };
  }

  emailQueue.push(user);
  if (!isProcessingQueue) processQueue();
  return { error: null };
}
