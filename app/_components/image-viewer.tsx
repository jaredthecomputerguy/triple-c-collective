"use client";
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils/shared";

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
  height
}: ImageViewerProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div
      className="relative w-full"
      style={{
        maxWidth: `${width}px`
      }}>
      {!isMounted ? (
        <div
          className={cn(
            "h-full w-full animate-pulse rounded-sm bg-gray-300",
            className
          )}
        />
      ) : (
        <PhotoProvider>
          <PhotoView src={src}>
            <Image
              className={cn("h-auto w-full max-w-3xl mx-auto", className)}
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority
              tabIndex={0}
            />
          </PhotoView>
        </PhotoProvider>
      )}
    </div>
  );
};
