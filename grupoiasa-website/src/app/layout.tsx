import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://grupoiasa.cl'),
  title: {
    default: 'Grupo IASA · Ingeniería, ambiente y mar integrados para proyectos complejos',
    template: '%s · Grupo IASA',
  },
  description:
    'Ecosistema técnico multidisciplinario chileno. PROIECTA, PROAMBIENTE, PROCEANIC e Ingeniería Alemana. Cuatro especialidades, un equipo. ISO 9001:2015. 29 años acompañando proyectos desde la idea hasta su consolidación.',
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    siteName: 'Grupo IASA',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
