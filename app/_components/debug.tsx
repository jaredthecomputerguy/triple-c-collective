"use client";

import { clearAgeConsent } from "@/lib/actions/age-consent-action";
import { useState } from "react";
import { CloseIcon } from "./icons/close-icon";

export const Debug = ({ active }: { active: boolean }) => {
  const [isActive, setIsActive] = useState(active);

  if (!isActive) {
    return null;
  }

  return (
    <form
      className="font-logo fixed right-0 bottom-0 z-50 flex items-center justify-center gap-4 bg-black/90 p-4 text-sm text-white backdrop-blur-sm"
      action={clearAgeConsent}>
      <button type="button" onClick={() => setIsActive(false)}>
        <CloseIcon className="size-4" />
      </button>
      <span>DEBUG BAR</span>
      <button
        className="rounded-sm border border-transparent bg-red-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-red-700/90"
        type="submit">
        Clear Cookies
      </button>
    </form>
  );
};
