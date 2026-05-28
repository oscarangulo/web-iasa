import { DivisionPage } from '@/components/DivisionPage';
import { getDivision } from '@/data/divisiones';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PROCEANIC · Ingeniería marítima y ciencias del mar',
  description:
    'Ingeniería marítima, oceanografía y planes de vigilancia ambiental para infraestructura costera, emisarios submarinos y proyectos portuarios.',
};

export default function Page() {
  return <DivisionPage division={getDivision('proceanic')} />;
}
