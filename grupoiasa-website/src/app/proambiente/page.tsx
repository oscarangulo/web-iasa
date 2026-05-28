import { DivisionPage } from '@/components/DivisionPage';
import { getDivision } from '@/data/divisiones';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PROAMBIENTE · Consultoría ambiental interdisciplinaria',
  description:
    'Auditorías ambientales, gestión de residuos, suelos contaminados, eficiencia energética y permisos ambientales mixtos.',
};

export default function Page() {
  return <DivisionPage division={getDivision('proambiente')} />;
}
