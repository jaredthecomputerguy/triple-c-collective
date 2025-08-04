import Link from "next/link";
import { useState } from "react";

import { CloseIcon } from "@/app/_components/icons/close-icon";
import { Button } from "@/app/_components/button";
import { cn } from "@/lib/utils";

export const TrapTakeoverBanner = ({
  active,
  bannerText = "Trap Takeover Sale",
  bannerSubText,
}: {
  active: boolean;
  bannerText?: string;
  bannerSubText?: string;
}) => {
  const [showBanner, setShowBanner] = useState(active);

  if (!showBanner) {
    return null;
  }

  const hasBannerSubText = bannerSubText && bannerSubText.length > 0;

  return (
    <div className="trap-takeover font-logo sticky top-0 flex items-center justify-center py-4 font-semibold md:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm md:text-base">
          <span className="my-2 flex items-center justify-center font-semibold md:my-4">
            <Button
              asChild
              className="px-1 py-2 text-2xl font-semibold decoration-yellow-500 md:text-4xl"
              variant="link"
            >
              <Link href="/deals/trap-takeover" className="flex flex-col">
                <span
                  className={cn(
                    "font-trap-takeover trap-takeover-text text-4xl uppercase md:text-6xl",
                  )}
                >
                  {bannerText}
                </span>
                {hasBannerSubText && (
                  <span
                    className={
                      "font-trap-takeover trap-takeover-text uppercase"
                    }
                  >
                    {bannerSubText}
                  </span>
                )}
              </Link>
            </Button>
          </span>
        </div>
      </div>
      <Button
        className="absolute right-2 p-1 md:right-7"
        onClick={() => setShowBanner(false)}
        variant="ghost"
      >
        <CloseIcon />
      </Button>
    </div>
  );
};
