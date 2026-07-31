import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

import { Container } from "./Container";
import { Logo } from "@/components/ui";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D1117]/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="#inicio"
          aria-label="Ir al inicio"
          className="shrink-0"
        >
          <Logo
            variant="horizontal-dark"
            className="h-9 w-auto"
            priority
          />
        </Link>

        <nav
          className="hidden lg:block"
          aria-label="Navegación principal"
        >
          <ul className="flex items-center gap-1">
            {mainNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub de Miguel Ángel García Mateos"
            className="rounded-md p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <FaGithub className="size-5" />
          </a>

          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn de Miguel Ángel García Mateos"
            className="rounded-md p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <FaLinkedinIn className="size-5" />
          </a>

          <Link
            href="#contacto"
            className="ml-2 hidden rounded-lg bg-gradient-to-r from-[#00D4FF] via-[#2563EB] to-[#7C3AED] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:inline-flex"
          >
            Contactar
          </Link>
        </div>
      </Container>
    </header>
  );
}
