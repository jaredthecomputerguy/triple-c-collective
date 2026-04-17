"use client";

import { getTimeRemainingUntilFourTwenty } from "@/lib/utils/server";
import { useEffect, useState } from "react";

export const FourTwentyTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemainingUntilDate | string>({
    Days: "--",
    Hours: "--",
    Minutes: "--",
    Seconds: "--"
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const result = getTimeRemainingUntilFourTwenty(new Date());

      const isZero =
        result.Days === "0" &&
        result.Hours === "0" &&
        result.Minutes === "0" &&
        result.Seconds === "0";

      if (isZero) {
        setTimeLeft("LIVE TODAY @ 10AM");
      } else {
        setTimeLeft(result);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (typeof timeLeft === "string") {
    return (
      <div className="p-2 text-center font-bold text-white">{timeLeft}</div>
    );
  }

  return (
    <div className="flex gap-2 p-2">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key + value} className="flex flex-col items-center">
          <div className="flex font-mono">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 font-bold text-white backdrop-blur-xs">
              {value}
            </span>
          </div>
          <div className="mt-1 text-xs text-white/80">{key.slice(0, 1)}</div>
        </div>
      ))}
    </div>
  );
};
