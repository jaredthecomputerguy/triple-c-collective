"use client";

import { useSearchParams } from "next/navigation";
import { ageConsentAction } from "./actions";
import { CloseIcon } from "../_components/icons/close-icon";
import { useState } from "react";

export const AgeConsentForm = () => {
  const searchParams = useSearchParams();
  const redirect_uri = searchParams?.get("redirect_uri") ?? "/";
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-[#fefefe]/75 text-black mx-6 py-6 px-4 md:px-6 md:py-8 text-center rounded">
      <h1 className="pb-4 text-3xl font-bold uppercase text-primary-purple md:text-5xl font-logo">
        Triple C Collective
      </h1>
      <span className="text-2xl font-semibold md:text-4xl">
        Verify Your Age
      </span>
      <form
        className="flex flex-col items-center space-y-6"
        action={ageConsentAction}
      >
        <input type="hidden" name="redirectUri" value={redirect_uri} />
        <div className="relative flex items-center gap-2 text-sm md:text-base">
          <input
            className="w-4 h-4 bg-transparent border-2 border-gray-800 rounded appearance-none text-primary-purple checked:bg-primary-purple/80"
            type="checkbox"
            name="rememberMe"
            id="rememberMe"
            value={checked ? "checked" : ""}
            onClick={() => setChecked((prevState) => !prevState)}
          />

          {checked && (
            <CloseIcon
              className="absolute left-0 w-4 h-4 md:top-1 text-white pointer-events-none top-[2px]"
              strokeWidth={3}
            />
          )}
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        <div className="flex items-center gap-2">
          <button
            className="px-6 py-2 font-semibold text-white rounded outline-none bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple"
            type="submit"
          >
            Yes
          </button>
          <a
            className="px-6 py-2 font-semibold text-white rounded outline-none bg-primary-purple md:text-xl hover:bg-primary-purple/80 focus:bg-primary-purple/80 active:bg-primary-purple/80 focus:outline-primary-purple active:outline-primary-purple"
            href="https://www.google.com"
          >
            No
          </a>
        </div>
      </form>
    </div>
  );
};
