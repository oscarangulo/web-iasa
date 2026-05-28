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
  accent?: string;
};

export function Hero({ eyebrow, titulo, bajada, ctaPrimario, ctaSecundario, accent = '#2C5FA1' }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-gris-borde">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-crema to-white" />
      <div className="container-x py-20 md:py-28 lg:py-32 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8" style={{ background: accent }} />
          <span className="eyebrow" style={{ color: accent }}>{eyebrow}</span>
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
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-white transition-transform hover:-translate-y-px"
                style={{ background: accent }}
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
