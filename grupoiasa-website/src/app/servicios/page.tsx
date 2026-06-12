import type { Metadata } from 'next';
import { Hero } from '@/components/Hero';
import { ServiciosRapidos } from '@/components/servicios/ServiciosRapidos';
import { PasGrid } from '@/components/servicios/PasGrid';
import { AutoridadTabla } from '@/components/servicios/AutoridadTabla';
import { CtaBlock } from '@/components/CtaBlock';

export const metadata: Metadata = {
  title: 'Servicios y Permisología',
  description:
    'Servicios especializados de respuesta rápida y tramitación de Permisos Ambientales Sectoriales (PAS) dentro del SEIA. Estudios de inundabilidad, estabilidad de taludes, topografía LiDAR, bodegas RESPEL, informe hidrogeológico OPM, suelos contaminados y auditorías ambientales. PAS 138 a 160 y permisos sectoriales por autoridad (SEA, SEREMI de Salud, DGA, DOM, SERNAGEOMIN, SEC).',
};

export default function ServiciosPage() {
  return (
    <>
      <Hero
        eyebrow="Servicios y Permisología"
        titulo={
          <>
            Resolvemos los trámites que{' '}
            <em className="not-italic text-iasa-azul">destraban su proyecto.</em>
          </>
        }
        bajada="Servicios acotados con diagnóstico ágil y la tramitación completa de Permisos Ambientales Sectoriales dentro del SEIA. El mismo equipo que diseña la solución sustenta el permiso ante la autoridad."
        ctaPrimario={{ href: '/contacto', label: 'Conversar un proyecto' }}
      />

      <ServiciosRapidos />
      <PasGrid />
      <AutoridadTabla />

      <CtaBlock
        titulo="¿No sabe qué permiso necesita su proyecto?"
        bajada="Cuéntenos el caso y le indicamos la ruta de tramitación, los estudios previos y los plazos estimados ante cada autoridad."
        ctaLabel="Solicitar orientación"
        ctaHref="/contacto"
      />
    </>
  );
}
