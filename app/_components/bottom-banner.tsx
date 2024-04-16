"use client";

import { useState } from "react";
import { CloseIcon } from "./icons/close-icon";
import { Button } from "./button";
import Link from "next/link";

export const BottomBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="sticky top-0 flex w-screen items-center justify-center bg-[#f9f9f9] px-4 py-4 font-logo font-semibold">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm md:text-base">
          <span className="flex items-center justify-center font-semibold">
            <Button
              asChild
              className="text-base font-semibold md:text-lg"
              variant="link"
            >
              <Link href="/deals/420-deals">OUR 4/20 DEALS ARE HERE!</Link>
            </Button>
          </span>
        </div>
      </div>
      <Button onClick={() => setShowBanner(false)} variant="ghost">
        <CloseIcon />
      </Button>
    </div>
  );
};
