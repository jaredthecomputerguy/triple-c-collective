import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 11,
  day: 27,
  featuredBrands: [
    "Dompen",
    "Koa Cannabis Co.",
    "Big Boy Dro",
    "Together Canna Supply",
    "Back Country Organics",
    "Park Jams",
    "Jeff's Sessions",
    "Hashtag",
    "Geek THCX",
    "B.O.B Stash",
    "Cannatrust",
    "Ash & Ember",
  ],
  flags: {
    // True flags
    featuredBrands: true,
    flyer: true,
    // False flags
    giftBags: true,
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
  deals,
  numberOfGiftBags: 100,
};

export const trapTakeoverEvent = createTrapTakeoverEvent(eventData);
