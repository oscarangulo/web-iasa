'use client';

import { motion } from 'framer-motion';
import { serviciosRapidos, type EmpresaServicio } from '@/data/servicios';

const empresaColor: Record<EmpresaServicio, string> = {
  PROIECTA: '#2C5FA1',
  PROAMBIENTE: '#0F9649',
  PROCEANIC: '#B6612A',
  'Ingeniería Alemana': '#B68A1F',
};

export function ServiciosRapidos() {
  return (
    <section className="border-b border-gris-borde bg-white">
      <div className="container-x py-20 md:py-28">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-iasa-amarillo" />
          <span className="text-[11px] font-semibold uppercase tracking-eyebrow text-iasa-amarillo">
            Respuesta rápida
          </span>
        </div>
        <h2 className="mt-6 max-w-3xl h-section text-carbon">
          Servicios acotados que dan viabilidad a su proyecto.
        </h2>
        <p className="body-lg mt-6 max-w-2xl">
          Diagnóstico ágil y entregables rápidos para destrabar tramitaciones
          ambientales, sectoriales y municipales. Cada servicio puede solicitarse
          de forma independiente.
        </p>

        <div className="mt-14 flex flex-col gap-px overflow-hidden rounded-lg border border-gris-borde bg-gris-borde">
          {serviciosRapidos.map((s, i) => (
            <motion.article
              key={s.id}
              id={s.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.05 }}
              className="scroll-mt-24 bg-white p-8 md:p-10"
            >
              <div className="grid gap-8 md:grid-cols-12">
                {/* Columna identidad */}
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="text-[15px] font-semibold tabular-nums text-gris-medio">
                      {s.codigo}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-eyebrow"
                      style={{ color: empresaColor[s.empresa] }}
                    >
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ background: empresaColor[s.empresa] }}
                        aria-hidden
                      />
                      {s.empresa}
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-[22px] md:text-[24px] font-semibold leading-tight tracking-tightish text-carbon">
                    {s.titulo}
                  </h3>
                  <p className="mt-4 text-[14px] leading-relaxed text-gris-medio text-pretty">
                    {s.bajada}
                  </p>

                  {s.formularioUrl ? (
                    <a
                      href={s.formularioUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-iasa-azul px-5 py-2.5 text-[13px] font-medium text-white transition-transform hover:-translate-y-px"
                    >
                      Solicitar este servicio
                      <span aria-hidden>→</span>
                    </a>
                  ) : (
                    <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-gris-borde px-5 py-2.5 text-[13px] font-medium text-gris-medio">
                      Formulario disponible próximamente
                    </span>
                  )}
                </div>

                {/* Columna contenido */}
                <div className="md:col-span-8 md:border-l md:border-gris-borde md:pl-10">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-[11px] font-semibold uppercase tracking-eyebrow text-carbon/55">
                        Objetivo
                      </h4>
                      <p className="mt-2 text-[14px] leading-relaxed text-gris-medio text-pretty">
                        {s.objetivo}
                      </p>
                    </div>

                    {s.cumplimiento && (
                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-eyebrow text-carbon/55">
                          Cumplimiento normativo
                        </h4>
                        <p className="mt-2 text-[14px] leading-relaxed text-gris-medio text-pretty">
                          {s.cumplimiento}
                        </p>
                      </div>
                    )}

                    {s.detalle && (
                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-eyebrow text-carbon/55">
                          {s.detalleTitulo ?? 'Qué incluye'}
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {s.detalle.map((d) => (
                            <li
                              key={d}
                              className="flex gap-3 text-[14px] leading-relaxed text-gris-medio"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-iasa-azul"
                                aria-hidden
                              />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {s.valor && (
                      <div>
                        <h4 className="text-[11px] font-semibold uppercase tracking-eyebrow text-carbon/55">
                          Valor para su proyecto
                        </h4>
                        <ul className="mt-3 space-y-2">
                          {s.valor.map((v) => (
                            <li
                              key={v}
                              className="flex gap-3 text-[14px] leading-relaxed text-gris-medio"
                            >
                              <span
                                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-iasa-verde"
                                aria-hidden
                              />
                              {v}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 pt-1">
                      {s.keywords.map((k) => (
                        <span
                          key={k}
                          className="rounded-full bg-iasa-azul/[0.06] px-3 py-1 text-[11px] text-carbon/65"
                        >
                          {k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
