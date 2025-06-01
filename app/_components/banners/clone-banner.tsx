import { TopBanner } from "./top-banner";

interface CloneBannerProps {
  active: boolean;
}

export const CloneBanner = ({ active }: CloneBannerProps) => {
  // TODO: Implement this banner
  return <TopBanner active={active}>CLONE</TopBanner>;
};
