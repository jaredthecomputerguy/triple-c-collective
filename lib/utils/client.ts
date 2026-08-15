import type { StaticImageData } from "next/image";
import { match, P } from "ts-pattern";

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

type LogoAndHeaderImageInfo = {
  logo: StaticImageData;
  header: StaticImageData;
  shouldOptimize: boolean;
};

export const getHeaderAndLogoImages = (): LogoAndHeaderImageInfo => {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();

  let images: Omit<LogoAndHeaderImageInfo, "shouldOptimize"> = {
    header: headerImg,
    logo: logoImg,
  };

  match({ month, day })
    .with({ month: Months.October }, () => {
      images = {
        logo: halloweenLogoImg,
        header: halloweenHeaderImg,
      };
    })
    .with({ month: Months.November }, () => {
      images = {
        logo: thanksgivingLogoImg,
        // TODO: Add Thanksgiving header image
        header: headerImg,
      };
    })
    .with({ month: Months.December, day: P.number.gt(25) }, () => {
      images = {
        logo: newYearsLogoImg,
        header: christmasHeaderImg,
      };
    })
    .with({ month: Months.December, day: P.number.lte(25) }, () => {
      images = {
        logo: christmasLogoImg ?? logoImg,
        header: christmasHeaderImg,
      };
    })
    .otherwise(() => {
      images = {
        logo: logoImg,
        header: headerImg,
      };
    });

  return {
    ...images,
    shouldOptimize:
      !images.logo.src.endsWith(".gif") && !images.logo.src.endsWith(".svg"),
  };
};
