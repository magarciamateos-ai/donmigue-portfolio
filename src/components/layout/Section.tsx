import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

type SectionProps = ComponentPropsWithoutRef<"section">;

export function Section({
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative scroll-mt-16 py-24 sm:py-28 lg:py-32",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
