import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 10,
  day: 23,
  featuredBrands: ["Brands coming soon..."],
  flags: {
    // True flags
    featuredBrands: true,
    // Other flags
    flyer: false,
    giftBags: false,

    freeFood: false,
    specialArtPromo: false,
    specialPromo: false,
    video: false,
    individualDeals: false,
  },
  deals,
  numberOfGiftBags: 25,
};

export const event = createTrapTakeoverEvent(eventData);
