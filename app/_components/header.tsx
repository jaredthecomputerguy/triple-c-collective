"use client";

import React, { SetStateAction, useEffect, useState } from "react";

import { BarsIcon } from "./icons/bar-icon";
import { CartIcon } from "./icons/cart-icon";
import { PhoneIcon } from "./icons/phone-icon";
import { CloseIcon } from "./icons/close-icon";
import { ClockIcon } from "./icons/clock-icon";
import { LocationIcon } from "./icons/location-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/rewards", label: "Rewards" },
  { href: "/blogs", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
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
    <header className="sticky top-0 z-50 shadow bg-[#fefefe]">
      <div className="sticky top-0 min-w-screen group bg-primary-purple">
        {/* Information Bar */}
        {/* Mobile View */}
        <div className="bg-primary-purple px-4 py-2 flex justify-between text-sm md:hidden text-[#fefefe]">
          <a
            className="flex items-center justify-center gap-2 p-2 font-semibold transition-all rounded outline-none active:outline-white focus:outline-white hover:bg-white/10 focus:bg-white/10 active:bg-white/10"
            href="tel:707-701-4160">
            <PhoneIcon className="w-4 h-4" />
            <span>(707) 701-4160</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 p-2 px-4 font-semibold transition-all rounded outline-none hover:bg-white/10 focus:bg-white/10 active:bg-white/10 active:outline-white focus:outline-white"
            href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
            target="_blank">
            <CartIcon className="w-4 h-4" />
            <span>Shop now</span>
          </a>
        </div>
        {/* Desktop View */}
        <div className="bg-primary-purple px-4 py-2 justify-between text-sm max-w-7xl mx-auto hidden md:flex text-[#fefefe]">
          <div className="flex items-center justify-center gap-2 p-2 font-semibold rounded">
            <ClockIcon className="w-4 h-4" />
            <span>10am - 9:30pm</span>
          </div>
          <a
            className="flex items-center justify-center gap-2 p-2 px-4 font-semibold transition-all rounded outline-none hover:bg-white/10 focus:bg-white/10 active:bg-white/10 active:outline-white focus:outline-white"
            href="http://bit.ly/triple-c-collective"
            target="_blank">
            <LocationIcon className="w-4 h-4" />
            <span>14196 Lakeshore Dr. Clearlake, CA 95422</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 p-2 px-4 font-semibold transition-all rounded outline-none hover:bg-white/10 focus:bg-white/10 active:bg-white/10 active:outline-white focus:outline-white"
            href="tel:707-701-4160">
            <PhoneIcon className="w-4 h-4" />
            <span>(707) 701-4160</span>
          </a>
        </div>
        {/* Header */}
      </div>
      <div className="p-4 max-w-7xl mx-auto flex justify-between items-center relative bg-[#fefefe]">
        <Link
          href="/"
          className="p-2 text-xl font-bold uppercase transition-all rounded outline-none font-logo text-primary-purple sm:text-2xl md:text-3xl lg:text-5xl focus:outline-primary-purple active:outline-primary-purple">
          Triple C Collective
        </Link>
        {/* TODO: See if we can smooth this transition out */}
        <button
          className="p-1 transition-all rounded outline-none md:hidden hover:bg-gray-200 active:bg-gray-200 focus:bg-gray-200 focus:outline-primary-purple active:outline-primary-purple"
          onClick={toggleMobileMenu}
          name="navigation-menu-button">
          {showMobileMenu ? (
            <CloseIcon className="w-8 h-8 text-primary-purple" />
          ) : (
            <BarsIcon className="w-8 h-8 text-primary-purple" />
          )}
        </button>
        {showMobileMenu && (
          <nav className="absolute md:hidden top-16 text-center py-[6px] right-0 w-full bg-primary-purple text-white">
            <ul className="flex flex-col w-full bg-primary-purple">
              {LINKS.map((link) => (
                <MobileNavLink
                  href={link.href}
                  label={link.label}
                  key={link.href}
                  setShowMobileMenu={setShowMobileMenu}
                />
              ))}
            </ul>
          </nav>
        )}
        <nav className="hidden md:block">
          <ul className="flex md:gap-2 lg:gap-4">
            {LINKS.filter((link) => link.label !== "Home").map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} setShowMobileMenu={setShowMobileMenu} />
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
        className="px-4 py-2 font-semibold rounded outline-none text-primary-purple lg:text-xl hover:underline active:underline focus:underline focus:outline-primary-purple active:outline-primary-purple"
        href={href}>
        {label}
      </Link>
    </li>
  );
};

const MobileNavLink = ({
  href,
  label,
  setShowMobileMenu,
}: {
  href: string;
  label: string;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <li className="">
      <Link
        onClick={() => {
          setShowMobileMenu(false);
        }}
        className="block w-full py-4 font-semibold uppercase transition-all outline-none focus:outline-white active:outline-white hover:bg-white/10 focus:bg-white/10 active:bg-white/10"
        href={href}>
        {label}
      </Link>
    </li>
  );
};
