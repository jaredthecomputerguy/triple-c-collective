"use client";

import {
  useState,
  type ComponentProps,
  type HTMLAttributeAnchorTarget,
} from "react";
import { CloseIcon } from "./icons/close-icon";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface TopBannerProps extends ComponentProps<"div"> {
  active?: boolean;
  closeBtnClass?: string;
  link?: { href: string; target?: HTMLAttributeAnchorTarget };
}

export const TopBanner = ({
  active,
  closeBtnClass = "text-black",
  children,
  className = "px-1 py-2 font-semibold",
}: TopBannerProps) => {
  const [showBanner, setShowBanner] = useState(active);

  if (!showBanner) {
    return null;
  }

  return (
    <div
      className={cn(
        className,
        "sticky top-0 flex items-center justify-center font-logo font-semibold text-white md:px-4",
      )}
    >
      <div className="mx-auto max-w-7xl">
        <div className="">
          <span className="flex items-center justify-center font-semibold">
            {children}
          </span>
        </div>
      </div>
      <Button
        className={cn("absolute right-2 z-50 p-1 md:right-8", closeBtnClass)}
        onClick={() => setShowBanner(false)}
        variant="ghost"
        name="Close Top Banner"
        aria-label="Close Top Banner"
      >
        <CloseIcon />
      </Button>
    </div>
  );
};
