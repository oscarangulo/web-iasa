import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaBlock } from '@/components/CtaBlock';

const certificados = [
  {
    empresa: 'PROIECTA Ingeniería',
    aenor: 'ER-0538/2024 - 002/00',
    iqnet: 'ES-0538/2024 - 002/00',
    direccion: 'Av. Providencia 2653, Of. 1308',
    color: '#2C5FA1',
  },
  {
    empresa: 'PROAMBIENTE',
    aenor: 'ER-0538/2024 - 003/00',
    iqnet: 'ES-0538/2024 - 003/00',
    direccion: 'Av. Providencia 2653, Of. 1308',
    color: '#0F9649',
  },
];

const principios = [
  { titulo: 'Cumplimiento', texto: 'Cumplimos la legislación ambiental, sectorial y laboral aplicable a cada proyecto y cliente.' },
  { titulo: 'Mejora continua', texto: 'Revisión semestral de procesos y métricas internas. Auditorías cruzadas entre divisiones.' },
  { titulo: 'Trazabilidad', texto: 'Cada entregable cuenta con responsable técnico identificable, revisión interna y registro documental.' },
  { titulo: 'Independencia técnica', texto: 'Decisiones de ingeniería basadas en criterio profesional, sin presión comercial sobre la conclusión técnica.' },
];

export default function SgcPage() {
  return (
    <>
      <Hero
        eyebrow="Sistema de Gestión de Calidad"
        titulo={<>Calidad <em className="not-italic text-iasa-azul">certificada</em> ISO 9001:2015</>}
        bajada="Servicios interdisciplinarios de ingeniería, auditoría y consultoría en medio ambiente, gestión de recursos naturales, residuos y energía. Auditoría externa por AENOR, integración a la red IQNet."
      />

      <section className="container-x py-20">
        <SectionTitle eyebrow="Alcance" titulo="Servicios certificados." />
        <p className="body-lg mt-6 max-w-3xl">
          El alcance de nuestra certificación cubre <strong className="text-carbon">servicios
          interdisciplinarios de ingeniería, auditoría y consultoría en medio ambiente, gestión de
          recursos naturales, residuos y energía</strong> — para las empresas que componen el Grupo IASA.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {certificados.map((c) => (
            <div key={c.empresa} className="border border-gris-borde bg-white p-7">
              <div className="h-1 w-16" style={{ background: c.color }} />
              <div className="mt-5 text-[12px] uppercase tracking-eyebrow text-gris-medio">Certificado AENOR</div>
              <h3 className="mt-2 text-[20px] font-medium tracking-tightish text-carbon">{c.empresa}</h3>
              <dl className="mt-6 space-y-3 text-[14px]">
                <div className="grid grid-cols-[120px_1fr]">
                  <dt className="text-gris-medio">N° AENOR</dt>
                  <dd className="tabular-nums">{c.aenor}</dd>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                  <dt className="text-gris-medio">N° IQNet</dt>
                  <dd className="tabular-nums">{c.iqnet}</dd>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                  <dt className="text-gris-medio">Dirección</dt>
                  <dd>{c.direccion}</dd>
                </div>
                <div className="grid grid-cols-[120px_1fr]">
                  <dt className="text-gris-medio">Vigencia</dt>
                  <dd className="text-iasa-verde font-medium">Hasta 2027-11-28</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-gris-borde bg-crema">
        <div className="container-x py-20">
          <SectionTitle eyebrow="Política de calidad" titulo="Principios que estructuran nuestro trabajo." />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principios.map((p, i) => (
              <div key={p.titulo} className="border border-gris-borde bg-white p-7">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-iasa-azul">
                  <span className="tabular-nums font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <span>Principio</span>
                </div>
                <h3 className="mt-3 text-[18px] font-medium tracking-tightish text-carbon">{p.titulo}</h3>
                <p className="body mt-3">{p.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionTitle eyebrow="Organismos certificadores y acreditación" titulo="Cadena de confianza." />
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {['AENOR', 'IAF', 'ENAC', 'IQNet'].map((o) => (
            <div key={o} className="border border-gris-borde bg-white p-6 text-center">
              <div className="text-[15px] font-medium tracking-tight">{o}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaBlock
        titulo="¿Necesita la documentación de respaldo de la certificación?"
        bajada="Podemos enviar copia de los certificados, alcance detallado y los últimos informes de auditoría a su equipo de procurement."
        ctaLabel="Solicitar documentación"
        ctaHref="/contacto"
      />
    </>
  );
}
