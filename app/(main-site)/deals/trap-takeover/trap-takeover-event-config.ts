import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 10,
  day: 23,
  featuredBrands: [
    "High 90's",
    "Jeff's Sessions",
    "Back Country Organics",
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
