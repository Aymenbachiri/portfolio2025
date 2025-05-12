"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

// Define the projects data
const projectsData = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart, and checkout.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "nextjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "ecommerce-platform",
  },
  {
    id: "project2",
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    category: "nextjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "blog-cms",
  },
  {
    id: "project3",
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication and authorization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Express.js", "MongoDB", "JWT", "Docker"],
    category: "expressjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "task-management-api",
  },
  {
    id: "project4",
    title: "Real-time Chat",
    description: "Real-time chat application with private and group messaging.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Express.js", "Socket.io", "React", "Redis"],
    category: "expressjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "real-time-chat",
  },
  {
    id: "project5",
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts, nutrition, and progress.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    category: "reactnative",
    repoUrl: "#",
    demoUrl: "#",
    slug: "fitness-tracker-app",
  },
  {
    id: "project6",
    title: "Travel Companion",
    description:
      "Mobile app for planning trips, finding attractions, and tracking expenses.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Expo", "Google Maps API", "AsyncStorage"],
    category: "reactnative",
    repoUrl: "#",
    demoUrl: "#",
    slug: "travel-companion",
  },
  {
    id: "project7",
    title: "Inventory Management System",
    description:
      "Web application for managing inventory, orders, and suppliers.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "Blazor"],
    category: "aspnetcore",
    repoUrl: "#",
    demoUrl: "#",
    slug: "inventory-management-system",
  },
  {
    id: "project8",
    title: "HR Portal",
    description:
      "Employee management portal with time tracking and performance reviews.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["ASP.NET Core", "Identity", "SQL Server", "React"],
    category: "aspnetcore",
    repoUrl: "#",
    demoUrl: "#",
    slug: "hr-portal",
  },
];

// Define the categories
const categories = [
  { id: "nextjs", name: "Next.js" },
  { id: "expressjs", name: "Express.js" },
  { id: "reactnative", name: "React Native (Expo)" },
  { id: "aspnetcore", name: "ASP.NET Core" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("nextjs");

  const filteredProjects = projectsData.filter(
    (project) => project.category === activeCategory,
  );

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
          <div className="mx-auto h-1 w-20 bg-gray-500"></div>
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
          className="grid gap-8 md:grid-cols-2"
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
              className="m-4 overflow-hidden rounded-lg shadow-md dark:shadow-md dark:shadow-gray-100"
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
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground mb-4">
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

                <div className="flex justify-between">
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
