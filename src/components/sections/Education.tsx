import { Reveal } from "@/components/animations";
import { EducationCard } from "@/components/cards";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { education } from "@/data/education";

export function Education() {
  const primaryEducation = education.filter(
    (item) => item.featured
  );

  const complementaryEducation = education.filter(
    (item) => !item.featured
  );

  return (
    <Section
      id="formacion"
      className="overflow-hidden border-b border-white/10 bg-[#0B1017]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-[30rem] rounded-full bg-violet-600/10 blur-3xl"
      />

      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Formación"
            title={
              <>
                Ingeniería como base.
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                  Software e IA como evolución.
                </span>
              </>
            }
            description="Una formación multidisciplinar que combina pensamiento ingenieril, desarrollo de software, inteligencia artificial, automatización y capacidad para comunicar soluciones técnicas."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {primaryEducation.map((item, index) => (
            <Reveal
              key={`${item.title}-${item.period}`}
              delay={index * 0.1}
              distance={24}
            >
              <EducationCard education={item} />
            </Reveal>
          ))}
        </div>

        {complementaryEducation.length > 0 && (
          <div className="mt-10">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
              Formación complementaria
            </p>

            <div className="grid gap-5 lg:grid-cols-2">
              {complementaryEducation.map((item, index) => (
                <Reveal
                  key={`${item.title}-${item.period}`}
                  delay={index * 0.1}
                  distance={24}
                >
                  <EducationCard education={item} />
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
