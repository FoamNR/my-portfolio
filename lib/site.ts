import { profileData } from "@/data/portfolio";

/**
 * Public URL of the deployed site, used for canonical links, Open Graph,
 * sitemap and robots. Set SITE_URL at build time (e.g. https://example.com);
 * the page is prerendered, so a value set only at runtime is not picked up.
 */
export const siteUrl = (process.env.SITE_URL || "http://localhost:3000").replace(/\/+$/, "");

export const siteTitle = `${profileData.name} (${profileData.nickname}) | ${profileData.role}`;

export const siteDescription =
  "Portfolio of Nonthawat Ramkongmuang (Foam), a software developer in Phitsanulok, Thailand. " +
  "LINE bots, booking systems and Flutter apps built with PHP, Node.js, Nuxt and Flutter.";
