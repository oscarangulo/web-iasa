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

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
                className="group block bg-white border border-gris-borde h-full p-6 md:p-7 transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(15,28,55,0.18)]"
              >
                <div className="h-1.5 w-12" style={{ background: m.color }} />
                <div className="mt-6 text-[22px] md:text-[24px] font-medium tracking-tightish text-carbon">
                  {m.nombre}
                </div>
                <div className="mt-1 text-[13px] text-gris-medio leading-snug">
                  {m.sub}
                </div>

                <div className="mt-7 space-y-3 pt-5 border-t border-gris-borde">
                  {m.cifras.map((c) => (
                    <div key={c.v} className="flex items-baseline gap-2">
                      <span
                        className="text-[26px] md:text-[28px] font-medium tracking-tighter2 leading-none"
                        style={{ color: m.color }}
                      >
                        {c.v}
                      </span>
                      <span className="text-[12px] uppercase tracking-eyebrow text-gris-medio">
                        {c.u}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="mt-7 flex items-center gap-2 text-[12.5px] font-medium"
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
