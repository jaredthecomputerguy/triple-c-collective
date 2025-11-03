"use client";

import { useEffect, useState } from "react";

import Snowfall from "@/app/_components/snowfall/snowfall";

const SIZE = 25;

const IMAGES = [
  "/images/thanksgiving/leaf-green.svg",
  "/images/thanksgiving/leaf-brown.svg",
  "/images/thanksgiving/leaf-brown.svg"
];

export const FallingLeaves = () => {
  const [images, setImages] = useState<HTMLImageElement[]>([]);

  useEffect(() => {
    IMAGES.forEach((imageSrc) => {
      const img = new Image();
      img.src = imageSrc;
      img.width = 1024; // or larger
      img.height = 1024;
      img.onload = () => setImages((prev) => [...prev, img]);
    }, []);
  }, []);

  if (!images) return null;

  return (
    <Snowfall
      snowflakeCount={15}
      rotationSpeed={[0.5, 0.5]}
      images={images}
      radius={[SIZE, SIZE]}
      wind={[-0.5, 1]}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        zIndex: 50
      }}
    />
  );
};
