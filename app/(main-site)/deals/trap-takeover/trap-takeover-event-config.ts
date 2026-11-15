import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 11,
  day: 20,
  featuredBrands: [
    "High 90's",
    "Jeff's Sessions",
    "Together Canna Supply",
    "Back Country Organics",
    "Park Jams",
    "Hashtag",
  ],
  flags: {
    // True flags
    featuredBrands: true,
    flyer: true,
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
