"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { TopBanner } from "@/app/_components/banners/top-banner";
import fourTwentyLogo from "@/public/images/4-20/420_logo-resized.png";
import { FourTwentyTimer } from "@/app/_components/4-20-timer";

export const FourTwentyBanner = ({ active }: { active: boolean }) => {
  const [showBanner, setShowBanner] = useState(active);

  if (!showBanner) {
    return null;
  }

  return (
    <div className="neon-border">
      <TopBanner
        active={showBanner}
        className="bg-[#101010]"
        closeBtnClass="text-white"
        onClose={() => setShowBanner(false)}
      >
        <Link
          className="flex items-center gap-2 py-4 hover:underline"
          href="/deals/420-deals"
        >
          <div className="flex items-center gap-1 md:flex-col md:gap-4">
            <Image
              className="-my-8 aspect-4/3 h-24 w-24"
              src={fourTwentyLogo}
              alt="4/20 Triple C Collective Logo"
              priority
              quality={100}
            />

            <FourTwentyTimer />
          </div>
        </Link>
      </TopBanner>
    </div>
  );
};
