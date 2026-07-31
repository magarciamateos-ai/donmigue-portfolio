import Link from "next/link";
import {
  ArrowUp,
  Mail,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { Logo } from "@/components/ui";

import { Container } from "./Container";

const footerNavigation = [
  {
    label: "Sobre mí",
    href: "#sobre-mi",
  },
  {
    label: "Proyectos",
    href: "#proyectos",
  },
  {
    label: "Experiencia",
    href: "#experiencia",
  },
  {
    label: "Tecnologías",
    href: "#tecnologias",
  },
  {
    label: "Formación",
    href: "#formacion",
  },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080C12]">
      <Container className="py-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_auto_auto] lg:items-start">
          <div className="max-w-md">
            <Link
              href="#inicio"
              aria-label="Volver al inicio"
              className="inline-flex"
            >
              <Logo
                variant="horizontal-dark"
                className="h-10 w-auto"
              />
            </Link>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Desarrollo de aplicaciones web, inteligencia artificial,
              automatización y soluciones de software orientadas a problemas
              reales.
            </p>
          </div>

          <nav aria-label="Navegación del pie de página">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Navegación
            </p>

            <ul className="grid gap-3">
              {footerNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-500 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Conectar
            </p>

            <div className="flex items-center gap-2">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition hover:border-white/20 hover:text-white"
              >
                <FaGithub className="size-5" />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition hover:border-white/20 hover:text-white"
              >
                <FaLinkedinIn className="size-5" />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Correo electrónico"
                className="flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-500 transition hover:border-white/20 hover:text-white"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 pt-7 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Miguel Ángel García Mateos. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-5">
            <p>
              Diseñado y desarrollado con Next.js, TypeScript y Tailwind CSS.
            </p>

            <Link
              href="#inicio"
              aria-label="Volver arriba"
              className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-white/10 text-slate-500 transition hover:border-white/20 hover:text-white"
            >
              <ArrowUp className="size-4" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
