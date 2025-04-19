import { TopBanner } from "./top-banner";
import Image from "next/image";
import Link from "next/link";

import fourTwentyLogo from "@/public/images/4-20/420_logo-resized.png";

export const FourTwentyBanner = ({ active }: { active: boolean }) => {
  if (!active) {
    return null;
  }

  return (
    <TopBanner
      active={active}
      className="bg-[#101010]"
      closeBtnClass="text-white"
    >
      <Link
        className="flex items-center gap-2 py-4 hover:underline"
        href="/deals/420-deals"
      >
        <Image
          src={fourTwentyLogo}
          alt="420 Logo"
          className="size-10 md:size-16"
        />
        <div className="flex flex-col items-center">
          <span className="text-lg md:text-2xl">4/20 Sale</span>
          <span className="text-base md:text-xl">Tomorrow @ 10AM</span>
        </div>
        <Image
          src={fourTwentyLogo}
          alt="420 Logo"
          className="size-10 md:size-16"
        />
      </Link>
    </TopBanner>
  );
};
