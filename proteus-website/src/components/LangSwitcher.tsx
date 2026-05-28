'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

export function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex items-center gap-0 text-[11px] font-medium uppercase tracking-eyebrow">
      {routing.locales.map((l, i) => (
        <div key={l} className="flex items-center">
          <button
            onClick={() => router.replace(pathname, { locale: l })}
            className={`px-2 py-1 transition-colors ${
              locale === l ? 'text-proteus-verde' : 'text-proteus-carbon/40 hover:text-proteus-carbon'
            }`}
            aria-current={locale === l ? 'true' : undefined}
          >
            {l}
          </button>
          {i < routing.locales.length - 1 && <span className="text-proteus-carbon/20">·</span>}
        </div>
      ))}
    </div>
  );
}
