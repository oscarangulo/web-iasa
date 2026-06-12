'use client';

import { motion } from 'framer-motion';
import { autoridadItems, autoridadIntro } from '@/data/servicios';

export function AutoridadTabla() {
  return (
    <section className="bg-iasa-petroleo text-white">
      <div className="container-x py-20 md:py-28">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-iasa-amarillo" />
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
            Permisos sectoriales por autoridad
          </span>
        </div>
        <h2 className="mt-6 max-w-3xl font-display text-[28px] md:text-[34px] font-semibold leading-[1.1] tracking-tightish">
          Tramitación completa ante cada organismo.
        </h2>
        <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-white/70">
          {autoridadIntro}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 overflow-hidden rounded-lg border border-white/12"
        >
          {/* Cabecera (solo en md+) */}
          <div className="hidden md:grid md:grid-cols-12 bg-white/[0.06] text-[11px] font-semibold uppercase tracking-eyebrow text-white/55">
            <div className="col-span-4 px-6 py-4">Autoridad</div>
            <div className="col-span-8 px-6 py-4">Trámites que gestiona Grupo IASA</div>
          </div>

          {autoridadItems.map((a) => (
            <div
              key={a.autoridad}
              className="grid gap-2 border-t border-white/10 px-6 py-6 md:grid-cols-12 md:gap-0 md:px-0 md:py-0 first:border-t-0 md:first:border-t"
            >
              <div className="md:col-span-4 md:px-6 md:py-6">
                <span className="text-[14px] font-medium leading-snug text-iasa-amarillo md:text-white">
                  {a.autoridad}
                </span>
              </div>
              <div className="md:col-span-8 md:px-6 md:py-6 md:border-l md:border-white/10">
                <p className="text-[14px] leading-relaxed text-white/70 text-pretty">
                  {a.tramites}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
