import { cn } from "@/lib/utils";

import { Container } from "./Container";

type FooterProps = React.ComponentProps<"footer">;

export function Footer({ className, ...props }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer
      className={cn("mt-auto border-t border-border/60 py-8", className)}
      {...props}
    >
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {year} Donmigue. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground">Built with Next.js</p>
      </Container>
    </footer>
  );
}
