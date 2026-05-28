'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-proteus-crema/60 via-white to-white" />
      <div className="absolute inset-x-0 top-0 -z-10 opacity-[0.04] [mask-image:linear-gradient(180deg,#000,transparent)]"
        style={{
          backgroundImage:
            'linear-gradient(#0A0A0A 1px, transparent 1px), linear-gradient(90deg, #0A0A0A 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
        aria-hidden
      />
      <div className="container-x py-24 md:py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <span className="h-px w-8 bg-proteus-verde" />
          <span className="eyebrow">{t('eyebrow')}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.06 }}
          className="h-display mt-8 max-w-5xl"
        >
          {t('titlePre')}{' '}
          <em className="not-italic italic text-proteus-verde font-medium">{t('titleEmph')}</em>{' '}
          {t('titlePost')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="body-lg mt-8 max-w-2xl"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-proteus-verde px-6 py-3 text-[14px] font-medium text-white hover:bg-proteus-verde-light transition-colors"
          >
            {t('cta')} <span aria-hidden>→</span>
          </a>
          <span className="text-[12px] text-proteus-carbon/55">{t('ctaNote')}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-24 flex items-center gap-3 text-[10px] uppercase tracking-eyebrow text-proteus-carbon/40"
        >
          <span className="h-px w-12 bg-proteus-carbon/20" />
          <span>{t('indicator')}</span>
        </motion.div>
      </div>
    </section>
  );
}
