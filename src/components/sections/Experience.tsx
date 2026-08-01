import { Reveal } from "@/components/animations";
import { ExperienceItem } from "@/components/cards";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experiencia"
      className="overflow-hidden border-b border-white/10 bg-[#0B1017]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 size-[32rem] rounded-full bg-blue-600/10 blur-3xl"
      />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Experiencia"
            title={
              <>
                Un recorrido entre la ingeniería y el
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  {" "}desarrollo de software.
                </span>
              </>
            }
            description="Mi experiencia profesional combina ingeniería, fabricación, mantenimiento y desarrollo tecnológico. Esa perspectiva multidisciplinar me permite abordar el software con una mentalidad práctica y orientada a resultados."
          />
        </Reveal>

        <div className="mt-16">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.company}-${experience.period}`}
              delay={index * 0.1}
              distance={24}
            >
              <ExperienceItem
                experience={experience}
                index={index}
              />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
