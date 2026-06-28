import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 7,
  day: 3,
  featuredBrands: [
    "Dompen",
    "Hypnotic",
    "Koa Cannabis Co.",
    "Big Boy Dro",
    "Together Canna Supply",
    "High 90's",
    "Hashtag",
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
