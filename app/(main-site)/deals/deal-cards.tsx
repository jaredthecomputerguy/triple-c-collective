import Image from "next/image";
import Link from "next/link";
import { isDateLessThan, type Deal } from "@/lib/utils";
import type { ReactNode } from "react";
import { Badge } from "./badge";

const DAYS_TO_BE_CONSIDERED_NEW = 3;

export const DealCards = ({ deals }: { deals: Deal[] }) => {
  return (
    <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
      {deals.map((deal) => {
        const isNew = isDateLessThan(deal.updated, DAYS_TO_BE_CONSIDERED_NEW);
        return (
          <Link
            href={{
              pathname: "https://triplec.treez.io/onlinemenu/search",
              query: {
                categories: deal.categories?.join(","),
                brands: deal.brands.join(","),
              },
            }}
            target="_blank"
            className="group border-primary-purple/50 focus:outline-primary-purple relative flex flex-col items-center overflow-hidden rounded-xl border shadow-lg outline-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1"
            key={deal.id}
          >
            <BadgeContainer>
              {deal.badge && <Badge>{deal.badge}</Badge>}
              {isNew && <Badge variant="destructive">New</Badge>}
            </BadgeContainer>
            <Image
              className="deal-card-shadow aspect-video object-cover"
              src={deal.image ?? ""}
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
        );
      })}
    </div>
  );
};

const BadgeContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="font-logo absolute top-0 right-0 flex items-center justify-center gap-2 p-1 text-sm">
      {children}
    </div>
  );
};
