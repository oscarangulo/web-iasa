import { HeroHome } from '@/components/HeroHome';
import { Ecosystem } from '@/components/Ecosystem';
import { PurposeBlock } from '@/components/PurposeBlock';
import { VisionEstrategica } from '@/components/VisionEstrategica';
import { LegacyTimeline } from '@/components/LegacyTimeline';
import { PromesaMarca } from '@/components/PromesaMarca';
import { MagnitudProyectos } from '@/components/MagnitudProyectos';
import { CalidadRespalda } from '@/components/CalidadRespalda';
import { LiderazgoStrip } from '@/components/LiderazgoStrip';
import { ClientStrip } from '@/components/ClientStrip';
import { MensajeFinal } from '@/components/MensajeFinal';

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <Ecosystem />
      <PurposeBlock />
      <VisionEstrategica />
      <LegacyTimeline />
      <PromesaMarca />
      <MagnitudProyectos />
      <CalidadRespalda />
      <LiderazgoStrip />
      <ClientStrip />
      <MensajeFinal />
    </>
  );
}
