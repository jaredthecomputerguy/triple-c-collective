"use client";
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ImageViewerProps {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const ImageViewer = ({
  className,
  src,
  alt,
  width,
  height,
}: ImageViewerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={cn(className, "flex items-center justify-center")}>
        <div className="h-full w-full animate-pulse rounded-sm bg-gray-300"></div>
      </div>
    );
  }

  return (
    <PhotoProvider>
      <PhotoView src={src}>
        <Image
          className={className}
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority
          tabIndex={0}
        />
      </PhotoView>
    </PhotoProvider>
  );
};
