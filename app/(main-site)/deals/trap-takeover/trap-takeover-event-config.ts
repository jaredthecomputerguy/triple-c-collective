import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 6,
  day: 26,
  featuredBrands: [
    "Dompen",
    //"Hypnotic"
    "Hashtag",
    "Koa Cannabis Co.",
    "Cannatrust",
    "B.O.B Stash",
    "Park Jams",
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
