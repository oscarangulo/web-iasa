import Image from 'next/image';
import { Hero } from '@/components/Hero';
import { SectionTitle } from '@/components/SectionTitle';
import { CtaBlock } from '@/components/CtaBlock';
import { equipo, plataformas } from '@/data/equipo';

const hitos = [
  { ano: '1997', texto: 'Fundación del Grupo IASA en Santiago de Chile.' },
  { ano: '2003', texto: 'Primer proyecto de gran escala en minería: caracterización de residuos industriales.' },
  { ano: '2008', texto: 'Creación de PROAMBIENTE para auditorías y consultoría ambiental especializada.' },
  { ano: '2012', texto: 'Lanzamiento de PROCEANIC: ingeniería marítima y ciencias del mar.' },
  { ano: '2015', texto: 'Diseño del Depósito de Seguridad CIGRI Til-Til (3.000.000 m³).' },
  { ano: '2018', texto: 'Estudios SPPC y saneamiento de suelos para Barrick, KDM, CMPC, Aguas Andinas.' },
  { ano: '2024', texto: 'Certificación ISO 9001:2015 renovada por AENOR · vigente hasta 2027.' },
  { ano: '2026', texto: '29 años de operación continua. Cartera activa con Anglo American, BHP, Antofagasta Minerals.' },
];

export default function NosotrosPage() {
  return (
    <>
      <Hero
        eyebrow="Nosotros"
        titulo={<>Ingeniería y consultoría ambiental <em className="not-italic text-iasa-azul">desde la cuna a la tumba.</em></>}
        bajada="29 años integrando ingeniería civil, consultoría ambiental y ciencias del mar. Tres empresas operativas — un equipo senior compartido y una misma cultura de trabajo en Providencia, Santiago."
      />

      <section className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionTitle eyebrow="Misión" titulo="Decisiones de proyecto bien tomadas." />
          <p className="body-lg mt-6">
            Acompañar a nuestros clientes en cada fase de un proyecto de infraestructura o industria
            — desde la búsqueda del emplazamiento hasta el plan de cierre — entregando ingeniería
            sólida, criterio regulatorio y permisos tramitados con disciplina.
          </p>
        </div>
        <div className="lg:col-span-5 lg:col-start-8">
          <SectionTitle eyebrow="Visión" titulo="La consultora referente para la producción sustentable en Chile." accent="#0F9649" />
          <p className="body-lg mt-6">
            Ser la consultora chilena que la industria minera, sanitaria, energética y portuaria
            llama primero cuando un proyecto exige ingeniería y consultoría ambiental integradas
            bajo un mismo paraguas técnico.
          </p>
        </div>
      </section>

      {/* Cómo nos organizamos · plataformas + equipo senior compartido */}
      <section className="border-y border-gris-borde bg-crema">
        <div className="container-x py-20 md:py-24">
          <SectionTitle
            eyebrow="Cómo nos organizamos"
            titulo="Tres empresas, un equipo, un mismo método."
            bajada="Cada empresa concentra su especialidad técnica. Cuatro plataformas transversales sostienen a las tres y permiten que un proyecto que requiere ingeniería civil, criterio ambiental y oceanografía se resuelva con una sola conversación."
          />

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {plataformas.map((p, i) => (
              <div key={p.nombre} className="border border-gris-borde bg-white p-7 md:p-8">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-eyebrow text-iasa-azul">
                  <span className="tabular-nums font-semibold">{String(i + 1).padStart(2, '0')}</span>
                  <span>Plataforma compartida</span>
                </div>
                <h3 className="mt-4 text-[20px] md:text-[22px] font-medium tracking-tightish text-carbon">{p.nombre}</h3>
                <p className="body mt-3">{p.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="container-x py-20 md:py-24">
        <SectionTitle eyebrow="Trayectoria" titulo="29 años de operación continua." />
        <ol className="mt-12 grid gap-y-8 md:grid-cols-2 md:gap-x-16">
          {hitos.map((h) => (
            <li key={h.ano} className="grid grid-cols-[100px_1fr] gap-4">
              <div className="text-[18px] font-medium tabular-nums tracking-tightish text-iasa-azul">{h.ano}</div>
              <div className="text-[15px] leading-relaxed text-carbon/85">{h.texto}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* Equipo · todas las personas, mismo tratamiento visual */}
      <section className="border-t border-gris-borde bg-white">
        <div className="container-x py-20 md:py-24">
          <SectionTitle
            eyebrow="Equipo"
            titulo="Las personas detrás del Grupo IASA."
            bajada="Un mismo equipo se asigna según las necesidades de cada proyecto, sin importar qué empresa del grupo lo lidera. La especialidad reside en cada empresa; la capacidad de ejecución es compartida."
          />
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-12">
            {equipo.map((m) => (
              <Persona key={m.nombre} miembro={m} />
            ))}
          </div>
          <p className="mt-14 text-[12px] text-gris-medio max-w-2xl">
            Equipo y cargos según documento interno «Ecosistema Grupo IASA» — mayo 2026.
            Claudina Páez · Asistente Administración (sin foto disponible aún).
          </p>
        </div>
      </section>

      {/* ISO 9001 */}
      <section className="border-t border-gris-borde bg-iasa-azul/[0.04]">
        <div className="container-x py-16 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-2">
            <div className="rounded-sm bg-white border border-iasa-azul/30 p-4 text-center">
              <div className="text-[10px] font-bold tracking-eyebrow uppercase text-iasa-azul">AENOR</div>
              <div className="text-[9px] mt-1 text-gris-medio leading-tight">Gestión<br />de la Calidad<br />ISO 9001</div>
            </div>
          </div>
          <div className="md:col-span-7">
            <div className="eyebrow text-iasa-azul">Certificación</div>
            <h3 className="mt-3 text-[22px] md:text-[26px] font-medium tracking-tightish text-carbon">
              ISO 9001:2015 · AENOR · IQNet
            </h3>
            <p className="mt-3 text-[14px] text-gris-medio max-w-2xl">
              Sistema de Gestión de Calidad certificado para servicios interdisciplinarios de
              ingeniería, auditoría y consultoría en medio ambiente, gestión de recursos naturales,
              residuos y energía. Certificado vigente hasta el 28 de noviembre de 2027.
            </p>
          </div>
          <div className="md:col-span-3 md:text-right text-[12px] tabular-nums text-gris-medio space-y-1">
            <div>ER-0538/2024 · 002/00</div>
            <div>PROIECTA Ingeniería</div>
            <div>ER-0538/2024 · 003/00</div>
            <div>PROAMBIENTE</div>
          </div>
        </div>
      </section>

      <CtaBlock
        titulo="Trabajemos juntos en su próximo proyecto."
        bajada="Coordinamos una primera reunión para entender el alcance y proponer una hoja de ruta técnica concreta."
        ctaLabel="Solicitar reunión"
        ctaHref="/contacto"
      />
    </>
  );
}

function Persona({
  miembro,
}: { miembro: { nombre: string; cargo: string; foto: string } }) {
  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-crema border border-gris-borde">
        <Image
          src={miembro.foto}
          alt={miembro.nombre}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
        />
      </div>
      <div className="mt-4">
        <div className="text-[14px] md:text-[15px] font-medium text-carbon">{miembro.nombre}</div>
        <div className="mt-1.5 text-[12px] leading-snug text-gris-medio">{miembro.cargo}</div>
      </div>
    </div>
  );
}
