'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  eyebrow: string;
  titulo: ReactNode;
  bajada?: string;
  ctaPrimario?: { href: string; label: string };
  ctaSecundario?: { href: string; label: string };
  /** Color de marca de la división: pinta superficies (la regla, el fondo del CTA). */
  accent?: string;
  /** Variante AA del mismo matiz para lo que va escrito sobre el fondo claro del hero. */
  ink?: string;
};

export function Hero({ eyebrow, titulo, bajada, ctaPrimario, ctaSecundario, accent = '#2C5FA1', ink }: Props) {
  const inkColor = ink ?? accent;
  const cta = ctaColors(accent, inkColor);
  return (
    <section className="relative overflow-hidden border-b border-gris-borde">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-crema to-white" />
      <div className="container-x py-20 md:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8" style={{ background: accent }} />
          <span className="eyebrow" style={{ color: inkColor }}>{eyebrow}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="h-display mt-6 max-w-4xl text-carbon"
        >
          {titulo}
        </motion.h1>

        {bajada && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="body-lg mt-6 max-w-2xl"
          >
            {bajada}
          </motion.p>
        )}

        {(ctaPrimario || ctaSecundario) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            {ctaPrimario && (
              <Link
                href={ctaPrimario.href}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium transition-transform hover:-translate-y-px"
                style={{ background: cta.fondo, color: cta.texto }}
              >
                {ctaPrimario.label}
                <span aria-hidden>→</span>
              </Link>
            )}
            {ctaSecundario && (
              <Link
                href={ctaSecundario.href}
                className="inline-flex items-center gap-2 rounded-full border border-carbon/15 bg-white px-6 py-3 text-[14px] font-medium text-carbon transition-colors hover:border-carbon/30"
              >
                {ctaSecundario.label}
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}

const PETROLEO = '#0B1E36';
const BLANCO = '#FFFFFF';

/**
 * Fondo y texto del CTA con contraste AA garantizado.
 * Los cuatro colores corporativos se comportan distinto sobre un botón: el
 * amarillo pide texto petróleo, el azul texto blanco, y el verde y el naranja
 * no alcanzan 4.5:1 con ninguno de los dos, así que el botón se pinta con la
 * variante oscurecida del mismo matiz.
 */
function ctaColors(accent: string, ink: string): { fondo: string; texto: string } {
  const claro = contraste(BLANCO, accent);
  const oscuro = contraste(PETROLEO, accent);
  const mejor = Math.max(claro, oscuro);

  if (mejor >= 4.5) {
    return { fondo: accent, texto: claro >= oscuro ? BLANCO : PETROLEO };
  }
  return { fondo: ink, texto: contraste(BLANCO, ink) >= contraste(PETROLEO, ink) ? BLANCO : PETROLEO };
}

function luminancia(color: string): number {
  const hex = color.replace('#', '');
  const canal = (i: number) => {
    const v = parseInt(hex.slice(i, i + 2), 16) / 255;
    return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * canal(0) + 0.7152 * canal(2) + 0.0722 * canal(4);
}

function contraste(a: string, b: string): number {
  const la = luminancia(a);
  const lb = luminancia(b);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
