import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 11,
  day: 6,
  featuredBrands: [
    "Dompen",
    "Koa Cannabis Co.",
    "Geek THCX",
    "Big Boy Dro",
    "Hashtag",
    "Together Canna Supply",
    "Park Jams",
    "High 90's",
  ],
  flags: {
    // True flags
    featuredBrands: true,
    flyer: true,
    // False flags
    giftBags: false,
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
  deals,
  numberOfGiftBags: 100,
};

export const event = createTrapTakeoverEvent(eventData);
