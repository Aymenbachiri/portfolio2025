"use client";

import { useState, useEffect, type JSX } from "react";
import { motion } from "motion/react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/utils";

const skillsData = [
  { name: "HTML", logo: "🌐", category: "frontend" },
  { name: "CSS", logo: "🎨", category: "frontend" },
  { name: "JavaScript", logo: "📜", category: "frontend" },
  { name: "TypeScript", logo: "📘", category: "frontend" },
  { name: "React", logo: "⚛️", category: "frontend" },
  { name: "Next.js", logo: "▲", category: "frontend" },
  { name: "Tailwind CSS", logo: "🌊", category: "frontend" },
  { name: "Framer Motion", logo: "🎭", category: "frontend" },
  { name: "Node.js", logo: "🟢", category: "backend" },
  { name: "Express.js", logo: "🚂", category: "backend" },
  { name: "ASP.NET Core", logo: "🔷", category: "backend" },
  { name: "C#", logo: "🔶", category: "backend" },
  { name: "SQL", logo: "🗃️", category: "database" },
  { name: "MongoDB", logo: "🍃", category: "database" },
  { name: "PostgreSQL", logo: "🐘", category: "database" },
  { name: "Git", logo: "📊", category: "tools" },
  { name: "Docker", logo: "🐳", category: "tools" },
  { name: "AWS", logo: "☁️", category: "tools" },
  { name: "React Native", logo: "📱", category: "mobile" },
  { name: "Expo", logo: "🔮", category: "mobile" },
  { name: "Redux", logo: "🔄", category: "frontend" },
  { name: "GraphQL", logo: "⚡", category: "backend" },
  { name: "Firebase", logo: "🔥", category: "backend" },
  { name: "Jest", logo: "🃏", category: "tools" },
  { name: "Cypress", logo: "🧪", category: "tools" },
  { name: "Webpack", logo: "📦", category: "tools" },
  { name: "Sass", logo: "💅", category: "frontend" },
  { name: "Vue.js", logo: "💚", category: "frontend" },
  { name: "Angular", logo: "🅰️", category: "frontend" },
  { name: "Python", logo: "🐍", category: "backend" },
  { name: "Java", logo: "☕", category: "backend" },
  { name: "PHP", logo: "🐘", category: "backend" },
  { name: "Ruby", logo: "💎", category: "backend" },
  { name: "Swift", logo: "🦅", category: "mobile" },
  { name: "Kotlin", logo: "🧩", category: "mobile" },
];

const categories = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools" },
  { id: "mobile", name: "Mobile" },
];

const SKILLS_PER_PAGE = 10;

export function Skills(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredSkills, setFilteredSkills] = useState(skillsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const filtered = skillsData.filter((skill) => {
      const matchesSearch = skill.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || skill.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    setFilteredSkills(filtered);
    setTotalPages(Math.ceil(filtered.length / SKILLS_PER_PAGE));
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory]);

  // Get current skills for the page
  const indexOfLastSkill = currentPage * SKILLS_PER_PAGE;
  const indexOfFirstSkill = indexOfLastSkill - SKILLS_PER_PAGE;
  const currentSkills = filteredSkills.slice(
    indexOfFirstSkill,
    indexOfLastSkill,
  );

  // Change page
  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  return (
    <section id="skills">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Skills</h2>
          <div className="bg-primary mx-auto h-1 w-20"></div>
        </motion.div>

        <div className="mx-auto mb-10 max-w-xl">
          <div className="relative">
            <Search className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 transform" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-border bg-background focus:ring-primary w-full rounded-lg border py-3 pr-4 pl-10 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm transition-colors",
                  selectedCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          key={`page-${currentPage}-${selectedCategory}-${searchTerm}`}
        >
          {currentSkills.length > 0 ? (
            currentSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-card flex flex-col items-center rounded-lg p-6 text-center shadow-md"
              >
                <div className="mb-3 text-4xl">{skill.logo}</div>
                <h3 className="font-medium">{skill.name}</h3>
              </motion.div>
            ))
          ) : (
            <div className="text-muted-foreground col-span-full py-10 text-center">
              No skills found matching your search.
            </div>
          )}
        </motion.div>

        {/* Pagination Controls */}
        {filteredSkills.length > SKILLS_PER_PAGE && (
          <div className="mt-12 flex items-center justify-center space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md p-2 transition-colors disabled:opacity-50"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    className={cn(
                      "h-8 w-8 rounded-md text-sm transition-colors",
                      currentPage === page
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    )}
                  >
                    {page}
                  </button>
                ),
              )}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md p-2 transition-colors disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="text-muted-foreground mt-4 text-center text-sm">
          {filteredSkills.length > 0 && (
            <p>
              Showing {indexOfFirstSkill + 1}-
              {Math.min(indexOfLastSkill, filteredSkills.length)} of{" "}
              {filteredSkills.length} skills
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
