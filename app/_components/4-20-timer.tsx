"use client";

import {
  getTimeRemainingUntilFourTwenty,
  type TimeRemainingUntilDate,
} from "@/lib/utils";
import { useEffect, useState } from "react";

export const FourTwentyTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemainingUntilDate>({
    Days: "--",
    Hours: "--",
    Minutes: "--",
    Seconds: "--",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemainingUntilFourTwenty(new Date()));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2 p-2">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key + value} className="flex flex-col items-center">
          <div className="flex font-mono">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 font-bold text-white backdrop-blur-sm">
              {value}
            </span>
          </div>
          <div className="mt-1 text-xs text-white/80">{key.slice(0, 1)}</div>
        </div>
      ))}
    </div>
  );
};
