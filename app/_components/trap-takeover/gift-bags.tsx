export const GiftBags = ({
  active,
  numberOfGiftBags = 50,
}: {
  active: boolean;
  numberOfGiftBags?: number;
}) => {
  if (!active) return null;
  return (
    <li>
      <strong>Gift Bags for the Early Birds:</strong> The first{" "}
      {numberOfGiftBags} customers to show up for the sale will receive a
      complimentary gift bag loaded with goodies. Make sure to arrive early to
      snag one before they’re gone!{" "}
    </li>
  );
};
