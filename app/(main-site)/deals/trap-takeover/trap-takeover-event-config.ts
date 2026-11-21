import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 11,
  day: 27,
  featuredBrands: ["Brands coming soon..."],
  flags: {
    // True flags
    featuredBrands: true,
    flyer: false,
    // False flags
    giftBags: false,
    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
  deals,
  numberOfGiftBags: 0,
};

export const trapTakeoverEvent = createTrapTakeoverEvent(eventData);
