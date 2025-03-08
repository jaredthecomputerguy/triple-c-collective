import { z } from "zod";

const envVariables = z.object({
  NODE_ENV: z.string().min(1),

  POCKETBASE_BASE_URL: z.string().min(1),
  POCKETBASE_DEAL_URL: z.string().min(1),
  POCKETBASE_IMAGE_URL: z.string().min(1),
  POCKETBASE_DEV_BRANDS: z.string().min(1),

  EVENT_SERVER_URL: z.string().min(1),

  NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: z.string().min(1),

  NODEMAILER_USER: z.string().min(1),
  NODEMAILER_PASSWORD: z.string().min(1),

  SITE_URL: z.string().min(1),
  NEXT_TELEMETRY_DISABLED: z.string().min(1),

  RESEND_GENERAL_AUDIENCE_ID: z.string().min(1),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM_EMAIL: z.string().min(1),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
