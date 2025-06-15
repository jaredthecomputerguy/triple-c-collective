import Link from "next/link";

import { TopBanner } from "@/app/_components/banners/top-banner";

const HEADER_TEXT = "Happy Mother's Day";

export const MothersDayBanner = ({ active }: { active: boolean }) => {
  return (
    <TopBanner active={active} className="leaves py-4">
      <Link
        className="bg-roses group decoration-red z-50 text-center font-[Birthstone] text-4xl font-bold text-gray-50 md:text-6xl"
        href="/deals"
      >
        <div className="flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            {HEADER_TEXT.match(/./g)!.map((char, index) => (
              <span
                className="animate-text-reveal inline-block transition-colors [animation-fill-mode:backwards] group-hover:underline"
                key={`${char}-${index}`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <span className="inline-block text-2xl transition-colors [animation-fill-mode:backwards] group-hover:underline md:text-4xl">
            Get Her the Bouquet She Actually Wants
          </span>
        </div>
      </Link>

      <div className="absolute top-0 right-0 -z-10 h-full w-full bg-black/50" />
    </TopBanner>
  );
};
