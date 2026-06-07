'use client';

import { motion } from 'framer-motion';

export function CalidadRespalda() {
  return (
    <section className="bg-iasa-petroleo text-white">
      <div className="container-x py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="grid gap-12 md:grid-cols-12 md:items-center"
        >
          {/* Trayectoria */}
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-amarillo" />
              <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
                Experiencia que respalda
              </span>
            </div>
            <h2 className="mt-6 font-display text-[34px] font-semibold leading-[1.05] tracking-tighter2 md:text-[44px]">
              Calidad que garantiza.
            </h2>
            <div className="mt-8 flex items-baseline gap-3">
              <span className="text-[64px] font-semibold leading-none tracking-tighter2 tabular-nums md:text-[80px]">
                29
              </span>
              <span className="text-[20px] font-medium text-white/70">años</span>
            </div>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/70">
              acompañando proyectos complejos en Chile y Latinoamérica.
            </p>
          </div>

          {/* Certificación */}
          <div className="md:col-span-5 md:border-l md:border-white/15 md:pl-12">
            <div className="text-[26px] font-semibold tracking-tightish text-iasa-amarillo md:text-[30px]">
              ISO 9001:2015
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-white/75">
              Sistema de Gestión de Calidad certificado por AENOR e IQNet,
              vigente hasta 2027.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
