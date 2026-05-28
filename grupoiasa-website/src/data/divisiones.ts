export type DivisionSlug = 'proiecta' | 'proambiente' | 'proceanic';

export type Servicio = {
  titulo: string;
  descripcion: string;
};

export type Division = {
  slug: DivisionSlug;
  nombre: string;
  bajada: string;
  descripcion: string;
  colorHex: string;
  colorClass: string;
  borderClass: string;
  textClass: string;
  bgSoftClass: string;
  logo: string;
  servicios: Servicio[];
  porQue: string[];
};

export const divisiones: Division[] = [
  {
    slug: 'proiecta',
    nombre: 'PROIECTA',
    bajada: 'Ingeniería integral',
    descripcion:
      'Ingeniería civil, estructural, eléctrica y sanitaria. Gestión de aguas y diseño de centros de manejo de residuos sólidos. Project Management y permisología sectorial.',
    colorHex: '#2C5FA1',
    colorClass: 'bg-iasa-azul',
    borderClass: 'border-iasa-azul',
    textClass: 'text-iasa-azul',
    bgSoftClass: 'bg-iasa-azul/5',
    logo: '/divisions/proiecta.webp',
    servicios: [
      {
        titulo: 'Aguas Servidas y RILes',
        descripcion:
          'Diseño de Plantas de Tratamiento de Aguas Servidas y RILes, eficiencia de aguas, minimización de RILes y auditoría de procesos industriales.',
      },
      {
        titulo: 'Hidráulica',
        descripcion:
          'Estudios hidrológicos, inundabilidad y recursos hídricos. Diseño de obras hidráulicas y modelación matemática de cauces y canales.',
      },
      {
        titulo: 'Manejo de Residuos Sólidos',
        descripcion:
          'Planes Maestros de Gestión de Residuos Sólidos Urbanos e Industriales. Ingeniería de rellenos sanitarios, estaciones de transferencia, plantas de tratamiento y depósitos de residuos peligrosos, no peligrosos e inertes.',
      },
      {
        titulo: 'Obras Civiles, Estructural, Eléctrica y Sanitaria',
        descripcion:
          'Factibilidad técnico-económica con búsqueda de sitios de emplazamiento. Ingeniería conceptual, básica y de detalle. Mecánica de suelos, cálculo estructural, movimientos de tierra y obras de protección fluvial.',
      },
      {
        titulo: 'Permisología Sectorial',
        descripcion:
          'PAS hidráulicos, sanitarios y de edificación. Recepciones definitivas. Permisos MINVU/DOM, Sanitarios SUSPEL y RESPEL, Agua Potable y Alcantarillado, DGA/DOH.',
      },
    ],
    porQue: [
      'Ingeniería conceptual, básica y de detalle bajo un mismo paraguas',
      'Project Management con foco en permisología sectorial',
      'Track record en operaciones mineras y centros de manejo de residuos',
    ],
  },
  {
    slug: 'proambiente',
    nombre: 'PROAMBIENTE',
    bajada: 'Consultoría ambiental interdisciplinaria',
    descripcion:
      'Auditorías y planes de seguimiento ambiental, manejo de residuos, gestión de suelos contaminados, eficiencia energética y permisos ambientales mixtos.',
    colorHex: '#0F9649',
    colorClass: 'bg-iasa-verde',
    borderClass: 'border-iasa-verde',
    textClass: 'text-iasa-verde',
    bgSoftClass: 'bg-iasa-verde/5',
    logo: '/divisions/proambiente.webp',
    servicios: [
      {
        titulo: 'Auditorías y Diagnósticos de Gestión Ambiental',
        descripcion:
          'Auditorías Ambientales Independientes (AAI), auditorías de permisos y cumplimiento (due diligence), asesoría en legislación ambiental y diagnósticos del manejo de RSD, RISNP, RESPEL e inertes.',
      },
      {
        titulo: 'Gestión de Residuos y Pasivos Ambientales',
        descripcion:
          'Estudios de pre-factibilidad de valorización, planes de manejo (incluyendo Ley REP), investigación de sitios y suelos contaminados, planes de cierre y programas de capacitación ambiental.',
      },
      {
        titulo: 'Permisos Ambientales Mixtos',
        descripcion:
          'PAS 140 y 141 (centros de manejo), PAS 142 (residuos peligrosos), PAS 155/156/157 (obras hidráulicas DGA/DOH) y PAS 160 (Informe Favorable de Construcción).',
      },
      {
        titulo: 'Saneamiento de Suelos Contaminados',
        descripcion:
          'Investigación y supervisión de remoción y bio-remediación. Fases I, II y III. Clientes históricos: Barrick (El Indio, El Tambo), KDM (Maricunga), Aguas Andinas (PTAS Talagante), CMPC.',
      },
      {
        titulo: 'Eficiencia Energética',
        descripcion:
          'Auditorías energéticas, sistemas de gestión y estudios de eficiencia para reducción de huella y optimización operacional.',
      },
    ],
    porQue: [
      'Equipo interdisciplinario con criterio técnico-regulatorio integrado',
      'Track record con Anglo American, BHP, wood, Barrick, KDM, CMPC',
      'Cobertura completa del ciclo: diagnóstico, plan, permiso, seguimiento',
    ],
  },
  {
    slug: 'proceanic',
    nombre: 'PROCEANIC',
    bajada: 'Ingeniería marítima y ciencias del mar',
    descripcion:
      'Ingeniería marítima, ciencias del mar y planes de vigilancia ambiental para infraestructura costera, emisarios submarinos y proyectos portuarios.',
    colorHex: '#B6612A',
    colorClass: 'bg-iasa-naranja',
    borderClass: 'border-iasa-naranja',
    textClass: 'text-iasa-naranja',
    bgSoftClass: 'bg-iasa-naranja/5',
    logo: '/divisions/proceanic.webp',
    servicios: [
      {
        titulo: 'Diseño de Obras Marítimas',
        descripcion:
          'Emisarios submarinos, aducciones, terminales portuarios y diseño de medidas de mitigación de impactos marítimos.',
      },
      {
        titulo: 'Estudios de Línea Base Ambiental Marino',
        descripcion:
          'Caracterización oceanográfica, química, biológica y sedimentológica para proyectos con componente marino o costero.',
      },
      {
        titulo: 'DIA y EIA de Proyectos Marítimos',
        descripcion:
          'Declaraciones y Estudios de Impacto Ambiental para emisarios submarinos, dragados, terminales y obras costeras.',
      },
      {
        titulo: 'Modelación Numérica',
        descripcion:
          'Modelación de corrientes, olas y plumas de dispersión con MIKE 3 y MIKE 21 (DHI). Determinación de Zonas de Protección Litoral (ZPL).',
      },
      {
        titulo: 'Planes de Vigilancia y Contingencia',
        descripcion:
          'Planes de Vigilancia Ambiental, prevención de riesgo y contingencia ambiental (derrames). Tratamiento de aguas del mar y maniobras de terminales.',
      },
      {
        titulo: 'Estudios con certificación SHOA',
        descripcion:
          'Estudios oceanográficos y batimétricos con validación del Servicio Hidrográfico y Oceanográfico de la Armada.',
      },
    ],
    porQue: [
      'Una de las pocas consultoras chilenas con cobertura SHOA + DHI MIKE',
      'Integración con PROAMBIENTE para permisos ambientales marítimos',
      'Experiencia en emisarios, dragados y terminales portuarios',
    ],
  },
];

export const getDivision = (slug: DivisionSlug) =>
  divisiones.find((d) => d.slug === slug)!;
