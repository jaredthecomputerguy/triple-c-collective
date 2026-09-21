import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const deals: IndividualDeal[] = [];

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 9,
  day: 25,
  featuredBrands: [
    "Cannatrust",
    "B.O.B Stash",
    "Jeff's Sessions",
    "Park Jams",
    "High 90's",
    "Hashtag",
    "Big Boy Dro",
  ],
  flags: {
    featuredBrands: true,
    flyer: true,
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
