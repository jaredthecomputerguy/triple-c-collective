import { useMemo } from "react";
import { TopBanner } from "@/app/_components/banners/top-banner";

const randomId = () => Math.random().toString(36).slice(2, 10);

export const ChristmasBanner = ({ active }: { active: boolean }) => {
  const bulbs = useMemo(
    () => Array.from({ length: 64 }, () => ({ id: randomId() })),
    []
  );

  return (
    <TopBanner active={active} className="bg-primary-purple">
      <ul className="strand">
        {bulbs.map((b) => (
          <li key={b.id}></li>
        ))}
      </ul>

      <div className="flex flex-col items-center justify-center pt-16 md:pt-24">
        <span className="z-50 text-center text-lg md:text-2xl">
          Happy Holidays from Triple C!
        </span>
        <span className="z-50 text-center text-sm md:text-base">
          Closed Christmas Day
        </span>
      </div>
    </TopBanner>
  );
};
