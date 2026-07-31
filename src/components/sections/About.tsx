import {
  BrainCircuit,
  Code2,
  Cog,
  Workflow,
} from "lucide-react";

import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";

const strengths = [
  {
    title: "Pensamiento ingenieril",
    description:
      "Analizo cada problema de forma estructurada antes de diseñar la solución.",
    icon: Cog,
  },
  {
    title: "Desarrollo Full Stack",
    description:
      "Construyo interfaces, APIs, bases de datos y despliegues de extremo a extremo.",
    icon: Code2,
  },
  {
    title: "Inteligencia artificial",
    description:
      "Integro modelos LLM y herramientas de IA en productos y procesos reales.",
    icon: BrainCircuit,
  },
  {
    title: "Automatización",
    description:
      "Conecto sistemas, APIs y flujos de trabajo para reducir tareas repetitivas.",
    icon: Workflow,
  },
] as const;

export function About() {
  return (
    <Section
      id="sobre-mi"
      className="overflow-hidden border-b border-white/10 bg-[#0B1017]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/3 size-96 rounded-full bg-blue-600/10 blur-3xl"
      />

      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Sobre mí"
              title={
                <>
                  Ingeniería, software y una obsesión por
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                    {" "}resolver problemas.
                  </span>
                </>
              }
              description="Soy Ingeniero Técnico Industrial y desarrollador Full Stack. Combino pensamiento analítico, experiencia técnica y desarrollo de software para crear soluciones digitales útiles, escalables y mantenibles."
            />

            <div className="mt-8 space-y-5 text-base leading-8 text-slate-400">
              <p>
                Trabajo principalmente con React, Next.js, Node.js,
                TypeScript, Docker y Linux, cubriendo desde la interfaz
                y la lógica de negocio hasta el despliegue.
              </p>

              <p>
                También desarrollo automatizaciones con N8N e integro
                inteligencia artificial mediante LLM, OpenAI, Ollama y
                bases de datos vectoriales.
              </p>
            </div>

            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Producto",
                "Arquitectura",
                "Frontend",
                "Backend",
                "IA",
                "Automatización",
                "DevOps",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-sm text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((strength) => {
              const Icon = strength.icon;

              return (
                <article
                  key={strength.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-[#151E2E]"
                >
                  <div
                    aria-hidden="true"
                    className="absolute right-0 top-0 size-24 translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-2xl"
                  />

                  <div className="mb-5 flex size-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
                    <Icon className="size-5" />
                  </div>

                  <h3 className="text-base font-semibold text-white">
                    {strength.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {strength.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
