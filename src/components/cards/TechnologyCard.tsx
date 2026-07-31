import {
  Bot,
  Boxes,
  Code2,
  Database,
  ServerCog,
  Workflow,
  type LucideIcon,
} from "lucide-react";

import type {
  TechnologyCategory,
  TechnologyCategoryId,
} from "@/data/technologies";

type TechnologyCardProps = {
  category: TechnologyCategory;
};

const categoryIcons: Record<TechnologyCategoryId, LucideIcon> = {
  frontend: Code2,
  backend: Boxes,
  data: Database,
  devops: ServerCog,
  ai: Bot,
  automation: Workflow,
};

const categoryStyles: Record<
  TechnologyCategoryId,
  {
    icon: string;
    glow: string;
  }
> = {
  frontend: {
    icon: "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
    glow: "bg-cyan-400/10",
  },
  backend: {
    icon: "border-blue-400/20 bg-blue-400/[0.06] text-blue-300",
    glow: "bg-blue-400/10",
  },
  data: {
    icon: "border-violet-400/20 bg-violet-400/[0.06] text-violet-300",
    glow: "bg-violet-400/10",
  },
  devops: {
    icon: "border-emerald-400/20 bg-emerald-400/[0.06] text-emerald-300",
    glow: "bg-emerald-400/10",
  },
  ai: {
    icon: "border-fuchsia-400/20 bg-fuchsia-400/[0.06] text-fuchsia-300",
    glow: "bg-fuchsia-400/10",
  },
  automation: {
    icon: "border-amber-400/20 bg-amber-400/[0.06] text-amber-300",
    glow: "bg-amber-400/10",
  },
};

export function TechnologyCard({
  category,
}: TechnologyCardProps) {
  const Icon = categoryIcons[category.id];
  const styles = categoryStyles[category.id];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#151E2E] sm:p-7">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-0 size-40 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl transition duration-300 ${styles.glow}`}
      />

      <div className="relative flex items-start justify-between gap-5">
        <div
          className={`flex size-12 items-center justify-center rounded-2xl border ${styles.icon}`}
        >
          <Icon className="size-5" />
        </div>

        <span className="font-mono text-xs text-slate-600">
          {String(category.technologies.length).padStart(2, "0")}
        </span>
      </div>

      <div className="relative mt-7">
        <h3 className="text-xl font-semibold tracking-tight text-white">
          {category.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-slate-400">
          {category.description}
        </p>
      </div>

      <div className="relative mt-6 flex flex-wrap gap-2">
        {category.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-lg border border-white/10 bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-300 transition group-hover:border-white/15"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}
