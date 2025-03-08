import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type DealsResponse = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Deal[];
};

export type Deal = {
  active: boolean;
  brands: string[];
  categories: string[];
  collectionId: string;
  collectionName: string;
  created: string; // ISO 8601 date string
  description: string;
  id: string;
  image: string;
  title: string;
  badge: string;
  updated: string; // ISO 8601 date string
};

export type TimeRemainingUntilFirstOrThirdFriday = {
  Days: string;
  Hours: string;
  Minutes: string;
  Seconds: string;
};

export function getDealImageUrl(deal: Deal) {
  return `${process.env.POCKETBASE_BASE_URL}${process.env.POCKETBASE_IMAGE_URL}/${deal.id}/${deal.image}`;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function timeSince(dateString: string) {
  const currentDate = new Date();
  const date = new Date(dateString);

  const timeDifference = currentDate.getTime() - date.getTime();
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} ${years === 1 ? "year" : "years"} ago`;
  } else if (months > 0) {
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  } else if (days > 0) {
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  } else if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  } else {
    return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
  }
}

export function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });
}

export function getTrapTakeoverDateWithSuffix(trapTakeoverDate: Date) {
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
  }).format(trapTakeoverDate);

  const day = trapTakeoverDate.getDate();
  let suffix;
  const lastDigit = day % 10;
  const lastTwoDigits = day % 100;
  if (lastDigit === 1 && lastTwoDigits !== 11) {
    suffix = "st";
    return formattedDate + suffix;
  }
  if (lastDigit === 2 && lastTwoDigits !== 12) {
    suffix = "nd";
    return formattedDate + suffix;
  }
  if (lastDigit === 3 && lastTwoDigits !== 13) {
    suffix = "rd";
    return formattedDate + suffix;
  }

  suffix = "th";
  return formattedDate + suffix;
}

export function getTimeRemainingUntilFirstOrThirdFriday(
  now: Date,
): TimeRemainingUntilFirstOrThirdFriday {
  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  // Find the first Friday of the month
  let firstFriday = new Date(currentYear, currentMonth, 1, 12);
  while (firstFriday.getDay() !== 5) {
    firstFriday.setDate(firstFriday.getDate() + 1);
  }

  // Find the third Friday of the month
  let thirdFriday = new Date(currentYear, currentMonth, 1, 12);
  let count = 0;
  while (count < 3) {
    thirdFriday.setDate(thirdFriday.getDate() + 1);
    if (thirdFriday.getDay() === 5) {
      count++;
    }
  }

  // Determine which Friday comes first after today
  let nextFriday;
  if (now < firstFriday || now.getDate() === firstFriday.getDate()) {
    nextFriday = firstFriday;
  } else if (now < thirdFriday || now.getDate() === thirdFriday.getDate()) {
    nextFriday = thirdFriday;
  } else {
    // If today is after both first and third Friday, calculate next month's first Friday
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    nextFriday = new Date(nextYear, nextMonth, 1);
    while (nextFriday.getDay() !== 5) {
      nextFriday.setDate(nextFriday.getDate() + 1);
    }
  }

  // Calculate time remaining until the next Friday
  const timeRemaining = nextFriday.getTime() - now.getTime();

  // Ensure the time remaining is positive
  if (timeRemaining < 0) {
    return { Days: "00", Hours: "00", Minutes: "00", Seconds: "00" };
  }

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((timeRemaining / 1000) % 60)
    .toString()
    .padStart(2, "0");

  return { Days: days, Hours: hours, Minutes: minutes, Seconds: seconds };
}

export function isDateLessThan(dateStr: string, days: number) {
  // Convert the input string to a Date object
  const date = new Date(dateStr);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference between the current date and the input date
  const difference = currentDate.getTime() - date.getTime();

  // Calculate the number of milliseconds in X days
  const millisecondsIn7Days = days * 24 * 60 * 60 * 1000;

  // Check if the difference is less than X days
  return difference < millisecondsIn7Days;
}
