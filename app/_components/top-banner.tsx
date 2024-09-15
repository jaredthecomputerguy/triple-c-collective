"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import { CloseIcon } from "./icons/close-icon";
import { Button } from "./button";

export const TopBanner = ({
  active,
  bannerText,
  bottomText,
  className = "px-1 py-2 text-sm font-semibold md:text-lg",
  icon,
  link = { href: "/deals" },
}: {
  active?: boolean;
  bannerText: string;
  bottomText?: string;
  className?: string;
  icon?: ReactNode;
  link?: { href: string; target?: string };
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
              {bottomText ? (
                <Link
                  href={link.href}
                  className="flex flex-col"
                  target={link.target}
                >
                  <span className="flex items-center gap-2">
                    {icon}
                    {bannerText}
                    {icon}
                  </span>
                  <span className="text-sm">{bottomText}</span>
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="flex flex-col"
                  target={link.target}
                >
                  <span className="flex items-center gap-2">
                    {icon}
                    {bannerText}
                    {icon}
                  </span>
                </Link>
              )}
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
