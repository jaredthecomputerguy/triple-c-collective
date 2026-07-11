import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 7,
  day: 17,
  featuredBrands: [
    "Dompen",
    "Koa Cannabis Co.",
    "Hypnotic",
    "Big Boy Dro",
    "Together Canna Supply",
    "Hashtag",
    "Park Jams",
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
  numberOfGiftBags: 0,
};

export const event = createTrapTakeoverEvent(eventData);
