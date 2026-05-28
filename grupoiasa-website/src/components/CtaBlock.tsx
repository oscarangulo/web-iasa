import Link from 'next/link';

type Props = {
  titulo: string;
  bajada?: string;
  ctaLabel: string;
  ctaHref: string;
  accent?: string;
};

export function CtaBlock({ titulo, bajada, ctaLabel, ctaHref, accent = '#2C5FA1' }: Props) {
  return (
    <section className="container-x mt-20">
      <div className="relative overflow-hidden rounded-sm bg-carbon text-white p-10 md:p-16">
        <div
          className="absolute inset-y-0 left-0 w-1"
          style={{ background: accent }}
          aria-hidden
        />
        <div className="grid gap-8 md:grid-cols-12 items-center">
          <div className="md:col-span-8">
            <h3 className="h-section text-white">{titulo}</h3>
            {bajada && <p className="mt-4 max-w-2xl text-[16px] text-white/65 leading-relaxed">{bajada}</p>}
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[14px] font-medium text-carbon transition-transform hover:-translate-y-px"
            >
              {ctaLabel}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
