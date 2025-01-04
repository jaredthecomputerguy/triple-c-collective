"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export const StiiizyBanner = () => {
  const [dayOfWeek, setDayOfWeek] = useState(new Date().getDay());

  useEffect(() => {
    setDayOfWeek(new Date().getDay());
  }, []);

  const isSaturdayOrSunday = dayOfWeek === 0 || dayOfWeek === 6;

  return (
    <Link
      className="font-stiiizy text-3xl font-semibold text-white hover:underline focus:underline md:text-4xl"
      href="https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=STIIIZY"
    >
      STIIIZY SAT &amp; SUN {isSaturdayOrSunday && " - LIVE NOW"}
    </Link>
  );
};
