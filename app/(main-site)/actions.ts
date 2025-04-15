"use server";

import { Resend } from "resend";
import WelcomeEmail from "@/lib/emails/WelcomeEmail";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_GENERAL_AUDIENCE_ID;
const fromEmail = process.env.RESEND_FROM_EMAIL;

interface SendWelcomeEmailInfo {
  toEmail: string;
  firstName?: string;
  lastName?: string;
}

export async function sendWelcomeEmailAction(user: SendWelcomeEmailInfo) {
  const { toEmail, firstName, lastName } = user;
  try {
    const { data: createContactData, error: createContactError } =
      await resend.contacts.create({
        email: toEmail,
        firstName,
        lastName,
        audienceId,
      });

    if (createContactError || !createContactData) {
      throw new Error("Failed to create contact");
    }

    const { data: sendEmailData, error: sendEmailError } =
      await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: "Welcome to the Triple C Newsletter!",
        react: WelcomeEmail({
          siteUrl: process.env.SITE_URL,
          contactId: createContactData.id,
        }),
      });

    if (sendEmailError || !sendEmailData) {
      throw new Error("Failed to send email");
    }

    return { error: null };
  } catch (e) {
    if (e instanceof Error) {
      return { error: e.message };
    } else {
      return { error: "Something went wrong" };
    }
  }
}
