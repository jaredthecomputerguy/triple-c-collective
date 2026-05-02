import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 5,
  day: 8,
  featuredBrands: [
    "Budget Dabs",
    "The Elevens",
    "Out the Door",
    "Big Boy Dro",
    "High 90's",
  ],
  flags: {
    featuredBrands: true,
    flyer: true,
  },
};

export const event = createTrapTakeoverEvent(eventData);
