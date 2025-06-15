import Link from "next/link";
import { useState } from "react";

import { CloseIcon } from "@/app/_components/icons/close-icon";
import { Button } from "@/app/_components/button";

export const TrapTakeoverBanner = ({
  active,
  bannerText = "Trap Takeover is Here - 12PM",
}: {
  active: boolean;
  bannerText?: string;
}) => {
  const [showBanner, setShowBanner] = useState(active);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="trap-takeover font-logo sticky top-0 flex items-center justify-center py-4 font-semibold md:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm md:text-base">
          <span className="flex items-center justify-center font-semibold">
            <Button
              asChild
              className="px-1 py-2 text-2xl font-semibold decoration-yellow-500 md:text-4xl"
              variant="link"
            >
              <Link href="/deals/trap-takeover" className="flex gap-2">
                <span className="font-trap-takeover trap-takeover-text uppercase">
                  {bannerText}
                </span>
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
