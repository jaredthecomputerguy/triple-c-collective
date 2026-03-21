import type { ComponentType } from "react";

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
      featuredBrands: boolean;
      flyer: boolean;
      giftBags: boolean;
      freeFood: boolean;
      specialArtPromo: boolean;
      specialPromo: boolean;
      video: boolean;
      individualDeals: boolean;
    };
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
