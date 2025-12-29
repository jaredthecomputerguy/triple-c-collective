"use client";

import {
  Fireworks as FireworksJS,
  type FireworksHandlers,
  type FireworksOptions
} from "@fireworks-js/react";
import { useRef, useState, type RefObject } from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";
import { Power, PowerOff } from "lucide-react";
import { cn } from "@/lib/utils/shared";

const fireworkOptions: FireworksOptions = {
  opacity: 0.5,
  acceleration: 1,
  intensity: 10,
  particles: 20
};

export const Fireworks = () => {
  const fireworkRef = useRef<FireworksHandlers>(null);

  return (
    <>
      <FireworksJS
        ref={fireworkRef}
        options={fireworkOptions}
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          position: "fixed",
          zIndex: 100,
          pointerEvents: "none"
        }}
      />
      <FireworksToggle fireworkRef={fireworkRef} />
    </>
  );
};

const FireworksToggle = ({
  fireworkRef
}: {
  fireworkRef: RefObject<FireworksHandlers | null>;
}) => {
  const [isOn, setIsOn] = useState(true);

  const toggle = () => {
    if (!fireworkRef.current) return;
    if (fireworkRef.current.isRunning) {
      setIsOn(false);
      fireworkRef.current.stop();
    } else {
      setIsOn(true);
      fireworkRef.current.start();
    }
  };
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          className={cn(
            "fixed bottom-24 bg-black left-5 z-100 p-2 rounded-full ring",
            isOn ? "ring-amber-400/50" : "ring-white/50"
          )}
          onClick={toggle}
          type="button">
          {isOn ? (
            <Power className="stroke-amber-400 size-6" />
          ) : (
            <PowerOff className="stroke-white size-6" />
          )}
        </button>
      </TooltipTrigger>
      <TooltipContent className="bg-white font-bold font-logo" side="right">
        Turn {isOn ? "off" : "on"} fireworks
      </TooltipContent>
    </Tooltip>
  );
};
