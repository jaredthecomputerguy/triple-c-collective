import type { Media, Deal } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import { isDateLessThan } from "@/lib/utils";

export const DealCards = ({ deals }: { deals: Deal[] }) => {
  const dealsWithImages = deals.map((deal) => ({
    ...deal,
    image: deal.image as Media,
  }));

  return (
    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      {dealsWithImages.map((deal) => (
        <Link
          href={{
            pathname: "https://triplec.treez.io/onlinemenu/search",
            query: {
              categories: deal.categories?.join(","),
              brands: deal.brand,
            },
          }}
          target="_blank"
          className="group relative overflow-hidden rounded-xl border border-primary-purple/50 shadow-lg outline-none focus:outline-primary-purple"
          key={deal.id}
        >
          <NewBadge createdAt={deal.createdAt} />
          <Image
            className="aspect-video object-cover shadow"
            src={deal.image.url ?? ""}
            alt={deal.title}
            width={500}
            height={500}
          />
          <div className="px-6 py-4">
            <p className="pb-2 text-2xl font-semibold group-hover:underline group-focus:underline group-active:underline">
              {deal.title}
            </p>
            <p>{deal.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

const NewBadge = ({ createdAt }: { createdAt: string }) => {
  const DAYS_TO_BE_CONSIDERED_NEW = 3;

  const isNew = isDateLessThan(createdAt, DAYS_TO_BE_CONSIDERED_NEW);

  if (!isNew) {
    return null;
  }

  return (
    <div className="absolute right-0 rounded-bl-xl bg-red-600 p-4 font-logo text-sm font-semibold text-white">
      NEW
    </div>
  );
};
