import { TopBanner } from "./top-banner";

export const ChristmasBanner = ({ active }: { active: boolean }) => {
  return (
    <TopBanner active={active} className="bg-primary-purple">
      <ul className="strand">
        {new Array(64).fill("").map((_, i) => {
          return <li key={i}></li>;
        })}
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
