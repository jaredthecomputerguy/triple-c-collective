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
import togetherCannaSupplyLogo from "@/public/images/brands/together-canna-logo.jpg";
import sweetLeafLogo from "@/public/images/brands/sweetleaf-logo.png";
import budgetDabsLogo from "@/public/images/brands/budget-dabs.png";
import outTheDoorLogo from "@/public/images/brands/out-the-door-logo.jpg";
import elevensLogo from "@/public/images/brands/elevens.png";
import boxLunchLogo from "@/public/images/brands/box-lunch.webp";
import geekThcxLogo from "@/public/images/brands/geek-thcx-logo.webp";
import puffcoLogo from "@/public/images/brands/puffco.svg";
import cannatrustLogo from "@/public/images/brands/cannatrust-logo.jpeg";
import bobStashLogo from "@/public/images/brands/bob-stash-logo.png";
import hypnoticBag from "@/public/images/brands/hypnotic.png";
import backCountryOrganicsJar from "@/public/images/brands/back-country-logo.png";

export type FeaturedBrand = (typeof BRANDS)[number];
export type BrandName = FeaturedBrand["name"];

const getTreezMenuSearchUrlByBrand = (brandName: string) =>
  `https://triplec.treez.io/onlinemenu/search?mjk=&customerType=ALL&typeSubtypes=%257B%257D&brands=${encodeURIComponent(brandName.toUpperCase())}`;

const BRANDS = [
  {
    name: "Akwaaba",
    alt: "Akwaaba Logo",
    url: "https://www.akwaabafarms.com/",
    image: akwaabaLogo,
  },
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
    name: "Green River Extracts",
    alt: "Green River Extracts Logo",
    url: "https://www.greenriverextracts.com",
    image: greenRiverExtractsLogo,
  },
  {
    name: "Big Boy Dro",
    alt: "Big Boy Dro Logo",
    url: getTreezMenuSearchUrlByBrand("Big Boy Dro"),
    image: bigBoyDroLogo,
  },
  {
    name: "Jeff's Sessions",
    alt: "Jeff's Sessions Logo",
    url: "https://jeffssessions.com/",
    image: jeffsSessionsLogo,
  },
  {
    name: "Ronin",
    alt: "Ronin Rosin Logo",
    url: getTreezMenuSearchUrlByBrand("Ronin"),
    image: roninRosinLogo,
  },
  {
    name: "Coffee Supply",
    alt: "Coffee Supply Logo",
    url: getTreezMenuSearchUrlByBrand("Coffee Supply"),
    image: coffeeSupplyLogo,
  },
  {
    name: "Hashtag",
    alt: "Hashtag Infused Flower",
    url: getTreezMenuSearchUrlByBrand("Hashtag"),
    image: hashtagLogo,
  },
  {
    name: "Chameleon Craft",
    alt: "Chameleon Craft Logo",
    url: "https://www.chameleoncraftcannabis.com/",
    image: chameleonCraftLogo,
  },
  {
    name: "Park Jams",
    alt: "Park Jams Gummy Pack",
    url: getTreezMenuSearchUrlByBrand("Park Jams"),
    image: parkJamsProductPackaging,
  },
  {
    name: "High 90's",
    alt: "High 90's Logo",
    url: "https://high90s.com",
    image: high90sLogo,
  },
  {
    name: "Hella Mellows",
    alt: "Hella Mellows Logo",
    url: "https://www.thesunspotcbd.com/sacred-alchemix",
    image: hellaMellowsLogo,
  },
  {
    name: "Together Canna Supply",
    alt: "Together Canna Supply Logo",
    url: "https://www.instagram.com/together.canna.supply/?hl=en",
    image: togetherCannaSupplyLogo,
  },
  {
    name: "Sweetleaf Collective",
    alt: "Sweetleaf Collective Logo",
    url: "https://www.sweetleafcollective.org/",
    image: sweetLeafLogo,
  },
  {
    name: "Budget Dabs",
    alt: "Budget Dabs Logo",
    url: getTreezMenuSearchUrlByBrand("Budget Dabs"),
    image: budgetDabsLogo,
  },
  {
    name: "The Elevens",
    alt: "The Elevens Logo",
    url: getTreezMenuSearchUrlByBrand("The Elevens"),
    image: elevensLogo,
  },
  {
    name: "Out the Door",
    alt: "Out the Door Logo",
    url: getTreezMenuSearchUrlByBrand("Out the Door"),
    image: outTheDoorLogo,
  },
  {
    name: "Box Lunch",
    alt: "Box Lunch Logo",
    url: getTreezMenuSearchUrlByBrand("Box Lunch"),
    image: boxLunchLogo,
  },
  {
    name: "Geek THCX",
    alt: "Geek THCX Logo",
    url: "https://geek-thcx.com",
    image: geekThcxLogo,
  },
  {
    name: "Puffco",
    alt: "Puffco Logo",
    url: "https://www.puffco.com",
    image: puffcoLogo,
  },
  {
    name: "Cannatrust",
    alt: "Cannatrust Logo",
    url: getTreezMenuSearchUrlByBrand("Cannatrust"),
    image: cannatrustLogo,
  },
  {
    name: "B.O.B Stash",
    alt: "B.O.B Stash Logo",
    url: getTreezMenuSearchUrlByBrand("B.O.B Stash"),
    image: bobStashLogo,
  },
  {
    name: "Hypnotic",
    alt: "Hypnotic 1g Hash Infused All-in-one",
    url: getTreezMenuSearchUrlByBrand("Hypnotic"),
    image: hypnoticBag,
  },
  {
    name: "Back Country Organics",
    alt: "Back Country Organics Flower 3.5g Jar",
    url: getTreezMenuSearchUrlByBrand("Back Country Organics"),
    image: backCountryOrganicsJar,
  },
  /* --- Placeholders --- */
  {
    name: "And more...",
    alt: "More brands",
    url: "https://triplec.treez.io/onlinemenu/?customerType=ADULT",
    image: comingSoonImage,
  },
  {
    name: "Brands coming soon...",
    alt: "Brands coming soon",
    url: "https://triplec.treez.io/onlinemenu/?customerType=ADULT",
    image: comingSoonImage,
  },
] as const;

export const getFeaturedBrands = (...brandNames: BrandName[]) => {
  return BRANDS.filter((brand) => brandNames.includes(brand.name)).toSorted(
    (a, b) => ((a.name ?? "") > (b.name ?? "") ? 1 : -1),
  );
};
