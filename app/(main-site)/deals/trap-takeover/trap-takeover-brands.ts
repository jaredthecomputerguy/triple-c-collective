import comingSoonImage from "@/public/images/palm-tree.png";

import midsfactoryLogo from "@/public/images/brands/midsfactory.png";
import dompenLogo from "@/public/images/brands/dompen.avif";
import koaLogo from "@/public/images/brands/koa.png";
import greenRiverExtractsLogo from "@/public/images/brands/green-river-extracts-logo.png";
import bigBoyDroLogo from "@/public/images/brands/big-boy-dro.png";
import jeffsSessionsLogo from "@/public/images/brands/jeff-sessions-logo.png";

export type FeaturedBrand = (typeof BRANDS)[number];
type BrandNames = FeaturedBrand["name"][];

const BRANDS = [
  {
    name: "Midsfactory",
    alt: "Midsfactory Logo",
    url: "https://www.midsfactory.com/",
    image: midsfactoryLogo,
  },
  {
    name: "Dompen",
    alt: "Dompen Logo",
    url: "https://www.dompen.co",
    image: dompenLogo,
  },
  {
    name: "Koa Cannabis Co.",
    alt: "Koa Logo",
    url: "https://www.koacannabis.com/",
    image: koaLogo,
  },
  {
    name: "Koa",
    alt: "Koa Logo",
    url: "https://www.koacannabis.com/",
    image: koaLogo,
  },
  {
    name: "Green River Extracts",
    alt: "Green River Extracts Logo",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=GREEN%20RIVER%20EXTRACTS",
    image: greenRiverExtractsLogo,
  },
  {
    name: "Big Boy Dro",
    alt: "Big Boy Dro Logo",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=BIG ",
    image: bigBoyDroLogo,
  },
  {
    name: "Jeff's Sessions",
    alt: "Jeff's Sessions Logo",
    url: "https://jeffssessions.com/",
    image: jeffsSessionsLogo,
  },
  {
    name: undefined,
    alt: "And more to come...",
    url: "https://triplec.treez.io/onlinemenu/?customerType=ADULT",
    image: comingSoonImage,
  },
] as const;

export const getFeaturedBrands = (...brandNames: BrandNames) => {
  return BRANDS.filter((brand) => brandNames.includes(brand.name));
};
