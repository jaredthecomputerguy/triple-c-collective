import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 7,
  day: 10,
  featuredBrands: ["Brands coming soon..."],
  flags: {
    /* TRUE FLAGS */
    featuredBrands: true,
    flyer: false,
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
