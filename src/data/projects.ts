export type Project = {
  title: string;
  description: string;
  technologies: string[];
  status: "Terminado" | "En desarrollo";
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "Gestión de Flotas",
    description:
      "Plataforma web para gestionar vehículos, conductores, mantenimientos, incidencias y documentación desde un panel centralizado.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "REST API",
      "Docker",
    ],
    status: "En desarrollo",
    featured: true,
  },
  {
    title: "Tienda DonMigue",
    description:
      "Aplicación de comercio electrónico para presentar y vender productos artesanales personalizados mediante corte y grabado láser.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    status: "En desarrollo",
    featured: true,
  },
  {
    title: "Portfolio DonMigue",
    description:
      "Portfolio profesional desarrollado como una aplicación moderna, accesible, responsive y optimizada para rendimiento y SEO.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    status: "En desarrollo",
    featured: true,
  },
];
