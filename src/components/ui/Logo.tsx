import Image from "next/image";

import { cn } from "@/lib/utils";

type LogoVariant =
  | "horizontal-dark"
  | "horizontal-light"
  | "icon-color"
  | "icon-black"
  | "icon-white";

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
  preload?: boolean;
  loading?: "eager" | "lazy";
};

const logos: Record<
  LogoVariant,
  {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
> = {
  "horizontal-dark": {
    src: "/branding/logo-horizontal-dark.svg",
    alt: "DonMigue Developer",
    width: 640,
    height: 200,
  },

  "horizontal-light": {
    src: "/branding/logo-horizontal-light.svg",
    alt: "DonMigue Developer",
    width: 640,
    height: 200,
  },

  "icon-color": {
    src: "/branding/icon-color.svg",
    alt: "DonMigue",
    width: 256,
    height: 256,
  },

  "icon-black": {
    src: "/branding/icon-black.svg",
    alt: "DonMigue",
    width: 256,
    height: 256,
  },

  "icon-white": {
    src: "/branding/icon-white.svg",
    alt: "DonMigue",
    width: 256,
    height: 256,
  },
};

export function Logo({
  variant = "horizontal-dark",
  className,
  preload = false,
  loading,
}: LogoProps) {
  const logo = logos[variant];
  const loadingMode = loading ?? (preload ? "eager" : "lazy");

  return (
    <Image
      preload={preload}
      loading={loadingMode}
      src={logo.src}
      alt={logo.alt}
      width={logo.width}
      height={logo.height}
      className={cn("h-auto w-auto", className)}
    />
  );
}
