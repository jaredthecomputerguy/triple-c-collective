import Link from "next/link";

import { cn } from "@/lib/utils/shared";
import { SpiderWeb } from "@/app/_components/spiderweb";
import { TopBanner } from "@/app/_components/banners/top-banner";

export const HalloweenBanner = ({ active }: { active: boolean }) => {
  return (
    <TopBanner
      active={active}
      className="bg-[#080606]"
      closeBtnClass="z-100 font-bold bg-white/75 hidden"
    >
      <SpiderWebs className="absolute top-0 size-24 fill-white/75 sm:size-[150px]" />
      <Link
        className="font-halloween flex flex-col items-center justify-center py-4 underline-offset-8 transition-colors duration-200 ease-in-out hover:text-orange-400 hover:underline"
        href="/deals"
      >
        <span className="z-50 text-center text-lg md:text-2xl">
          HAPPY HALLOWEEN!
        </span>
        <span className="z-50 text-center text-sm md:text-base">
          SALES ALL DAY
        </span>
      </Link>
    </TopBanner>
  );
};

const SpiderWebs = ({ className }: { className: string }) => {
  return (
    <>
      <SpiderWeb className={cn(className, "left-0")} />
      <SpiderWeb className={cn(className, "right-0 -scale-x-100")} />
    </>
  );
};
