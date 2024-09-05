"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";
import Link from "next/link";
import brands from "@/lib/data/brands.json";

import Slider, { type Settings } from "react-slick";

export const BrandCarousel = () => {
  const settings: Settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    easing: "ease-in-out",
    className: "w-[85%]",
    autoplay: true,
    autoplaySpeed: 1,
    infinite: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    focusOnSelect: true,
    accessibility: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {brands.map((brand) => (
        <Link
          key={brand.id}
          href={brand.website}
          target="_blank"
          className="relative mx-4 my-auto h-64 w-64"
        >
          <Image
            src={brand.src!}
            alt={brand.alt}
            fill
            priority
            className="object-contain"
            tabIndex={0}
          />
        </Link>
      ))}
    </Slider>
  );
};
