'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export function Contact() {
  const t = useTranslations('contact');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section id="contact" className="border-t border-[#EDEAE2] bg-white">
      <div className="container-x py-24 md:py-32 grid gap-12 lg:grid-cols-12 items-start">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-proteus-verde" />
            <span className="eyebrow">{t('eyebrow')}</span>
          </div>
          <h2 className="h-section mt-6 text-proteus-carbon">{t('title')}</h2>
          <p className="body-lg mt-5">{t('subtitle')}</p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="border border-proteus-verde/30 bg-proteus-verde/[0.04] rounded-sm p-10">
              <div className="text-[12px] uppercase tracking-eyebrow text-proteus-verde">✓</div>
              <p className="mt-3 text-[18px] leading-relaxed text-proteus-carbon">{t('thanks')}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                setTimeout(() => { setLoading(false); setSent(true); }, 600);
              }}
              className="space-y-5"
            >
              <Field label={t('name')} name="name" required />
              <Field type="email" label={t('email')} name="email" required />
              <Field label={t('company')} name="company" />
              <div>
                <label className="block text-[11px] uppercase tracking-eyebrow text-proteus-carbon/55 mb-2">
                  {t('message')}
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full border border-[#EDEAE2] bg-white rounded-sm px-4 py-3 text-[15px] focus:border-proteus-verde focus:outline-none focus:ring-1 focus:ring-proteus-verde resize-none"
                />
              </div>
              <div className="flex items-start gap-3">
                <input id="consent" type="checkbox" required className="mt-1 accent-proteus-verde" />
                <label htmlFor="consent" className="text-[12px] text-proteus-carbon/65 leading-relaxed">
                  {t('consent')}
                </label>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 rounded-full bg-proteus-verde text-white px-6 py-3 text-[14px] font-medium hover:bg-proteus-verde-light transition-colors disabled:opacity-50"
              >
                {loading ? '…' : t('submit')} <span aria-hidden>→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label, name, type = 'text', required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[11px] uppercase tracking-eyebrow text-proteus-carbon/55 mb-2">
        {label}{required && ' *'}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-[#EDEAE2] bg-white rounded-sm px-4 py-3 text-[15px] focus:border-proteus-verde focus:outline-none focus:ring-1 focus:ring-proteus-verde"
      />
    </div>
  );
}
