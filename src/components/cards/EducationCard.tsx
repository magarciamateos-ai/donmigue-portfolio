import {
  Bot,
  GraduationCap,
  Settings,
  type LucideIcon,
} from "lucide-react";

import type {
  Education,
  EducationType,
} from "@/data/education";

type EducationCardProps = {
  education: Education;
};

const educationIcons: Record<EducationType, LucideIcon> = {
  software: Bot,
  engineering: Settings,
  complementary: GraduationCap,
};

const educationStyles: Record<
  EducationType,
  {
    icon: string;
    period: string;
    glow: string;
  }
> = {
  software: {
    icon: "border-cyan-400/20 bg-cyan-400/[0.06] text-cyan-300",
    period: "text-cyan-400",
    glow: "bg-cyan-400/10",
  },
  engineering: {
    icon: "border-blue-400/20 bg-blue-400/[0.06] text-blue-300",
    period: "text-blue-400",
    glow: "bg-blue-500/10",
  },
  complementary: {
    icon: "border-violet-400/20 bg-violet-400/[0.06] text-violet-300",
    period: "text-violet-400",
    glow: "bg-violet-500/10",
  },
};

export function EducationCard({
  education,
}: EducationCardProps) {
  const Icon = educationIcons[education.type];
  const styles = educationStyles[education.type];

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/75 p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#151E2E] sm:p-7">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-0 size-40 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl ${styles.glow}`}
      />

      <div className="relative flex items-start justify-between gap-6">
        <div
          className={`flex size-12 items-center justify-center rounded-2xl border ${styles.icon}`}
        >
          <Icon className="size-5" />
        </div>

        <span className={`font-mono text-sm ${styles.period}`}>
          {education.period}
        </span>
      </div>

      <div className="relative mt-7">
        {education.institution && (
          <p className="mb-2 text-sm font-medium text-slate-500">
            {education.institution}
          </p>
        )}

        <h3 className="text-xl font-semibold tracking-tight text-white">
          {education.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-slate-400">
          {education.description}
        </p>
      </div>

      <ul className="relative mt-6 grid gap-2">
        {education.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-3 text-sm text-slate-400"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}
