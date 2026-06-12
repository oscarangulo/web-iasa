// Contenido de "Servicios y Permisología" — fuente: PDF del cliente
// "IASA_Servicios_y_Permisologia_web", borrador junio 2026.
// Textos con orientación SEO (palabras clave del SEIA / RCA) tal cual los entregó el cliente.

export type EmpresaServicio = 'PROIECTA' | 'PROAMBIENTE' | 'PROCEANIC' | 'Ingeniería Alemana';

export type ServicioRapido = {
  id: string;
  codigo: string; // 1.1, 1.2, ...
  titulo: string;
  empresa: EmpresaServicio;
  bajada: string;
  objetivo: string;
  cumplimiento?: string;
  // lista flexible: metodología / qué incluye / qué entrega, según el servicio
  detalleTitulo?: string;
  detalle?: string[];
  valor?: string[];
  keywords: string[];
  formularioUrl: string | null; // null = pendiente de cargar
};

// ── Bloque 1: Servicios especializados de respuesta rápida ──────────────────
export const serviciosRapidos: ServicioRapido[] = [
  {
    id: 'hidrologia-inundabilidad',
    codigo: '1.1',
    titulo: 'Estudio de Hidrología e Inundabilidad',
    empresa: 'PROIECTA',
    bajada:
      'Identifica cauces y zonas inundables dentro del predio, acota áreas de restricción, recupera superficie útil y respalda la tramitación de permisos.',
    objetivo:
      'La evaluación anticipada de los riesgos hidrológicos y de inundabilidad es determinante para la rentabilidad y la continuidad operativa, sobre todo frente a la recurrencia de eventos climáticos extremos. Identificamos y analizamos con precisión los cauces superficiales y las potenciales áreas inundables al interior del predio, acotando las zonas de restricción y optimizando el diseño de las instalaciones.',
    cumplimiento:
      'Es un requerimiento técnico exigido en tramitaciones ambientales, sectoriales y municipales: lo solicita el Sistema de Evaluación Ambiental (SEA), la Dirección General de Aguas (DGA) y la Dirección de Obras Municipales (DOM). El D.S. N° 40 (Reglamento del SEIA) y el Código de Aguas exigen demostrar que los caudales de diseño no inundarán la infraestructura ni alterarán el régimen hídrico de la cuenca.',
    detalleTitulo: 'Metodología',
    detalle: [
      'Delimitación geomorfológica: identificación de cuencas aportantes.',
      'Análisis estadístico: evaluación de precipitaciones mediante modelos probabilísticos.',
      'Cálculo de caudales máximos de crecida por métodos estandarizados.',
      'Simulación hidráulica computacional del tránsito de flujos para prever sectores inundables.',
    ],
    valor: [
      'Diseño eficiente: layout constructivo seguro que optimiza costos.',
      'Viabilidad legal: respaldo técnico robusto para la tramitación de permisos.',
      'Recuperación de terreno: análisis de factibilidad para reducir las fajas de restricción o protección de cauces exigidas por los Instrumentos de Planificación Territorial (PRMS u otros planos reguladores).',
    ],
    keywords: [
      'estudio de inundabilidad',
      'estudio hidrológico',
      'modelación hidráulica',
      'caudales de crecida',
      'reducción de faja de protección de cauces',
      'Código de Aguas',
      'D.S. 40 SEIA',
      'permiso DOM',
      'DGA',
      'riesgo de inundación PRMS',
    ],
    formularioUrl: 'https://forms.gle/Sp1AZdEfbK1ZeToo6',
  },
  {
    id: 'estabilidad-taludes',
    codigo: '1.2',
    titulo: 'Estudio de Estabilidad de Taludes y Deformaciones',
    empresa: 'PROIECTA',
    bajada:
      'Previene deslizamientos, fallas y asentamientos; define la altura máxima segura de los depósitos y habilita ampliaciones en altura sin riesgo.',
    objetivo:
      'La comprobación rigurosa de la estabilidad de taludes y las deformaciones del suelo en estructuras de contención es determinante para la rentabilidad y la velocidad operativa, especialmente frente a la escasez de terrenos que obliga a la expansión vertical de los depósitos. Prevenimos y mitigamos los riesgos de deslizamiento, fallas estructurales y asentamientos excesivos, garantizando la viabilidad de las ampliaciones en altura.',
    cumplimiento:
      'Estudio geotécnico requerido en tramitaciones ambientales y sectoriales: lo solicitan el Servicio de Evaluación Ambiental (SEA) y la SEREMI de Salud para la obtención de los Permisos Ambientales Sectoriales (PAS) 140 y 141. El D.S. N° 189 (Reglamento de Rellenos Sanitarios) y el D.S. N° 148 (Reglamento de Residuos Peligrosos) exigen demostrar que el incremento de cargas no colapsará los taludes, no hundirá el suelo de fundación ni romperá las geomembranas de impermeabilización.',
    detalleTitulo: 'Descripción del servicio',
    detalle: [
      'Cálculo del Factor de Seguridad de los taludes de corte y relleno frente a condiciones estáticas y sísmicas.',
      'Análisis de tensiones y deformaciones del suelo de fundación y de los sistemas de impermeabilización.',
      'Recomendaciones técnicas concretas: altura máxima segura del depósito y pendiente óptima de taludes.',
    ],
    keywords: [
      'estabilidad de taludes',
      'análisis geotécnico',
      'factor de seguridad sísmico',
      'deformaciones del suelo',
      'ampliación en altura de depósitos',
      'geomembrana',
      'D.S. 189 rellenos sanitarios',
      'D.S. 148 residuos peligrosos',
      'PAS 140',
      'PAS 141',
    ],
    formularioUrl: 'https://forms.gle/An2fpjrt8TgQUNnR9',
  },
  {
    id: 'validacion-topografica',
    codigo: '1.3',
    titulo: 'Validación Técnica Topográfica',
    empresa: 'PROIECTA',
    bajada:
      'La base de todo proyecto bien ejecutado es un dato topográfico confiable. Capturamos el terreno con tecnología de última generación y lo entregamos validado, listo para diseñar y tramitar.',
    objetivo:
      'Un levantamiento impreciso se paga caro: rediseños, cubicaciones erradas, observaciones de la autoridad y obras que no calzan en terreno. Entregamos una base topográfica y geoespacial de alta precisión, capturada y procesada con rapidez, sobre la cual su equipo puede diseñar, cubicar y tramitar permisos con seguridad.',
    cumplimiento:
      'Trabajamos con receptores GNSS de alta precisión y escáner 3D / LiDAR, que reducen el tiempo de terreno y aumentan la densidad y exactitud del dato frente a la topografía convencional, optimizando los tiempos de respuesta del proyecto. Es, además, el insumo base de otros estudios de respuesta rápida como Hidrología e Inundabilidad (1.1) y Estabilidad de Taludes y Deformaciones (1.2).',
    detalleTitulo: 'Qué entrega',
    detalle: [
      'Levantamiento topográfico georreferenciado de alta precisión (GNSS).',
      'Nube de puntos y modelo 3D del terreno mediante escáner LiDAR.',
      'Modelo Digital de Terreno (MDT) y planos topográficos para ingeniería.',
      'Informe de validación técnica conforme a normativa.',
    ],
    valor: [
      'Base confiable para la ingeniería de detalle, las cubicaciones y los movimientos de tierra.',
      'Respaldo técnico validado para la tramitación de permisos ambientales, sectoriales y municipales.',
      'Menor tiempo de terreno y respuesta más rápida en cada etapa del proyecto.',
    ],
    keywords: [
      'levantamiento topográfico',
      'validación topográfica',
      'GNSS RTK',
      'escáner 3D LiDAR',
      'nube de puntos',
      'modelo digital de terreno (MDT)',
      'datos geoespaciales',
      'georreferenciación',
      'cubicación',
      'topografía para proyectos de ingeniería',
    ],
    formularioUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSdcZcyBWC51UQPQdrGDyf0j8sk4d-9vA1r8tHKoWd2ov9gN1g/viewform',
  },
  {
    id: 'expediente-respel',
    codigo: '1.4',
    titulo: 'Expediente de Bodegas RESPEL',
    empresa: 'PROIECTA',
    bajada:
      'Diagnóstico ágil y gestión del expediente para almacenar residuos peligrosos, con proyecto y autorización de funcionamiento ante la SEREMI de Salud.',
    objetivo:
      'Sistema de diagnóstico ágil y gestión técnica para la tramitación ante la SEREMI de Salud de proyectos de almacenamiento de residuos peligrosos (RESPEL), bajo la normativa D.S. N° 148 y D.S. N° 43, considerando tanto el proyecto como la autorización de funcionamiento.',
    detalleTitulo: 'Qué incluye el servicio',
    detalle: [
      'Diagnóstico y evaluación del proyecto o de la instalación existente.',
      'Elaboración del expediente técnico.',
      'Apoyo en el ingreso y tramitación de expedientes.',
    ],
    keywords: [
      'bodega RESPEL',
      'almacenamiento de residuos peligrosos',
      'autorización sanitaria SEREMI de Salud',
      'D.S. 148',
      'PAS 142',
      'expediente bodega de residuos peligrosos',
      'autorización de funcionamiento',
    ],
    formularioUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLScUx5K4qSzzYUxasm5NtInof6kj2gdOo6K4BXmjoJeChQ97Zg/viewform',
  },
  {
    id: 'hidrogeologico-opm',
    codigo: '1.5',
    titulo: 'Informe Hidrogeológico OPM',
    empresa: 'PROIECTA',
    bajada:
      'Habilita la construcción en zonas con riesgo de afloramiento de napas mediante informe con metodología SERNAGEOMIN y apoyo en su tramitación municipal (plataforma ATG).',
    objetivo:
      'Cuando el Plan Regulador identifica áreas con riesgo de inundación o anegamiento por napas freáticas superficiales, se requiere un Informe Hidrogeológico OPM. Es un informe técnico obligatorio en Chile, exigido por las Direcciones de Obras Municipales (DOM) para edificar en zonas de riesgo por afloramiento de aguas subterráneas, elaborado de acuerdo con la metodología SERNAGEOMIN e incluyendo el apoyo en su tramitación en plataforma ATG (OPM = Obtención de Permiso Municipal).',
    keywords: [
      'informe hidrogeológico',
      'OPM',
      'afloramiento de napas',
      'aguas subterráneas',
      'metodología SERNAGEOMIN',
      'plataforma ATG',
      'permiso de edificación DOM',
      'riesgo de inundación plan regulador',
    ],
    formularioUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfxIcRwcBAff80GAHDOgKHJTOADf2PkvlS3P-wZQFjfLVNQwQ/viewform',
  },
  {
    id: 'contaminacion-suelos',
    codigo: '1.6',
    titulo: 'Estudios de Contaminación de Suelos',
    empresa: 'PROAMBIENTE',
    bajada:
      'Evaluación integral del sitio para confirmar o descartar contaminación, contrastar con la normativa de referencia y priorizar las áreas que requieren investigación detallada.',
    objetivo:
      'Evaluar integralmente el sitio, desde una mirada amplia de los antecedentes disponibles para identificar potenciales pasivos ambientales, hasta la obtención de datos analíticos cuantitativos de suelo. Esto permite confirmar o descartar la presencia de contaminación, contrastar los resultados con la normativa de referencia, determinar la existencia de riesgos significativos y priorizar las áreas que requieran fases de investigación más detalladas.',
    detalleTitulo: 'Qué incluye el servicio',
    detalle: [
      'Análisis de investigación preliminar.',
      'Inspección del sitio.',
      'Programas de monitoreo: tipo de contaminante, características físicas y químicas y su eventual extensión (entrevistas, registros y antecedentes de los eventos).',
      'Comparación de los parámetros con los valores de referencia.',
      'De ser necesario, evaluación cuantitativa de riesgos.',
    ],
    keywords: [
      'estudio de suelos contaminados',
      'sitios con potencial presencia de contaminantes (SPPC)',
      'pasivos ambientales',
      'investigación de sitios',
      'evaluación de riesgo ambiental',
      'fases I II III',
      'muestreo de suelo',
      'valores de referencia',
    ],
    formularioUrl: null, // pendiente de cargar (Yamina / Nelson)
  },
  {
    id: 'auditorias-seguimiento',
    codigo: '1.7',
    titulo: 'Auditorías de Cumplimiento y Seguimiento Ambiental',
    empresa: 'PROAMBIENTE',
    bajada:
      'Dos servicios que pueden abordarse de forma secuencial o independiente: auditoría de cumplimiento y seguimiento ambiental.',
    objetivo:
      'Auditoría de Cumplimiento (etapa inicial): diagnóstico del estado actual de la empresa mediante la evaluación y verificación del cumplimiento normativo, incluyendo la revisión de permisos ambientales y sectoriales. Seguimiento Ambiental (etapa posterior o servicio autónomo): gestión y seguimiento de los hallazgos detectados en la auditoría. Alternativamente, se ofrece como servicio independiente para evaluar el estado actual de la instalación y monitorear de forma continua los compromisos ambientales adquiridos.',
    detalleTitulo: 'Qué incluye el servicio',
    detalle: [
      'Estudio y revisión de los informes del programa de seguimiento ambiental del proyecto.',
      'Evaluación del estado normativo actual de la empresa (detección de brechas).',
      'Seguimiento a las obligaciones y compromisos ambientales adquiridos en la RCA, planes de manejo y otros.',
      'Entrega de informes que respaldan la gestión actual y los compromisos futuros.',
    ],
    keywords: [
      'auditoría de cumplimiento ambiental',
      'seguimiento ambiental',
      'cumplimiento de RCA',
      'compromisos ambientales',
      'detección de brechas',
      'plan de seguimiento ambiental',
      'permisos ambientales y sectoriales',
    ],
    formularioUrl: null, // pendiente de cargar (Yamina / Nelson)
  },
];

