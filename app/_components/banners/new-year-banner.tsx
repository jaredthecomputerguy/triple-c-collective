import Sparkle from "@/app/_components/sparkle";
import { TopBanner } from "@/app/_components/banners/top-banner";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

interface NewYearBannerProps {
  active: boolean;
}

export const NewYearBanner = ({ active }: NewYearBannerProps) => {
  const isMobile = useIsMobile();

  if (!active) {
    return null;
  }

  const imageURL = "images/flyers/new-years-2025.png";

  return (
    <>
      <PhotoProvider>
        <TopBanner
          active={active}
          className="bg-new-years-black py-6"
          closeBtnClass="text-white">
          <PhotoView src={imageURL}>
            <button
              type="button"
              className="flex flex-col items-center gap-0 hover:underline underline-offset-4 decoration-amber-200">
              <svg
                viewBox="0 0 1600 300"
                className="w-full max-w-3xl md:mb-0 -mb-4"
                xmlns="http://www.w3.org/2000/svg">
                <title>
                  Happy New Year from Triple C! Click to see the deals!
                </title>
                <defs>
                  <path
                    id="curve"
                    d="M 100 220 Q 800 40 1500 220"
                    fill="transparent"
                  />
                </defs>
                <text>
                  <textPath
                    href="#curve"
                    startOffset="50%"
                    className="fill-new-years-gold font-serif tracking-wider uppercase transition-all"
                    textAnchor="middle"
                    style={{ fontSize: isMobile ? "6rem" : "8rem" }}>
                    Happy New Year
                  </textPath>
                </text>
              </svg>
              <span className="text-new-years-gold font-serif tracking-wider uppercase text-xs md:text-sm transition-all">
                Open New Year's Day
              </span>
              <span className="text-new-years-gold font-serif tracking-wider uppercase text-xs transition-all">
                Click to see deals
              </span>
            </button>
          </PhotoView>
        </TopBanner>
        <Sparkle
          fadeOutSpeed={5}
          color={"#D9B01C"}
          minSize={20}
          overflowPx={0}
          count={15}
        />
      </PhotoProvider>
    </>
  );
};
