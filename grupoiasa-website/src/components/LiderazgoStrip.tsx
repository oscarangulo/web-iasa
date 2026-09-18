'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type Lider = {
  nombre: string;
  cargo: string;
  foto?: string;
  accent: string;
};

const lideres: Lider[] = [
  {
    nombre: 'Joachim Vogdt',
    cargo: 'Gerente General · Estela alemana',
    foto: '/team/joachim.webp',
    accent: '#F2C811',
  },
  {
    nombre: 'Javier Medina',
    cargo: 'Liderazgo PROIECTA · Ingeniería civil',
    foto: '/team/javier.webp',
    accent: '#2C5FA1',
  },
  {
    nombre: 'Nicolás Curkovic',
    cargo: 'Liderazgo PROIECTA · Diseño industrial',
    foto: '/team/nico.webp',
    accent: '#2C5FA1',
  },
  {
    nombre: 'Yamina Pérez',
    cargo: 'Liderazgo PROAMBIENTE · Ingeniería ambiental',
    foto: '/team/yamina.webp',
    accent: '#0F9649',
  },
  {
    nombre: 'Jorge Pastene',
    cargo: 'Liderazgo PROCEANIC · Ciencias del mar',
    accent: '#B6612A',
  },
  {
    nombre: 'Miguel Cadenasso',
    cargo: 'Liderazgo técnico · Modelación numérica',
    foto: '/team/miguel.webp',
    accent: '#B6612A',
  },
];

function iniciales(n: string) {
  return n
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0])
    .join('')
    .toUpperCase();
}

export function LiderazgoStrip() {
  return (
    <section className="bg-white border-b border-gris-borde">
      <div className="container-x py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-azul" />
              <span className="eyebrow">Equipo</span>
            </div>
            <h2 className="h-section mt-6 text-carbon">
              Liderado por especialistas con visión integrada.
            </h2>
            <p className="body-lg mt-4 max-w-2xl">
              Un equipo técnico senior y liderazgos por especialidad que
              respaldan el acompañamiento estratégico del Grupo.
            </p>
          </div>
          <div className="md:col-span-5 md:text-right">
            <Link
              href="/nosotros"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-iasa-azul hover:underline underline-offset-4"
            >
              Conocer al equipo completo →
            </Link>
          </div>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {lideres.map((l, i) => (
            <motion.li
              key={l.nombre}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group flex flex-col"
            >
              {/* Retrato 3:4 sobre fondo de estudio, gris por defecto y a color
                  en hover: el tratamiento uniforme que especifica DESIGN.md.
                  El círculo recortaba la cara y leía como avatar de app. */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-carbon">
                {l.foto ? (
                  <Image
                    src={l.foto}
                    alt={l.nombre}
                    width={240}
                    height={320}
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 45vw, 90vw"
                    className="h-full w-full object-cover object-top grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                ) : (
                  <span className="flex h-full w-full items-center justify-center text-[34px] font-medium tracking-tighter2 text-white/45">
                    {iniciales(l.nombre)}
                  </span>
                )}
                <span
                  className="absolute inset-x-0 bottom-0 h-1"
                  style={{ background: l.accent }}
                />
              </div>
              <div className="mt-4 text-[14px] font-medium text-carbon">{l.nombre}</div>
              <div className="text-[12px] text-gris-medio leading-snug mt-1">
                {l.cargo}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
