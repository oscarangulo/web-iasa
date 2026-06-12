'use client';

import { motion } from 'framer-motion';
import { pasItems, pasIntro } from '@/data/servicios';

export function PasGrid() {
  return (
    <section className="border-b border-gris-borde bg-crema">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-amarillo" />
              <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
                Permisos Ambientales Sectoriales
              </span>
            </div>
            <h2 className="mt-6 h-section text-carbon">
              PAS y servicios asociados dentro del SEIA.
            </h2>
          </div>
          <p className="body md:col-span-5 max-w-md">{pasIntro}</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-gris-borde bg-gris-borde md:grid-cols-2">
          {pasItems.map((p, i) => (
            <motion.div
              key={p.codigo}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: Math.min(i, 5) * 0.04 }}
              className="bg-white p-7 md:p-8"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-[16px] font-semibold tabular-nums text-iasa-azul">
                  {p.codigo}
                </span>
                <span className="text-[16px] font-medium tracking-tightish text-carbon">
                  {p.titulo}
                </span>
              </div>
              <p className="mt-3 text-[14px] leading-relaxed text-gris-medio text-pretty">
                {p.descripcion}
              </p>
              <p className="mt-4 text-[13px] leading-relaxed text-carbon/75">
                <span className="font-medium text-iasa-azul">Servicio IASA: </span>
                {p.servicioIasa}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
