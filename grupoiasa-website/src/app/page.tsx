import type { Metadata } from 'next';
import { HeroHome } from '@/components/HeroHome';
import { Ecosystem } from '@/components/Ecosystem';
import { PurposeBlock } from '@/components/PurposeBlock';
import { VisionEstrategica } from '@/components/VisionEstrategica';
import { LegacyTimeline } from '@/components/LegacyTimeline';
import { MagnitudProyectos } from '@/components/MagnitudProyectos';
import { CalidadRespalda } from '@/components/CalidadRespalda';
import { LiderazgoStrip } from '@/components/LiderazgoStrip';
import { ClientStrip } from '@/components/ClientStrip';
import { MensajeFinal } from '@/components/MensajeFinal';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <HeroHome />
      {/* Quiénes somos: el único lugar donde se explican las cuatro empresas. */}
      <Ecosystem />
      <PurposeBlock />

      {/* Evidencia temprana. Antes vivía a 4.500px del inicio, después de cuatro
          secciones de promesa; el visitante llega a buscar pruebas, no relato.
          Proyectos, clientes y certificación se leen como un solo bloque. */}
      <MagnitudProyectos />
      <ClientStrip />
      <CalidadRespalda />

      {/* Cómo trabajamos: pesa más una vez demostrado que pueden hacerlo. */}
      <VisionEstrategica />
      <LegacyTimeline />
      <LiderazgoStrip />
      <MensajeFinal />
    </>
  );
}
