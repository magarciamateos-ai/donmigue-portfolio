"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { Logo } from "@/components/ui";
import { mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";

import { Container } from "./Container";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0D1117]/85 backdrop-blur-xl">
      <Container className="relative flex h-16 items-center justify-between">
        <Link
          href="#inicio"
          aria-label="Ir al inicio"
          onClick={closeMenu}
          className="shrink-0"
        >
          <Logo
            variant="horizontal-dark"
            className="h-9 w-auto"
            loading="eager"
          />
        </Link>

        {/* Navegación de escritorio */}
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

        <div className="flex items-center gap-1">
          {/* Redes visibles desde tablet */}
          <div className="hidden items-center gap-1 sm:flex">
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
          </div>

          <Link
            href="#contacto"
            className="ml-2 hidden rounded-lg bg-gradient-to-r from-[#00D4FF] via-[#2563EB] to-[#7C3AED] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90 md:inline-flex"
          >
            Contactar
          </Link>

          {/* Botón móvil */}
          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Cerrar menú de navegación"
                : "Abrir menú de navegación"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="ml-2 flex size-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white lg:hidden"
          >
            {isMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </Container>

      {/* Menú móvil */}
      {isMenuOpen && (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={closeMenu}
            className="fixed inset-x-0 bottom-0 top-16 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-full z-50 border-b border-white/10 bg-[#0D1117] shadow-2xl lg:hidden"
          >
            <Container className="py-5">
              <nav aria-label="Navegación móvil">
                <ul className="grid gap-1">
                  {mainNavigation.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-slate-300 transition hover:bg-white/[0.05] hover:text-white"
                      >
                        {item.label}

                        <span
                          aria-hidden="true"
                          className="text-sm text-slate-600"
                        >
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-5">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub className="size-5" />
                  GitHub
                </a>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <FaLinkedinIn className="size-5" />
                  LinkedIn
                </a>
              </div>

              <Link
                href="#contacto"
                onClick={closeMenu}
                className="mt-3 flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#2563EB] to-[#7C3AED] px-5 text-sm font-semibold text-white"
              >
                Contactar
              </Link>
            </Container>
          </div>
        </>
      )}
    </header>
  );
}
