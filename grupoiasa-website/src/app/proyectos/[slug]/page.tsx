import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Hero } from '@/components/Hero';
import { CtaBlock } from '@/components/CtaBlock';
import { proyectos } from '@/data/proyectos';
import { getDivision } from '@/data/divisiones';

export function generateStaticParams() {
  return proyectos.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = proyectos.find((x) => x.slug === slug);
  if (!p) return notFound();
  const div = getDivision(p.division);

  return (
    <>
      <Hero
        eyebrow={`${div.nombre} · ${p.ano}`}
        titulo={<>{p.nombre}</>}
        bajada={p.resumen}
        accent={div.colorHex}
      />

      <section className="container-x py-20 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8">
          <div className="eyebrow" style={{ color: div.colorHex }}>Alcance del proyecto</div>
          <ul className="mt-6 space-y-5">
            {p.detalle.map((d, i) => (
              <li key={i} className="grid grid-cols-[24px_1fr] gap-3">
                <div className="mt-2 h-1.5 w-1.5 rounded-full" style={{ background: div.colorHex }} aria-hidden />
                <div className="text-[16px] leading-relaxed text-carbon/85">{d}</div>
              </li>
            ))}
          </ul>
        </div>

        <aside className="md:col-span-4">
          <div className="rounded-sm border border-gris-borde bg-crema p-6 space-y-5">
            <DetailRow label="Cliente" value={p.cliente} />
            <DetailRow label="Año" value={p.ano} />
            <DetailRow label="Sector" value={p.sector} />
            <DetailRow label="División" value={div.nombre} color={div.colorHex} />
            {p.honorarios && <DetailRow label="Honorarios" value={p.honorarios} />}
            {p.inversion && <DetailRow label="Inversión" value={p.inversion} />}
          </div>
          <Link
            href="/proyectos"
            className="mt-6 inline-flex items-center gap-2 text-[13px] font-medium text-iasa-azul hover:underline underline-offset-4"
          >
            ← Volver al portafolio
          </Link>
        </aside>
      </section>

      <CtaBlock
        titulo="¿Tiene un proyecto con un alcance similar?"
        ctaLabel="Hablar con el equipo"
        ctaHref="/contacto"
        accent={div.colorHex}
      />
    </>
  );
}

function DetailRow({ label, value, color }: { label: string; value: string; color?: string }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-eyebrow text-gris-medio">{label}</div>
      <div className="mt-1 text-[14px] font-medium" style={{ color: color ?? '#0A0A0A' }}>{value}</div>
    </div>
  );
}
