"use client";

import { Sparkles, Sparkle } from "lucide-react";
import {
  TbChristmasTreeFilled as ActiveChristmasTree,
  TbChristmasTreeOff as InactiveChristmasTree,
} from "react-icons/tb";

import Snowfall from "@/app/_components/snowfall/snowfall";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/app/_components/tooltip";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { cn } from "@/lib/utils/shared";

export const ChristmasSnowfall = () => {
  const [enabled, setIsEnabled] = useLocalStorage("hw_effect", true);

  const handleTooltipClick = () => {
    setIsEnabled((prev) => !prev);
  };

  return (
    <>
      <Snowfall
        snowflakeCount={enabled ? 20 : 0}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 50,
        }}
      />
      <Tooltip>
        <TooltipTrigger
          className={cn(
            "fixed flex justify-center items-center bottom-6 left-6 z-100 text-white p-3 rounded-full transition-all duration-300 border-white-300 border-3",
            enabled ? "bg-green-700" : "text-white bg-red-700",
          )}
          onClick={handleTooltipClick}
          aria-label="Christmas Effects Toggle"
          aria-labelledby="tooltip-christmas-effects">
          <div>
            <ActiveChristmasTree
              className={cn(
                "absolute transition-all duration-300 size-6",
                enabled
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-75 rotate-90 opacity-0",
              )}
            />

            <InactiveChristmasTree
              className={cn(
                "transition-all duration-300 size-6",
                enabled
                  ? "scale-75 -rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100",
              )}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent
          side="right"
          className="bg-white"
          id="tooltip-christmas-effects">
          Click to turn {enabled ? "off" : "on"} Christmas effects
        </TooltipContent>
      </Tooltip>
    </>
  );
};
