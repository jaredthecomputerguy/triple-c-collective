import crypto from "crypto";
import { Resend } from "resend";
import { z } from "zod";

import NewSubscriberEmail from "@/lib/emails/NewSubscriberEmail";
import { Logger } from "@/lib/logger";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_FROM_EMAIL;
const logger = new Logger();

const LIST_OF_RESEND_IPS = [
  "44.228.126.217",
  "50.112.21.217",
  "52.24.126.164",
  "54.148.139.208",
];

const resendContactCreatedWebhookDataSchema = z.object({
  type: z.literal("contact.created"),
  created_at: z.coerce.date(),
  data: z.object({
    id: z.string().min(1),
    audience_id: z.string().min(1),
    created_at: z.coerce.date(),
    updated_at: z.coerce.date(),
    email: z.string(),
    first_name: z.optional(z.string()),
    last_name: z.optional(z.string()),
    unsubscribed: z.boolean(),
  }),
});

class WebhookError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

const verifyWebhook = async (req: Request) => {
  const ip = req.headers.get("x-forwarded-for");

  if (!ip) {
    throw new WebhookError("No IP address header", 403);
  }

  if (!LIST_OF_RESEND_IPS.includes(ip)) {
    throw new WebhookError("IP address header not from Resend", 403);
  }

  const rawBody = await req.arrayBuffer();
  const bodyText = Buffer.from(rawBody).toString("utf-8");

  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixGeneratedSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixGeneratedSignature) {
    throw new WebhookError("Request missing required svix headers", 403);
  }

  const signedContent = `${svixId}.${svixTimestamp}.${bodyText}`;
  const webhookSecret = process.env.RESEND_WEBHOOK_SECRET;

  const webhookSecretBytes = Buffer.from(webhookSecret.split("_")[1], "base64");
  const signature = crypto
    .createHmac("sha256", webhookSecretBytes)
    .update(signedContent)
    .digest("base64");

  const generatedSignatures = svixGeneratedSignature
    .split(" ")
    .map((sig) => sig.split(",")[1]);

  if (!generatedSignatures.includes(signature)) {
    throw new WebhookError("Generated webhook signature doesn't match", 403);
  }

  const body = JSON.parse(bodyText);

  const webhookData = resendContactCreatedWebhookDataSchema.parse(body);

  return webhookData;
};

export const POST = async (req: Request) => {
  try {
    const webhookData = await verifyWebhook(req);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [process.env.RESEND_WEBHOOK_EMAIL],
      subject: "New Subscriber to the Newsletter!",
      react: NewSubscriberEmail({
        email: webhookData.data.email,
        firstName: webhookData.data.first_name,
        lastName: webhookData.data.last_name,
        createdAt: webhookData.created_at,
      }),
    });

    if (error) {
      throw new WebhookError("Resend Error: " + error.message, 500);
    }

    logger.log("Webhook handled successfully for", webhookData.data.email);
    return new Response(null, { status: 200 });
  } catch (e) {
    if (e instanceof WebhookError) {
      logger.error("Webhook Error:", e.message);
      return new Response(null, { status: e.status });
    } else if (e instanceof Error) {
      logger.error("Error:", e.message);
      return new Response(null, { status: 500 });
    } else {
      logger.error("Unknown Error:", e);
      return new Response(null, { status: 500 });
    }
  }
};
