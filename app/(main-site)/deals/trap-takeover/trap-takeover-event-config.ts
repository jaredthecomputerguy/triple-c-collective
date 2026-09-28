import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 10,
  day: 2,
  featuredBrands: [
    "Dompen",
    "Koa Cannabis Co.",
    "Geek THCX",
    "Big Boy Dro",
    "Together Canna Supply",
    "Hashtag",
    "Park Jams",
    "High 90's",
  ],
  flags: {
    // Always True Flags
    featuredBrands: true,
    flyer: true,
    giftBags: true,
    // Other flags
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
  deals,
  numberOfGiftBags: 25,
};

export const event = createTrapTakeoverEvent(eventData);
