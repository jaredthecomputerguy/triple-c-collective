import Link from "next/link";
import { useEffect, useState, type TouchEvent, type MouseEvent } from "react";
import Image, { type StaticImageData } from "next/image";
import { Separator } from "./separator";
import { cn } from "@/lib/utils";
import { TopBanner } from "./top-banner";

interface StiiizyBannerProps {
  image: StaticImageData;
  active: boolean;
  className: string;
  closeBtnClass: string;
  onTouchStart: (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
  ) => void;
  onTouchCancel: (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
  ) => void;
  onTouchEnd: (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
  ) => void;
  onMouseOver: (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
  ) => void;
  onMouseLeave: (
    e: TouchEvent<HTMLDivElement> | MouseEvent<HTMLDivElement>,
  ) => void;
}

export const StiiizyBanner = ({
  image,
  active,
  className,
  closeBtnClass,
  onTouchStart,
  onTouchCancel,
  onTouchEnd,
  onMouseOver,
  onMouseLeave,
}: StiiizyBannerProps) => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());

  useEffect(() => {
    setDayOfWeek(new Date().getDay());
  }, []);

  const isSaturdayOrSunday = dayOfWeek === 0 || dayOfWeek === 6;

  return (
    <TopBanner
      active={active}
      className={className}
      closeBtnClass={closeBtnClass}
      onTouchStart={onTouchStart}
      onTouchCancel={onTouchCancel}
      onTouchEnd={onTouchEnd}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <Link
        className="flex items-center gap-4 px-4 py-1 font-stiiizy text-2xl font-thin text-white
      transition hover:underline group-hover:text-black md:gap-12 md:text-4xl"
        href="https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=STIIIZY"
        target="_blank"
      >
        <Image
          className="h-10 w-20"
          src={image}
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
            !isSaturdayOrSunday ? "hidden" : "",
          )}
          orientation={"vertical"}
        />
        {isSaturdayOrSunday && "LIVE NOW"}
      </Link>
    </TopBanner>
  );
};
