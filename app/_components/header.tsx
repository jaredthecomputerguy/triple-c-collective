"use client";

import React, {
  type Dispatch,
  type ReactNode,
  type Ref,
  type SetStateAction,
  useEffect,
  useRef,
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
  Cannabis,
  CircleDollarSign,
  ChevronDown,
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
import { MothersDayBanner } from "./mothers-day-banner";

type Link = {
  href: string | null;
  label: string;
  icon?: ReactNode;
  links?: Link[];
};

const MOBILE_LINKS: Link[] = [
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
  {
    href: "/delivery",
    label: "Delivery",
    icon: <LocationIcon className="h-[24px] w-[24px]" />,
  },
  {
    href: "/real-ca-cannabis",
    label: "Real CA Cannabis",
    icon: <Cannabis className="h-[24px] w-[24px]" />,
  },
  {
    href: "/deals/trap-takeover",
    label: "Trap Takeover Sale",
    icon: <CircleDollarSign className="h-[24px] w-[24px]" />,
  },
];

const DESKTOP_LINKS: Link[] = [
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
      { href: "/deals/trap-takeover", label: "Trap Takeover Sale" },
    ],
  },
];

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [currentPath, setCurrentPath] = useState<string | null>();
  const [shouldHeaderShow, setShouldHeaderShow] = useState(true);
  const [showMoreLinksMenu, setShowMoreLinksMenu] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  const showMoreLinksMenuRef = useRef<HTMLLIElement>(null);

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
        const isScrollingUp = delta < 0;
        setShouldHeaderShow(isScrollingUp);

        if (!isScrollingUp) {
          // If scrolling down, close the mobile nav menu + more links dropdown
          setShowMobileMenu(false); // CLOSE THE MOBILE MENU when scrolling down
        }
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
      setShowMoreLinksMenu(false);
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

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [viewportHeight]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!e.target || !showMoreLinksMenuRef.current) return;

      if (!showMoreLinksMenuRef.current.contains(e.target as Node)) {
        setShowMoreLinksMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showMoreLinksMenuRef]);

  const toggleMobileMenu = () => setShowMobileMenu((prevState) => !prevState);

  return (
    <header
      className={cn(
        shouldHeaderShow
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
        "sticky top-0 z-40 bg-[#fefefe] shadow-sm transition-opacity duration-300 ease-in-out",
      )}
    >
      <StiiizyBanner active={false} />
      <TrapTakeoverBanner
        active={true}
        bannerText="Trap Takeover - June 6th @ 12PM"
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
            <nav
              className={cn(
                "bg-primary-purple absolute top-16 right-0 w-full overflow-y-auto py-[6px] text-center text-white md:hidden",
              )}
            >
              <ul className="bg-primary-purple flex w-full flex-col">
                {MOBILE_LINKS.map((link) => {
                  if (!link.href) return;
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
            <div
              className="fixed top-0 left-0 -z-10 h-dvh w-screen"
              onClick={() => setShowMobileMenu(false)}
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

const NavLink = ({
  href,
  label,
  links,
  showMoreLinksMenu,
  setShowMoreLinksMenu,
  showMoreLinksMenuRef,
}: Link & {
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
        >
          {label} <ChevronDown />
        </button>
        {links && (
          <ul
            className={cn(
              "absolute top-[62px] right-0 flex w-[250px] flex-col gap-4 border bg-white py-2 transition-all duration-300 ease-in-out",
              showMoreLinksMenu ? "opacity-100" : "hidden opacity-0",
            )}
          >
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  className="focus:outline-primary-purple text-primary-purple flex items-center gap-2 rounded-sm px-4 py-2 text-center font-semibold outline-hidden hover:underline focus:underline lg:text-xl"
                  href={link.href ?? "/"}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li>
      <Link
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
  viewportHeight,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  setShowMobileMenu: React.Dispatch<SetStateAction<boolean>>;
  viewportHeight: number;
}) => {
  return (
    <li className="block">
      <Link
        onClick={() => {
          setShowMobileMenu(false);
        }}
        className={cn(
          "flex w-full items-center justify-between px-6 py-4 font-semibold uppercase outline-hidden transition-all hover:bg-white/10 focus:bg-white/10 focus:outline-white",
          viewportHeight < 710 && "py-3",
        )}
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
