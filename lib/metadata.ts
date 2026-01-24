import type { Metadata } from "next";

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

const SITE_URL = process.env.SITE_URL || "https://tripleccollective.com";
const SITE_NAME = "Triple C Collective";

export const baseMetadata: Metadata = {
  title: SITE_NAME,
  description:
    "Explore the best in medicinal and recreational cannabis at Triple C Collective, serving Lake County, California.",
  category: "Cannabis Dispensary",
  keywords: [
    "cannabis",
    "cannabis store",
    "dispensary",
    "marijuana",
    "weed",
    "pot",
    "Lake County",
    "California",
    "Triple C Collective",
    "flower",
    "dab",
    "concentrate",
    "edibles",
    "cbd",
    "kratom",
    "wellness",
    "Clearlake"
  ],
  authors: [
    {
      name: "Jared Mercer",
      url: "https://jaredthecomputerguy.dev"
    }
  ],
  creator: "Jared Mercer",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    url: SITE_URL,
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: SITE_NAME
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `${SITE_URL}/opengraph-image.png`,
        alt: SITE_NAME
      }
    ]
  }
};

export function createMetadata(overrides: MetadataOverride = {}): Metadata {
  // Helper to ensure we never return null, only string or undefined
  const resolveString = (
    value: string | null | undefined,
    fallback: string | null | undefined
  ): string | undefined => {
    return value ?? fallback ?? undefined;
  };

  // Build the full title with separator if override is provided
  const resolvedTitle = overrides.title
    ? `${overrides.title} | ${SITE_NAME}`
    : (baseMetadata.title as string);

  const resolvedDescription = resolveString(
    overrides.description,
    baseMetadata.description as string
  );

  // Merge robots safely
  const resolvedRobots =
    overrides.robots &&
    baseMetadata.robots &&
    typeof baseMetadata.robots === "object"
      ? {
          ...baseMetadata.robots,
          ...overrides.robots,
          googleBot: {
            ...(typeof baseMetadata.robots.googleBot === "object"
              ? baseMetadata.robots.googleBot
              : {}),
            ...(overrides.robots.googleBot || {})
          }
        }
      : overrides.robots || baseMetadata.robots;

  return {
    ...baseMetadata,
    title: resolvedTitle,
    description: resolvedDescription,
    ...(overrides.keywords && { keywords: overrides.keywords }),
    ...(overrides.canonical && {
      alternates: { canonical: overrides.canonical }
    }),
    robots: resolvedRobots,
    openGraph: {
      ...baseMetadata.openGraph,
      ...overrides.openGraph,
      title: resolveString(overrides.openGraph?.title, resolvedTitle),
      description: resolveString(
        overrides.openGraph?.description,
        resolvedDescription
      )
    },
    twitter: {
      ...baseMetadata.twitter,
      ...overrides.twitter,
      title: resolveString(overrides.twitter?.title, resolvedTitle),
      description: resolveString(
        overrides.twitter?.description,
        resolvedDescription
      )
    }
  };
}
