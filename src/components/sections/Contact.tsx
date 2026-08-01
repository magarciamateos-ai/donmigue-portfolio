import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { Reveal } from "@/components/animations";
import { Container, Section } from "@/components/layout";
import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/config/site";

const contactMethods = [
  {
    label: "Correo electrónico",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "Teléfono",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Ubicación",
    value: siteConfig.location,
    href: null,
    icon: MapPin,
  },
] as const;

export function Contact() {
  const emailSubject = encodeURIComponent(
    "Contacto desde el portfolio DonMigue"
  );

  const emailBody = encodeURIComponent(
    `Hola Miguel Ángel:

He visitado tu portfolio y me gustaría hablar contigo sobre un proyecto u oportunidad profesional.

Un saludo.`
  );

  const contactHref =
    `mailto:${siteConfig.email}` +
    `?subject=${emailSubject}` +
    `&body=${emailBody}`;

  return (
    <Section
      id="contacto"
      className="overflow-hidden bg-[#0D1117]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl"
      />

      <Container>
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#111827]/80 p-7 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 -top-32 size-80 rounded-full bg-violet-600/15 blur-3xl"
          />

          <div className="relative grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Reveal>
                <SectionHeading
                  eyebrow="Contacto"
                  title={
                    <>
                      ¿Tienes una idea, un proyecto o una
                      <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                        {" "}oportunidad profesional?
                      </span>
                    </>
                  }
                  description="Estoy disponible para colaborar en proyectos de desarrollo web, aplicaciones, inteligencia artificial, automatización y soluciones de software."
                />
              </Reveal>

              <Reveal distance={24}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={contactHref}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#00D4FF] via-[#2563EB] to-[#7C3AED] px-6 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_35px_rgba(37,99,235,0.25)]"
                  >
                    Escribirme
                    <Send className="size-4" />
                  </a>

                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 text-sm font-semibold text-white transition duration-200 hover:border-white/25 hover:bg-white/[0.07]"
                  >
                    Llamar
                    <Phone className="size-4" />
                  </a>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-500">
                  Normalmente respondo por correo electrónico en cuanto me es
                  posible. También puedes contactar conmigo a través de LinkedIn.
                </p>
              </Reveal>
            </div>

            <Reveal
              className="space-y-3"
              delay={0.12}
              distance={24}
            >
              {contactMethods.map((method) => {
                const Icon = method.icon;

                const content = (
                  <>
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] text-cyan-300">
                      <Icon className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">
                        {method.label}
                      </p>

                      <p className="mt-1 truncate text-sm text-slate-300">
                        {method.value}
                      </p>
                    </div>

                    {method.href && (
                      <ArrowUpRight className="ml-auto size-4 shrink-0 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300" />
                    )}
                  </>
                );

                if (!method.href) {
                  return (
                    <div
                      key={method.label}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={method.label}
                    href={method.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.025] p-4 transition duration-200 hover:border-cyan-400/20 hover:bg-white/[0.05]"
                  >
                    {content}
                  </a>
                );
              })}

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm font-medium text-slate-300 transition duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <FaGithub className="size-5" />
                  GitHub
                  <ArrowUpRight className="size-3.5 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-4 text-sm font-medium text-slate-300 transition duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
                >
                  <FaLinkedinIn className="size-5" />
                  LinkedIn
                  <ArrowUpRight className="size-3.5 text-slate-600 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
