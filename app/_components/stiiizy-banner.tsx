"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Separator } from "./separator";

interface StiiizyBannerProps {
  image: StaticImageData;
}

export const StiiizyBanner = ({ image }: StiiizyBannerProps) => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());

  useEffect(() => {
    setDayOfWeek(new Date().getDay());
  }, []);

  const isSaturdayOrSunday = dayOfWeek === 0 || dayOfWeek === 6;

  return (
    <Link
      className="flex items-center gap-12 px-4 py-1 font-stiiizy text-3xl
      font-thin text-white transition hover:underline group-hover:text-black md:text-4xl"
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
      SAT &amp; SUN {isSaturdayOrSunday && " - LIVE NOW"}
    </Link>
  );
};