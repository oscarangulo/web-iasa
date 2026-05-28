import Link from 'next/link';
import type { Proyecto } from '@/data/proyectos';
import { getDivision } from '@/data/divisiones';

export function ProyectoCard({ proyecto }: { proyecto: Proyecto }) {
  const div = getDivision(proyecto.division);
  return (
    <Link
      href={`/proyectos/${proyecto.slug}`}
      className="group flex flex-col rounded-sm border border-gris-borde bg-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-22px_rgba(15,28,55,0.15)]"
    >
      <div className="h-1 w-full" style={{ background: div.colorHex }} />
      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-eyebrow">
          <span style={{ color: div.colorHex }}>{div.nombre}</span>
          <span className="text-gris-medio">{proyecto.ano}</span>
        </div>
        <h3 className="mt-4 text-[18px] font-medium tracking-tightish leading-snug text-carbon">
          {proyecto.nombre}
        </h3>
        <p className="body mt-3 line-clamp-3">{proyecto.resumen}</p>
        <div className="hairline mt-5 pt-4 flex items-center justify-between text-[12px]">
          <span className="text-gris-medio">{proyecto.cliente}</span>
          <span className="text-gris-medio">{proyecto.sector}</span>
        </div>
      </div>
    </Link>
  );
}
