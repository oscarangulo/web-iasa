import { setRequestLocale } from 'next-intl/server';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="container-x py-24 max-w-2xl prose-sm">
      <div className="text-[11px] uppercase tracking-eyebrow text-proteus-verde">Impressum · §5 TMG</div>
      <h1 className="h-section mt-6">Impressum</h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-proteus-carbon/80">
        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">Anbieter</h2>
          <p>
            Proteus UG (haftungsbeschränkt)<br />
            <span className="text-proteus-carbon/40">[Straße und Hausnummer]</span><br />
            29221 Celle, Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">Vertretungsberechtigter Geschäftsführer</h2>
          <p>Joachim Vogdt</p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">Kontakt</h2>
          <p>
            E-Mail: <a href="mailto:hello@proteus.exchange" className="text-proteus-verde hover:underline">hello@proteus.exchange</a><br />
            Telefon: <span className="text-proteus-carbon/40">[Telefonnummer]</span>
          </p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister<br />
            Registergericht: <span className="text-proteus-carbon/40">[zuständiges Amtsgericht]</span><br />
            Registernummer: <span className="text-proteus-carbon/40">[HRB-Nummer]</span>
          </p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a UStG: <span className="text-proteus-carbon/40">[USt-IdNr]</span>
          </p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">Verantwortlich i.S.d. §55 Abs. 2 RStV</h2>
          <p>Joachim Vogdt, Anschrift wie oben.</p>
        </section>

        <p className="text-[12px] text-proteus-carbon/40 pt-6 border-t border-[#EDEAE2]">
          Pflichtfelder werden vor Veröffentlichung von einem Rechtsanwalt geprüft und finalisiert.
        </p>
      </div>
    </article>
  );
}
