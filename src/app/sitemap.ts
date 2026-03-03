import type { MetadataRoute } from "next";

const BASE = "https://chameleon-studios.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", freq: "yearly", priority: 1 },
    { path: "/voicecoach", freq: "monthly", priority: 1 },
    { path: "/about", freq: "yearly", priority: 0.8 },
    { path: "/webdeveloper", freq: "yearly", priority: 0.6 },
    { path: "/contact", freq: "yearly", priority: 0.3 },
    { path: "/disclosure", freq: "yearly", priority: 0.3 },
    { path: "/policies", freq: "yearly", priority: 0.3 },
  ];

  const languages = ["en", "ja"];

  const sitemap: MetadataRoute.Sitemap = [];

  for (const lang of languages) {
    for (const page of pages) {
      sitemap.push({
        url: `${BASE}/${lang}${page.path}`,
        lastModified: new Date(),
        changeFrequency: page.freq as any,
        priority: page.priority,
      });
    }
  }

  return sitemap;
}
