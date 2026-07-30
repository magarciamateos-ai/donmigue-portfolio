import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading tracking-tight text-foreground", {
  variants: {
    as: {
      h1: "text-4xl font-semibold sm:text-5xl",
      h2: "text-3xl font-semibold sm:text-4xl",
      h3: "text-2xl font-semibold",
      h4: "text-xl font-medium",
      h5: "text-lg font-medium",
      h6: "text-base font-medium",
    },
  },
  defaultVariants: {
    as: "h2",
  },
});

type HeadingProps = React.ComponentProps<"h1"> &
  VariantProps<typeof headingVariants> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  };

export function Heading({
  as = "h2",
  className,
  children,
  ...props
}: HeadingProps) {
  const Comp = as;

  return (
    <Comp className={cn(headingVariants({ as }), className)} {...props}>
      {children}
    </Comp>
  );
}
