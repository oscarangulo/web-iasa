import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://grupoiasa.cl'),
  title: {
    default: 'Grupo IASA · Soluciones globales para la producción y el desarrollo sustentable',
    template: '%s · Grupo IASA',
  },
  description:
    'Consultora chilena de ingeniería integral y consultoría ambiental. PROIECTA, PROAMBIENTE y PROCEANIC. ISO 9001:2015. 29 años de experiencia.',
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
