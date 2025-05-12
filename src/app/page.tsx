import { About } from "@/components/about";
import { Banner } from "@/components/banner";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import type { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-[#292a2c] dark:text-white">
      <Navbar />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
