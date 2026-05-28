'use client';

import { useMemo, useState } from 'react';
import { Hero } from '@/components/Hero';
import { ProyectoCard } from '@/components/ProyectoCard';
import { proyectos } from '@/data/proyectos';
import { divisiones, type DivisionSlug } from '@/data/divisiones';

type Filter = 'todas' | DivisionSlug;

export default function ProyectosPage() {
  const [filter, setFilter] = useState<Filter>('todas');

  const filtered = useMemo(
    () => (filter === 'todas' ? proyectos : proyectos.filter((p) => p.division === filter)),
    [filter],
  );

  return (
    <>
      <Hero
        eyebrow="Portafolio"
        titulo={<>Proyectos donde la <em className="not-italic text-iasa-azul">ingeniería integral</em> hace la diferencia.</>}
        bajada="Una selección de trabajos representativos en minería, sanitario, energético y portuario. Filtrá por empresa del grupo para ver el detalle de cada disciplina."
      />

      <section className="container-x py-16 md:py-20">
        <div className="flex flex-wrap items-center gap-2 mb-12">
          <button
            onClick={() => setFilter('todas')}
            className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors ${
              filter === 'todas'
                ? 'bg-carbon text-white border-carbon'
                : 'border-gris-borde text-gris-medio hover:border-carbon/30 hover:text-carbon'
            }`}
          >
            Todas las divisiones
          </button>
          {divisiones.map((d) => (
            <button
              key={d.slug}
              onClick={() => setFilter(d.slug)}
              className="rounded-full border px-4 py-2 text-[13px] font-medium transition-colors"
              style={{
                background: filter === d.slug ? d.colorHex : 'transparent',
                color: filter === d.slug ? '#fff' : d.colorHex,
                borderColor: filter === d.slug ? d.colorHex : `${d.colorHex}55`,
              }}
            >
              {d.nombre}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProyectoCard key={p.slug} proyecto={p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-gris-medio">No hay proyectos para ese filtro.</div>
        )}
      </section>
    </>
  );
}
