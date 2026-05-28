import { DivisionPage } from '@/components/DivisionPage';
import { getDivision } from '@/data/divisiones';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PROIECTA · Ingeniería integral',
  description:
    'Ingeniería civil, estructural, eléctrica y sanitaria. Gestión de aguas y diseño de centros de manejo de residuos sólidos. Project Management y permisología.',
};

export default function Page() {
  return <DivisionPage division={getDivision('proiecta')} />;
}