// ── Bloque 2: Permisos Ambientales Sectoriales (PAS) y servicios asociados ───
export type PasItem = {
  codigo: string; // PAS 138, ...
  titulo: string;
  descripcion: string;
  servicioIasa: string;
};

export const pasIntro =
  'Tramitación dentro del SEIA con un mismo equipo: el ingeniero que diseña la solución es quien sustenta el permiso ante la autoridad. Aplicable en Declaraciones (DIA) y Estudios de Impacto Ambiental (EIA).';

export const pasItems: PasItem[] = [
  {
    codigo: 'PAS 138',
    titulo: 'Aguas servidas y desagües',
    descripcion:
      'Evacuación, tratamiento o disposición final de aguas servidas y desagües de cualquier naturaleza.',
    servicioIasa:
      'Diseño de Plantas de Tratamiento de Aguas Servidas y RILes; ingeniería sanitaria (PROIECTA).',
  },
  {
    codigo: 'PAS 140',
    titulo: 'Plantas y sitios de residuos',
    descripcion:
      'Plantas de tratamiento, reciclaje, compostaje y sitios de acumulación, valorización o disposición de residuos.',
    servicioIasa:
      'Ingeniería de centros de manejo de residuos; plantas de tratamiento, compostaje y reciclaje (PROIECTA / PROAMBIENTE).',
  },
  {
    codigo: 'PAS 141',
    titulo: 'Rellenos sanitarios',
    descripcion:
      'Construcción, modificación o ampliación de rellenos sanitarios para residuos sólidos urbanos.',
    servicioIasa:
      'Ingeniería de rellenos sanitarios y estaciones de transferencia; estabilidad de taludes (PROIECTA).',
  },
  {
    codigo: 'PAS 142',
    titulo: 'Residuos peligrosos',
    descripcion:
      'Sitios y bodegas destinados al almacenamiento de residuos peligrosos (RESPEL).',
    servicioIasa:
      'Bodegas RESPEL, depósitos de seguridad y Expediente de Bodegas RESPEL ante la SEREMI de Salud (ver 1.4).',
  },
  {
    codigo: 'PAS 155',
    titulo: 'Obras hidráulicas',
    descripcion:
      'Construcción de obras hidráulicas mayores (embalses, defensas) aprobadas ante la DGA.',
    servicioIasa:
      'Diseño de obras hidráulicas y de protección fluvial (PROIECTA).',
  },
  {
    codigo: 'PAS 156',
    titulo: 'Modificación de cauces',
    descripcion:
      'Modificación de cauces naturales que son intervenidos por el proyecto.',
    servicioIasa:
      'Modelación matemática de cauces; ingeniería y tramitación ante DGA / DOH (PROIECTA).',
  },
  {
    codigo: 'PAS 157',
    titulo: 'Defensa de cauces',
    descripcion:
      'Obras de regularización o defensa de cauces naturales y protección fluvial.',
    servicioIasa:
      'Diseño de obras de defensa fluvial; estudio de inundabilidad (ver 1.1).',
  },
  {
    codigo: 'PAS 160',
    titulo: 'Informe Favorable de Construcción',
    descripcion:
      'Habilita construcción y subdivisión fuera del límite urbano (ex cambio de uso de suelo).',
    servicioIasa:
      'Informe de Factibilidad de la Construcción (IFC) en suelo rural ante MINVU / SAG (PROIECTA).',
  },
];

