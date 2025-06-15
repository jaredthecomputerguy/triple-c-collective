"use client";

import { useState } from "react";

import { timeSince } from "@/lib/utils";
import { StarRating } from "@/app/_components/star-rating";
import { cn } from "@/lib/utils";
import { Avatar, AvatarImage, AvatarFallback } from "@/app/_components/avatar";

const reviewOne = "/images/review-one.png";
const reviewTwo = "/images/review-two.png";

type Review = {
  id: number;
  name: string;
  rating: string;
  text: string;
  imageSrc: string;
  date: string;
  link: string;
};

interface ReviewCardProps {
  review: Review;
}

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Miguel Paduani",
    text: "Always a great experience when walking in to Triple C. Very helpful with solid information about the products and the prices are very reasonable as well. Glad to be a local and have access to this place.",
    rating: "5",
    date: "May 17, 2024",
    imageSrc: reviewOne,
    link: "https://www.google.com/maps/reviews/@38.9555303,-122.647228,17z/data=!3m1!4b1!4m6!14m5!1m4!2m3!1sChdDSUhNMG9nS0VJQ0FnSUNqb08tMHVBRRAB!2m1!1s0x0:0x78da14c7708d7d2a?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D",
  },
  {
    id: 2,
    name: "Candie",
    text: "I love this place! I love their deals on indoor flower. They always have some sort of special going on. But what I love most about This place is the staff. They are kind, patient, funny,and knowledgable. My dogs and I are always welcomed with smiles and enthusiasm and it so appreciated. Thank you everybody!",
    rating: "5",
    date: "February 23, 2024",
    imageSrc: "",
    link: "https://maps.app.goo.gl/NkZykeD7ff1Z7HyB9",
  },
  {
    id: 3,
    name: "Victoria Correia",
    text: "We love this place. Great products, Nice employees and an amazing atmosphere.",
    rating: "5",
    date: "March 17, 2025",
    imageSrc: reviewTwo,
    link: "https://maps.app.goo.gl/HGxVKc4SGfem59ZC7",
  },
];

export const ReviewCards = () => {
  return (
    <div className="grid gap-4 px-2 py-14 md:grid-cols-3">
      {REVIEWS.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </div>
  );
};

export const ReviewCard = ({ review }: ReviewCardProps) => {
  const [showMore, setShowMore] = useState(false);

  const name = review.name.replace(/\./, "").trim().split(" ");

  return (
    <div key={review.id} className="flex flex-col gap-2">
      <a
        href={review.link}
        target="_blank"
        className="group focus:outline-primary-purple flex items-center gap-4 rounded-lg px-6 outline-hidden sm:px-2"
      >
        <Avatar>
          <AvatarImage src={review.imageSrc} alt={review.name} />
          <AvatarFallback
            className={cn(
              review.id === 1 && "bg-cyan-200",
              review.id === 2 && "bg-pink-200",
              review.id === 3 && "bg-amber-200",
            )}
          >
            {(name[0] ?? "").charAt(0)}
            {(name[1] ?? "").charAt(0)}
          </AvatarFallback>
        </Avatar>
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
