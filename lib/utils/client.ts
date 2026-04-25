import type { StaticImageData } from "next/image";

import headerImg from "@/public/images/interior-shop.jpg";
import christmasHeaderImg from "@/public/images/interior-shop.jpg";
import halloweenHeaderImg from "@/public/images/halloween-store.png";
import logoImg from "@/public/images/logo.png";
import halloweenLogoImg from "@/public/images/logo-halloween.png";
import thanksgivingLogoImg from "@/public/images/thanksgiving/logo.png";
import christmasLogoImg from "@/public/images/christmas/logo.gif";
import newYearsLogoImg from "@/public/images/new-years/logo.gif";

export const getUUID = () => {
  return crypto.randomUUID();
};

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export const getHeaderAndLogoImages = () => {
  const today = new Date();
  const month: number = today.getMonth();
  const day = today.getDate();
  let images: { logo: StaticImageData; header: StaticImageData } = {
    header: headerImg,
    logo: logoImg,
  };
  switch (month) {
    case Months.October:
      images = {
        logo: halloweenLogoImg,
        header: halloweenHeaderImg,
      };
      break;
    case Months.November:
      images = {
        logo: thanksgivingLogoImg,
        // TODO: Add Thanksgiving header image
        header: headerImg,
      };
      break;
    case Months.December:
      if (day > 25) {
        images = {
          logo: newYearsLogoImg,
          header: christmasHeaderImg,
        };
      } else {
        images = {
          logo: christmasLogoImg ?? logoImg,
          header: christmasHeaderImg,
        };
      }
      break;
    default:
      images = {
        logo: logoImg,
        header: headerImg,
      };
      break;
  }

  return {
    ...images,
    shouldOptimize:
      !images.logo.src.endsWith(".gif") && !images.logo.src.endsWith(".svg"),
  };
};
