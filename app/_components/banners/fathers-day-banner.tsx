import Link from "next/link";

import { TopBanner } from "@/app/_components/banners/top-banner";
import { getUUID } from "@/lib/utils/client";

const HEADER_TEXT = "Happy Father's Day";

export const FathersDayBanner = ({ active }: { active: boolean }) => {
  return (
    <TopBanner active={active} className="fathers-day font-stiiizy py-4">
      <Link
        className="bg-roses group decoration-red z-50 text-center text-2xl font-bold text-gray-50 md:text-4xl"
        href="/deals#fathers-day">
        <div className="flex flex-col items-center justify-center">
          <div className="overflow-hidden">
            {(HEADER_TEXT.match(/./g) ?? []).map((char, index) => (
              <span
                className="animate-text-reveal inline-block transition-colors [animation-fill-mode:backwards] group-hover:underline"
                key={`${char}-${getUUID()}`}
                style={{ animationDelay: `${index * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <span className="inline-block text-base transition-colors [animation-fill-mode:backwards] group-hover:underline md:text-lg">
            Give Dad a Gift He’ll Actually Use
          </span>
        </div>
      </Link>

      <div className="absolute top-0 right-0 -z-10 h-full w-full bg-black/50" />
    </TopBanner>
  );
};
