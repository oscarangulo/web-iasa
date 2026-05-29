'use client';

import { useState } from 'react';
import { Hero } from '@/components/Hero';
import { divisiones } from '@/data/divisiones';

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Hero
        eyebrow="Construyamos el próximo capítulo"
        titulo={<>Más que un proveedor: un <em className="not-italic text-iasa-azul">aliado técnico</em> de largo plazo.</>}
        bajada="En Grupo IASA creemos que los mejores resultados nacen de relaciones de largo plazo. No buscamos ser un proveedor más — buscamos acompañar el crecimiento de sus proyectos, reducir incertidumbre y aportar soluciones cuando más se necesitan."
      />

      <section className="container-x pt-10">
        <div className="max-w-3xl border-l-2 border-iasa-azul pl-6 py-1">
          <p className="text-[16px] md:text-[17px] leading-relaxed text-carbon">
            Cuando trabaja con Grupo IASA, no incorpora solamente una consultora.
            Incorpora un equipo multidisciplinario comprometido con el éxito de
            su proyecto.
          </p>
        </div>
      </section>

      <section className="container-x py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {sent ? (
            <div className="border border-iasa-verde/30 bg-iasa-verde/5 p-10 rounded-sm">
              <div className="text-[12px] uppercase tracking-eyebrow text-iasa-verde">Mensaje recibido</div>
              <h3 className="h-section mt-3">Gracias por su mensaje.</h3>
              <p className="body-lg mt-3">
                Confirmamos recepción. Carolina y el equipo le responderán en las próximas 48 horas hábiles.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                setTimeout(() => { setLoading(false); setSent(true); }, 700);
              }}
              className="space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Nombre" name="nombre" required />
                <Field label="Empresa" name="empresa" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field type="email" label="Email" name="email" required />
                <Field type="tel" label="Teléfono" name="telefono" />
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-eyebrow text-gris-medio mb-2">
                  División de interés
                </label>
                <select
                  name="division"
                  className="w-full border border-gris-borde bg-white rounded-sm px-4 py-3 text-[15px] focus:border-iasa-azul focus:outline-none focus:ring-1 focus:ring-iasa-azul"
                  defaultValue=""
                >
                  <option value="" disabled>Seleccione una especialidad</option>
                  {divisiones.map((d) => (
                    <option key={d.slug} value={d.slug}>{d.nombre} · {d.bajada}</option>
                  ))}
                  <option value="general">Conversación general / multidisciplinaria</option>
                </select>
              </div>

              <div>
                <label className="block text-[12px] uppercase tracking-eyebrow text-gris-medio mb-2">
                  Mensaje <span className="text-iasa-naranja">*</span>
                </label>
                <textarea
                  name="mensaje"
                  required
                  rows={5}
                  className="w-full border border-gris-borde bg-white rounded-sm px-4 py-3 text-[15px] resize-none focus:border-iasa-azul focus:outline-none focus:ring-1 focus:ring-iasa-azul"
                  placeholder="Cuéntenos sobre el alcance, los plazos y el contexto del proyecto."
                />
              </div>

              <div className="flex items-start gap-3">
                <input id="acepto" type="checkbox" required className="mt-1 accent-iasa-azul" />
                <label htmlFor="acepto" className="text-[13px] text-gris-medio leading-relaxed">
                  Acepto el tratamiento de mis datos personales para fines de contacto comercial conforme a la legislación chilena vigente.
                </label>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center gap-2 rounded-full bg-iasa-azul px-6 py-3 text-[14px] font-medium text-white hover:bg-iasa-azul-dark disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Enviando…' : 'Quiero conversar mi proyecto'}
                  <span aria-hidden>→</span>
                </button>
                <a
                  href="/nosotros"
                  className="inline-flex items-center gap-2 rounded-full border border-carbon/15 bg-white px-6 py-3 text-[14px] font-medium text-carbon transition-colors hover:border-carbon/30"
                >
                  Conocer al equipo Grupo IASA
                </a>
              </div>

              <p className="text-[12px] text-gris-medio">
                Sus datos se envían directamente al CRM Odoo del Grupo IASA. Sin terceros, sin tracking de marketing.
              </p>
            </form>
          )}
        </div>

        <aside className="md:col-span-4 md:col-start-9 space-y-10">
          <div>
            <div className="eyebrow">Oficina</div>
            <address className="not-italic mt-3 text-[15px] leading-relaxed text-carbon">
              Av. Providencia 2653, Of. 1308<br />
              Providencia, Santiago<br />
              Chile
            </address>
          </div>
          <div>
            <div className="eyebrow">Correo</div>
            <a href="mailto:contacto@grupoiasa.cl" className="mt-3 inline-block text-[15px] text-iasa-azul hover:underline underline-offset-4">
              contacto@grupoiasa.cl
            </a>
          </div>
          <div>
            <div className="eyebrow">Horario</div>
            <div className="mt-3 text-[15px] text-carbon">
              Lunes a viernes<br />
              09:00 — 18:30 (CLT)
            </div>
          </div>
          <div className="aspect-[4/3] bg-crema border border-gris-borde rounded-sm overflow-hidden">
            <iframe
              title="Mapa Av. Providencia 2653"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-70.6135%2C-33.4275%2C-70.6075%2C-33.4225&amp;layer=mapnik&amp;marker=-33.425%2C-70.6105"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label, name, type = 'text', required,
}: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-[12px] uppercase tracking-eyebrow text-gris-medio mb-2">
        {label} {required && <span className="text-iasa-naranja">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full border border-gris-borde bg-white rounded-sm px-4 py-3 text-[15px] focus:border-iasa-azul focus:outline-none focus:ring-1 focus:ring-iasa-azul"
      />
    </div>
  );
}
