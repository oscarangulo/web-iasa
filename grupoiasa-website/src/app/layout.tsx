import './globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter, Archivo } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Inter para cuerpo (legibilidad, pedido por el cliente).
const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
// Archivo (grotesca técnica) solo para grandes titulares: presencia de "plano de ingeniería".
const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['600', '700'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B1E36',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://grupoiasa.cl'),
  title: {
    default: 'Grupo IASA · Ingeniería, ambiente y mar integrados para proyectos complejos',
    template: '%s · Grupo IASA',
  },
  description:
    'Ecosistema técnico multidisciplinario chileno. PROIECTA, PROAMBIENTE, PROCEANIC e Ingeniería Alemana. Cuatro especialidades, un equipo. ISO 9001:2015. 30 años acompañando proyectos desde la idea hasta su consolidación.',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'Grupo IASA',
    url: '/',
  },
  alternates: { canonical: '/' },
  robots: { index: true, follow: true },
};

// Datos estructurados: permiten que el buscador muestre la ficha de la empresa
// (certificación, divisiones, dirección) en vez de sólo el título de la página.
// TODO: completar streetAddress con el número de General Holley cuando el cliente lo confirme.
const datosEstructurados = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Grupo IASA',
  description:
    'Ecosistema técnico multidisciplinario chileno: ingeniería, medio ambiente, ciencias del mar y know-how alemán para proyectos complejos.',
  url: 'https://grupoiasa.cl',
  email: 'contacto@grupoiasa.cl',
  foundingDate: '1997',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'General Holley',
    addressLocality: 'Providencia',
    addressRegion: 'Región Metropolitana',
    addressCountry: 'CL',
  },
  areaServed: { '@type': 'Country', name: 'Chile' },
  hasCredential: 'ISO 9001:2015 · AENOR ER-0538/2024',
  department: [
    { '@type': 'Organization', name: 'PROIECTA', description: 'Ingeniería integral' },
    { '@type': 'Organization', name: 'PROAMBIENTE', description: 'Consultoría ambiental' },
    { '@type': 'Organization', name: 'PROCEANIC', description: 'Ciencias del mar' },
    { '@type': 'Organization', name: 'Ingeniería Alemana', description: 'Know-how y soporte técnico' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${archivo.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
        />
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-iasa-azul focus:px-4 focus:py-2 focus:text-[14px] focus:font-medium focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
