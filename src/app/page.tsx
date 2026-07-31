import {
  About,
  Hero,
  Projects,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="bg-[#0D1117] text-white">
      <Hero />
      <About />
      <Projects />
    </main>
  );
}
