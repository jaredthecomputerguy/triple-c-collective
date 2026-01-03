import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils/shared";
import type { FeaturedBrand } from "@/app/_components/trap-takeover/trap-takeover-brands";

export const FeaturedBrands = ({
  active,
  featuredBrands
}: {
  active: boolean;
  featuredBrands: FeaturedBrand[];
}) => {
  return (
    <section className="py-8">
      <h3 className="font-logo py-4 text-center text-3xl font-semibold md:text-left">
        Featured Brands
      </h3>
      <div
        className={cn(
          "grid grid-cols-2 place-items-center py-8 text-lg md:flex md:flex-wrap md:justify-evenly md:gap-4 md:py-12",
          active ? "" : "sm:justify-start"
        )}>
        {active ? (
          featuredBrands.map((brand) => {
            const isLast =
              brand.name === featuredBrands[featuredBrands.length - 1].name &&
              featuredBrands.length % 2 !== 0;

            return (
              <div
                className={cn(
                  "flex flex-col items-center hover:underline",
                  isLast && "col-span-2"
                )}
                key={brand.name ?? "undefined"}>
                <Link
                  className="focus:border-primary-purple focus:outline-primary-purple flex flex-col items-center rounded-sm border border-white px-2 py-2 outline-hidden"
                  href={brand.url}
                  rel="noopener noreferrer"
                  target="_blank">
                  <h3 className="font-logo w-full py-2 text-center text-xl font-semibold">
                    {brand.name}
                  </h3>
                  {brand.name ? (
                    <Image
                      src={brand.image}
                      alt={brand.alt}
                      className="h-32 w-32 object-contain sm:h-56 sm:w-56"
                    />
                  ) : (
                    <div className="flex h-56 w-56 flex-col items-center justify-center text-center">
                      Brands coming soon...
                    </div>
                  )}
                </Link>
              </div>
            );
          })
        ) : (
          <div className="text-center text-3xl md:text-left">
            Coming soon...
          </div>
        )}
      </div>
    </section>
  );
};
