'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export function CookieBanner() {
  const t = useTranslations('cookie');
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const dismissed = localStorage.getItem('proteus-cookie-ack');
    if (!dismissed) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-50 rounded-sm border border-[#EDEAE2] bg-white p-4 shadow-[0_18px_40px_-22px_rgba(10,10,10,0.25)]">
      <p className="text-[13px] text-proteus-carbon/80 leading-relaxed">{t('text')}</p>
      <button
        onClick={() => { localStorage.setItem('proteus-cookie-ack', '1'); setShow(false); }}
        className="mt-3 inline-flex items-center rounded-full bg-proteus-verde text-white px-4 py-1.5 text-[12px] font-medium hover:bg-proteus-verde-light"
      >
        {t('accept')}
      </button>
    </div>
  );
}
