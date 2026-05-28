'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export function Problem() {
  const t = useTranslations('problem');
  const quotes = t.raw('quotes') as string[];

  return (
    <section id="problem" className="border-t border-[#EDEAE2] bg-white">
      <div className="container-x py-24 md:py-32 grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-proteus-calido" />
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-proteus-calido">
              {t('eyebrow')}
            </span>
          </div>
          <h2 className="h-section mt-6 text-proteus-carbon">{t('title')}</h2>
        </div>

        <div className="lg:col-span-6 lg:col-start-7 space-y-5">
          <p className="text-[18px] md:text-[20px] leading-relaxed text-proteus-carbon/85">{t('p1')}</p>
          <p className="text-[18px] md:text-[20px] leading-relaxed text-proteus-carbon/85">{t('p2')}</p>
        </div>
      </div>

      <div className="border-t border-[#EDEAE2] bg-proteus-crema/50">
        <div className="container-x py-14">
          <div className="text-[11px] uppercase tracking-eyebrow text-proteus-calido mb-8">
            {t('tagPain')}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {quotes.map((q, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-l-2 border-proteus-calido/60 pl-5"
              >
                <blockquote className="text-[15px] leading-relaxed text-proteus-carbon/85 italic">
                  &ldquo;{q}&rdquo;
                </blockquote>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
