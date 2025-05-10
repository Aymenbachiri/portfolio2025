import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Navbar } from "@/components/navbar";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-black dark:text-white">
      <Navbar />
      <Banner />
      <About />
      {/* <SkillsSection /> */}
      {/* <ProjectsSection /> */}
      {/* <ContactSection /> */}
      {/* <Footer /> */}
    </main>
  );
}
