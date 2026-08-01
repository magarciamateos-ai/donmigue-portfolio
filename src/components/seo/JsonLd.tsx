import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,

  name: siteConfig.name,
  alternateName: siteConfig.shortName,
  url: siteConfig.url,
  image: `${siteConfig.url}/opengraph-image`,

  jobTitle: "Full Stack Developer especializado en IA y automatización",
  description: siteConfig.description,

  email: `mailto:${siteConfig.email}`,

  address: {
    "@type": "PostalAddress",
    addressLocality: "Huelva",
    addressCountry: "ES",
  },

  sameAs: [
    siteConfig.github,
    siteConfig.linkedin,
  ],

  knowsAbout: [
    "Desarrollo web",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Inteligencia Artificial",
    "Automatización de procesos",
    "Aplicaciones SaaS",
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
