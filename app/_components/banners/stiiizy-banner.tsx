import Link from "next/link";
import { useEffect, useState, type TouchEvent, type MouseEvent } from "react";
import Image, { type StaticImageData } from "next/image";

import { Separator } from "@/app/_components/separator";
import { cn } from "@/lib/utils";
import { TopBanner } from "@/app/_components/banners/top-banner";
import stiiizyWhiteLogo from "@/public/images/brands/stiiizy-white.png";
import stiiizyBlackLogo from "@/public/images/brands/stiiizy-logo-black.png";

interface StiiizyBannerProps {
  active: boolean;
}

export const StiiizyBanner = ({ active }: StiiizyBannerProps) => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());
  const [stiiizyLogo, setStiiizyLogo] =
    useState<StaticImageData>(stiiizyWhiteLogo);

  useEffect(() => {
    setDayOfWeek(new Date().getDay());
  }, []);

  const isSaturdayOrSunday = dayOfWeek === 0 || dayOfWeek === 6;

  const handleStiiizyBannerEvent = (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>
  ) => {
    switch (e.type) {
      case "touchstart":
        setStiiizyLogo(stiiizyBlackLogo);
        break;
      case "touchcancel":
        setStiiizyLogo(stiiizyBlackLogo);
        break;
      case "touchend":
        setStiiizyLogo(stiiizyWhiteLogo);
        break;
      case "mouseover":
        setStiiizyLogo(stiiizyBlackLogo);
        break;
      case "mouseleave":
        setStiiizyLogo(stiiizyWhiteLogo);
        break;
    }
  };

  return (
    <TopBanner
      active={active}
      className="group bg-black py-4 transition hover:bg-white"
      closeBtnClass="text-white transition group-hover:text-black"
      onTouchStart={handleStiiizyBannerEvent}
      onTouchCancel={handleStiiizyBannerEvent}
      onTouchEnd={handleStiiizyBannerEvent}
      onMouseOver={handleStiiizyBannerEvent}
      onMouseLeave={handleStiiizyBannerEvent}>
      <Link
        className="font-stiiizy flex items-center gap-4 px-4 py-1 text-2xl font-thin text-white transition group-hover:text-black hover:underline md:gap-12 md:text-4xl"
        href="/deals#stiiizy-deal">
        <Image
          className="h-10 w-20"
          src={stiiizyLogo}
          alt="Stiiizy Logo"
          width={1258}
          height={598}
        />
        <Separator
          className="h-12 w-1 bg-white transition group-hover:bg-black"
          orientation="vertical"
        />
        SAT &amp; SUN
        <Separator
          className={cn(
            "h-12 w-1 bg-white transition group-hover:bg-black",
            !isSaturdayOrSunday ? "hidden" : ""
          )}
          orientation={"vertical"}
        />
        {isSaturdayOrSunday && "LIVE NOW"}
      </Link>
    </TopBanner>
  );
};
