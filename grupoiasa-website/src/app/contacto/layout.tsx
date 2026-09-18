import type { Metadata } from 'next';

// La página es un client component (formulario con estado), así que su metadata
// vive en este layout.
export const metadata: Metadata = {
  title: 'Contacto · Conversemos su proyecto',
  description:
    'Escríbanos para evaluar un proyecto de ingeniería, permisos ambientales o ciencias del mar. Oficinas en General Holley, Providencia, Santiago.',
  alternates: { canonical: '/contacto' },
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
