'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const magnitudes = [
  {
    slug: 'cigri-til-til',
    nombre: 'CIGRI',
    sub: 'Centro Integral de Residuos · Til-Til',
    color: '#2C5FA1',
    cifras: [
      { v: '40', u: 'ha' },
      { v: '3M', u: 'm³' },
      { v: 'US$85M', u: 'inversión' },
    ],
  },
  {
    slug: 'spence-sgo',
    nombre: 'Spence',
    sub: 'Caracterización y zero waste · BHP',
    color: '#0F9649',
    cifras: [
      { v: 'US$25,4M', u: 'inversión' },
      { v: 'Zero', u: 'waste' },
    ],
  },
  {
    slug: 'los-bronces',
    nombre: 'Los Bronces',
    sub: 'Gestión integral de residuos · Anglo American',
    color: '#B6612A',
    cifras: [
      { v: 'US$10M', u: 'inversión' },
      { v: '5', u: 'líneas' },
    ],
  },
  {
    slug: 'antucoya',
    nombre: 'Antucoya',
    sub: 'Centro de manejo de residuos · AMSA',
    color: '#F2C811',
    cifras: [
      { v: '278.000', u: 'm³' },
      { v: '12,2', u: 'ha' },
    ],
  },
];

export function MagnitudProyectos() {
  return (
    <section className="border-y border-gris-borde bg-crema">
      <div className="container-x py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-azul" />
              <span className="eyebrow">Proyectos que transforman riesgo en continuidad</span>
            </div>
            <h2 className="h-section mt-6 text-carbon">
              No mostramos servicios. Mostramos magnitud.
            </h2>
          </div>
          <Link
            href="/proyectos"
            className="text-[13px] font-medium text-iasa-azul hover:underline underline-offset-4"
          >
            Ver todos los proyectos →
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {magnitudes.map((m, i) => (
            <motion.div
              key={m.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link
                href={`/proyectos/${m.slug}`}
                className="group flex h-full flex-col rounded-lg border border-gris-borde bg-white p-7 transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_50px_-24px_rgba(15,28,55,0.25)]"
              >
                {/* Encabezado — altura fija para alinear el resto entre tarjetas */}
                <div className="flex min-h-[112px] flex-col">
                  <span className="h-1.5 w-10 rounded-full" style={{ background: m.color }} />
                  <h3 className="mt-5 text-[22px] font-medium leading-tight tracking-tightish text-carbon">
                    {m.nombre}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-snug text-gris-medio">{m.sub}</p>
                </div>

                {/* Cifras — cada una en su fila, número y unidad alineados a baseline */}
                <dl className="mt-2 divide-y divide-gris-borde border-t border-gris-borde">
                  {m.cifras.map((c) => (
                    <div key={c.v} className="flex items-baseline justify-between gap-3 py-3">
                      <dt
                        className="text-[27px] font-medium leading-none tracking-tighter2 tabular-nums"
                        style={{ color: m.color }}
                      >
                        {c.v}
                      </dt>
                      <dd className="text-[11px] uppercase tracking-eyebrow text-gris-medio">
                        {c.u}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div
                  className="mt-auto flex items-center gap-2 pt-6 text-[12.5px] font-medium"
                  style={{ color: m.color }}
                >
                  Ver ficha
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
