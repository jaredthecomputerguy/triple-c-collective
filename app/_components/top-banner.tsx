"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import { CloseIcon } from "./icons/close-icon";
import { Button } from "./button";

export const TopBanner = ({
  active,
  bannerText,
  className = "px-1 py-2 text-sm font-semibold md:text-lg",
  icon,
  link = "/deals",
}: {
  active?: boolean;
  bannerText: string;
  className?: string;
  icon?: ReactNode;
  link?: string;
}) => {
  const [showBanner, setShowBanner] = useState(active);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="sticky top-0 flex w-screen items-center justify-center bg-primary-purple py-4 font-logo font-semibold text-white md:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm md:text-base">
          <span className="flex items-center justify-center font-semibold">
            <Button asChild className={className} variant="link">
              <Link href={link} className="flex gap-2" target="_blank">
                {icon}
                {bannerText}
                {icon}
              </Link>
            </Button>
          </span>
        </div>
      </div>
      <Button
        className="absolute right-2 p-1 md:right-8"
        onClick={() => setShowBanner(false)}
        variant="ghost"
        name="Close Top Banner"
      >
        <CloseIcon />
      </Button>
    </div>
  );
};
