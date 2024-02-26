import { Media, type Deal } from "@/payload-types";
import Image from "next/image";

export const DealCards = ({ deals }: { deals: Deal[] }) => {
  const dealsWithImages = deals.map((deal) => ({ ...deal, image: deal.image as Media }));

  return dealsWithImages.map((deal) => (
    <div className="rounded-xl border" key={deal.id}>
      <Image src={deal.image.url ?? ""} alt={deal.title} width={500} height={500} />
      <p>{deal.title}</p>
    </div>
  ));
};
