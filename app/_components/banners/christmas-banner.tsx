import { useMemo } from "react";
import { TopBanner } from "@/app/_components/banners/top-banner";

const randomId = () => Math.random().toString(36).slice(2, 10);

export const ChristmasBanner = ({ active }: { active: boolean }) => {
  const bulbs = useMemo(
    () => Array.from({ length: 64 }, () => ({ id: randomId() })),
    []
  );

  return (
    <>
      <ul className="strand">
        {bulbs.map((b) => (
          <li key={b.id}></li>
        ))}
      </ul>
      <TopBanner
        active={active}
        className="bg-primary-purple"
        closeBtnClass="text-white">
        <div className="flex flex-col items-center justify-center pt-8 md:pt-12 font-dm-serif">
          <span className="z-50 text-center text-xl tracking-wide md:text-4xl">
            Happy Holidays from Triple C!
          </span>
          <span className="z-50 text-center text-base md:text-lg">
            Open Christmas Day 10AM-6PM
          </span>
          <a
            className="z-50 text-center text-base md:text-lg pb-2 hover:underline italic"
            href="/ChristmasSale.png"
            rel="noopener"
            target="_blank">
            Click this to see Christmas Day Sales!
          </a>
        </div>
      </TopBanner>
    </>
  );
};
