import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

import hashtagLogo from "@/public/images/brands/hashtag-logo.png";
import dompenLogo from "@/public/images/brands/dompen.webp";
import parkJamsProductPackaging from "@/public/images/brands/park-jams.jpg";
import boxLunchLogo from "@/public/images/brands/box-lunch.webp";
import togetherCannaSupplyLogo from "@/public/images/brands/together-canna-logo.jpg";
import high90sLogo from "@/public/images/brands/high-90s-logo.png";

const deals: IndividualDeal[] = [
  {
    brand: "Hashtag",
    categories: ["Extract"],
    dealType: "Buy One, Get One",
    description: "Buy any Hashtag concentrate, get a free gram of dab.",
    image: hashtagLogo,
    details:
      "All deals valid while supplies last. Deals are subject to change at any time.",
  },
  {
    brand: "Dompen",
    categories: ["Cartridge"],
    dealType: "Buy One, Get One",
    description:
      "Buy any Dompen cartridges or all-in-ones, get your choice of cartridge or all-in-one for free.",
    image: dompenLogo,
    details:
      "All deals valid while supplies last. Deals are subject to change at any time.",
  },
  {
    brand: "Park Jams",
    categories: ["Edible"],
    dealType: "Buy One, Get One",
    description: "Buy any Park Jams gummies, get a free pack of gummies.",
    image: parkJamsProductPackaging,
    details:
      "All deals valid while supplies last. Deals are subject to change at any time.",
  },
  {
    brand: "Box Lunch",
    categories: ["Flower"],
    dealType: "Buy One, Get One",
    description: "Buy any Box Lunch 14g fine cut shake, get a free 14g bag.",
    image: boxLunchLogo,
    details:
      "All deals valid while supplies last. Deals are subject to change at any time.",
  },
  {
    brand: "Together Canna Supply",
    categories: ["Flower"],
    dealType: "Buy One, Get One",
    description: "Buy any Together Canna Supply 3.5g, get a free 3.5g.",
    image: togetherCannaSupplyLogo,
    details:
      "All deals valid while supplies last. Deals are subject to change at any time.",
  },
  {
    brand: "High 90's",
    categories: ["Extract", "Cartridge", "Preroll"],
    dealType: "Buy One, Get One",
    description:
      "Buy any High 90's extract, cartridge, preroll, or preroll pack, get a free extract, cartridge, preroll, or preroll pack.",
    image: high90sLogo,
    details:
      "All deals valid while supplies last. Deals are subject to change at any time. Promo unit must match the category of the full price unit, for example: if you buy an all-in-one, you get a free all-in-one.",
  },
];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 6,
  day: 12,
  featuredBrands: [
    "High 90's",
    "Hashtag",
    "Dompen",
    "Park Jams",
    "Together Canna Supply",
    "Box Lunch",
  ],
  flags: {
    /* TRUE FLAGS */
    featuredBrands: true,
    flyer: true,
    /* FALSE FLAGS */
    giftBags: false,
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: true,
  },
  deals,
};

export const event = createTrapTakeoverEvent(eventData);
