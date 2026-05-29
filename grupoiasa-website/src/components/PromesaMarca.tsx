'use client';

import { motion } from 'framer-motion';

export function PromesaMarca() {
  return (
    <section className="bg-iasa-azul/[0.04] border-y border-iasa-azul/15">
      <div className="container-x py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="grid gap-10 md:grid-cols-12 items-start"
        >
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-azul" />
              <span className="eyebrow">Nuestro compromiso</span>
            </div>
          </div>
          <div className="md:col-span-8">
            <p className="text-[28px] md:text-[36px] lg:text-[42px] font-medium tracking-tighter2 leading-[1.15] text-carbon">
              Reducimos incertidumbre para que las{' '}
              <em className="not-italic text-iasa-azul">decisiones críticas</em>{' '}
              se tomen con evidencia.
            </p>
            <p className="mt-7 max-w-2xl text-[16px] md:text-[17px] leading-relaxed text-gris-medio">
              Convertimos desafíos técnicos, ambientales y regulatorios en
              proyectos viables, ejecutables y sostenibles. Cada análisis,
              cada permiso y cada obra responde a un solo objetivo: que el
              cliente avance con seguridad.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
