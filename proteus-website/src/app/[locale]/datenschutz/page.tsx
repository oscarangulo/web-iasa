import { setRequestLocale } from 'next-intl/server';

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <article className="container-x py-24 max-w-2xl">
      <div className="text-[11px] uppercase tracking-eyebrow text-proteus-verde">DSGVO · Art. 13</div>
      <h1 className="h-section mt-6">Datenschutzerklärung</h1>

      <div className="mt-10 space-y-8 text-[15px] leading-relaxed text-proteus-carbon/80">
        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">1. Verantwortlicher</h2>
          <p>
            Proteus UG (haftungsbeschränkt), Celle. Kontakt: <a href="mailto:hello@proteus.exchange" className="text-proteus-verde hover:underline">hello@proteus.exchange</a>.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">2. Erhebung von Daten beim Besuch der Website</h2>
          <p>
            Beim Aufruf dieser Website werden ausschließlich technisch erforderliche Daten (IP-Adresse,
            User-Agent, Zeitstempel) verarbeitet, um den Betrieb sicherzustellen. Es findet keine
            Profilbildung, kein Tracking und kein Marketing statt.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">3. Kontaktformular</h2>
          <p>
            Daten aus dem Kontaktformular (Name, E-Mail, Unternehmen, Nachricht) werden ausschließlich
            zur Bearbeitung Ihrer Anfrage verarbeitet. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO
            (Einwilligung). Die Daten werden nach Abschluss der Kommunikation gelöscht, spätestens nach
            12 Monaten.
          </p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">4. Cookies</h2>
          <p>Es werden ausschließlich technisch notwendige Cookies eingesetzt. Es findet kein Tracking statt.</p>
        </section>

        <section>
          <h2 className="text-[13px] uppercase tracking-eyebrow text-proteus-carbon/50 mb-2">5. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
            Verarbeitung, Datenübertragbarkeit und Widerspruch. Beschwerden können Sie bei der
            zuständigen Aufsichtsbehörde einreichen.
          </p>
        </section>

        <p className="text-[12px] text-proteus-carbon/40 pt-6 border-t border-[#EDEAE2]">
          Diese Datenschutzerklärung wird vor Veröffentlichung von einem Datenschutzanwalt finalisiert.
        </p>
      </div>
    </article>
  );
}
