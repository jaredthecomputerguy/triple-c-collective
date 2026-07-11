import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 7,
  day: 17,
  featuredBrands: ["Brands coming soon..."],
  flags: {
    /* TRUE FLAGS */
    featuredBrands: true,
    /* FALSE FLAGS */
    flyer: false,
    giftBags: false,
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
