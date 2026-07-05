import type { ComponentType } from "react";
import { getFeaturedBrands } from "@/app/_components/trap-takeover/trap-takeover-brands";
import type { StaticImageData } from "next/image";

export {};

declare global {
  // biome-ignore lint/suspicious/noExplicitAny: I need the any here
  type ComponentTypeWithAny = ComponentType<any>;

  // Extract props from a React component
  type PropsOf<T extends ComponentTypeWithAny> =
    T extends ComponentType<infer P> ? P : never;

  // The core entry type
  interface BannerEntry<T extends ComponentTypeWithAny> {
    Component: T;
    active?: boolean;
    order?: Order; // lower = higher priority
    props?: Partial<PropsOf<T>>;
  }

  type TrapTakeoverEventConfig = {
    date: Date;
    dateString: string;
    dateWithSuffix: string;
    flyer: {
      image: string;
      pdf: string;
    };
    featuredBrands: ReturnType<typeof getFeaturedBrands>;
    flags: {
      /** Brands that are particpating in the event. */
      featuredBrands: boolean;
      /** The flyer for the event. */
      flyer: boolean;
      /** Whether or not we'll have free gift bags for the event. */
      giftBags: boolean;
      /** Whether or not we'll have free food for the event. */
      freeFood: boolean;
      /** Whether or not we'll raffle of a piece of art the event. */
      specialArtPromo: boolean;
      /** Whether or not we'll raffle of a special promotion (other than the usual raffle bag) the event. */
      specialPromo: boolean;
      /** If we have a promotional video for the event. */
      video: boolean;
      /** Shows the individual deals for the event. */
      individualDeals: boolean;
    };
    /** The deals for the event. */
    deals: IndividualDeal[];
    /** The number of gift bags for the event. */
    numberOfGiftBags?: number;
  };

  type Category =
    | "Extract"
    | "Cartridge"
    | "Edible"
    | "Flower"
    | "Preroll"
    | "Merch";

  type IndividualDeal = {
    /** The name of the brand */
    brand: string;
    /** Type of deal, for example: "BOGO" or "B2G1" or "50% off" */
    dealType: "Buy One, Get One" | "Buy Two, Get One";
    /** The description of the deal */
    description: string;
    /** The deal product category */
    categories: Category[];
    /** The product name and strain of the free units */
    options?: DealOption[];
    /** Details about the deal */
    details?: string;
    /** The brand's logo or image */
    image: StaticImageData;
  };

  type DealOption = {
    name: string;
    strain: "indica" | "sativa" | "hybrid";
  };

  type DealsResponse = {
    page: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
    items: Deal[];
  };

  type Deal = {
    id: string;
    htmlId: string;
    collectionId: string;
    collectionName: string;
    created: string; // ISO 8601 date string
    updated: string; // ISO 8601 date string
    description: string;
    active: boolean;
    brands: string[];
    categories: string[];
    subTypes: string;
    typeSubtypes: string;
    image: string;
    imageBackgroundColor: string;
    title: string;
    badge: string;
  };

  type TimeRemainingUntilDate = {
    Days: string;
    Hours: string;
    Minutes: string;
    Seconds: string;
  };

  type MetadataOverride = Partial<{
    title: string;
    description: string;
    keywords: string | string[];
    canonical: string;
    openGraph: Partial<{
      title: string;
      description: string;
      url: string;
      siteName: string;
      locale: string;
      type: string;
      images: Array<{
        url: string;
        width?: number;
        height?: number;
        alt?: string;
      }>;
    }>;
    twitter: Partial<{
      card: string;
      title: string;
      description: string;
      images: string | Array<{ url: string; alt?: string }>;
    }>;
    robots: Partial<{
      index: boolean;
      follow: boolean;
      googleBot: Partial<{
        index: boolean;
        follow: boolean;
      }>;
    }>;
  }>;
}
