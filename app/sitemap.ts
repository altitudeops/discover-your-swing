import type { MetadataRoute } from "next";

const siteUrl = "https://discoveryourswing.com";

const routes = [
  { path: "/", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/performance-coaching", priority: 0.8 },
  { path: "/junior-golf", priority: 0.7 },
  { path: "/adult-coaching", priority: 0.7 },
  { path: "/videos", priority: 0.6 },
  { path: "/gift-cards", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
