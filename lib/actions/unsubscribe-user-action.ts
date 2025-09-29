"use server";

import { redirect } from "next/navigation";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_GENERAL_AUDIENCE_ID;

export async function unsubscribeUserAction(contactId: string) {
  try {
    const { error } = await resend.contacts.remove({
      id: contactId,
      audienceId
    });

    if (error) {
      throw new Error(`${error.name}: ${error.message}`);
    }
  } catch (e) {
    if (e instanceof Error) {
      redirect(`/newsletter/unsubscribe/error?contactId=${contactId}`);
    } else {
      redirect(`/newsletter/unsubscribe/error?contactId=${contactId}`);
    }
  }

  redirect("/newsletter/unsubscribe/success");
}
