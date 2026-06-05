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
          className="mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-iasa-azul" />
            <span className="eyebrow">Nuestro compromiso</span>
            <span className="h-px w-8 bg-iasa-azul" />
          </div>
          <p className="mt-8 text-balance text-[30px] md:text-[40px] lg:text-[46px] font-medium tracking-tighter2 leading-[1.12] text-carbon">
            Reducimos incertidumbre para que las{' '}
            <em className="not-italic text-iasa-azul">decisiones críticas</em>{' '}
            se tomen con evidencia.
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-balance text-[16px] md:text-[17px] leading-relaxed text-gris-medio">
            Convertimos desafíos técnicos, ambientales y regulatorios en
            proyectos viables, ejecutables y sostenibles. Cada análisis,
            cada permiso y cada obra responde a un solo objetivo: que el
            cliente avance con seguridad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
