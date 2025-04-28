import Sparkle from "./sparkle";
import { TopBanner } from "./top-banner";

interface NewYearBannerProps {
  active: boolean;
}

export const NewYearBanner = ({ active }: NewYearBannerProps) => {
  return (
    <>
      <TopBanner
        active={active}
        className="bg-new-years-black py-6"
        closeBtnClass="text-white"
      >
        <div className="flex items-center gap-4">
          <span className="text-new-years-gold font-serif text-xl tracking-wider md:text-3xl">
            {" "}
            OPEN NEW YEARS DAY
          </span>
        </div>
      </TopBanner>
      <Sparkle
        fadeOutSpeed={5}
        color={"#D9B01C"}
        minSize={20}
        overflowPx={0}
        count={15}
      />
    </>
  );
};
