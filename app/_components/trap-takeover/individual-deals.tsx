type DealOption = {
  name: string;
  strain: "indica" | "sativa" | "hybrid";
};

export type IndividualDeal = {
  brand: string;
  dealType: string;
  description: string;
  category: string;
  options?: DealOption[];
  details?: string;
};

type IndividualDealsProps = {
  active: boolean;
  deals: IndividualDeal[];
};

const strainColors = {
  indica: "bg-purple-600",
  sativa: "bg-yellow-600",
  hybrid: "bg-green-600"
};

export function IndividualDeals({ active, deals }: IndividualDealsProps) {
  if (!active || deals.length === 0) return null;

  return (
    <section className="py-8">
      <h2 className="font-logo pb-4 text-2xl font-semibold md:text-4xl">
        Featured Deals
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deals.map((deal, index) => (
          <div
            key={`${deal.brand}-${index}`}
            className="bg-primary-purple rounded-lg p-6 text-white shadow-lg">
            <div className="mb-3 flex items-start justify-between">
              <h3 className="font-logo text-2xl font-bold">{deal.brand}</h3>
              <span className="rounded-full bg-white/20 px-3 py-1 text-sm">
                {deal.category}
              </span>
            </div>

            <div className="mb-4">
              <p className="mb-2 text-lg font-semibold text-yellow-300">
                {deal.dealType}
              </p>
              <p className="text-white/90">{deal.description}</p>
            </div>

            {deal.options && deal.options.length > 0 && (
              <div className="mt-4 rounded-md bg-white/10 p-4">
                <p className="mb-2 text-sm font-semibold">Your Choice:</p>
                <ul className="space-y-2">
                  {deal.options.map((option, optIndex) => (
                    <li
                      key={`${option.name}-${optIndex}`}
                      className="flex items-center gap-2">
                      <span
                        className={`${strainColors[option.strain]} rounded-full px-2 py-0.5 text-xs font-semibold text-white`}>
                        {option.strain.toUpperCase()}
                      </span>
                      <span className="text-sm">{option.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {deal.details && (
              <p className="mt-4 border-t border-white/20 pt-4 text-sm text-white/70">
                {deal.details}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
