export type Miembro = {
  nombre: string;
  cargo: string;
  foto: string;
  division?: 'proiecta' | 'proambiente' | 'proceanic' | 'corporativo' | 'plataforma';
};

// Cargos y nombres validados con el documento interno "Ecosistema Grupo IASA"
// (material interno · mayo 2026 · v0.1).
//
// Ordenamiento del equipo: Gerente General primero, luego Gerencias,
// luego liderazgos divisionales, jefes de proyecto, ingenieros y por último
// el resto del equipo técnico y administrativo. Se presenta como UN solo
// equipo con el mismo tratamiento visual — la jerarquía sólo define el orden.
export const equipo: Miembro[] = [
  // Gerencia General
  { nombre: 'Joachim Vogdt', cargo: 'Gerente General', foto: '/team/joachim.webp', division: 'corporativo' },
  // Gerencias
  { nombre: 'Evandro Hennemann', cargo: 'Gerencia · Ingeniería Alemana', foto: '/team/evandro.webp', division: 'corporativo' },
  { nombre: 'Carolina Casanova', cargo: 'Gerencia de Operaciones', foto: '/team/carolina.webp', division: 'corporativo' },
  // Liderazgos divisionales
  { nombre: 'Javier Medina', cargo: 'Liderazgo PROIECTA · Ingeniería civil', foto: '/team/javier.webp', division: 'proiecta' },
  { nombre: 'Nicolás Curkovic', cargo: 'Liderazgo PROIECTA · Diseño industrial', foto: '/team/nicolas.webp', division: 'proiecta' },
  { nombre: 'Yamina Pérez', cargo: 'Liderazgo PROAMBIENTE · Ingeniería ambiental', foto: '/team/yamina.webp', division: 'proambiente' },
  // Jefatura de proyectos
  { nombre: 'Cristian Fonseca', cargo: 'Jefe de Proyectos · Ing. Civil', foto: '/team/cristian.webp', division: 'plataforma' },
  { nombre: 'Catherine Vielma', cargo: 'Jefe de Proyecto · Ing. Civil', foto: '/team/catherine.webp', division: 'plataforma' },
  // Ingeniería
  { nombre: 'Abraham Medina', cargo: 'Ingeniero de Proyectos y Propuestas', foto: '/team/abraham.webp', division: 'plataforma' },
  { nombre: 'Isaac Arriagada', cargo: 'Ingeniero de Proyecto', foto: '/team/isaac.webp', division: 'plataforma' },
  { nombre: 'Nelson Ojeda', cargo: 'Ingeniero Ambiental', foto: '/team/nelson.webp', division: 'plataforma' },
  // Dibujo proyectista
  { nombre: 'Tania Armijo', cargo: 'Dibujante Proyectista', foto: '/team/tania.webp', division: 'plataforma' },
  { nombre: 'Carlos Riquelme', cargo: 'Dibujante Proyectista', foto: '/team/carlos.webp', division: 'plataforma' },
  // Administración
  { nombre: 'Maryelin Lucero', cargo: 'Analista Contable', foto: '/team/mary.webp', division: 'plataforma' },
  // Claudina Páez · Asistente Administración — sin foto disponible aún
];

export const plataformas = [
  {
    nombre: 'Plataforma técnica',
    descripcion: 'Equipo senior compartido entre las tres empresas: ingenieros y jefes de proyecto, dibujantes proyectistas, control de calidad e ingeniería de respaldo. La especialidad reside en cada empresa; la capacidad de ejecución es transversal.',
  },
  {
    nombre: 'Plataforma comercial',
    descripcion: 'Marca, web, presencia gremial y desarrollo de negocios. Una sola conversación comercial para clientes que requieren más de una disciplina.',
  },
  {
    nombre: 'Plataforma de gestión',
    descripcion: 'Backoffice, facturación, flujo de caja, contratos y Sistema de Gestión de Calidad (SGC ISO 9001:2015). Procesos administrativos centralizados para liberar tiempo técnico.',
  },
  {
    nombre: 'Plataforma digital',
    descripcion: 'Google Workspace, correo corporativo, repositorios documentales y herramientas de coordinación. Infraestructura común para los equipos distribuidos.',
  },
];
