import { Reveal } from "@/components/animations";
import { Container, Section } from "@/components/layout";
import { ProjectCard } from "@/components/cards";
import { SectionHeading } from "@/components/ui";
import { projects } from "@/data/projects";

export function Projects() {
  const featuredProjects = projects.filter(
    (project) => project.featured
  );

  return (
    <Section
      id="proyectos"
      className="overflow-hidden border-b border-white/10 bg-[#0D1117]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/4 size-[32rem] translate-x-1/2 rounded-full bg-violet-600/10 blur-3xl"
      />

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Proyectos destacados"
              title={
                <>
                  Software pensado para
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                    {" "}resolver necesidades reales.
                  </span>
                </>
              }
              description="Una selección de aplicaciones en las que combino desarrollo Full Stack, diseño de producto, automatización e infraestructura."
            />
          </Reveal>

          <p className="max-w-sm text-sm leading-7 text-slate-500 lg:text-right">
            Cada proyecto tendrá próximamente su propia página con arquitectura,
            decisiones técnicas, capturas, código y demo.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={index * 0.1}
              distance={28}
            >
              <ProjectCard
                project={project}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
