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
              Conversemos su proyecto
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

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-full bg-iasa-amarillo px-6 py-3 text-[14px] font-medium text-iasa-petroleo transition-transform hover:-translate-y-px"
            >
              Quiero conversar mi proyecto
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/nosotros"
              className="text-[14px] font-medium text-white/75 underline decoration-white/30 underline-offset-4 transition-colors hover:text-white hover:decoration-white"
            >
              Conocer al equipo Grupo IASA
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-white/15 pt-8 text-[14px]">
            <a
              href="mailto:contacto@grupoiasa.cl"
              className="font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
            >
              contacto@grupoiasa.cl
            </a>
            <span className="text-white/55">Respondemos en 48 horas hábiles</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
