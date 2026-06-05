'use client';

import { motion } from 'framer-motion';
import { plataformas } from '@/data/equipo';

// Posición como fracción del radio (−1..1) sobre cada eje; el radio real se
// calcula en % del contenedor, así el orbital escala y nunca se desborda en móvil.
const orbitDivs = [
  { nombre: 'PROIECTA', bajada: 'Ingeniería integral', color: '#2C5FA1', fx: 0, fy: -1 },
  { nombre: 'PROAMBIENTE', bajada: 'Consultoría ambiental', color: '#0F9649', fx: 1, fy: 0 },
  { nombre: 'PROCEANIC', bajada: 'Ingeniería marítima', color: '#B6612A', fx: 0, fy: 1 },
  { nombre: 'INGENIERÍA ALEMANA', bajada: 'Know-how y soporte', color: '#F2C811', fx: -1, fy: 0 },
];

// Radio orbital en % del lado del contenedor (cuadrado). Lo limita el móvil,
// donde la burbuja (104px) ocupa ~29% del contenedor (~358px) → radio 14.5%.
// 34% + 14.5% = 48.5% < 50% → nunca se desborda. En desktop sobra margen.
const ORBIT_R = 33;

export function Ecosystem() {
  return (
    <section className="overflow-hidden border-b border-gris-borde bg-white">
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
  // Radio en coords del viewBox (lado 520 → mitad 260). 37% del lado = 192.4.
  const rVB = (ORBIT_R / 100) * 520;
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[520px]">
      {/* Anillos guía + conectores centro → división (un solo SVG, escala con el viewBox) */}
      <svg viewBox="-260 -260 520 520" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="0" cy="0" r={rVB} fill="none" stroke="#E5E5E5" strokeDasharray="2 5" />
        <circle cx="0" cy="0" r={rVB + 58} fill="none" stroke="#EFEFEF" strokeDasharray="2 7" />
        {orbitDivs.map((d) => (
          <line
            key={d.nombre}
            x1="0"
            y1="0"
            x2={d.fx * rVB}
            y2={d.fy * rVB}
            stroke={d.color}
            strokeOpacity="0.22"
            strokeWidth="1.25"
          />
        ))}
      </svg>

      {/* Núcleo: Grupo IASA — wrapper centrado sin animar (la animación va en el hijo,
          para no pisar el translate de centrado con el transform de Framer) */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55 }}
          className="flex h-[128px] w-[128px] flex-col items-center justify-center rounded-full bg-[#0B1E36] text-white shadow-[0_25px_60px_-15px_rgba(11,30,54,0.55)] ring-1 ring-white sm:h-[150px] sm:w-[150px]"
        >
          <div className="text-[9px] uppercase tracking-eyebrow text-white/55 sm:text-[10px]">Grupo</div>
          <div className="mt-0.5 text-[23px] font-medium tracking-tighter2 sm:text-[26px]">IASA</div>
          <div className="mt-1 text-[9px] uppercase tracking-eyebrow text-white/55 sm:text-[10px]">29 años</div>
        </motion.div>
      </div>

      {/* Divisiones orbitando — wrapper posiciona (%) + centra; el hijo anima */}
      {orbitDivs.map((d, i) => (
        <div
          key={d.nombre}
          className="absolute z-20 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 sm:h-[122px] sm:w-[122px]"
          style={{
            left: `calc(50% + ${d.fx * ORBIT_R}%)`,
            top: `calc(50% + ${d.fy * ORBIT_R}%)`,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
            className="flex h-full w-full flex-col items-center justify-center rounded-full border-2 bg-white text-center shadow-[0_10px_30px_-12px_rgba(15,28,55,0.25)]"
            style={{ borderColor: d.color }}
          >
            <span className="mb-1.5 block h-1 w-6 rounded-full sm:mb-2 sm:w-7" style={{ background: d.color }} />
            <div className="px-2 text-[9.5px] font-semibold uppercase leading-tight tracking-eyebrow text-carbon sm:px-3 sm:text-[10.5px]">
              {d.nombre}
            </div>
            <div className="mt-0.5 px-2 text-[9px] leading-tight text-gris-medio sm:mt-1 sm:px-3 sm:text-[10px]">
              {d.bajada}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
