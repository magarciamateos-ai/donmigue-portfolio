export type TechnologyCategoryId =
  | "frontend"
  | "backend"
  | "data"
  | "devops"
  | "ai"
  | "automation";

export type TechnologyCategory = {
  id: TechnologyCategoryId;
  title: string;
  description: string;
  technologies: string[];
};

export const technologyCategories: TechnologyCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Interfaces modernas, accesibles, responsive y orientadas a una buena experiencia de usuario.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description:
      "Servicios, lógica de negocio, autenticación e integración entre aplicaciones.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Autenticación",
      "Integración de APIs",
      "Arquitectura cliente-servidor",
    ],
  },
  {
    id: "data",
    title: "Datos",
    description:
      "Persistencia, modelado de información y búsqueda tradicional y semántica.",
    technologies: [
      "MongoDB",
      "MySQL",
      "Qdrant",
      "SQL",
      "NoSQL",
      "Bases de datos vectoriales",
    ],
  },
  {
    id: "devops",
    title: "DevOps e infraestructura",
    description:
      "Despliegue, contenerización y administración de aplicaciones en servidores.",
    technologies: [
      "Docker",
      "Docker Compose",
      "Linux",
      "VPS",
      "Traefik",
      "Git",
      "GitHub",
    ],
  },
  {
    id: "ai",
    title: "Inteligencia artificial",
    description:
      "Integración de modelos de lenguaje y sistemas inteligentes en productos digitales.",
    technologies: [
      "OpenAI API",
      "Ollama",
      "LLMs",
      "RAG",
      "Embeddings",
      "Prompt Engineering",
      "Qdrant",
    ],
  },
  {
    id: "automation",
    title: "Automatización",
    description:
      "Diseño de workflows que conectan herramientas, servicios y procesos empresariales.",
    technologies: [
      "N8N",
      "Webhooks",
      "Gmail",
      "Telegram",
      "Google Calendar",
      "APIs de terceros",
      "Automatización de procesos",
    ],
  },
];
