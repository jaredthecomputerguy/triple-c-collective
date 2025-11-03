import { Star } from "lucide-react";
import Link from "next/link";

import { TopBanner } from "@/app/_components/banners/top-banner";

export const MemorialDayBanner = ({ active }: { active: boolean }) => {
  return (
    <TopBanner
      active={active}
      className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-2 font-bold text-white uppercase">
      <Link
        href="/deals"
        className="flex flex-col items-center justify-center gap-1 px-4 py-3 text-center transition hover:underline">
        <div className="flex items-center justify-center gap-2">
          <Star className="size-5 text-white md:size-6" />
          <span className="font-logo text-xl tracking-wider md:text-2xl">
            Memorial Day Sale
          </span>
          <Star className="size-5 text-white md:size-6" />
        </div>
        <span className="text-sm font-semibold tracking-wide text-white md:text-base">
          BOGO Deals All Weekend
        </span>
      </Link>
    </TopBanner>
  );
};
