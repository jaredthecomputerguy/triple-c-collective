"use client";
import "react-photo-view/dist/react-photo-view.css";

import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";

export const ImageViewer = () => {
  return (
    <PhotoProvider>
      <PhotoView src="/images/420-flyer.jpg">
        <Image
          className="aspect-[1163/1600] h-96 w-72 cursor-pointer rounded border-white sm:h-[700px] sm:w-[500px]"
          src="/images/420-flyer.jpg"
          alt="4/20 Sales"
          width={1163}
          height={1600}
          priority
        />
      </PhotoView>
    </PhotoProvider>
  );
};
