'use client';

import { motion } from 'framer-motion';

export function PurposeBlock() {
  return (
    <section className="border-b border-gris-borde bg-crema">
      <div className="container-x grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
        {/* Texto principal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="md:col-span-7"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-iasa-amarillo" />
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
              ¿Por qué existe Grupo IASA?
            </span>
          </div>
          <h2 className="mt-6 max-w-xl font-display text-[30px] font-semibold leading-[1.12] tracking-tighter2 text-carbon md:text-[40px]">
            Los proyectos complejos rara vez fallan por una sola razón.
          </h2>
          <div className="mt-7 max-w-xl space-y-5 text-justify text-[15px] leading-relaxed text-gris-medio md:text-[16px]">
            <p>
              Fallan cuando ingeniería, medio ambiente, permisos y operación
              trabajan por separado. Grupo IASA nació para integrar esas
              disciplinas bajo un mismo método de trabajo.
            </p>
            <p>
              Por eso reunimos especialistas en ingeniería, consultoría
              ambiental, ciencias del mar y gestión técnica para acompañar
              proyectos desde la planificación hasta su implementación,
              operación, ampliación, cierre y legado.
            </p>
          </div>
        </motion.div>

        {/* Tarjeta Nuestro compromiso — petróleo con franja naranja */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="md:col-span-5"
        >
          <div className="overflow-hidden rounded-lg bg-iasa-petroleo shadow-[0_24px_50px_-24px_rgba(11,30,54,0.45)]">
            <div className="h-1.5 w-full bg-iasa-naranja" />
            <div className="p-8 md:p-9">
              <h3 className="text-[19px] font-semibold text-white">Nuestro compromiso</h3>
              <p className="mt-4 text-justify text-[14px] leading-relaxed text-white/75">
                Convertir desafíos técnicos, ambientales y regulatorios en
                proyectos viables, ejecutables y sostenibles.
              </p>
              <p className="mt-4 text-justify text-[14px] leading-relaxed text-white/75">
                Acompañamos cada decisión con criterio técnico, desde la
                planificación hasta el cierre y el legado del proyecto.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
