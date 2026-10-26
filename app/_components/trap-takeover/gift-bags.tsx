import { Active } from "@/app/_components/active";

export const GiftBags = ({
  active,
  numberOfGiftBags = 50,
}: {
  active: boolean;
  numberOfGiftBags?: number;
}) => {
  return (
    <Active active={active}>
      <li>
        <strong>Gift Bags for the Early Birds:</strong> The first{" "}
        <strong className="text-lg">{numberOfGiftBags}</strong> customers to
        show up for the sale will receive a complimentary gift bag loaded with
        goodies. Make sure to arrive early to snag one before they’re gone!{" "}
      </li>
    </Active>
  );
};
