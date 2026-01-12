"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/shared";
import { useClickOutside } from "@/lib/hooks/useClickOutside";
import { useHeaderFocus } from "@/lib/hooks/useHeaderFocus";
import { useScrollHeader } from "@/lib/hooks/useScrollHeader";
import { useViewportHeight } from "@/lib/hooks/useViewportHeight";
import { usePathChangeCloseMenus } from "@/lib/hooks/usePathChangeCloseMenu";

import { BarsIcon } from "@/app/_components/icons/bar-icon";
import { CartIcon } from "@/app/_components/icons/cart-icon";
import { PhoneIcon } from "@/app/_components/icons/phone-icon";
import { CloseIcon } from "@/app/_components/icons/close-icon";
import { ClockIcon } from "@/app/_components/icons/clock-icon";
import { LocationIcon } from "@/app/_components/icons/location-icon";
import { Banners } from "@/app/_components/banners/banners";
import {
  MobileNavLink,
  NavLink,
  DESKTOP_LINKS,
  MOBILE_LINKS
} from "@/app/_components/nav-links";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState<string>();
  const [shouldHeaderShow, setShouldHeaderShow] = useState(true);
  const [showMoreLinksMenu, setShowMoreLinksMenu] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const showMoreLinksMenuRef = useRef<HTMLLIElement>(null);

  const pathname = usePathname();

  useClickOutside(showMoreLinksMenuRef, () => setShowMoreLinksMenu(false));
  useHeaderFocus(setShouldHeaderShow);
  usePathChangeCloseMenus(
    pathname,
    currentPath,
    setCurrentPath,
    setShowMobileMenu,
    setShowMoreLinksMenu
  );
  useScrollHeader(setShouldHeaderShow, setShowMobileMenu);
  useViewportHeight(setViewportHeight);

  const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  return (
    <header
      className={cn(
        shouldHeaderShow
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
        "sticky top-0 z-40 bg-[#fefefe] shadow-sm transition-opacity duration-300 ease-in-out"
      )}>
      <Banners />
      <div className="group bg-primary-purple sticky top-0">
        <div className="bg-primary-purple flex justify-between px-4 py-2 text-sm text-[#fefefe] md:hidden">
          <a
            className="flex items-center justify-center gap-2 rounded-sm p-2 font-semibold outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="tel:707-701-4160">
            <PhoneIcon className="h-4 w-4" />
            <span>(707) 701-4160</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-sm p-2 px-4 font-semibold outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="https://triplec.treez.io/onlinemenu/?customerType=ADULT"
            target="_blank"
            rel="noopener">
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
            rel="noopener">
            <LocationIcon className="h-4 w-4" />
            <span>14196 Lakeshore Dr. Clearlake, CA 95422</span>
          </a>
          <a
            className="flex items-center justify-center gap-2 rounded-sm p-2 px-4 font-semibold outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white"
            href="tel:707-701-4160">
            <PhoneIcon className="h-4 w-4" />
            <span>(707) 701-4160</span>
          </a>
        </div>
      </div>
      <div className="relative mx-auto flex max-w-7xl items-center justify-between bg-[#fefefe] p-4">
        <Link
          href="/"
          className="font-logo text-primary-purple focus:outline-primary-purple rounded-sm p-2 text-xl font-bold uppercase outline-hidden transition-all sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Triple C Collective
        </Link>
        <button
          className="outline-primary-purple focus:outline-2 rounded-sm p-1 transition-all hover:bg-gray-200 md:hidden"
          onClick={toggleMobileMenu}
          name="mobile-navigation-button"
          aria-label="Mobile Navigation Button"
          type="button">
          {showMobileMenu ? (
            <CloseIcon className="text-primary-purple h-8 w-8" />
          ) : (
            <BarsIcon className="text-primary-purple h-8 w-8" />
          )}
        </button>
        {showMobileMenu && (
          <>
            <nav
              className={cn(
                "bg-primary-purple absolute top-16 right-0 w-full overflow-y-auto py-1.5 text-center text-white md:hidden"
              )}>
              <ul className="bg-primary-purple flex w-full flex-col">
                {MOBILE_LINKS.map((link) => {
                  if (!link.href) return null;
                  return (
                    <MobileNavLink
                      href={link.href}
                      label={link.label}
                      icon={link.icon}
                      key={link.href}
                      setShowMobileMenu={setShowMobileMenu}
                      viewportHeight={viewportHeight}
                    />
                  );
                })}
              </ul>
            </nav>
            <button
              className="fixed top-0 left-0 -z-10 h-dvh w-screen"
              onClick={() => setShowMobileMenu(false)}
              type="button"
            />
          </>
        )}
        <nav className="hidden md:block">
          <ul className="flex md:gap-2 lg:gap-4" id="desktop-navigation">
            {DESKTOP_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                links={link.links}
                showMoreLinksMenu={showMoreLinksMenu}
                setShowMoreLinksMenu={setShowMoreLinksMenu}
                showMoreLinksMenuRef={showMoreLinksMenuRef}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
