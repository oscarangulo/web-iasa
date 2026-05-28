'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type Pillar = { num: string; title: string; body: string };

export function Solution() {
  const t = useTranslations('solution');
  const pillars = t.raw('pillars') as Pillar[];

  return (
    <section id="solution" className="border-t border-[#EDEAE2] bg-white">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-proteus-verde" />
            <span className="eyebrow">{t('eyebrow')}</span>
          </div>
          <h2 className="h-section mt-6 text-proteus-carbon">{t('title')}</h2>
          <p className="body-lg mt-5">{t('subtitle')}</p>
        </div>

        <div className="mt-16 grid gap-px bg-[#EDEAE2] md:grid-cols-3 border border-[#EDEAE2]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 md:p-10 lg:p-12 flex flex-col"
            >
              <div className="flex items-center gap-3 text-proteus-verde">
                <span className="text-[12px] tabular-nums font-semibold">{p.num}</span>
                <span className="h-px w-10 bg-proteus-verde/40" />
              </div>
              <h3 className="mt-6 text-[24px] md:text-[28px] font-medium tracking-tightish text-proteus-carbon">
                {p.title}
              </h3>
              <p className="mt-5 text-[15px] leading-relaxed text-proteus-carbon/70">
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
