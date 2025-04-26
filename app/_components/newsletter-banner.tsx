import Link from "next/link";
import { TopBanner } from "./top-banner";

interface NewsletterBannerProps {
  active: boolean;
}

export const NewsletterBanner = ({ active }: NewsletterBannerProps) => {
  return (
    <TopBanner active={active} className="py-4">
      <Link className="text-black" href="#newsletter">
        Check out our newsletter!
      </Link>
    </TopBanner>
  );
};
