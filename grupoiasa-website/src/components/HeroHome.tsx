'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const stripes = [
  { color: '#2C5FA1', nombre: 'PROIECTA', bajada: 'Ingeniería integral' },
  { color: '#0F9649', nombre: 'PROAMBIENTE', bajada: 'Consultoría ambiental' },
  { color: '#B6612A', nombre: 'PROCEANIC', bajada: 'Ingeniería marítima' },
  { color: '#F2C811', nombre: 'INGENIERÍA ALEMANA', bajada: 'Know-how y soporte' },
];

export function HeroHome() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1E36] text-white">
      <TechTexture />

      <div className="container-x relative pt-24 md:pt-32 lg:pt-36 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-10 bg-white/40" />
          <span className="text-[11px] uppercase tracking-eyebrow text-white/70">
            Grupo IASA · 29 años
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-7 flex items-center gap-6 bg-white/95 rounded-sm p-4 md:p-5 w-fit"
        >
          <Image
            src="/logo-iasa.webp"
            alt="Grupo IASA"
            width={220}
            height={64}
            priority
            className="h-12 md:h-14 w-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="h-display mt-10 max-w-4xl text-white"
        >
          Ingeniería, ambiente y mar{' '}
          <em className="not-italic text-iasa-amarillo">integrados</em> para proyectos complejos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-white/75"
        >
          Cuatro especialidades. Un equipo. Un mismo método. Acompañamos a la
          industria minera, sanitaria, energética y portuaria desde la idea
          del proyecto hasta su consolidación.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-carbon transition-transform hover:-translate-y-px"
          >
            Quiero conversar mi proyecto
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/nosotros"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/55"
          >
            Conocer al equipo Grupo IASA
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10"
        >
          {stripes.map((s, i) => (
            <motion.div
              key={s.nombre}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.07 }}
              className="bg-[#0B1E36] p-5 md:p-6 flex flex-col gap-3"
            >
              <span
                className="block h-1 w-10"
                style={{ background: s.color }}
                aria-hidden
              />
              <div>
                <div
                  className="text-[12px] uppercase tracking-eyebrow font-semibold"
                  style={{ color: s.color }}
                >
                  {s.nombre}
                </div>
                <div className="mt-1.5 text-[13px] text-white/65">{s.bajada}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TechTexture() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0, transparent 60%), radial-gradient(circle at 75% 70%, rgba(242,200,17,0.4) 0, transparent 55%)',
        }}
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full opacity-[0.07] mix-blend-screen"
        viewBox="0 0 1200 700"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 Q 10 10 20 20 T 40 20" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="1200" height="700" fill="url(#topo)" />
        {[140, 200, 270, 350, 440, 540].map((r, i) => (
          <circle
            key={i}
            cx="1050"
            cy="120"
            r={r}
            fill="none"
            stroke="white"
            strokeWidth="0.6"
            opacity={0.55 - i * 0.08}
          />
        ))}
        {[80, 130, 190, 260, 340].map((r, i) => (
          <circle
            key={`b-${i}`}
            cx="80"
            cy="620"
            r={r}
            fill="none"
            stroke="#F2C811"
            strokeWidth="0.6"
            opacity={0.45 - i * 0.07}
          />
        ))}
      </svg>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
      />
    </>
  );
}
