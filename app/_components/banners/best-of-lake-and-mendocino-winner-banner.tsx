import Image from "next/image";

import { TopBanner } from "@/app/_components/banners/top-banner";

import bestOfBadge from "@/public/images/best-of-lake-2026-award.png";

interface BestOfLakeAndMendocinoWinnerBannerProps {
  active: boolean;
}

export const BestOfLakeAndMendocinoWinnerBanner = ({
  active
}: BestOfLakeAndMendocinoWinnerBannerProps) => {
  if (!active) return null;
  return (
    <TopBanner
      active={active}
      className="bg-[#12321a]"
      closeBtnClass="text-white">
      <a
        className="flex gap-4 items-center py-4 px-8"
        href="https://bestoflakeandmendocino.com/listings/shopping/?cat=181&listings_badges=all&listings_campaign=3Pwdub&page_number=3#listing-104252"
        rel="noopener"
        target="_blank">
        <Image
          src={bestOfBadge}
          alt="Voted Best of CBD Products in the Best of Lake & Mendocino 2026"
          quality={100}
          className="size-16"
        />
        <span className="text-[#ebc558] text-sm md:text-lg text-balance">
          Voted Best of CBD Products in the Best of Lake &amp; Mendocino 2026
        </span>
      </a>
    </TopBanner>
  );
};
