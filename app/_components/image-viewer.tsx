"use client";

import "react-photo-view/dist/react-photo-view.css";
import Image from "next/image";
import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

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
  height,
}: ImageViewerProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div
      className="relative mx-auto w-full max-w-3xl mb-6"
      style={{
        aspectRatio: `${width} / ${height}`,
      }}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse rounded-xl bg-gray-300 dark:bg-gray-300" />
      )}

      <PhotoProvider>
        <PhotoView src={src}>
          <Image
            className={cn(
              "mx-auto h-auto w-full max-w-3xl rounded-xl transition-opacity duration-500",
              isLoaded ? "opacity-100" : "opacity-0",
              className,
            )}
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority
            tabIndex={0}
            onLoad={() => setIsLoaded(true)}
            onError={() => setIsLoaded(false)}
          />
        </PhotoView>
      </PhotoProvider>
    </div>
  );
};
