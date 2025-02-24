import type { ComponentProps } from "react";
import { SnapchatIcon } from "./icons/snapchat-icon";
import { TopBanner } from "./top-banner";

interface SnapchatBannerProps extends ComponentProps<"a"> {
  topText?: string;
  bottomText?: string;
  href: string;
}

export const SnapchatBanner = ({
  topText = "REPLY TO OUR POST TO GET $15",
  bottomText = "SHOW US IN STORE TO REDEEM",
  href,
  ...rest
}: SnapchatBannerProps) => {
  return (
    <TopBanner active={true} className="bg-[#fffc00] text-black">
      <a
        {...rest}
        href={href}
        target="_blank"
        className="text-black text-center text-sm md:text-base px-4 py-4 font-logo font-bold flex gap-2 items-center"
      >
        <SnapchatIcon className="flex-none size-6 md:size-10" />
        <div className="flex flex-col">
          <span>{topText}</span>
          <small>{bottomText}</small>
        </div>
        <SnapchatIcon className="flex-none size-6 md:size-10" />
      </a>
    </TopBanner>
  );
};
