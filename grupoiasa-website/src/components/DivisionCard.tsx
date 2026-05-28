import Link from 'next/link';
import type { Division } from '@/data/divisiones';

export function DivisionCard({ division }: { division: Division }) {
  return (
    <Link
      href={`/${division.slug}`}
      className="group flex flex-col rounded-sm border border-gris-borde bg-white transition-all hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(15,28,55,0.18)]"
    >
      <div className="h-1.5 w-full" style={{ background: division.colorHex }} />
      <div className="flex-1 p-7 md:p-8 flex flex-col">
        <div className="flex items-center justify-between gap-4">
          <div className="text-[12px] uppercase tracking-eyebrow text-gris-medio">
            Empresa del Grupo IASA
          </div>
          <span
            className="text-[10px] uppercase tracking-eyebrow font-semibold px-2.5 py-1 rounded-full"
            style={{ background: `${division.colorHex}12`, color: division.colorHex }}
          >
            {division.slug.toUpperCase()}
          </span>
        </div>

        <h3 className="mt-5 text-[24px] md:text-[28px] font-medium tracking-tightish text-carbon">
          {division.nombre}
        </h3>
        <div className="text-[14px] mt-1 text-gris-medio">{division.bajada}</div>

        <p className="body mt-5 line-clamp-4">{division.descripcion}</p>

        <div className="mt-auto pt-8 flex items-center gap-2 text-[13px] font-medium" style={{ color: division.colorHex }}>
          Ver división
          <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
        </div>
      </div>
    </Link>
  );
}
