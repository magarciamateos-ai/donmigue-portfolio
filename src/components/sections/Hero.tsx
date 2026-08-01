import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  Code2,
  Mail,
  MapPin,
  Server,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/animations";
import { Container } from "@/components/layout";
import { Logo } from "@/components/ui";
import { siteConfig } from "@/config/site";

const capabilities = [
  {
    label: "Desarrollo web",
    description: "React, Next.js y TypeScript",
    icon: Code2,
  },
  {
    label: "Inteligencia artificial",
    description: "LLM, OpenAI y Ollama",
    icon: BrainCircuit,
  },
  {
    label: "Automatización",
    description: "N8N, APIs y workflows",
    icon: Workflow,
  },
  {
    label: "DevOps",
    description: "Docker, Linux y VPS",
    icon: Server,
  },
] as const;

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden border-b border-white/10"
    >
      {/* Iluminación decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <Container className="relative grid min-h-[calc(100svh-4rem)] items-center gap-16 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-28">
        {/* Contenido principal */}
        <Reveal className="min-w-0 max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-sm text-emerald-300">
            <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
            Disponible para oportunidades y nuevos proyectos
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Full Stack Developer · AI & Automation
          </p>

          <h1 className="max-w-full text-balance text-[clamp(1.75rem,9vw,2.25rem)] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
            Construyo software,
            <span className="block max-w-full bg-gradient-to-r from-[#00D4FF] via-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
              IA y automatizaciones
            </span>
            que resuelven problemas reales.
          </h1>

          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-400 sm:text-xl">
            Desarrollo aplicaciones web modernas, plataformas SaaS y sistemas
            de automatización combinando ingeniería, software e inteligencia
            artificial.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#proyectos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#2563EB] to-[#7C3AED] px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(37,99,235,0.25)]"
            >
              Ver proyectos
              <ArrowRight className="size-4" />
            </Link>

            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition duration-200 hover:border-white/25 hover:bg-white/[0.07]"
            >
              Contactar
              <Mail className="size-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <MapPin className="size-4 text-cyan-400" />
            {siteConfig.location}
            <span aria-hidden="true">·</span>
            Presencial, híbrido o remoto
          </div>
        </Reveal>

        {/* Panel técnico */}
        <Reveal
          className="relative mx-auto w-full max-w-lg"
          delay={0.15}
          distance={32}
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-blue-600/10 to-violet-600/30 blur-xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111827]/85 p-6 shadow-2xl backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
              <div className="flex items-center gap-3">
                <Logo
                  variant="icon-color"
                  className="size-12"
                  preload
                />

                <div>
                  <p className="font-semibold text-white">DonMigue</p>
                  <p className="text-sm text-slate-500">
                    Software · AI · Automation
                  </p>
                </div>
              </div>

              <div
                className="flex gap-1.5"
                aria-hidden="true"
              >
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>
            </div>

            <p className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-slate-500">
              Áreas de especialización
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              {capabilities.map((capability) => {
                const Icon = capability.icon;

                return (
                  <article
                    key={capability.label}
                    className="group rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-200 hover:border-cyan-400/25 hover:bg-white/[0.05]"
                  >
                    <div className="mb-4 flex size-10 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/5 text-cyan-300">
                      <Icon className="size-5" />
                    </div>

                    <h2 className="text-sm font-semibold text-white">
                      {capability.label}
                    </h2>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      {capability.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 font-mono text-xs leading-6 text-slate-400">
              <p>
                <span className="text-violet-400">const</span>{" "}
                <span className="text-cyan-300">approach</span> = [
              </p>
              <p className="pl-4 text-slate-300">
                &quot;analyze&quot;, &quot;build&quot;, &quot;automate&quot;,
              </p>
              <p>];</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
