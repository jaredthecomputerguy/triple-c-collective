import { TopBanner } from "@/app/_components/banners/top-banner";

interface ThanksgivingBannerProps {
  active: boolean;
}

export const ThanksgivingBanner = ({ active }: ThanksgivingBannerProps) => {
  return (
    <TopBanner
      active={active}
      className="bg-[url('/images/thanksgiving/fall-leaves.jpg')] bg-cover bg-no-repeat"
      closeBtnClass="text-white">
      <div className="font-dm-serif z-10 flex flex-col items-center justify-center py-2 text-white text-shadow-amber-800 text-shadow-lg md:py-4">
        <span className="z-50 text-center text-lg md:text-4xl">
          Happy Thanksgiving!
        </span>
        <span className="z-50 text-center text-sm md:text-base">
          Open 11 to 6PM on Thanksgiving Day
        </span>
      </div>
      <div className="absolute top-0 right-0 z-0 h-full w-full bg-black/50" />
    </TopBanner>
  );
};
