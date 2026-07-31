import { ArrowUpRight, Code2 } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const formattedIndex = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/25 hover:bg-[#151E2E] sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 size-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-violet-500/10 blur-3xl transition duration-300 group-hover:bg-cyan-400/10"
      />

      <div className="relative flex items-start justify-between gap-6">
        <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300">
          <Code2 className="size-5" />
        </div>

        <span className="font-mono text-sm text-slate-600">
          {formattedIndex}
        </span>
      </div>

      <div className="relative mt-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span
            className={
              project.status === "Terminado"
                ? "rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-2.5 py-1 text-xs font-medium text-emerald-300"
                : "rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-2.5 py-1 text-xs font-medium text-amber-300"
            }
          >
            {project.status}
          </span>

          <span className="text-xs text-slate-600">
            Proyecto destacado
          </span>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {project.description}
        </p>
      </div>

      <div className="relative mt-7 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-400"
          >
            {technology}
          </span>
        ))}
      </div>

      <div className="relative mt-auto flex items-center justify-between border-t border-white/10 pt-6">
        <span className="text-sm text-slate-500">
          Caso de estudio próximamente
        </span>

        <ArrowUpRight className="size-4 text-slate-600 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
      </div>
    </article>
  );
}
