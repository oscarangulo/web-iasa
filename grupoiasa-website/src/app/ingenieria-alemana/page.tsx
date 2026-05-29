import { DivisionPage } from '@/components/DivisionPage';
import { getDivision } from '@/data/divisiones';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ingeniería Alemana · Know-how y soporte técnico',
  description:
    'Asesoría estratégica, transferencia de know-how europeo y respaldo técnico senior para proyectos industriales complejos.',
};

export default function Page() {
  return <DivisionPage division={getDivision('ingenieria-alemana')} />;
}
