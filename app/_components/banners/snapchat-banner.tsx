import { SnapchatIcon } from "@/app/_components/icons/snapchat-icon";
import { TopBanner } from "@/app/_components/banners/top-banner";

interface SnapchatBannerProps {
  active: boolean;
  topText?: string;
  bottomText?: string;
  href?: string;
}

export const SnapchatBanner = ({
  active,
  topText = "REPLY TO OUR POST TO GET $15",
  bottomText = "SHOW US IN STORE TO REDEEM",
  href,
  ...rest
}: SnapchatBannerProps) => {
  return (
    <TopBanner active={active} className="bg-[#fffc00] text-black">
      <a
        {...rest}
        href={href}
        target="_blank"
        className="font-logo flex items-center gap-2 px-4 py-4 text-center text-sm font-bold text-black md:text-base">
        <SnapchatIcon className="size-6 flex-none md:size-10" />
        <div className="flex flex-col">
          <span>{topText}</span>
          <small>{bottomText}</small>
        </div>
        <SnapchatIcon className="size-6 flex-none md:size-10" />
      </a>
    </TopBanner>
  );
};
