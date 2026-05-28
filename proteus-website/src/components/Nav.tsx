'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { useEffect, useState } from 'react';
import { LangSwitcher } from './LangSwitcher';

export function Nav() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled ? 'bg-white/90 backdrop-blur border-b border-[#EDEAE2]' : 'bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" locale={locale} className="flex items-center gap-2.5 group">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-proteus-verde" />
          <span className="text-[15px] font-medium tracking-tightish text-proteus-carbon">
            proteus<span className="text-proteus-verde">.</span>exchange
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          <a href="#problem" className="text-[13px] text-proteus-carbon/70 hover:text-proteus-verde">{t('problem')}</a>
          <a href="#solution" className="text-[13px] text-proteus-carbon/70 hover:text-proteus-verde">{t('solution')}</a>
          <a href="#network" className="text-[13px] text-proteus-carbon/70 hover:text-proteus-verde">{t('network')}</a>
          <a href="#contact" className="text-[13px] text-proteus-carbon/70 hover:text-proteus-verde">{t('contact')}</a>
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-full bg-proteus-verde text-white px-4 py-2 text-[13px] font-medium hover:bg-proteus-verde-light"
          >
            {t('cta')}
          </a>
        </div>
      </div>
    </header>
  );
}
