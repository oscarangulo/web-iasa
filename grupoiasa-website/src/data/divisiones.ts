export type DivisionSlug = 'proiecta' | 'proambiente' | 'proceanic' | 'ingenieria-alemana';

export type Servicio = {
  titulo: string;
  descripcion: string;
  // ancla a un servicio detallado de respuesta rápida en /servicios#<id>
  servicioRapidoId?: string;
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
        titulo: 'Hidrología e Inundabilidad',
        descripcion:
          'Estudios hidrológicos y de inundabilidad: identificación de cauces y zonas inundables, acotación de áreas de restricción y recuperación de superficie útil. Diseño de obras hidráulicas y modelación matemática de cauces y canales (PAS 155, 156, 157). Respaldo técnico para tramitación ante SEA, DGA y DOM.',
        servicioRapidoId: 'hidrologia-inundabilidad',
      },
      {
        titulo: 'Estabilidad de Taludes y Deformaciones',
        descripcion:
          'Estudio geotécnico que previene deslizamientos, fallas y asentamientos: cálculo del factor de seguridad estático y sísmico, análisis de deformaciones del suelo de fundación y de los sistemas de impermeabilización. Define la altura máxima segura de los depósitos y habilita ampliaciones en altura (PAS 140 y 141).',
        servicioRapidoId: 'estabilidad-taludes',
      },
      {
        titulo: 'Validación Técnica Topográfica',
        descripcion:
          'Base topográfica y geoespacial de alta precisión capturada con GNSS y escáner 3D / LiDAR: nube de puntos, Modelo Digital de Terreno (MDT) y planos validados conforme a normativa, listos para diseñar, cubicar y tramitar permisos.',
        servicioRapidoId: 'validacion-topografica',
      },
      {
        titulo: 'Expediente de Bodegas RESPEL',
        descripcion:
          'Diagnóstico ágil y gestión del expediente técnico para el almacenamiento de residuos peligrosos (RESPEL), con proyecto y autorización de funcionamiento ante la SEREMI de Salud bajo D.S. 148 y D.S. 43 (PAS 142).',
        servicioRapidoId: 'expediente-respel',
      },
      {
        titulo: 'Informe Hidrogeológico OPM',
        descripcion:
          'Informe con metodología SERNAGEOMIN que habilita la construcción en zonas con riesgo de afloramiento de napas, con apoyo en su tramitación municipal (plataforma ATG) para la obtención del permiso de edificación ante la DOM.',
        servicioRapidoId: 'hidrogeologico-opm',
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
        titulo: 'Auditorías de Cumplimiento y Seguimiento Ambiental',
        descripcion:
          'Auditorías Ambientales Independientes (AAI), auditorías de permisos y cumplimiento (due diligence), asesoría en legislación ambiental y diagnósticos del manejo de RSD, RISNP, RESPEL e inertes. Seguimiento de los compromisos ambientales adquiridos en la RCA y detección de brechas normativas.',
        servicioRapidoId: 'auditorias-seguimiento',
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
        titulo: 'Estudios y Saneamiento de Suelos Contaminados',
        descripcion:
          'Evaluación integral del sitio para confirmar o descartar contaminación: investigación de sitios con potencial presencia de contaminantes (SPPC), Fases I, II y III, comparación con valores de referencia y supervisión de remoción y bio-remediación. Clientes históricos: Barrick (El Indio, El Tambo), KDM (Maricunga), Aguas Andinas (PTAS Talagante), CMPC.',
        servicioRapidoId: 'contaminacion-suelos',
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
  {
    slug: 'ingenieria-alemana',
    nombre: 'Ingeniería Alemana',
    bajada: 'Know-how y soporte técnico',
    descripcion:
      'Estela de prestigio profesional, metodología europea y respaldo técnico para proyectos complejos. Experiencia transversal en ingeniería, sostenibilidad y gestión de operaciones industriales.',
    colorHex: '#F2C811',
    colorClass: 'bg-iasa-amarillo',
    borderClass: 'border-iasa-amarillo',
    textClass: 'text-iasa-amarillo',
    bgSoftClass: 'bg-iasa-amarillo/5',
    logo: '/divisions/ingenieria-alemana.webp',
    servicios: [
      {
        titulo: 'Asesoría estratégica',
        descripcion:
          'Acompañamiento ejecutivo en decisiones técnicas y regulatorias de alta complejidad: gestión de relaciones, alianzas estratégicas y visión integral de proyectos industriales.',
      },
      {
        titulo: 'Transferencia de know-how europeo',
        descripcion:
          'Metodología, estándares y prácticas de ingeniería europea aplicadas al contexto chileno. Cradle to Cradle, economía circular y transición climática.',
      },
      {
        titulo: 'Sponsorship técnico',
        descripcion:
          'Respaldo de expertise senior en revisiones críticas, validación de propuestas y diálogo con gerencias corporativas de los clientes.',
      },
    ],
    porQue: [
      'Estela de prestigio profesional con 30+ años de trayectoria',
      'Puente cultural y técnico con prácticas europeas',
      'Hablante natural en conversaciones estratégicas con gerencias corporativas',
    ],
  },
];

export const getDivision = (slug: DivisionSlug) =>
  divisiones.find((d) => d.slug === slug)!;
