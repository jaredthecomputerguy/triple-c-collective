"use client";

import { useSearchParams } from "next/navigation";
import { ageConsentAction } from "./actions";

export const AgeConsentForm = () => {
  const searchParams = useSearchParams();
  const redirect_uri = searchParams?.get("redirect_uri") ?? "/";

  return (
    <section>
      <form
        className="flex flex-col items-center space-y-6"
        action={ageConsentAction}
      >
        <input type="hidden" name="redirectUri" value={redirect_uri} />
        <div className="flex gap-2">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <button type="submit">Yes</button>
        <a href="https://www.google.com">No</a>
      </form>
    </section>
  );
};
