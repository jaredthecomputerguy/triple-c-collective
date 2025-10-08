"use client";

import { useEffect, useState } from "react";
import Snowfall from "@/app/_components/snowfall/snowfall";

const SIZE = 50;

const IMAGES = ["/images/halloween/bat.svg", "/images/halloween/pumpkin.svg"];

export const HalloweenSnowfall = ({ active }: { active: boolean }) => {
  const [shouldShow, setShouldShow] = useState();
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    IMAGES.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      img.width = 1024; // or larger
      img.height = 1024;
      img.onload = () => setImages((prev) => [...prev, img]);
    });
  }, []);

  if (!images) return null; // or a loading fallback

  return (
    <Snowfall
      snowflakeCount={20}
      rotationSpeed={[0.25, 0.25]}
      images={images}
      radius={[SIZE, SIZE]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50
      }}
    />
  );
};
