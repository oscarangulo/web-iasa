import { HeroHome } from '@/components/HeroHome';
import { PurposeBlock } from '@/components/PurposeBlock';
import { Ecosystem } from '@/components/Ecosystem';
import { LegacyTimeline } from '@/components/LegacyTimeline';
import { MagnitudProyectos } from '@/components/MagnitudProyectos';
import { LiderazgoStrip } from '@/components/LiderazgoStrip';
import { PromesaMarca } from '@/components/PromesaMarca';
import { MensajeFinal } from '@/components/MensajeFinal';
import { ClientStrip } from '@/components/ClientStrip';

export default function HomePage() {
  return (
    <>
      <HeroHome />
      <PurposeBlock />
      <Ecosystem />
      <LegacyTimeline />
      <MagnitudProyectos />
      <PromesaMarca />
      <LiderazgoStrip />
      <ClientStrip />
      <MensajeFinal />
    </>
  );
}
