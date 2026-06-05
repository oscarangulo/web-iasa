'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const magnitudes = [
  {
    slug: 'cigri-til-til',
    nombre: 'CIGRI',
    sub: 'Centro Integral de Residuos · Til-Til',
    color: '#2C5FA1',
    img: '/projects/cigri-til-til.webp',
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
    img: '/projects/spence-sgo.webp',
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
    img: '/projects/los-bronces.webp',
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
    img: '/projects/antucoya.webp',
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
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-azul" />
              <span className="eyebrow">Proyectos</span>
            </div>
            <h2 className="h-section mt-6 text-carbon">
              Proyectos que transforman riesgo en continuidad operacional.
            </h2>
            <p className="mt-3 text-[16px] font-light text-gris-medio">
              No mostramos servicios. Mostramos magnitud.
            </p>
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
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-gris-borde bg-white transition-all hover:-translate-y-1 hover:border-transparent hover:shadow-[0_24px_50px_-24px_rgba(15,28,55,0.25)]"
              >
                {/* Imagen del proyecto (plano / obra real) */}
                <div className="relative aspect-[3/2] overflow-hidden bg-iasa-petroleo">
                  <Image
                    src={m.img}
                    alt={`${m.nombre}. ${m.sub}`}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute inset-x-0 top-0 h-1.5" style={{ background: m.color }} />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  {/* Encabezado — altura fija para alinear el resto entre tarjetas */}
                  <div className="flex min-h-[64px] flex-col">
                    <h3 className="text-[22px] font-medium leading-tight tracking-tightish text-carbon">
                      {m.nombre}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-snug text-gris-medio">{m.sub}</p>
                  </div>

                  {/* Cifras — cada una en su fila, número y unidad alineados a baseline */}
                  <dl className="mt-4 divide-y divide-gris-borde border-t border-gris-borde">
                    {m.cifras.map((c) => (
                      <div key={c.v} className="flex items-baseline justify-between gap-3 py-3">
                        <dt
                          className="text-[26px] font-medium leading-none tracking-tighter2 tabular-nums"
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
