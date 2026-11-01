import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.string().min(1),

    POCKETBASE_BASE_URL: z.string().min(1),
    POCKETBASE_DEAL_URL: z.string().min(1),
    POCKETBASE_IMAGE_URL: z.string().min(1),
    POCKETBASE_DEV_BRANDS: z.string().min(1),

    NODEMAILER_USER: z.string().min(1),
    NODEMAILER_PASSWORD: z.string().min(1),
    NODEMAILER_BLACKLIST: z.string().min(1),

    SITE_URL: z.string().min(1),
    NEXT_TELEMETRY_DISABLED: z.string().min(1),

    RESEND_GENERAL_AUDIENCE_ID: z.string().min(1),
    RESEND_API_KEY: z.string().min(1),
    RESEND_FROM_EMAIL: z.string().min(1),
    RESEND_WEBHOOK_EMAIL: z.string().min(1),
    RESEND_WEBHOOK_SECRET: z.string().min(1),

    COPY_FLYER_SRC_DIR: z.string().min(1),
    COPY_FLYER_OUT_DIR: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().min(1),
  },
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,

    POCKETBASE_BASE_URL: process.env.POCKETBASE_BASE_URL,
    POCKETBASE_DEAL_URL: process.env.POCKETBASE_DEAL_URL,
    POCKETBASE_IMAGE_URL: process.env.POCKETBASE_IMAGE_URL,
    POCKETBASE_DEV_BRANDS: process.env.POCKETBASE_DEV_BRANDS,

    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

    NODEMAILER_USER: process.env.NODEMAILER_USER,
    NODEMAILER_PASSWORD: process.env.NODEMAILER_PASSWORD,
    NODEMAILER_BLACKLIST: process.env.NODEMAILER_BLACKLIST,

    SITE_URL: process.env.SITE_URL,
    NEXT_TELEMETRY_DISABLED: process.env.NEXT_TELEMETRY_DISABLED,

    RESEND_GENERAL_AUDIENCE_ID: process.env.RESEND_GENERAL_AUDIENCE_ID,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL,
    RESEND_WEBHOOK_EMAIL: process.env.RESEND_WEBHOOK_EMAIL,
    RESEND_WEBHOOK_SECRET: process.env.RESEND_WEBHOOK_SECRET,

    COPY_FLYER_SRC_DIR: process.env.COPY_FLYER_SRC_DIR,
    COPY_FLYER_OUT_DIR: process.env.COPY_FLYER_OUT_DIR,
  },
  skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
});
