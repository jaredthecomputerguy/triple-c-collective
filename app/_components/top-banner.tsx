"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { CloseIcon } from "./icons/close-icon";
import { Button } from "./button";

export const TopBanner = ({
  active,
  bannerText,
  icon,
}: {
  active: boolean;
  bannerText: string;
  icon: ReactNode;
}) => {
  const [showBanner, setShowBanner] = useState(true);

  if (!showBanner || !active) {
    return null;
  }

  return (
    <div className="sticky top-0 flex w-screen items-center justify-center bg-[#f9f9f9] py-4 font-logo font-semibold md:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm md:text-base">
          <span className="flex items-center justify-center font-semibold">
            <Button
              asChild
              className="px-1 py-2 text-sm font-semibold md:text-lg"
              variant="link"
            >
              <Link href="/deals" className="flex gap-2">
                {/* {icon} */}
                {bannerText}
                {/* {icon} */}
              </Link>
            </Button>
          </span>
        </div>
      </div>
      <Button
        className="absolute right-2 p-1 md:right-8"
        onClick={() => setShowBanner(false)}
        variant="ghost"
      >
        <CloseIcon />
      </Button>
    </div>
  );
};
