import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 7,
  day: 10,
  featuredBrands: [
    "Hashtag",
    "Big Boy Dro",
    "High 90's",
    "Hypnotic",
    "Together Canna Supply",
    "Park Jams",
    "Dompen",
    "Koa Cannabis Co.",
    "Geek THCX",
    "Chameleon Craft",
    "Box Lunch",
    "B.O.B Stash",
    "Cannatrust",
  ],
  flags: {
    /* TRUE FLAGS */
    featuredBrands: true,
    flyer: true,
    giftBags: true,
    /* FALSE FLAGS */
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: true,
  },
  deals,
  numberOfGiftBags: 100,
};

export const event = createTrapTakeoverEvent(eventData);
