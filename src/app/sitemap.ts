import { MetadataRoute } from 'next';

const baseUrl = 'https://akuligowski-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'es'];
  const pages = ['', '/projects'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1.0 : 0.8,
      });
    }
  }

  return entries;
}
