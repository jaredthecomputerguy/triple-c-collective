import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 9,
  day: 4,
  featuredBrands: ["Brands coming soon..."],
  flags: {
    featuredBrands: true,
    flyer: false,
    /* Other flags */
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

export const event = createTrapTakeoverEvent(eventData);
