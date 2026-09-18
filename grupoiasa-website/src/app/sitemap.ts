import type { MetadataRoute } from 'next';
import { proyectos } from '@/data/proyectos';

const BASE = 'https://grupoiasa.cl';

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = [
    { path: '', priority: 1 },
    { path: '/nosotros', priority: 0.8 },
    { path: '/proiecta', priority: 0.9 },
    { path: '/proambiente', priority: 0.9 },
    { path: '/proceanic', priority: 0.9 },
    { path: '/ingenieria-alemana', priority: 0.8 },
    { path: '/servicios', priority: 0.9 },
    { path: '/proyectos', priority: 0.8 },
    { path: '/publicaciones', priority: 0.6 },
    { path: '/sgc', priority: 0.7 },
    { path: '/contacto', priority: 0.7 },
  ];

  const ahora = new Date();

  return [
    ...estaticas.map((r) => ({
      url: `${BASE}${r.path}`,
      lastModified: ahora,
      changeFrequency: 'monthly' as const,
      priority: r.priority,
    })),
    ...proyectos.map((p) => ({
      url: `${BASE}/proyectos/${p.slug}`,
      lastModified: ahora,
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
  ];
}
