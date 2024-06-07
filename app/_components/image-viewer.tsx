"use client";
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

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
