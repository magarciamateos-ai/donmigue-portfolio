import {
  BriefcaseBusiness,
  CheckCircle2,
  MapPin,
} from "lucide-react";

import type { Experience } from "@/data/experience";

type ExperienceItemProps = {
  experience: Experience;
  index: number;
};

export function ExperienceItem({
  experience,
  index,
}: ExperienceItemProps) {
  return (
    <article className="relative grid gap-6 pb-14 last:pb-0 md:grid-cols-[11rem_1fr] md:gap-10">
      <div className="md:text-right">
        <p className="font-mono text-sm text-cyan-400">
          {experience.period}
        </p>

        {experience.current && (
          <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-xs text-emerald-300">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Actual
          </span>
        )}
      </div>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute -left-[2.93rem] top-1 hidden size-4 rounded-full border-4 border-[#0B1017] bg-gradient-to-br from-cyan-400 to-violet-500 md:block"
        />

        <div
          aria-hidden="true"
          className="absolute -left-10 top-5 hidden h-[calc(100%+2rem)] w-px bg-gradient-to-b from-white/15 to-transparent md:block"
        />

        <div className="rounded-3xl border border-white/10 bg-[#111827]/70 p-6 transition duration-300 hover:border-cyan-400/20 hover:bg-[#151E2E] sm:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm text-slate-500">
                <BriefcaseBusiness className="size-4 text-cyan-400" />
                {experience.company}
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                {experience.role}
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                {experience.description}
              </p>
            </div>

            <div className="flex shrink-0 items-center gap-2 text-sm text-slate-500">
              <MapPin className="size-4" />
              {experience.location}
            </div>
          </div>

          <ul className="mt-7 grid gap-3 lg:grid-cols-2">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex items-start gap-3 text-sm leading-6 text-slate-400"
              >
                <CheckCircle2 className="mt-1 size-4 shrink-0 text-cyan-400" />
                {highlight}
              </li>
            ))}
          </ul>

          {experience.technologies && (
            <div className="mt-7 flex flex-wrap gap-2 border-t border-white/10 pt-6">
              {experience.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}
        </div>

        <span className="sr-only">
          Experiencia número {index + 1}
        </span>
      </div>
    </article>
  );
}
