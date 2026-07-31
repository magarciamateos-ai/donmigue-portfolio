export type EducationType =
  | "software"
  | "engineering"
  | "complementary";

export type Education = {
  title: string;
  institution?: string;
  period: string;
  description: string;
  type: EducationType;
  highlights: string[];
  featured?: boolean;
};

export const education: Education[] = [
  {
    title: "Máster de Especialista en Programación con IA",
    institution: "Racks Academy",
    period: "2025 — 2026",
    description:
      "Formación especializada en programación moderna, desarrollo de aplicaciones e integración de inteligencia artificial en soluciones de software.",
    type: "software",
    highlights: [
      "IA aplicada al desarrollo de software",
      "Desarrollo de aplicaciones",
      "Herramientas de programación asistida",
      "Automatización y productividad",
    ],
    featured: true,
  },
  {
    title: "Máster de Especialista en Inteligencia Artificial",
    institution: "Racks Academy",
    period: "2025 — 2026",
    description:
      "Especialización en inteligencia artificial, automatización, chatbots, creación de soluciones SaaS y aplicación de IA a procesos empresariales.",
    type: "software",
    highlights: [
      "Inteligencia artificial generativa",
      "N8N y automatización",
      "Chatbots y asistentes",
      "Creación de productos SaaS",
    ],
    featured: true,
  },
  {
    title: "Ingeniería Técnica Industrial Mecánica",
    institution: "Universidad de Huelva",
    period: "2009 — 2013",
    description:
      "Formación técnica en ingeniería, diseño, fabricación, mecánica, análisis de sistemas y resolución estructurada de problemas complejos.",
    type: "engineering",
    highlights: [
      "Diseño y análisis técnico",
      "Procesos de fabricación",
      "Mecánica y materiales",
      "Pensamiento analítico",
    ],
    featured: true,
  },
  {
    title: "Máster Universitario en Formación del Profesorado",
    institution: "Universidad Europea de Canarias",
    period: "2023 — 2024",
    description:
      "Formación complementaria en comunicación, planificación, presentación de contenidos técnicos y gestión de proyectos educativos.",
    type: "complementary",
    highlights: [
      "Comunicación técnica",
      "Planificación y documentación",
      "Presentación de contenidos",
      "Coordinación de proyectos",
    ],
    featured: false,
  },
];
