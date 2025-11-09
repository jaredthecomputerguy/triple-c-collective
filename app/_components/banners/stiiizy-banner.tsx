"use client";

import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import Image, { type StaticImageData } from "next/image";

import { Separator } from "@/app/_components/separator";
import { cn } from "@/lib/utils/shared";
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

  const handleStiiizyBannerEvent = (e: MouseEvent<HTMLDivElement>) => {
    switch (
      e.type as
        | "click"
        | "dblclick"
        | "mousedown"
        | "mouseenter"
        | "mouseleave"
        | "mousemove"
        | "mouseover"
        | "mouseout"
        | "mouseup"
    ) {
      case "mouseenter":
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
      onMouseEnter={handleStiiizyBannerEvent}
      onMouseLeave={handleStiiizyBannerEvent}>
      <Link
        className="font-stiiizy flex items-center gap-4 px-4 py-1 text-2xl font-thin text-white transition group-hover:text-black hover:underline md:gap-12 md:text-4xl"
        href="/deals#stiiizy-deal">
        <Image
          key={stiiizyLogo.src}
          className="h-10 w-20"
          src={stiiizyLogo}
          alt="Stiiizy Logo"
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
