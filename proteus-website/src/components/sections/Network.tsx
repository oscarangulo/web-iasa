'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

type Partner = { name: string; discipline: string; body: string };

export function Network() {
  const t = useTranslations('network');
  const partners = t.raw('partners') as Partner[];

  return (
    <section id="network" className="bg-proteus-carbon text-white">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-proteus-verde" />
            <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-proteus-verde">
              {t('eyebrow')}
            </span>
          </div>
          <h2 className="h-section mt-6 text-white">{t('title')}</h2>
          <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-white/65">{t('subtitle')}</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-sm border border-white/10 bg-white/[0.03] p-7 md:p-8 backdrop-blur-sm"
            >
              {p.name === 'Grupo IASA' ? (
                <div className="flex items-center gap-3">
                  <div className="bg-white/95 rounded-sm p-1.5">
                    <Image src="/logo-iasa.webp" alt="Grupo IASA" width={32} height={32} className="h-7 w-7 object-contain" />
                  </div>
                  <span className="text-[18px] font-medium tracking-tightish text-white">{p.name}</span>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span className="inline-block h-2.5 w-2.5 rounded-full bg-proteus-verde" />
                  <span className="text-[18px] font-medium tracking-tightish text-white">{p.name}</span>
                </div>
              )}
              <div className="mt-2 text-[11px] uppercase tracking-eyebrow text-white/40">{p.discipline}</div>
              <p className="mt-5 text-[14px] leading-relaxed text-white/65">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
