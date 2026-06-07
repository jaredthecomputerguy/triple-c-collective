import { cn } from "@/lib/utils/shared";
import Image from "next/image";

const strainColors = {
  indica: "bg-purple-600",
  sativa: "bg-yellow-600",
  hybrid: "bg-green-600",
};

type IndividualDealsProps = {
  active: boolean;
  deals: IndividualDeal[];
};

export function IndividualDeals({ active, deals }: IndividualDealsProps) {
  if (!active || deals.length === 0) return null;

  return (
    <section className="py-8">
      <h3 className="font-logo pt-4 pb-12 text-center text-3xl font-semibold md:text-left">
        Featured Deals
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deals.map(
          (
            {
              brand,
              dealType,
              categories,
              description,
              options,
              details,
              image,
            },
            i,
          ) => {
            const isEven = i % 2 === 0;
            const size = 45;
            return (
              <div
                key={`${brand}-${dealType}-${categories.join(",")}-${description}`}
                className={cn(
                  "flex min-h-[320px] flex-col rounded-lg p-6 text-white shadow-lg",
                  isEven ? "bg-primary-purple" : "bg-[#553870]",
                )}>
                <div className="mb-8 flex items-start justify-between gap-4">
                  <Image
                    src={image}
                    alt={brand}
                    width={size}
                    height={size}
                    className="aspect-square rounded-full"
                  />

                  <div className="flex max-w-[75%] flex-wrap justify-end gap-1">
                    {categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full bg-white/20 px-3 py-1 text-xs">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="font-logo text-2xl font-bold">{brand}</h3>

                  <p className="font-logo mb-2 text-lg font-semibold text-yellow-300 uppercase">
                    {dealType}
                  </p>

                  <p className="text-white/90">{description}</p>
                </div>

                {options && options.length > 0 && (
                  <div className="mt-4 rounded-md bg-white/10 p-4">
                    <p className="mb-2 text-sm font-semibold">
                      Promo Unit Choices:
                    </p>

                    <ul className="space-y-2">
                      {options.map(({ name, strain }) => (
                        <li
                          key={`${name}-${strain}`}
                          className="flex items-center gap-2">
                          <span
                            className={cn(
                              strainColors[strain],
                              "rounded-full px-2 py-0.5 text-xs font-semibold text-white",
                            )}>
                            {strain.toUpperCase()}
                          </span>

                          <span className="text-sm">{name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <p className="mt-auto border-t border-white/20 pt-4 text-xs leading-snug text-white/70">
                  {details && <> {details}</>}
                </p>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
}
