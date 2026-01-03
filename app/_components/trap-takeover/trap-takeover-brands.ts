import comingSoonImage from "@/public/images/palm-tree.webp";

import midsfactoryLogo from "@/public/images/brands/midsfactory.png";
import akwaabaLogo from "@/public/images/brands/akwaaba.png";
import dompenLogo from "@/public/images/brands/dompen.webp";
import koaLogo from "@/public/images/brands/koa.png";
import greenRiverExtractsLogo from "@/public/images/brands/green-river-extracts-logo.png";
import bigBoyDroLogo from "@/public/images/brands/big-boy-dro.jpg";
import jeffsSessionsLogo from "@/public/images/brands/jeff-sessions-logo.png";
import roninRosinLogo from "@/public/images/brands/ronin-logo.jpg";
import coffeeSupplyLogo from "@/public/images/brands/coffee-supply.png";
import hashtagLogo from "@/public/images/brands/hashtag-logo.png";
import chameleonCraftLogo from "@/public/images/brands/chameleon-craft.png";
import parkJamsProductPackaging from "@/public/images/brands/park-jams.jpg";
import high90sLogo from "@/public/images/brands/high-90s-logo.png";
import hellaMellowsLogo from "@/public/images/brands/hella-mellows-logo.jpg";

export type FeaturedBrand = (typeof BRANDS)[number];
type BrandNames = FeaturedBrand["name"][];

const BRANDS = [
  {
    name: "Akwaaba",
    alt: "Akwaaba Logo",
    url: "https://www.akwaabafarms.com/",
    image: akwaabaLogo
  },
  {
    name: "Midsfactory",
    alt: "Midsfactory Logo",
    url: "https://www.midsfactory.com/",
    image: midsfactoryLogo
  },
  {
    name: "Dompen",
    alt: "Dompen Logo",
    url: "https://www.dompen.co",
    image: dompenLogo
  },
  {
    name: "Koa Cannabis Co.",
    alt: "Koa Logo",
    url: "https://www.koacannabis.com/",
    image: koaLogo
  },
  {
    name: "Green River Extracts",
    alt: "Green River Extracts Logo",
    url: "https://www.greenriverextracts.com",
    image: greenRiverExtractsLogo
  },
  {
    name: "Big Boy Dro",
    alt: "Big Boy Dro Logo",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=BIG BOY DRO",
    image: bigBoyDroLogo
  },
  {
    name: "Jeff's Sessions",
    alt: "Jeff's Sessions Logo",
    url: "https://jeffssessions.com/",
    image: jeffsSessionsLogo
  },
  {
    name: "Ronin",
    alt: "Ronin Rosin Logo",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=RONIN",
    image: roninRosinLogo
  },
  {
    name: "Coffee Supply",
    alt: "Coffee Supply Logo",
    url: "https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=COFFEE%20SUPPLY",
    image: coffeeSupplyLogo
  },
  {
    name: "Hashtag",
    alt: "Hashtag Infused Flower",
    url: "https://triplec.treez.io/onlinemenu/search?customerType=ALL&query=hashtag",
    image: hashtagLogo
  },
  {
    name: "Chameleon Craft",
    alt: "Chameleon Craft Logo",
    url: "https://www.chameleoncraftcannabis.com/",
    image: chameleonCraftLogo
  },
  {
    name: "Park Jams",
    alt: "Park Jams Gummy Pack",
    url: "https://triplec.treez.io/onlinemenu/search?customerType=ALL&query=park%20jams",
    image: parkJamsProductPackaging
  },
  {
    name: "High 90's",
    alt: "High 90's Logo",
    url: "https://high90s.com",
    image: high90sLogo
  },
  {
    name: "Hella Mellows",
    alt: "Hella Mellows Logo",
    url: "https://www.thesunspotcbd.com/sacred-alchemix",
    image: hellaMellowsLogo
  },
  {
    name: undefined,
    alt: "Brands coming soon",
    url: "https://triplec.treez.io/onlinemenu/?customerType=ADULT",
    image: comingSoonImage
  }
] as const;

/** Pass `undefined` as the last or only arg to show the 'more brands coming soon...' */
export const getFeaturedBrands = (...brandNames: BrandNames) => {
  return BRANDS.filter((brand) => brandNames.includes(brand.name));
};
