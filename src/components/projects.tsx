"use client";

import type { JSX } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { categories } from "./projects/projects-categories";
import { useProjects } from "@/lib/hooks/useProjects";

export function Projects(): JSX.Element {
  const { filteredProjects, activeCategory, setActiveCategory } = useProjects();

  return (
    <section id="projects" className="mx-auto w-full max-w-6xl py-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Projects</h2>
          <div className="mx-auto h-1 w-20 bg-gray-500" />
        </motion.div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`rounded-md px-6 py-3 text-sm transition-colors md:text-base ${
                activeCategory === category.id
                  ? "bg-gray-500 text-gray-200 dark:bg-gray-700"
                  : ""
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        <motion.div
          className="grid auto-rows-fr gap-8 md:grid-cols-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          key={activeCategory}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="m-4 flex h-full flex-col overflow-hidden rounded-lg shadow-md dark:shadow-gray-100"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 flex-grow text-gray-800 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-300 px-3 py-1 text-xs dark:bg-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex justify-between">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-primary hover:underline"
                  >
                    View Details
                  </Link>
                  <div className="flex gap-4">
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 transition-colors hover:text-gray-500 dark:text-gray-200"
                      aria-label="GitHub Repository"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 transition-colors hover:text-gray-500 dark:text-gray-200"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
