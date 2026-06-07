import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-iasa-petroleo text-white">
      <div className="container-x flex min-h-[70vh] flex-col justify-center py-24">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-iasa-amarillo" />
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
            Error 404
          </span>
        </div>
        <h1 className="mt-6 max-w-2xl font-display text-[40px] font-semibold leading-[1.05] tracking-tighter2 md:text-[56px]">
          Esta página no está en el plano.
        </h1>
        <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/70">
          El enlace que siguió no existe o cambió de lugar. Volvamos a un punto
          conocido del proyecto.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-iasa-amarillo px-6 py-3 text-[14px] font-semibold text-iasa-petroleo transition-transform hover:-translate-y-px"
          >
            Volver al inicio
            <span aria-hidden>→</span>
          </Link>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[14px] font-medium text-white transition-colors hover:border-white/55"
          >
            Conversar un proyecto
          </Link>
        </div>
      </div>
    </section>
  );
}
