import {
  createTrapTakeoverEvent,
  type TrapTakeoverInput
} from "@/app/(main-site)/deals/trap-takeover/create-trap-takeover-event";

const eventData: TrapTakeoverInput = {
  year: 2026,
  month: 4,
  day: 24,
  featuredBrands: [
    "Midsfactory",
    "High 90's",
    "Big Boy Dro",
    "Park Jams",
    "Together Canna Supply",
    "Sweetleaf Collective"
  ],
  flags: {
    featuredBrands: true,
    flyer: true
  }
};

export const event = createTrapTakeoverEvent(eventData);
