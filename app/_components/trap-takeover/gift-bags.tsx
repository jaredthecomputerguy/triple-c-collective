export const GiftBags = ({ active }: { active: boolean }) => {
  if (!active) return null;
  return (
    <li>
      <strong>Gift Bags for the Early Birds:</strong> The first 50 customers to
      show up for the sale will receive a complimentary gift bag loaded with
      goodies. Make sure to arrive early to snag one before they’re gone!{" "}
    </li>
  );
};
