import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { ServiciosLista } from '@/components/ServiciosLista';
import { CtaBlock } from '@/components/CtaBlock';
import { ProyectoCard } from '@/components/ProyectoCard';
import type { Division } from '@/data/divisiones';
import { proyectos } from '@/data/proyectos';

export function DivisionPage({ division }: { division: Division }) {
  const proyectosDiv = proyectos.filter((p) => p.division === division.slug);

  return (
    <>
      <Hero
        eyebrow={`Empresa del Grupo IASA · ${division.slug.toUpperCase()}`}
        titulo={
          <>
            {division.nombre}
            <span className="block text-[28px] md:text-[34px] font-medium tracking-tightish mt-3" style={{ color: division.colorHex }}>
              {division.bajada}
            </span>
          </>
        }
        bajada={division.descripcion}
        ctaPrimario={{ href: '/contacto', label: 'Solicitar cotización' }}
        ctaSecundario={{ href: '/proyectos', label: 'Ver proyectos' }}
        accent={division.colorHex}
      />

      <section className="container-x py-20 md:py-28">
        <SectionTitle
          eyebrow="Líneas de servicio"
          titulo="Capacidades técnicas de la división."
          bajada="Desplegamos cada línea con su detalle. Cada servicio incluye factibilidad, ingeniería, permisos y operación según corresponda."
          accent={division.colorHex}
        />
        <div className="mt-12 max-w-5xl">
          <ServiciosLista servicios={division.servicios} accent={division.colorHex} />
        </div>
      </section>

      {proyectosDiv.length > 0 && (
        <section className="border-y border-gris-borde bg-crema">
          <div className="container-x py-20">
            <SectionTitle
              eyebrow="Proyectos representativos"
              titulo={`Casos donde ${division.nombre} entregó valor técnico.`}
              accent={division.colorHex}
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {proyectosDiv.map((p) => (
                <ProyectoCard key={p.slug} proyecto={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-x py-20 md:py-24 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionTitle
            eyebrow={`Por qué ${division.nombre}`}
            titulo="Razones técnicas, no marketing."
            accent={division.colorHex}
          />
        </div>
        <div className="md:col-span-7">
          <ul className="space-y-6">
            {division.porQue.map((p, i) => (
              <li key={i} className="grid grid-cols-[40px_1fr] gap-4 border-b border-gris-borde pb-6 last:border-b-0">
                <div
                  className="text-[12px] tabular-nums font-semibold mt-1"
                  style={{ color: division.colorHex }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-[16px] md:text-[18px] leading-relaxed text-carbon">{p}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBlock
        titulo={`¿Necesita ingeniería ${division.nombre.toLowerCase()} para un proyecto específico?`}
        bajada="Coordinamos una reunión técnica de 30 minutos para entender el alcance y proponer un camino concreto."
        ctaLabel="Solicitar cotización"
        ctaHref="/contacto"
        accent={division.colorHex}
      />
    </>
  );
}
