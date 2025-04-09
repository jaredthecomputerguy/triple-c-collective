"use client";

import React, {
  type ReactNode,
  type SetStateAction,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronRight,
  HomeIcon,
  UsersRoundIcon,
  Gem,
  BanknoteIcon,
  PhoneIcon as ContactUsIcon,
} from "lucide-react";

import { BarsIcon } from "./icons/bar-icon";
import { CartIcon } from "./icons/cart-icon";
import { PhoneIcon } from "./icons/phone-icon";
import { CloseIcon } from "./icons/close-icon";
import { ClockIcon } from "./icons/clock-icon";
import { LocationIcon } from "./icons/location-icon";
import { TrapTakeoverBanner } from "./trap-takeover-banner";
import { StiiizyBanner } from "./stiiizy-banner";
import { FourTwentyBanner } from "./4-20-banner";

const LINKS = [
  { href: "/", label: "Home", icon: <HomeIcon size={26} /> },
  { href: "/about", label: "About", icon: <UsersRoundIcon size={26} /> },
  { href: "/reward-program", label: "Rewards", icon: <Gem size={26} /> },
  { href: "/deals", label: "Deals", icon: <BanknoteIcon size={26} /> },
  { href: "/deals/420-deals", label: "4/20 Deals" },
  {
    href: "/contact",
    label: "Contact",
    icon: <ContactUsIcon size={26} />,
  },
];

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>();

  const pathname = usePathname();

  useEffect(() => {
    setCurrentPath(pathname);
    if (pathname !== currentPath) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(false);
    }
  }, [pathname, currentPath]);

  const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  return (
    <header className="sticky top-0 z-40 bg-[#fefefe] shadow">
      <StiiizyBanner active={false} />
      <TrapTakeoverBanner
        active={false}
        bannerText="Trap Takeover - 4/20 Weekend"
      />
      <FourTwentyBanner active={true} />
      <div className="min-w-screen group sticky top-0 bg-primary-purple">
        <div className="flex justify-between bg-primary-purple px-4 py-2 text-sm text-[#fefefe] md:hidden">
          <a
            className="flex items-center justify-center gap-2 rounded p-2 font-semibold outline-none transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="tel:707-701-4160"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>(707) 701-4160</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded p-2 px-4 font-semibold outline-none transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
            target="_blank"
          >
            <CartIcon className="h-4 w-4" />
            <span>Shop now</span>
          </a>
        </div>
        {/* Desktop View */}
        <div className="mx-auto hidden max-w-7xl justify-between bg-primary-purple px-4 py-2 text-sm text-[#fefefe] md:flex">
          <div className="flex items-center justify-center gap-2 rounded p-2 font-semibold">
            <ClockIcon className="h-4 w-4" />
            <span>10am - 9:30pm</span>
          </div>
          <a
            className="flex items-center justify-center gap-2 rounded p-2 px-4 font-semibold outline-none transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="https://www.google.com/maps/dir//triple+c+collective/@38.9554237,-122.6496488"
            target="_blank"
          >
            <LocationIcon className="h-4 w-4" />
            <span>14196 Lakeshore Dr. Clearlake, CA 95422</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded p-2 px-4 font-semibold outline-none transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="tel:707-701-4160"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>(707) 701-4160</span>
          </a>
        </div>
        {/* Header */}
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between bg-[#fefefe] p-4">
        <Link
          href="/"
          className="rounded p-2 font-logo text-xl font-bold uppercase text-primary-purple outline-none transition-all focus:outline-primary-purple  sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        >
          Triple C Collective
        </Link>
        <button
          className="rounded p-1 outline-none transition-all hover:bg-gray-200 focus:bg-gray-200 focus:outline-primary-purple md:hidden"
          onClick={toggleMobileMenu}
          name="mobile-navigation-button"
          aria-label="Mobile Navigation Button"
        >
          {showMobileMenu ? (
            <CloseIcon className="h-8 w-8 text-primary-purple" />
          ) : (
            <BarsIcon className="h-8 w-8 text-primary-purple" />
          )}
        </button>
        {showMobileMenu && (
          <>
            <nav className="absolute right-0 top-16 w-full bg-primary-purple py-[6px] text-center text-white md:hidden">
              <ul className="flex w-full flex-col bg-primary-purple">
                {LINKS.map((link) => (
                  <MobileNavLink
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                    key={link.href}
                    setShowMobileMenu={setShowMobileMenu}
                  />
                ))}
              </ul>
            </nav>
            <div
              className="fixed left-0 top-0 -z-10 h-dvh w-screen"
              onClick={() => setShowMobileMenu(false)}
            />
          </>
        )}
        <nav className="hidden md:block">
          <ul className="flex md:gap-2 lg:gap-4">
            {LINKS.filter((link) => link.label !== "Home").map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                setShowMobileMenu={setShowMobileMenu}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({
  href,
  label,
  setShowMobileMenu,
}: {
  href: string;
  label: string;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <li>
      <Link
        onClick={() => {
          setShowMobileMenu(false);
        }}
        className="rounded px-4 py-2 font-semibold text-primary-purple outline-none hover:underline focus:underline focus:outline-primary-purple lg:text-xl"
        href={href}
      >
        {label}
      </Link>
    </li>
  );
};

const MobileNavLink = ({
  href,
  label,
  icon,
  setShowMobileMenu,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <li className="block">
      <Link
        onClick={() => {
          setShowMobileMenu(false);
        }}
        className="flex w-full items-center justify-between px-6 py-4 font-semibold uppercase outline-none transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
        href={href}
      >
        <span className="flex items-center gap-4">
          {icon}
          {label}
        </span>
        <ChevronRight />
      </Link>
    </li>
  );
};
