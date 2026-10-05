import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 10,
  day: 9,
  featuredBrands: [
    "Cannatrust",
    "B.O.B Stash",
    "Jeff's Sessions",
    "High 90's",
    "Hashtag",
    "Park Jams",
  ],
  flags: {
    // Always True Flags
    featuredBrands: true,
    flyer: true,
    // Other flags
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
