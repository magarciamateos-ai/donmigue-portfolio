import { TechnologyCard } from "@/components/cards";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { technologyCategories } from "@/data/technologies";

export function Technologies() {
  return (
    <Section
      id="tecnologias"
      className="overflow-hidden border-b border-white/10 bg-[#0D1117]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 size-[34rem] translate-x-1/2 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 size-96 rounded-full bg-violet-600/10 blur-3xl"
      />

      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Tecnologías"
            title={
              <>
                Un stack completo para construir
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  {" "}
                  productos de extremo a extremo.
                </span>
              </>
            }
            description="Combino desarrollo frontend, backend, datos, infraestructura, inteligencia artificial y automatización para llevar una solución desde la idea hasta producción."
          />

          <p className="max-w-sm text-sm leading-7 text-slate-500 lg:text-right">
            Las herramientas cambian. El objetivo permanece: elegir la
            tecnología adecuada para resolver cada problema con calidad,
            mantenibilidad y criterio técnico.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {technologyCategories.map((category) => (
            <TechnologyCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
