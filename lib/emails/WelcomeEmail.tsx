import { Button, Html, Link } from "@react-email/components";
import * as React from "react";

export default function WelcomeEmail({ contactId }: { contactId: string }) {
  return (
    <Html>
      <Button
        style={{ background: "#000", color: "#fff", padding: "12px 20px" }}
      >
        Click me
      </Button>
      <Link
        href={`${process.env.SITE_URL}/newsletter/unsubscribe?contactId=${contactId}`}
      >
        Unsubscribe
      </Link>
    </Html>
  );
}
