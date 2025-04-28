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

export type TimeRemainingUntilDate = {
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
): TimeRemainingUntilDate {
  const year = now.getFullYear();
  const month = now.getMonth();

  function getNthFriday(month: number, year: number, n: 1 | 3) {
    const date = new Date(year, month, 1);
    let count = 0;
    while (true) {
      if (date.getDay() === 5) {
        count++;
        if (count === n) break;
      }
      date.setDate(date.getDate() + 1);
    }
    // Set to exactly 12:00 PM
    date.setHours(12, 0, 0, 0);
    return date;
  }

  const firstFriday = getNthFriday(month, year, 1);
  const thirdFriday = getNthFriday(month, year, 3);

  let target: Date;

  if (now.getTime() < firstFriday.getTime()) {
    target = firstFriday;
  } else if (now.getTime() < thirdFriday.getTime()) {
    target = thirdFriday;
  } else {
    const nextMonth = (month + 1) % 12;
    const nextYear = month === 11 ? year + 1 : year;
    target = getNthFriday(nextMonth, nextYear, 1);
  }

  const ms = target.getTime() - now.getTime();

  if (ms <= 0) {
    return { Days: "00", Hours: "00", Minutes: "00", Seconds: "00" };
  }

  const totalSeconds = Math.floor(ms / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24)
    .toString()
    .padStart(2, "0");
  const hours = (totalHours % 24).toString().padStart(2, "0");
  const minutes = (totalMinutes % 60).toString().padStart(2, "0");
  const seconds = (totalSeconds % 60).toString().padStart(2, "0");

  return { Days: days, Hours: hours, Minutes: minutes, Seconds: seconds };
}

export function getTimeRemainingUntilFourTwenty(
  now: Date,
): TimeRemainingUntilDate {
  const currentYear = now.getFullYear();

  const fourTwentyDate = new Date(currentYear, 3, 20, 10, 0, 0, 0);

  // Calculate time remaining until the next Friday
  const timeRemaining = fourTwentyDate.getTime() - now.getTime();

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