export const pasKeywords = [
  'Permiso Ambiental Sectorial',
  'PAS',
  'SEIA',
  'SEA',
  'Declaración de Impacto Ambiental (DIA)',
  'Estudio de Impacto Ambiental (EIA)',
  'Resolución de Calificación Ambiental (RCA)',
  'tramitación sectorial',
];

// ── Bloque 3: Permisos sectoriales por autoridad ────────────────────────────
export type AutoridadItem = {
  autoridad: string;
  tramites: string;
};

export const autoridadIntro =
  'Gestionamos la tramitación completa ante cada organismo, de la mano del diseño de ingeniería: proyecto, recepción de obras y autorización de funcionamiento.';

export const autoridadItems: AutoridadItem[] = [
  {
    autoridad: 'SEREMI de Salud — Instalaciones y autorizaciones',
    tramites:
      'Patios de salvataje (acopio temporal de RISNP, RSD y asimilables); infraestructura de reciclaje; bodegas RESPEL y SUSPEL; agua potable y alcantarillado particular; acarreo de agua por camión aljibe; calificación técnica industrial e informe sanitario. Proyecto y autorización de funcionamiento.',
  },
  {
    autoridad: 'SEREMI de Salud — Depósitos de residuos (permisos especiales)',
    tramites:
      'Relleno sanitario; depósitos de residuos no peligrosos; depósitos de residuos peligrosos (depósito de seguridad); depósitos de lodos sanitarios (monorrellenos); depósitos de residuos de construcción (escombreras).',
  },
  {
    autoridad: 'DOM — Edificación y recepción de obras',
    tramites:
      'Edificación obra menor (< 100 m²); edificación obra mayor (> 100 m²); autorización de obras preliminares; recepción definitiva de obras.',
  },
  {
    autoridad: 'MINVU / SAG — Construcción en suelo rural',
    tramites:
      'Informe de Factibilidad de la Construcción (IFC), asociado al PAS 160.',
  },
  {
    autoridad: 'DGA / DOH — Cauces y obras hidráulicas',
    tramites:
      'Tramitación sectorial PAS 155 · 156 · 157; reducción de faja de protección; estudio de inundabilidad. Proyecto, recepción de obras y autorización de funcionamiento.',
  },
  {
    autoridad: 'SERNAGEOMIN · SEC — Hidrogeología y electricidad',
    tramites:
      'SERNAGEOMIN: Informe Hidrogeológico OPM (obtención de permiso municipal). SEC: declaración eléctrica interior (TE1).',
  },
];

export const autoridadKeywords = [
  'SEREMI de Salud',
  'DOM',
  'MINVU',
  'SAG',
  'DGA',
  'DOH',
  'SERNAGEOMIN',
  'SEC',
  'autorización de funcionamiento',
  'permiso sanitario',
  'recepción de obras',
  'TE1',
  'IFC',
  'OPM',
];
