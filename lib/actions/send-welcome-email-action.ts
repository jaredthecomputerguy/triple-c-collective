"use server";

import { Resend } from "resend";
import WelcomeEmail from "@/lib/emails/WelcomeEmail";
import { Logger } from "@/lib/logger";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_GENERAL_AUDIENCE_ID;
const fromEmail = process.env.RESEND_FROM_EMAIL;

const logger = new Logger();

interface SendWelcomeEmailInfo {
  toEmail: string;
  firstName?: string;
  lastName?: string;
}

export async function sendWelcomeEmailAction(user: SendWelcomeEmailInfo) {
  const { toEmail, firstName, lastName } = user;
  try {
    if (process.env.NODE_ENV === "development") {
      logger.log("<--DEV MODE-->");
      logger.log("\t", {
        toEmail,
        firstName,
        lastName
      });
      logger.log("<--END DEV MODE-->");
      return { error: null };
    }

    const { data: createContactData, error: createContactError } =
      await resend.contacts.create({
        email: toEmail,
        firstName,
        lastName,
        audienceId
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
          contactId: createContactData.id
        })
      });

    if (sendEmailError || !sendEmailData) {
      throw new Error("Failed to send email");
    }

    return { error: null };
  } catch (e) {
    if (e instanceof Error) {
      logger.error("Error sending welcome email", e);
      return { error: e.message };
    } else {
      logger.error("Error sending welcome email", e);
      return { error: "Something went wrong" };
    }
  }
}
