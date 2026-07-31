export type Experience = {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  current?: boolean;
};

export const experiences: Experience[] = [
  {
    period: "2023 — Actualidad",
    role: "Desarrollador Full Stack",
    company: "Profesional independiente",
    location: "Huelva · Remoto",
    description:
      "Desarrollo de aplicaciones web, productos digitales, plataformas SaaS y soluciones de automatización orientadas a necesidades reales de negocio.",
    highlights: [
      "Desarrollo frontend y backend con React, Next.js, Node.js y TypeScript.",
      "Diseño e integración de APIs REST, autenticación y bases de datos.",
      "Automatización de procesos mediante N8N y servicios de terceros.",
      "Despliegue de aplicaciones con Docker, Linux, Traefik y VPS.",
    ],
    technologies: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Docker",
      "N8N",
    ],
    current: true,
  },
  {
    period: "2016 — 2021",
    role: "Ingeniería, fabricación y prototipado",
    company: "Alfalite",
    location: "Huelva, España",
    description:
      "Participación en procesos de diseño, fabricación, montaje y prototipado de soluciones técnicas, aplicando criterios de ingeniería y mejora continua.",
    highlights: [
      "Desarrollo y fabricación de prototipos.",
      "Interpretación de documentación y planos técnicos.",
      "Resolución de incidencias en procesos de fabricación.",
      "Coordinación entre diseño, producción y montaje.",
    ],
    technologies: [
      "Diseño mecánico",
      "Prototipado",
      "Fabricación",
      "Resolución de problemas",
    ],
  },
  {
    period: "2013 — 2016",
    role: "Mantenimiento técnico e industrial",
    company: "Bournemouth A&D Skips",
    location: "Bournemouth, Reino Unido",
    description:
      "Mantenimiento preventivo y correctivo de maquinaria, equipos e instalaciones en un entorno industrial y operativo.",
    highlights: [
      "Diagnóstico y resolución de averías.",
      "Mantenimiento preventivo de equipos.",
      "Reparaciones mecánicas y soporte técnico.",
      "Trabajo en entornos operativos exigentes.",
    ],
    technologies: [
      "Mantenimiento",
      "Mecánica",
      "Diagnóstico",
      "Instalaciones",
    ],
  },
];
