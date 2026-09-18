import { clientes } from '@/data/clientes';

export function ClientStrip() {
  return (
    <section className="border-y border-gris-borde bg-white">
      <div className="container-x py-16 md:py-20">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-iasa-azul" />
          <span className="eyebrow">Confían en el Grupo</span>
        </div>

        <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
          <h2 className="h-section text-carbon md:col-span-7">
            Los mandantes que auditan nuestro trabajo.
          </h2>
          <p className="body md:col-span-5 md:text-right">
            Operaciones mineras, forestales, sanitarias y municipales donde
            la ingeniería, el permiso y la obra tienen que responder juntos.
          </p>
        </div>

        {/* Registro tipo documento: hairlines y nombres a peso de titular, no
            una lista gris al pie. Es la prueba más fuerte del sitio. */}
        <ul className="mt-12 grid grid-cols-1 border-t border-gris-borde sm:grid-cols-2 lg:grid-cols-3">
          {clientes.map((c) => (
            <li
              key={c}
              className="border-b border-gris-borde py-5 text-[17px] font-medium tracking-tightish text-carbon md:text-[19px]"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
