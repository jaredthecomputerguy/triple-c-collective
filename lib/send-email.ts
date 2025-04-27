"use server";

import { renderAsync } from "@react-email/render";
import nodemailer from "nodemailer";
import { ContactEmail } from "../app/(main-site)/contact/contact-email";
import { type EmailInfo } from "../app/(main-site)/contact/contact-form";
import { type MailOptions } from "nodemailer/lib/sendmail-transport";
import { Logger } from "./logger";

const logger = new Logger();

export const sendEmail = async ({
  from,
  message,
  subject,
  name,
}: EmailInfo) => {
  const email = process.env.NODEMAILER_USER;
  const password = process.env.NODEMAILER_PASSWORD;

  if (process.env.NODE_ENV === "development") {
    logger.log(
      "\n\nNODEMAILER --> Sending email: ",
      JSON.stringify({ from, message, subject, name }),
      "\n\n",
    );
    return { error: null };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.yahoo.com",
      port: 465,
      secure: true,
      auth: {
        user: email,
        pass: password,
      },
    });

    const emailHtml = await renderAsync(
      ContactEmail({ message, from, subject, name }),
    );

    const options: MailOptions = {
      from: email,
      to: email,
      subject,
      html: emailHtml,
    };

    await transporter.sendMail(options);
    return { error: null };
  } catch (err) {
    if (err instanceof Error) {
      logger.error("Nodemailer Error: ", err.message);
      return { error: err.message };
    } else {
      logger.error("Error: ", err);
      return { error: "Something went wrong..." };
    }
  }
};
