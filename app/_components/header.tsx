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
import { NewsletterBanner } from "./newsletter-banner";

import { cn } from "@/lib/utils";

const LINKS = [
  { href: "/", label: "Home", icon: <HomeIcon size={26} /> },
  { href: "/about", label: "About", icon: <UsersRoundIcon size={26} /> },
  { href: "/reward-program", label: "Rewards", icon: <Gem size={26} /> },
  { href: "/deals", label: "Deals", icon: <BanknoteIcon size={26} /> },
  // { href: "/deals/420-deals", label: "4/20 Deals", icon: <FlameIcon size={26} />, },
  {
    href: "/contact",
    label: "Contact",
    icon: <ContactUsIcon size={26} />,
  },
];

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>();

  const [shouldHeaderShow, setShouldHeaderShow] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    let lastScroll = window.pageYOffset;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const delta = currentScroll - lastScroll;
      const topOffset = 200;
      const threshold = 5; // pixels

      if (currentScroll < topOffset) {
        setShouldHeaderShow(true);
      } else if (Math.abs(delta) > threshold) {
        setShouldHeaderShow(delta < 0); // show when scrolling up
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setCurrentPath(pathname);
    if (pathname !== currentPath) {
      setShowMobileMenu(false);
    } else {
      setShowMobileMenu(false);
    }
  }, [pathname, currentPath]);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const handleFocusIn = () => {
      setShouldHeaderShow(true);
    };

    header.addEventListener("focusin", handleFocusIn);

    return () => {
      header.removeEventListener("focusin", handleFocusIn);
    };
  }, []);

  const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  return (
    <header
      className={cn(
        shouldHeaderShow ? "opacity-100" : "opacity-0",
        "sticky top-0 z-40 bg-[#fefefe] shadow-sm transition-opacity duration-300 ease-in-out",
      )}
    >
      <StiiizyBanner active={false} />
      <TrapTakeoverBanner
        active={true}
        bannerText="Trap Takeover - May 2nd @ 12PM"
      />
      <NewsletterBanner active={false} />
      <div className="group bg-primary-purple sticky top-0">
        <div className="bg-primary-purple flex justify-between px-4 py-2 text-sm text-[#fefefe] md:hidden">
          <a
            className="flex items-center justify-center gap-2 rounded-sm p-2 font-semibold outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="tel:707-701-4160"
          >
            <PhoneIcon className="h-4 w-4" />
            <span>(707) 701-4160</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-sm p-2 px-4 font-semibold outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
            target="_blank"
          >
            <CartIcon className="h-4 w-4" />
            <span>Shop now</span>
          </a>
        </div>
        {/* Desktop View */}
        <div className="bg-primary-purple mx-auto hidden max-w-7xl justify-between px-4 py-2 text-sm text-[#fefefe] md:flex">
          <div className="flex items-center justify-center gap-2 rounded-sm p-2 font-semibold">
            <ClockIcon className="h-4 w-4" />
            <span>10am - 9:30pm</span>
          </div>
          <a
            className="flex items-center justify-center gap-2 rounded-sm p-2 px-4 font-semibold outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="https://www.google.com/maps/dir//triple+c+collective/@38.9554237,-122.6496488"
            target="_blank"
          >
            <LocationIcon className="h-4 w-4" />
            <span>14196 Lakeshore Dr. Clearlake, CA 95422</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-sm p-2 px-4 font-semibold outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
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
          className="font-logo text-primary-purple focus:outline-primary-purple rounded-sm p-2 text-xl font-bold uppercase outline-hidden transition-all sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
        >
          Triple C Collective
        </Link>
        <button
          className="focus:outline-primary-purple rounded-sm p-1 outline-hidden transition-all hover:bg-gray-200 focus:bg-gray-200 md:hidden"
          onClick={toggleMobileMenu}
          name="mobile-navigation-button"
          aria-label="Mobile Navigation Button"
        >
          {showMobileMenu ? (
            <CloseIcon className="text-primary-purple h-8 w-8" />
          ) : (
            <BarsIcon className="text-primary-purple h-8 w-8" />
          )}
        </button>
        {showMobileMenu && (
          <>
            <nav className="bg-primary-purple absolute top-16 right-0 w-full py-[6px] text-center text-white md:hidden">
              <ul className="bg-primary-purple flex w-full flex-col">
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
              className="fixed top-0 left-0 -z-10 h-dvh w-screen"
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
        className="text-primary-purple focus:outline-primary-purple rounded-sm px-4 py-2 font-semibold outline-hidden hover:underline focus:underline lg:text-xl"
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
        className="flex w-full items-center justify-between px-6 py-4 font-semibold uppercase outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
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
