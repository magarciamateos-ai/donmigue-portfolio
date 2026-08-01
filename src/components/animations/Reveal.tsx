"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  distance = 24,
  once = true,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : {
              opacity: 0,
              y: distance,
            }
      }
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount: 0.18,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
