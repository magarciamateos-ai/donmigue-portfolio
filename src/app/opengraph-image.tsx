import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

export const alt = `${siteConfig.name} — ${siteConfig.title}`;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #06141c 0%, #080d18 55%, #120c2c 100%)",
          color: "#ffffff",
          fontFamily: "Arial, sans-serif",
        }}
      >
        {/* Cuadrícula de fondo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            opacity: 0.12,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Resplandor */}
        <div
          style={{
            position: "absolute",
            right: -150,
            bottom: -220,
            display: "flex",
            width: 650,
            height: 650,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(124,58,237,0.38) 0%, rgba(37,99,235,0.16) 45%, transparent 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "70px 82px",
          }}
        >
          {/* Marca */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 72,
                height: 72,
                borderRadius: "50%",
                border: "3px solid #00d4ff",
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.16), rgba(124,58,237,0.25))",
                color: "#00d4ff",
                fontSize: 27,
                fontWeight: 800,
              }}
            >
              DM
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  fontWeight: 800,
                }}
              >
                DonMigue
              </span>

              <span
                style={{
                  color: "#94a3b8",
                  fontSize: 18,
                }}
              >
                Full Stack Developer
              </span>
            </div>
          </div>

          {/* Mensaje principal */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 970,
            }}
          >
            <span
              style={{
                marginBottom: 18,
                color: "#00d4ff",
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              Software · IA · Automatización
            </span>

            <span
              style={{
                fontSize: 67,
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-0.045em",
              }}
            >
              Construyo software,
            </span>

            <span
              style={{
                fontSize: 67,
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-0.045em",
                color: "#38bdf8",
              }}
            >
              IA y automatizaciones
            </span>

            <span
              style={{
                fontSize: 67,
                fontWeight: 800,
                lineHeight: 1.03,
                letterSpacing: "-0.045em",
              }}
            >
              que resuelven problemas reales.
            </span>
          </div>

          {/* Pie */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "#94a3b8",
              fontSize: 20,
            }}
          >
            <span>Miguel Ángel García Mateos</span>

            <span
              style={{
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Huelva, España
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
