import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 10,
  day: 16,
  featuredBrands: [
    "Cannatrust",
    "B.O.B Stash",
    "Jeff's Sessions",
    "High 90's",
    "Hashtag",
    "Park Jams",
  ],
  flags: {
    // True flags
    featuredBrands: true,
    flyer: true,
    giftBags: true,
    // Other flags
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
