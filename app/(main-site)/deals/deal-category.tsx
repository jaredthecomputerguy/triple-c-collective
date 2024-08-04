import { type Deal } from "@/payload-types";
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
      <p className="py-4 font-logo text-3xl font-semibold">{categoryTitle}</p>
      <span className="font-main text-gray-700">{categorySubtitle}</span>
      <DealCards deals={deals} />
    </div>
  );
};
