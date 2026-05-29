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
    foto: '/team/nicolas.webp',
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
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-azul" />
              <span className="eyebrow">Liderado por especialistas</span>
            </div>
            <h2 className="h-section mt-6 text-carbon">
              Décadas de experiencia, un mismo equipo técnico.
            </h2>
            <p className="body-lg mt-4 max-w-2xl">
              No incorpora una consultora. Incorpora un equipo multidisciplinario
              comprometido con el éxito de su proyecto.
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
              className="flex flex-col items-center text-center"
            >
              <div className="relative">
                <div
                  className="h-24 w-24 md:h-28 md:w-28 rounded-full overflow-hidden bg-crema border border-gris-borde flex items-center justify-center"
                >
                  {l.foto ? (
                    <Image
                      src={l.foto}
                      alt={l.nombre}
                      width={120}
                      height={120}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="text-[26px] font-medium tracking-tighter2 text-gris-medio">
                      {iniciales(l.nombre)}
                    </span>
                  )}
                </div>
                <span
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 w-8 rounded-full"
                  style={{ background: l.accent }}
                />
              </div>
              <div className="mt-5 text-[14px] font-medium text-carbon">{l.nombre}</div>
              <div className="text-[12px] text-gris-medio leading-snug mt-1 px-2">
                {l.cargo}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
