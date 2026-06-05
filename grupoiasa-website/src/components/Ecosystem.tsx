'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const divisiones = [
  {
    nombre: 'PROIECTA',
    color: '#2C5FA1',
    descripcion:
      'Gestión de aguas, residuos sólidos, ingeniería civil, estructural, eléctrica, sanitaria, obras hidráulicas, project management y permisología.',
  },
  {
    nombre: 'PROAMBIENTE',
    color: '#0F9649',
    descripcion:
      'Auditorías y planes de seguimiento ambiental, manejo de residuos, gestión de suelos contaminados, eficiencia energética y recursos naturales.',
  },
  {
    nombre: 'PROCEANIC',
    color: '#B6612A',
    descripcion:
      'Ingeniería marítima, ciencias del mar y planes de vigilancia ambiental.',
  },
  {
    nombre: 'INGENIERÍA ALEMANA',
    color: '#F2C811',
    descripcion:
      'Soporte técnico especializado y vinculación con know-how europeo.',
  },
];

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

        {/* Logo + descripción del grupo */}
        <div className="mt-12 grid items-center gap-10 md:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="flex justify-center md:col-span-4 md:justify-start"
          >
            <Image
              src="/logo-iasa.png"
              alt="Grupo IASA"
              width={281}
              height={273}
              className="h-40 w-auto md:h-48"
            />
          </motion.div>
          <p className="text-justify text-[16px] leading-relaxed text-gris-medio md:col-span-8 md:text-[17px]">
            IASA reúne a{' '}
            <strong className="font-semibold text-carbon">PROIECTA S.A.</strong>,{' '}
            <strong className="font-semibold text-carbon">PROAMBIENTE S.A.</strong>,{' '}
            <strong className="font-semibold text-carbon">PROCEANIC S.A.</strong> e{' '}
            <strong className="font-semibold text-carbon">INGENIERÍA ALEMANA S.A.</strong>,
            abarcando toda la gama de servicios para el diseño, ejecución y
            desarrollo de proyectos, desde la formulación de estrategias hasta su
            implementación.
          </p>
        </div>

        {/* Cuatro franjas de color con descripción */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {divisiones.map((d, i) => (
            <motion.div
              key={d.nombre}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              <div className="text-[14px] font-semibold uppercase tracking-eyebrow text-carbon">
                {d.nombre}
              </div>
              <div className="mt-3 h-1.5 w-full rounded-full" style={{ background: d.color }} />
              <p className="mt-4 text-justify text-[13.5px] leading-relaxed text-gris-medio">
                {d.descripcion}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
