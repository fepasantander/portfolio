import type { MetadataRoute } from "next";

const baseUrl = "https://felipe-santander.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/cases", "/sobre", "/journal"].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(), changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 }));
}
