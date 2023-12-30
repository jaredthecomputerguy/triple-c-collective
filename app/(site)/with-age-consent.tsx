"use client";

import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { redirect, usePathname } from "next/navigation";
import { ReactNode } from "react";

export const WithAgeConsent = ({
  children,
  ageConsent,
}: {
  children: ReactNode;
  ageConsent: RequestCookie | undefined;
}) => {
  const pathname = usePathname();
  if (!ageConsent && pathname !== "/age-consent") {
    redirect(`/age-consent?redirect_uri=${pathname}`);
  }

  return <>{children}</>;
};
