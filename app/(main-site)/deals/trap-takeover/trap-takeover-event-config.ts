import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 12,
  day: 4,
  featuredBrands: ["Brands coming soon..."],
  flags: {
    // True flags
    featuredBrands: true,
    flyer: false,
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
