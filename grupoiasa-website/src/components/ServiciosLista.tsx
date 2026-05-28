'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Servicio } from '@/data/divisiones';

type Props = {
  servicios: Servicio[];
  accent: string;
};

export function ServiciosLista({ servicios, accent }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-gris-borde border-y border-gris-borde">
      {servicios.map((s, i) => {
        const isOpen = open === i;
        return (
          <div key={s.titulo}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="group w-full text-left flex items-start gap-6 py-7 transition-colors"
              aria-expanded={isOpen}
            >
              <div
                className="mt-1 shrink-0 text-[12px] tabular-nums font-semibold w-10"
                style={{ color: accent }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-6">
                  <h3 className="text-[18px] md:text-[22px] font-medium tracking-tightish text-carbon">
                    {s.titulo}
                  </h3>
                  <span
                    className={`shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-full border transition-transform ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    style={{ borderColor: `${accent}55`, color: accent }}
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="body-lg mt-4 max-w-3xl">{s.descripcion}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
}
