import { Hero } from '@/components/Hero';
import { KpiStrip } from '@/components/KpiStrip';
import { DivisionCard } from '@/components/DivisionCard';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaBlock } from '@/components/CtaBlock';
import { ClientStrip } from '@/components/ClientStrip';
import { ProyectoCard } from '@/components/ProyectoCard';
import { divisiones } from '@/data/divisiones';
import { proyectos } from '@/data/proyectos';
import Link from 'next/link';

export default function HomePage() {
  const destacados = proyectos.slice(0, 3);

  return (
    <>
      <Hero
        eyebrow="Grupo IASA · Portafolio 2026"
        titulo={
          <>
            Soluciones globales para la <em className="not-italic text-iasa-azul">producción</em> y el desarrollo sustentable.
          </>
        }
        bajada="Consultora chilena que integra ingeniería civil, consultoría ambiental e ingeniería marítima. 29 años acompañando a la industria minera, sanitaria, energética y portuaria — desde la idea de proyecto hasta el cierre final."
        ctaPrimario={{ href: '/contacto', label: 'Solicitar propuesta' }}
        ctaSecundario={{ href: '/proyectos', label: 'Ver proyectos' }}
      />

      <KpiStrip />

      <section className="container-x py-20 md:py-28">
        <SectionTitle
          eyebrow="Tres empresas · un grupo"
          titulo="Una sola conversación técnica desde la idea hasta el cierre."
          bajada="Ingeniería, consultoría ambiental y ciencias del mar bajo una misma estructura corporativa. Cada empresa con foco en su disciplina, integradas para los proyectos que exigen mirada completa."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {divisiones.map((d) => (
            <DivisionCard key={d.slug} division={d} />
          ))}
        </div>
      </section>

      <section className="border-t border-gris-borde bg-crema">
        <div className="container-x py-20 md:py-24 grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionTitle
              eyebrow="Quiénes somos"
              titulo="Ingeniería de proyectos desde la cuna a la tumba."
              bajada="IASA reúne a PROIECTA S.A., PROAMBIENTE S.A. y PROCEANIC S.A. — abarcando toda la gama de servicios para diseño, ejecución y desarrollo: desde la formulación de estrategias hasta su implementación, construcción, operación y cierre final."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/nosotros"
                className="inline-flex items-center gap-2 rounded-full bg-iasa-azul px-5 py-2.5 text-[13px] font-medium text-white hover:bg-iasa-azul-dark"
              >
                Conocer al equipo →
              </Link>
              <Link
                href="/sgc"
                className="inline-flex items-center gap-2 rounded-full border border-carbon/15 px-5 py-2.5 text-[13px] font-medium text-carbon hover:border-carbon/30"
              >
                ISO 9001:2015
              </Link>
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-4">
              <Stat numero="29+" label="años de experiencia" accent="#2C5FA1" />
              <Stat numero="ISO 9001" label="AENOR · IQNet · vigente 2027" accent="#0F9649" />
              <Stat numero="3" label="empresas operativas" accent="#B6612A" />
              <Stat numero="100+" label="proyectos en cartera" accent="#F2C811" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20 md:py-24">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionTitle
            eyebrow="Proyectos representativos"
            titulo="Casos donde la ingeniería integral hace la diferencia."
          />
          <Link
            href="/proyectos"
            className="text-[13px] font-medium text-iasa-azul hover:underline underline-offset-4"
          >
            Ver todos los proyectos →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {destacados.map((p) => (
            <ProyectoCard key={p.slug} proyecto={p} />
          ))}
        </div>
      </section>

      <ClientStrip />

      <CtaBlock
        titulo="¿Tiene un proyecto que requiere ingeniería y consultoría ambiental integrada?"
        bajada="Le respondemos en menos de 48 horas hábiles con una primera lectura técnica del alcance y los permisos involucrados."
        ctaLabel="Hablar con IASA"
        ctaHref="/contacto"
      />
    </>
  );
}

function Stat({ numero, label, accent }: { numero: string; label: string; accent: string }) {
  return (
    <div className="border border-gris-borde bg-white p-6">
      <div className="h-1 w-10" style={{ background: accent }} />
      <div className="mt-5 text-[36px] md:text-[40px] font-medium tracking-tighter2 leading-none text-carbon">
        {numero}
      </div>
      <div className="mt-3 text-[12px] uppercase tracking-eyebrow text-gris-medio">{label}</div>
    </div>
  );
}
