import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tripleccollective.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://tripleccollective.com/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: "https://tripleccollective.com/reward-program",
      lastModified: "2024-03-26",
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: "https://tripleccollective.com/deals",
      lastModified: "2024-03-26",
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: "https://tripleccollective.com/contact",
      lastModified: "2024-03-26",
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];
}
