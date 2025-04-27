import type { Deal } from "@/lib/utils";
import { DealCards } from "./deal-cards";

interface DealCategoryProps {
  categoryTitle: string;
  categorySubtitle: string;
  deals: Deal[];
}

export const DealCategory = ({
  categoryTitle,
  categorySubtitle,
  deals,
}: DealCategoryProps) => {
  if (!deals.length) {
    return null;
  }

  return (
    <div>
      <p className="font-logo py-4 text-3xl font-semibold">{categoryTitle}</p>
      <span className="font-main text-gray-700">{categorySubtitle}</span>
      <DealCards deals={deals} />
    </div>
  );
};
