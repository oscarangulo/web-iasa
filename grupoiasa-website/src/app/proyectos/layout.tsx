import type { Metadata } from 'next';

// La página es un client component (filtros con estado), así que su metadata
// vive en este layout.
export const metadata: Metadata = {
  title: 'Proyectos · Casos de ingeniería, ambiente y mar',
  description:
    'Proyectos ejecutados por Grupo IASA en minería, sanitarias, energía e infraestructura portuaria. Depósitos de relaves, plantas de tratamiento, permisos ambientales y obras marítimas.',
  alternates: { canonical: '/proyectos' },
};

export default function ProyectosLayout({ children }: { children: React.ReactNode }) {
  return children;
}
