"use client";

import { useEffect, useState } from "react";

import Snowfall from "@/app/_components/snowfall/snowfall";
import { Sparkles, Sparkle } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";
import { useLocalStorage } from "@/lib/hooks/useLocalStorage";
import { cn } from "@/lib/utils/shared";

const SIZE = 50;
const IMAGES = ["/images/halloween/bat.svg", "/images/halloween/pumpkin.svg"];
export const HalloweenSnowfall = () => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [enabled, setIsEnabled] = useLocalStorage("hw_effect", true);

  const handleTooltipClick = () => {
    setIsEnabled((prev) => !prev);
  };

  // Load snowfall images
  useEffect(() => {
    Promise.all(
      IMAGES.map(
        (src) =>
          new Promise<HTMLImageElement>((resolve, reject) => {
            const image = new Image();
            image.src = src;
            image.width = 1024;
            image.height = 1024;
            image.onload = () => resolve(image);
            image.onerror = reject;
          }),
      ),
    ).then(setImages);
  }, []);

  if (!images) return null;

  return (
    <>
      <Snowfall
        snowflakeCount={enabled ? 20 : 0}
        rotationSpeed={[0.25, 0.25]}
        images={images}
        radius={[SIZE, SIZE]}
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
            "fixed flex justify-center items-center bottom-6 left-6 z-100 text-orange-500 p-2 rounded-full transition-all duration-300 border border-orange-300 border-3",
            enabled && "bg-white",
            !enabled && "text-white bg-orange-500",
          )}
          onClick={handleTooltipClick}>
          <div className="">
            <Sparkles
              className={cn(
                "absolute transition-all duration-300",
                enabled
                  ? "scale-100 rotate-0 opacity-100"
                  : "scale-75 rotate-90 opacity-0",
              )}
            />

            <Sparkle
              className={cn(
                "transition-all duration-300",
                enabled
                  ? "scale-75 -rotate-90 opacity-0"
                  : "scale-100 rotate-0 opacity-100",
              )}
            />
          </div>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-white">
          Click to turn {enabled ? "off" : "on"} Halloween effects
        </TooltipContent>
      </Tooltip>
    </>
  );
};
