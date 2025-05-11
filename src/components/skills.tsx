"use client";

import { type JSX } from "react";
import { motion } from "motion/react";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils/utils";
import { SKILLS_PER_PAGE, useSkills } from "@/lib/hooks/useSkills";
import { categories } from "./skills/category";

export function Skills(): JSX.Element {
  const {
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    filteredSkills,
    currentPage,
    totalPages,
    goToPage,
    currentSkills,
    indexOfFirstSkill,
    indexOfLastSkill,
  } = useSkills();

  return (
    <section id="skills" className="py-16">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">My Skills</h2>
          <div className="mx-auto h-1 w-20"></div>
        </motion.div>

        <div className="mx-auto mb-10">
          <div className="relative mx-auto max-w-xl">
            <Search className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2 transform" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-border focus:ring-primary w-full rounded-lg border py-3 pr-4 pl-10 focus:ring-2 focus:outline-none"
            />
          </div>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "cursor-pointer rounded-full px-4 py-2 text-sm transition-colors",
                  selectedCategory === category.id
                    ? "text-primary-foreground"
                    : "text-secondary-foreground",
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
                className="flex flex-col items-center rounded-lg p-6 text-center shadow-md dark:shadow-md dark:shadow-gray-100"
              >
                <div
                  className={cn(
                    "mb-3 text-4xl",
                    skill.name === "Expo"
                      ? "dark:brightness-200 dark:invert"
                      : "",
                    skill.name === "ShadcnUi"
                      ? "text-black dark:text-white"
                      : "",
                  )}
                >
                  {skill.logo}
                </div>
                <h3 className="font-medium">{skill.name}</h3>
              </motion.div>
            ))
          ) : (
            <div className="text-muted-foreground col-span-full py-10 text-center">
              No skills found matching your search.
            </div>
          )}
        </motion.div>

        {filteredSkills.length > SKILLS_PER_PAGE && (
          <div className="mt-12 flex items-center justify-center space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="cursor-pointer rounded-md p-2 transition-colors disabled:opacity-50"
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
                    aria-current={currentPage === page ? "page" : undefined}
                    className={cn(
                      "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-sm transition-colors",
                      currentPage === page
                        ? "bg-primary text-primary-foreground font-semibold shadow"
                        : "text-secondary-foreground hover:bg-muted bg-transparent",
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
              className="text-secondary-foreground cursor-pointer rounded-md p-2 transition-colors disabled:opacity-50"
              aria-label="Next page"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        )}

        <div className="mt-4 text-center text-sm">
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
