"use client";

import Image from "next/image";

import cobwebImg from "@/public/images/halloween/cobweb-white.png";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { cn } from "@/lib/utils/shared";

export const Cobwebs = () => {
  return (
    <div className="relative">
      <Cobweb position="left" />
      <Cobweb position="right" />
    </div>
  );
};

const Cobweb = ({ position }: { position: "left" | "right" }) => {
  const isMobile = useIsMobile();
  const size = isMobile ? 1024 / 10 : 1024 / 6;

  return (
    <Image
      className={cn(
        "absolute top-0",
        position === "left" && "left-0",
        position === "right" && "right-0 -scale-x-100",
      )}
      src={cobwebImg}
      alt="Halloween cobwebs"
      width={size}
      height={size}
    />
  );
};
