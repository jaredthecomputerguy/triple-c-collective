import type { Dispatch, ReactNode, Ref, SetStateAction } from "react";
import NextLink from "next/link";
import {
  HomeIcon,
  UsersRoundIcon,
  Gem,
  BanknoteIcon,
  PhoneIcon as ContactUsIcon,
  Cannabis,
  CircleDollarSign,
  ChevronDown,
  ChevronRight
} from "lucide-react";

import { cn } from "@/lib/utils/shared";
import { LocationIcon } from "@/app/_components/icons/location-icon";

type NavLinkItem = {
  href: string | null;
  label: string;
  icon?: ReactNode;
  links?: NavLinkItem[];
};

export const MOBILE_LINKS: NavLinkItem[] = [
  { href: "/", label: "Home", icon: <HomeIcon size={26} /> },
  { href: "/about", label: "About", icon: <UsersRoundIcon size={26} /> },
  { href: "/reward-program", label: "Rewards", icon: <Gem size={26} /> },
  { href: "/deals", label: "Deals", icon: <BanknoteIcon size={26} /> },
  // { href: "/deals/420-deals", label: "4/20 Deals", icon: <FlameIcon size={26} />, },
  {
    href: "/contact",
    label: "Contact",
    icon: <ContactUsIcon size={26} />
  },
  {
    href: "/delivery",
    label: "Delivery",
    icon: <LocationIcon className="h-[24px] w-[24px]" />
  },
  {
    href: "/real-ca-cannabis",
    label: "Real CA Cannabis",
    icon: <Cannabis className="h-[24px] w-[24px]" />
  },
  {
    href: "/deals/trap-takeover",
    label: "Trap Takeover Sale",
    icon: <CircleDollarSign className="h-[24px] w-[24px]" />
  }
];

export const DESKTOP_LINKS: NavLinkItem[] = [
  { href: "/deals", label: "Deals" },
  { href: "/delivery", label: "Delivery" },
  { href: "/contact", label: "Contact" },
  {
    href: null,
    label: "More",
    links: [
      { href: "/about", label: "About" },
      { href: "/reward-program", label: "Rewards" },
      { href: "/real-ca-cannabis", label: "Real CA Cannabis" },
      { href: "/deals/trap-takeover", label: "Trap Takeover Sale" }
    ]
  }
];

export const NavLink = ({
  href,
  label,
  links,
  showMoreLinksMenu,
  setShowMoreLinksMenu,
  showMoreLinksMenuRef
}: NavLinkItem & {
  showMoreLinksMenu: boolean;
  setShowMoreLinksMenu: Dispatch<SetStateAction<boolean>>;
  showMoreLinksMenuRef: Ref<HTMLLIElement>;
}) => {
  if (!href) {
    return (
      <li className="relative" ref={showMoreLinksMenuRef}>
        <button
          className="text-primary-purple focus:outline-primary-purple group flex items-center gap-2 rounded-sm font-semibold outline-hidden hover:underline focus:underline lg:text-xl"
          onClick={() => {
            setShowMoreLinksMenu((prev) => !prev);
          }}
          type="button">
          {label} <ChevronDown />
        </button>
        {links && (
          <ul
            className={cn(
              "absolute top-[62px] right-0 flex w-[250px] flex-col gap-4 border bg-white py-2 transition-all duration-300 ease-in-out",
              showMoreLinksMenu ? "opacity-100" : "hidden opacity-0"
            )}>
            {links.map((link) => (
              <li key={link.href}>
                <NextLink
                  className="focus:outline-primary-purple text-primary-purple flex items-center gap-2 rounded-sm px-4 py-2 text-center font-semibold outline-hidden hover:underline focus:underline lg:text-xl"
                  href={link.href ?? "/"}>
                  {link.label}
                </NextLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <NextLink
        className="text-primary-purple focus:outline-primary-purple rounded-sm px-4 py-2 font-semibold outline-hidden hover:underline focus:underline lg:text-xl"
        href={href}>
        {label}
      </NextLink>
    </li>
  );
};

export const MobileNavLink = ({
  href,
  label,
  icon,
  setShowMobileMenu,
  viewportHeight
}: {
  href: string;
  label: string;
  icon: ReactNode;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
  viewportHeight: number;
}) => {
  return (
    <li className="block">
      <NextLink
        onClick={() => {
          setShowMobileMenu(false);
        }}
        className={cn(
          "flex w-full items-center justify-between px-6 py-4 font-semibold uppercase outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white",
          viewportHeight < 710 && "py-3"
        )}
        href={href}>
        <span className="flex items-center gap-4">
          {icon}
          {label}
        </span>
        <ChevronRight />
      </NextLink>
    </li>
  );
};
