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

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div key={review.id} className="flex flex-col gap-2">
      <a href={review.link} className="flex group px-6 sm:px-2 gap-4 items-center">
        <img className="w-10 h-10 rounded-full object-cover" src={review.imageSrc} alt={review.name} />
        <div className="flex flex-col">
          <p className="text-lg group-hover:underline font-semibold text-pretty">{review.name}</p>
          <div className="flex gap-1">
            <StarRating className="max-w-24" rating={review.rating} />
            <span className="text-sm text-gray-500">{timeSince(review.date)}</span>
          </div>
        </div>
      </a>
      <p className={cn("text-lg text-gray-600 text-pretty px-4 sm:px-2", showMore === false && "line-clamp-3")}>
        &quot;{review.text}&quot;
      </p>
      <button
        className="text-primary-purple font-semibold hover:underline active:underline focus:underline"
        onClick={() => setShowMore((prev) => !prev)}>
        {showMore ? "Show less" : "Show more"}
      </button>
    </div>
  );
};
