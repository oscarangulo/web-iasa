import type { DivisionSlug } from './divisiones';

export type Proyecto = {
  slug: string;
  nombre: string;
  cliente: string;
  ano: string;
  division: DivisionSlug;
  sector: string;
  resumen: string;
  detalle: string[];
  honorarios?: string;
  inversion?: string;
};

export const proyectos: Proyecto[] = [
  {
    slug: 'cigri-til-til',
    nombre: 'Depósito de Seguridad CIGRI · Til-Til',
    cliente: 'CICLO',
    ano: '2015–2020',
    division: 'proiecta',
    sector: 'Residuos industriales',
    resumen:
      'Centro Integral de Residuos Industriales: 40 ha de terreno (17,6 ha de depósito) con capacidad de 3.000.000 m³.',
    detalle: [
      'Diseño del relleno de seguridad, manejo de lixiviados, manejo de aguas lluvias y diseño de caminos interiores.',
      'Ingeniería Conceptual, Básica para ingreso al SEA y de Detalles para construcción etapas I-1 y I-2.',
      'Permisos PAS 155, 156 y 157 (DGA / DOH) y permisos sectoriales especiales con DGA (reducción de faja de protección).',
    ],
    honorarios: 'US$ 130.000',
    inversion: '≈ US$ 85 M',
  },
  {
    slug: 'antucoya',
    nombre: 'Centro de Manejo de Residuos Sólidos · Mina Antucoya',
    cliente: 'Antofagasta Minerals · RESITER',
    ano: '2015',
    division: 'proiecta',
    sector: 'Minería',
    resumen:
      'Ingeniería de Centro de Manejo de Residuos (12,2 ha) con depósitos de RSD (98.000 m³) y RISNP (180.000 m³) para fases de construcción, operación y cierre.',
    detalle: [
      'Galpón RESPEL (16 m × 24 m), almacenamiento de material radioactivo e instalaciones anexas: oficinas, caminos, cercos, agua potable, alcantarillado y electricidad.',
      'Elaboración y tramitación de permisos sectoriales MINVU/Minagri, Seremi de Salud y DOM.',
    ],
    honorarios: 'US$ 146.500',
    inversion: '≈ US$ 5 M',
  },
  {
    slug: 'los-bronces',
    nombre: 'Gestión de residuos sólidos · Operación Minera Los Bronces',
    cliente: 'Anglo American',
    ano: '2018',
    division: 'proambiente',
    sector: 'Minería',
    resumen:
      'Estudio de gestión de residuos sólidos en los sectores Los Bronces y Las Tórtolas.',
    detalle: [
      'Estimación de las cantidades de RSD, RISNP y RESPEL.',
      'Evaluación de alternativas y tecnologías de reducción, segregación (reciclaje) y tratamiento.',
      'Diseño de ingeniería de detalle de patios y estaciones de segregación, acondicionamiento, valorización y transferencia.',
      'Planes de manejo de RISNP y RESPEL, planes de capacitación y estrategia de implementación.',
      'Permisos MINVU (IFC), sanitarios y de construcción.',
    ],
    honorarios: 'US$ 337.000',
    inversion: '≈ US$ 10 M',
  },
  {
    slug: 'spence-sgo',
    nombre: 'Estudio y caracterización de residuos sólidos · Spence / SGO',
    cliente: 'wood · BHP',
    ano: '2018',
    division: 'proambiente',
    sector: 'Minería',
    resumen:
      'Diagnóstico del manejo actual de residuos de la operación Spence y construcción del proyecto SGO (brechas y oportunidades de mejora).',
    detalle: [
      'Alternativas de reducción, reciclaje y tratamiento incluyendo tecnologías de aprovechamiento energético: combustibles alternativos, carbonización de biomasa (madera), pirólisis e incineración.',
      'Evaluación técnico-económica de escenarios (incluyendo zero waste), búsqueda de sitios de emplazamiento y diseño a pre-factibilidad.',
    ],
    honorarios: 'US$ 45.000',
    inversion: '≈ US$ 25,4 M',
  },
  {
    slug: 'saneamiento-suelos',
    nombre: 'Estudios SPPC y Saneamiento de Suelos',
    cliente: 'Barrick · KDM · CMPC · Aguas Andinas',
    ano: 'Múltiples contratos',
    division: 'proambiente',
    sector: 'Industria',
    resumen:
      'Investigación y supervisión de remoción y bio-remediación de suelos contaminados.',
    detalle: [
      'Clientes: Barrick (El Indio, El Tambo), KDM (Maricunga), Aguas Andinas (PTAS Talagante), CMPC (15 plantas).',
      'Fases I, II y III de investigación y saneamiento.',
    ],
  },
  {
    slug: 'obras-costeras',
    nombre: 'Estudios y obras costeras',
    cliente: 'Clientes confidenciales',
    ano: '2019–2024',
    division: 'proceanic',
    sector: 'Marítimo',
    resumen:
      'Estudios oceanográficos, línea base ambiental marino y diseño de obras de protección costera para emisarios submarinos y terminales.',
    detalle: [
      'Modelación de corrientes, olas y plumas con MIKE 3 / MIKE 21 (DHI).',
      'Estudios con certificación SHOA y planes de vigilancia ambiental marino.',
      'Determinación de Zonas de Protección Litoral (ZPL).',
    ],
  },
];
