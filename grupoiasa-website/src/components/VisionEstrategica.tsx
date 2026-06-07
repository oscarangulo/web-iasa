'use client';

import { motion } from 'framer-motion';

const pilares = [
  {
    titulo: 'De servicios aislados a asesoría integral',
    texto:
      'Evolución desde servicios aislados hacia una asesoría estratégica integral, con un modelo de servicio preferente (bolsa de horas / avenant).',
  },
  {
    titulo: 'Una extensión de su equipo',
    texto:
      'Actuamos como una extensión del equipo del cliente, siempre con la camiseta puesta y comprometidos con el resultado del proyecto.',
  },
  {
    titulo: 'Acompañamiento proactivo',
    texto:
      'Anticipamos riesgos y respondemos con agilidad. No esperamos a que el problema escale: acompañamos cada decisión a tiempo.',
  },
];

export function VisionEstrategica() {
  return (
    <section className="border-b border-gris-borde bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-iasa-amarillo" />
              <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
                Visión estratégica
              </span>
            </div>
            <h2 className="mt-6 max-w-2xl font-display text-[30px] font-semibold leading-[1.12] tracking-tighter2 text-carbon md:text-[40px]">
              Modelo de Asesoría Estratégica Proactiva.
            </h2>
          </div>
          <p className="text-[12px] font-semibold uppercase tracking-eyebrow text-gris-medio md:col-span-5 md:text-right">
            Nuestra filosofía se basa en
          </p>
        </div>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-gris-borde bg-gris-borde md:grid-cols-3">
          {pilares.map((p, i) => (
            <motion.div
              key={p.titulo}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-white p-8 md:p-9"
            >
              <div className="text-[15px] font-semibold tabular-nums text-iasa-azul">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="mt-4 text-[18px] font-medium leading-snug tracking-tightish text-carbon">
                {p.titulo}
              </h3>
              <p className="mt-3 text-justify text-[14px] leading-relaxed text-gris-medio">
                {p.texto}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
