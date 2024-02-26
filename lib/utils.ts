import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { blogPostsToSeed } from "./seed-data";
import { type Payload } from "payload";

export type TimeRemainingUntilFirstFriday = {
  Days: string;
  Hours: string;
  Minutes: string;
  Seconds: string;
};

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

function generateSlug(title: String) {
  return title.trim().toLocaleLowerCase().replace(":", "").replace(/\s+/g, "-");
}

export async function seedBlogs(payloadClient: Payload) {
  function generateContent(title: string, description: string) {
    return [
      {
        children: [{ text: title }],
        type: "h1",
      },
      {
        children: [{ text: description }],
      },
    ];
  }

  await Promise.all(
    blogPostsToSeed.map((blog) => {
      console.log("Creating post: ", blog.title, "/n");

      const generatedContent = generateContent(blog.title, blog.description);

      const generatedSlug = generateSlug(blog.title);

      return payloadClient.create({
        collection: "blogs",
        data: {
          title: blog.title,
          description: blog.description,
          createdAt: blog.createdAt,
          content: generatedContent,
          slug: generatedSlug,
          image: {
            url: "/images/blog-placeholder.png",
            alt: "Blog placeholder image",
            createdAt: blog.createdAt,
            id: "60f0b1b0c9b7a2001b9f1b1a",
            updatedAt: blog.createdAt,
          },
        },
      });
    })
  );

  console.log("Done seeding blogs...\n");
}

export function getTimeRemainingUntilFirstFriday(): TimeRemainingUntilFirstFriday {
  const now = new Date();
  const nextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);

  // Find the first Friday of next month
  let firstFriday = 1;
  while (nextMonth.getDay() !== 5) {
    firstFriday++;
    nextMonth.setDate(firstFriday);
  }

  const deadline = new Date(nextMonth);
  deadline.setHours(12, 0, 0, 0);

  const timeRemaining = deadline.getTime() - now.getTime();
  const seconds = Math.floor((timeRemaining / 1000) % 60)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24)
    .toString()
    .padStart(2, "0");
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, "0");

  return { Days: days, Hours: hours, Minutes: minutes, Seconds: seconds };
}
