import { TopBanner } from "@/app/_components/banners/top-banner";

interface CloneBannerProps {
  active: boolean;
}

export const CloneBanner = ({ active }: CloneBannerProps) => {
  // TODO: Implement this banner
  return <TopBanner active={active}>CLONE</TopBanner>;
};
