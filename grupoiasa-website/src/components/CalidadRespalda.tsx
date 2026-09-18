'use client';

import { motion } from 'framer-motion';

/**
 * Cartucho de lámina: el recuadro de datos que lleva todo plano en su esquina.
 * Reemplaza el "30 / años" a 80px, que era el hero-metric template que las
 * anti-referencias del proyecto prohíben, y de paso pone el número de registro
 * junto a la afirmación de certificación en vez de esconderlo en el footer.
 */

const campos = [
  { etiqueta: 'Trayectoria', valor: '30 años', nota: 'Operación continua desde 1997' },
  { etiqueta: 'Certificación', valor: 'ISO 9001:2015', nota: 'Sistema de Gestión de Calidad' },
  { etiqueta: 'Organismo', valor: 'AENOR · IQNet', nota: 'Acreditación internacional' },
  { etiqueta: 'Registro', valor: 'ER-0538/2024', nota: 'Vigente hasta 2027' },
];

export function CalidadRespalda() {
  return (
    <section className="bg-iasa-petroleo text-white">
      <div className="container-x py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-iasa-amarillo" />
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
              Experiencia que respalda
            </span>
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <h2 className="font-display text-[34px] font-semibold leading-[1.05] tracking-tighter2 md:text-[44px]">
              Calidad que garantiza.
            </h2>
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              Grupo IASA · Registro de calidad
            </span>
          </div>

          {/* Cuatro campos con hairlines, leídos como las celdas de un cartucho */}
          <dl className="mt-10 grid border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {campos.map((c) => (
              <div
                key={c.etiqueta}
                className="border-b border-white/20 px-0 py-6 sm:px-6 sm:first:pl-0 lg:border-l lg:first:border-l-0"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
                  {c.etiqueta}
                </dt>
                <dd className="mt-3 text-[24px] font-medium tracking-tightish text-white md:text-[27px]">
                  {c.valor}
                </dd>
                <dd className="mt-2 text-[13px] leading-snug text-white/60">{c.nota}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
}
