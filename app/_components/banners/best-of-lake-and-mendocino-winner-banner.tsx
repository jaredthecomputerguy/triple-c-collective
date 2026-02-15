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
        className="flex gap-2 items-center py-2 px-8"
        //href="/best-of-lake-and-mendocino/2026"
        href="https://bestoflakeandmendocino.com/listings/shopping/?cat=181&listings_badges=all&listings_campaign=3Pwdub&page_number=3#listing-104252"
        rel="noopener"
        target="_blank">
        <Image
          src={bestOfBadge}
          alt="Voted Best of CBD Products in the Best of Lake & Mendocino 2026"
          quality={75}
          className="size-16"
        />
        <div className="flex flex-col px-2 text-center items-center justify-center">
          <div className="text-[#ebc558] text-sm md:text-2xl flex flex-row gap-1 items-center text-center">
            <span>Voted</span>
            <span>Best of CBD Products</span>
          </div>
          <span className="text-xs md:text-lg">
            in the Best of Lake &amp; Mendocino 2026
          </span>
        </div>
      </a>
    </TopBanner>
  );
};
