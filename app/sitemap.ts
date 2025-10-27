import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tripleccollective.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    {
      url: "https://tripleccollective.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6
    },
    {
      url: "https://tripleccollective.com/reward-program",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: "https://tripleccollective.com/delivery",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: "https://tripleccollective.com/deals",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: "https://tripleccollective.com/deals/trap-takeover",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9
    },
    {
      url: "https://tripleccollective.com/contact",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    },
    {
      url: "https://tripleccollective.com/privacy-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.4
    },
    {
      url: "https://tripleccollective.com/cookie-policy",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: "https://tripleccollective.com/terms-of-use",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: "https://tripleccollective.com/newsletter/unsubscribe",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: "https://tripleccollective.com/newsletter/unsubscribe/error",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: "https://tripleccollective.com/newsletter/unsubscribe/success",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    },
    {
      url: "https://tripleccollective.com/best-of-lake-and-mendocino",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2
    }
  ];
}
