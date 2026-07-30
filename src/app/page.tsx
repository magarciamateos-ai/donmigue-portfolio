import { Container } from "@/components/layout";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Container className="py-24">
        <p className="text-sm font-medium text-primary">
          Full Stack Developer
        </p>

        <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
          Miguel Ángel García Mateos
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Desarrollo aplicaciones web modernas, soluciones de inteligencia
          artificial y sistemas de automatización orientados a problemas reales.
        </p>
      </Container>
    </main>
  );
}