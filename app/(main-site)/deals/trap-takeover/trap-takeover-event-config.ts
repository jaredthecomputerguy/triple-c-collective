import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput,
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 5,
  day: 22,
  featuredBrands: [
    "Hashtag",
    "Together Canna Supply",
    "Park Jams",
    "High 90's",
  ],
  flags: {
    featuredBrands: true,
    flyer: true,
  },
};

export const event = createTrapTakeoverEvent(eventData);
