'use client';

import { motion } from 'framer-motion';

const steps = [
  { label: 'IDEA' },
  { label: 'DIAGNÓSTICO' },
  { label: 'INGENIERÍA' },
  { label: 'PERMISOS' },
  { label: 'IMPLEMENTACIÓN' },
  { label: 'OPERACIÓN' },
  { label: 'AMPLIACIÓN' },
  { label: 'CIERRE' },
  { label: 'LEGADO' },
];

export function LegacyTimeline() {
  return (
    <section className="bg-[#0B1E36] text-white">
      <div className="container-x py-20 md:py-28">
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-iasa-amarillo" />
          <span className="text-[11px] uppercase tracking-eyebrow text-iasa-amarillo">
            De la idea al legado
          </span>
        </div>
        <h2 className="h-section mt-6 max-w-3xl text-white">
          Acompañamos cada etapa del ciclo de vida.
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-white/65">
          Desde la cuna a la tumba — y de la cuna a la cuna. Nueve etapas, un
          mismo equipo técnico que entra cuando el proyecto es apenas una idea
          y permanece hasta que entrega valor de largo plazo.
        </p>

        <div className="mt-14 relative">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[22px] h-px bg-gradient-to-r from-iasa-azul via-iasa-verde via-iasa-naranja to-iasa-amarillo opacity-60"
          />
          <ol className="relative grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-y-10 gap-x-4">
            {steps.map((s, i) => (
              <motion.li
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-[#0B1E36] text-[12px] tabular-nums font-medium text-white/80">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="mt-3 text-[11px] font-semibold uppercase tracking-eyebrow text-white">
                  {s.label}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
