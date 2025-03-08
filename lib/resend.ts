import { Resend } from "resend";

class ResendClient {
  private static instance: Resend;

  private constructor() {}

  public static getInstance(): Resend {
    if (!ResendClient.instance) {
      ResendClient.instance = new Resend(process.env.RESEND_API_KEY!);
    }
    return ResendClient.instance;
  }
}

export default ResendClient;
