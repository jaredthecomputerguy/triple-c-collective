import { type MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/newsletter/"],
    },
    sitemap: "https://tripleccollective.com/sitemap.xml",
  };
}
