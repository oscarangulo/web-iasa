import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Grupo IASA',
    short_name: 'Grupo IASA',
    description:
      'Ecosistema técnico multidisciplinario: ingeniería, ambiente y mar integrados para proyectos complejos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B1E36',
    theme_color: '#0B1E36',
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
    ],
  };
}
