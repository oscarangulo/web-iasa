import { Hero } from '@/components/Hero';
import { publicaciones } from '@/data/clientes';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Publicaciones · Documentación técnica',
};

export default function PublicacionesPage() {
  return (
    <>
      <Hero
        eyebrow="Publicaciones"
        titulo={<>Documentación técnica <em className="not-italic text-iasa-azul">descargable.</em></>}
        bajada="Portafolios, catálogos de servicios y casos de estudio. Material técnico actualizado para áreas de procurement, ingeniería y compliance ambiental."
      />

      <section className="container-x py-20">
        <ul className="divide-y divide-gris-borde border-y border-gris-borde">
          {publicaciones.map((p) => (
            <li key={p.titulo} className="py-8 grid md:grid-cols-[1fr_auto] gap-6 items-start md:items-center">
              <div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-gris-medio">
                  <span className="rounded-full bg-iasa-azul/10 text-iasa-azul px-2.5 py-0.5">{p.tipo}</span>
                  <span>{p.ano}</span>
                </div>
                <h3 className="mt-3 text-[20px] md:text-[22px] font-medium tracking-tightish">{p.titulo}</h3>
                <p className="body mt-2 max-w-2xl">{p.descripcion}</p>
              </div>
              <a
                href={p.archivo}
                className="inline-flex items-center gap-2 rounded-full border border-carbon/15 px-5 py-2.5 text-[13px] font-medium hover:border-carbon/40 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar PDF
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 4v12m0 0l-4-4m4 4l4-4M5 20h14" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-[13px] text-gris-medio">
          Los archivos se descargan en PDF. Para versiones específicas por proyecto o sector, escribe a{' '}
          <a href="mailto:contacto@grupoiasa.cl" className="text-iasa-azul hover:underline underline-offset-4">contacto@grupoiasa.cl</a>.
        </p>
      </section>
    </>
  );
}
