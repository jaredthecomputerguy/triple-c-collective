import { Media, type Deal } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";

export const DealCards = ({ deals }: { deals: Deal[] }) => {
  const dealsWithImages = deals.map((deal) => ({
    ...deal,
    image: deal.image as Media,
  }));

  return (
    <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
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
          className="group overflow-hidden rounded-xl border border-primary-purple/50 shadow-lg outline-none focus:outline-primary-purple active:outline-primary-purple"
          key={deal.id}
        >
          <Image
            className="shadow"
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
