import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://grupoiasa.cl/sitemap.xml',
    host: 'https://grupoiasa.cl',
  };
}
