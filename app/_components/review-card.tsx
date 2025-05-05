"use client";

import { timeSince } from "@/lib/utils";

import { useState } from "react";
import { StarRating } from "./star-rating";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: {
    id: number;
    name: string;
    rating: string;
    text: string;
    imageSrc: string;
    date: string;
    link: string;
  };
}

const AvatarImage = ({ id, name }: { id: number; name: string }) => {
  let styles;

  switch (id) {
    case 1:
      styles = "py-2 px-[0.55rem] font-semibold bg-lime-500 rounded-full";
      break;
    case 2:
      styles = "p-2 font-semibold bg-pink-500 rounded-full";
      break;
    case 3:
      styles = "p-2 font-semibold bg-violet-500 rounded-full";
      break;
  }

  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");

  return <div className={styles}>{initials}</div>;
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div key={review.id} className="flex flex-col gap-2">
      <a
        href={review.link}
        target="_blank"
        className="group focus:outline-primary-purple flex items-center gap-4 rounded-lg px-6 outline-hidden sm:px-2"
      >
        {/* <img className="w-10 h-10 rounded-full object-cover" src={review.imageSrc} alt={review.name} /> */}
        <AvatarImage id={review.id} name={review.name} />
        <div className="flex flex-col">
          <p className="text-lg font-semibold text-pretty group-hover:underline">
            {review.name}
          </p>
          <div className="flex items-center gap-1">
            <StarRating className="max-w-24" rating={review.rating} />
            <span className="text-sm text-gray-500 md:text-xs lg:text-sm">
              {timeSince(review.date)}
            </span>
          </div>
        </div>
      </a>
      <p
        className={cn(
          "px-4 text-lg text-pretty text-gray-600 sm:px-2",
          showMore === false && "line-clamp-3",
        )}
      >
        &quot;{review.text}&quot;
      </p>
      <button
        className="text-primary-purple focus:outline-primary-purple rounded-lg py-2 font-semibold outline-hidden hover:underline focus:underline"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};
