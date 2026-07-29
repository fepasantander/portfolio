import type { MetadataRoute } from "next";

const baseUrl = "https://felipe-santander.vercel.app";

const indexableRoutes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.7 },
  { path: "/journal", priority: 0.8 },
  { path: "/cases/vitruchat", priority: 0.8 },
  { path: "/cases/hub-correcoes", priority: 0.8 },
  { path: "/cases/sofia", priority: 0.8 },
  { path: "/cases/odonto1", priority: 0.8 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return indexableRoutes.map(({ path, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
