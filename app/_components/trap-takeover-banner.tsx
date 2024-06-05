import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";
import { CloseIcon } from "./icons/close-icon";

export const TrapTakeoverBanner = ({ active }: { active: boolean }) => {
  const [showBanner, setShowBanner] = useState(active);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="sticky top-0 flex w-screen items-center justify-center bg-yellow-500 py-4 font-logo font-semibold md:px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-sm md:text-base">
          <span className="flex items-center justify-center font-semibold">
            <Button
              asChild
              className="px-1 py-2 text-2xl font-semibold md:text-4xl"
              variant="link"
            >
              <Link href="/deals/trap-takeover" className="flex gap-2">
                <span className="font-trap-takeover uppercase">
                  Trap Takeover is Here
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
