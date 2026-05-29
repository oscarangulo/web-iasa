'use client';

import { motion } from 'framer-motion';

export function PurposeBlock() {
  return (
    <section className="border-b border-gris-borde bg-crema">
      <div className="container-x py-20 md:py-28 grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-4">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-iasa-azul" />
            <span className="eyebrow">¿Por qué existe Grupo IASA?</span>
          </div>
          <h2 className="h-section mt-6 text-carbon">
            Propósito compartido.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="md:col-span-8 space-y-6 text-[17px] md:text-[19px] leading-relaxed text-carbon/85"
        >
          <p>
            Los proyectos complejos rara vez fracasan por una sola razón.
            Fracasan cuando ingeniería, medio ambiente, permisos y operación
            trabajan por separado.
          </p>
          <p>
            <strong className="font-medium text-carbon">
              Grupo IASA nació para integrar esas disciplinas bajo un mismo
              método de trabajo.
            </strong>{' '}
            Reunimos especialistas en ingeniería, consultoría ambiental,
            ciencias del mar y gestión técnica para acompañar proyectos
            desde la planificación hasta su cierre.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
