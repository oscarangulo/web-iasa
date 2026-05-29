'use client';

import { motion } from 'framer-motion';
import { plataformas } from '@/data/equipo';

const orbitDivs = [
  { nombre: 'PROIECTA', bajada: 'Ingeniería integral', color: '#2C5FA1', x: 0, y: -180 },
  { nombre: 'PROAMBIENTE', bajada: 'Consultoría ambiental', color: '#0F9649', x: 180, y: 0 },
  { nombre: 'PROCEANIC', bajada: 'Ingeniería marítima', color: '#B6612A', x: 0, y: 180 },
  { nombre: 'INGENIERÍA ALEMANA', bajada: 'Know-how y soporte', color: '#F2C811', x: -180, y: 0 },
];

export function Ecosystem() {
  return (
    <section className="border-b border-gris-borde bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-iasa-azul" />
          <span className="eyebrow">Ecosistema Grupo IASA</span>
        </div>
        <h2 className="h-section mt-6 max-w-3xl text-carbon">
          Cuatro especialidades. Un equipo. Un mismo método.
        </h2>
        <p className="body-lg mt-4 max-w-2xl">
          Cada empresa con foco en su disciplina; todas operando bajo una sola
          plataforma técnica, comercial, de gestión y digital. Una conversación,
          un equipo, un mismo resultado.
        </p>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7">
            <Orbit />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="text-[11px] uppercase tracking-eyebrow text-gris-medio mb-2">
              Plataformas compartidas
            </div>
            {plataformas.map((p, i) => (
              <motion.div
                key={p.nombre}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="border-l-2 border-iasa-azul/30 pl-5 py-1.5 hover:border-iasa-azul transition-colors"
              >
                <div className="text-[15px] font-medium text-carbon">{p.nombre}</div>
                <div className="text-[13.5px] text-gris-medio leading-relaxed mt-1">
                  {p.descripcion}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Orbit() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[520px]">
      <svg
        viewBox="-260 -260 520 520"
        className="absolute inset-0 h-full w-full"
        aria-hidden
      >
        <circle cx="0" cy="0" r="180" fill="none" stroke="#E5E5E5" strokeDasharray="2 4" />
        <circle cx="0" cy="0" r="240" fill="none" stroke="#F2F2F2" strokeDasharray="2 6" />
      </svg>

      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <div className="flex flex-col items-center justify-center w-[150px] h-[150px] rounded-full bg-[#0B1E36] text-white shadow-[0_25px_60px_-15px_rgba(11,30,54,0.55)]">
          <div className="text-[10px] uppercase tracking-eyebrow text-white/55">Grupo</div>
          <div className="text-[26px] font-medium tracking-tighter2 mt-0.5">IASA</div>
          <div className="text-[10px] uppercase tracking-eyebrow text-white/55 mt-1">29 años</div>
        </div>
      </motion.div>

      {orbitDivs.map((d, i) => (
        <motion.div
          key={d.nombre}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
          className="absolute left-1/2 top-1/2 z-20"
          style={{ transform: `translate(calc(${d.x}px - 50%), calc(${d.y}px - 50%))` }}
        >
          <div
            className="flex flex-col items-center justify-center w-[120px] h-[120px] rounded-full bg-white border"
            style={{ borderColor: d.color }}
          >
            <span
              className="block h-1 w-7 rounded-full mb-2"
              style={{ background: d.color }}
            />
            <div className="text-[10.5px] font-semibold uppercase tracking-eyebrow text-carbon text-center px-3 leading-tight">
              {d.nombre}
            </div>
            <div className="text-[10px] text-gris-medio mt-1 text-center px-3 leading-tight">
              {d.bajada}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
