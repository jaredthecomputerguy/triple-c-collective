"use client";

import {
  TimeRemainingUntilFirstFriday,
  getTimeRemainingUntilFirstFriday,
} from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";

// TODO: Delete me later!
// import { cn } from "@/lib/utils";

// export const TrapTakeoverIframe = ({ className = "" }) => {
//   return (
//     <iframe
//       title="Illa Guerrilla Trap Takeover Countdown Clock"
//       src="https://illaguerrilla.com/iframe-triple-c/"
//       loading="eager"
//       width="100%"
//       height="110%"
//       className={cn("outline-none rounded-xl h-[500px] w-[350px]", className)}
//     />
//   );
// };

export const TrapTakeover = () => {
  const [timeRemaining, setTimeRemaining] =
    useState<TimeRemainingUntilFirstFriday>({
      Days: "--",
      Hours: "--",
      Minutes: "--",
      Seconds: "--",
    });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemainingUntilFirstFriday());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!timeRemaining) return;

  return (
    <div className="flex flex-col items-center py-8 trap-takeover font-trap-takeover rounded-xl">
      <div className="flex flex-col items-center justify-between">
        <a
          className="p-2 transition-colors outline-none focus:bg-white/25 hover:bg-white/25 rounded-xl"
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
          <h2
            className="text-5xl font-bold"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #f2bd2a 28%, #f26e50 74%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(rgb(53, 2, 124) 2px 2px 0px)",
            }}
          >
            Trap Takeover
          </h2>
          <p className="text-2xl text-[#fefefe]">
            Every first Friday of the month
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4 px-8 py-4 mx-auto md:flex-row">
        {Object.entries(timeRemaining).map(([label, value]) => (
          <div
            key={label}
            className="flex md:gap-0 md:flex-col py-1 gap-2 items-center justify-center border-2 w-64 md:w-32 rounded-xl bg-[#1a0056] border-[#f2c029]"
          >
            <span className="text-[#f2c029] text-3xl">{value}</span>
            <span className="text-2xl text-[#f2913d]">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
