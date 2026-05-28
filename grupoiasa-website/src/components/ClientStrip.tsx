import { clientes } from '@/data/clientes';

export function ClientStrip() {
  return (
    <section className="border-t border-gris-borde bg-crema">
      <div className="container-x py-14">
        <div className="text-[11px] uppercase tracking-eyebrow text-gris-medio">
          Clientes y socios estratégicos
        </div>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-5">
          {clientes.map((c) => (
            <div
              key={c}
              className="text-[14px] md:text-[15px] font-medium text-carbon/70 tracking-tight"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
