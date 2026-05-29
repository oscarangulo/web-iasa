'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export function MensajeFinal() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B1E36] text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 25%, rgba(242,200,17,0.5) 0, transparent 55%), radial-gradient(circle at 70% 80%, rgba(44,95,161,0.5) 0, transparent 55%)',
        }}
      />
      <div className="container-x py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-iasa-amarillo" />
            <span className="text-[11px] uppercase tracking-eyebrow text-iasa-amarillo">
              Bienvenido a Grupo IASA
            </span>
          </div>

          <p className="mt-8 text-[28px] md:text-[36px] lg:text-[42px] font-medium tracking-tighter2 leading-[1.15] text-white">
            Donde la ingeniería, el medio ambiente y las ciencias del mar
            trabajan como una sola fuerza para transformar desafíos complejos
            en oportunidades de crecimiento.
          </p>

          <p className="mt-7 text-[17px] md:text-[19px] leading-relaxed text-white/70">
            Porque los proyectos más importantes merecen algo más que un
            proveedor. Merecen un equipo que los acompañe en cada etapa del
            camino.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-3">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
