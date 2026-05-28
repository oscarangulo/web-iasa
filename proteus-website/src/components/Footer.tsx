'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LangSwitcher } from './LangSwitcher';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="mt-24 border-t border-[#EDEAE2] bg-proteus-crema/40">
      <div className="container-x py-14 grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2.5">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-proteus-verde" />
            <span className="text-[15px] font-medium tracking-tightish text-proteus-carbon">
              proteus<span className="text-proteus-verde">.</span>exchange
            </span>
          </div>
          <div className="mt-4 text-[13px] text-proteus-carbon/60 leading-relaxed">
            {t('company')}<br />{t('location')}
          </div>
        </div>

        <div className="md:col-span-4 flex flex-col gap-3 text-[13px]">
          <Link href="/impressum" locale={locale} className="text-proteus-carbon/70 hover:text-proteus-verde">
            {t('impressum')}
          </Link>
          <Link href="/datenschutz" locale={locale} className="text-proteus-carbon/70 hover:text-proteus-verde">
            {t('datenschutz')}
          </Link>
        </div>

        <div className="md:col-span-3 md:text-right">
          <LangSwitcher />
        </div>
      </div>
      <div className="border-t border-[#EDEAE2]">
        <div className="container-x py-5 text-[11px] uppercase tracking-eyebrow text-proteus-carbon/40">
          © {new Date().getFullYear()} {t('company')} · {t('rights')}
        </div>
      </div>
    </footer>
  );
}
