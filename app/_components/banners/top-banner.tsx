"use client";

import { useState, type ComponentProps } from "react";

import { CloseIcon } from "@/app/_components/icons/close-icon";
import { Button, type ButtonVariants } from "@/app/_components/button";
import { cn } from "@/lib/utils/shared";

interface TopBannerProps extends ComponentProps<"div"> {
  active: boolean;
  closeBtnClass?: string;
  closeBtnVariant?: ButtonVariants;
  onClose?: () => void;
}

export const TopBanner = ({
  active = false,
  closeBtnClass = "text-black",
  closeBtnVariant = "ghost",
  children,
  className,
  onClose,
  ...props
}: TopBannerProps) => {
  const [showBanner, setShowBanner] = useState(active);

  const handleCloseBanner = () => {
    setShowBanner(false);
    if (onClose) onClose();
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div
      {...props}
      className={cn(
        className,
        "font-logo sticky top-0 flex items-center justify-center font-semibold text-white md:px-4"
      )}>
      <div className="mx-auto max-w-7xl">{children}</div>
      <Button
        className={cn("absolute right-2 z-50 p-1 md:right-8", closeBtnClass)}
        onClick={handleCloseBanner}
        variant={closeBtnVariant}
        name="Close Top Banner"
        aria-label="Close Top Banner">
        <CloseIcon />
      </Button>
    </div>
  );
};
