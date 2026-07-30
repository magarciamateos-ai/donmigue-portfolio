import { cn } from "@/lib/utils";

import { Container } from "./Container";

type SectionProps = React.ComponentProps<"section"> & {
  container?: boolean;
};

export function Section({
  className,
  children,
  container = true,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", className)} {...props}>
      {container ? <Container>{children}</Container> : children}
    </section>
  );
}
