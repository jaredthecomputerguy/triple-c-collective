"use client";

import {
  type TimeRemainingUntilFirstOrThirdFriday,
  getTimeRemainingUntilFirstOrThirdFriday,
} from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const TrapTakeoverCountdown = ({
  linkUrl,
  target,
  labelText,
}: {
  linkUrl: string;
  target?: string;
  labelText: string;
}) => {
  const [timeRemaining, setTimeRemaining] =
    useState<TimeRemainingUntilFirstOrThirdFriday>({
      Days: "--",
      Hours: "--",
      Minutes: "--",
      Seconds: "--",
    });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemainingUntilFirstOrThirdFriday(new Date()));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!timeRemaining) return;

  return (
    <div className="trap-takeover font-trap-takeover flex grow flex-col items-center rounded-xl py-8">
      <div className="flex flex-col items-center justify-between">
        <a
          className="rounded-xl p-2 outline-none transition-colors hover:bg-white/25 focus:bg-white/25 focus:outline-white"
          href="https://illaguerrilla.com/"
          target="_blank"
        >
          <Image
            src="/images/illa-guerilla.png"
            alt="Illa Guerrilla Logo"
            width={150}
            height={92}
          />
        </a>
        <div className="flex flex-col items-center gap-2">
          <h2 className="trap-takeover-text text-5xl font-bold uppercase">
            Trap Takeover!
          </h2>
          <p className="text-center text-2xl text-[#fefefe]">
            Every 1st and 3rd Friday of the month
          </p>
        </div>
      </div>
      <div className="mx-auto flex flex-col flex-wrap items-center justify-center gap-4 px-8 py-4 md:flex-row">
        {Object.entries(timeRemaining).map(([label, value]) => (
          <div
            key={label}
            className="flex w-64 items-center justify-center gap-2 rounded-xl border-2 border-[#f2c029] bg-[#1a0056] py-1 md:w-32 md:flex-col md:gap-0"
          >
            <span className="text-3xl text-[#f2c029]">{value}</span>
            <span className="text-2xl text-[#f2913d]">{label}</span>
          </div>
        ))}
      </div>
      <a
        href={linkUrl}
        className="flex items-center gap-1 rounded bg-[#f2c029] px-2 py-1 text-lg outline-none transition-all hover:bg-[#1a0056]  hover:text-white focus:bg-[#1a0056] focus:text-white focus:outline-white"
        target={target}
      >
        <span>{labelText}</span>
        <ArrowRight size={18} />
      </a>
    </div>
  );
};
