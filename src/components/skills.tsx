"use client";

import { type JSX } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils/utils";
import { categories } from "./skills/category";
import { itemsPerPage, useSkills } from "@/lib/hooks/useSkills";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export function Skills(): JSX.Element {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    paginatedSkills,
    currentPage,
    totalPages,
    getPageNumbers,
    filteredSkills,
    setCurrentPage,
  } = useSkills();

  return (
    <section id="skills" className="mx-auto w-full max-w-6xl py-12">
      <h2 className="mb-8 text-center text-3xl font-bold">My Skills</h2>
      <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
                selectedCategory === category.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200",
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="relative w-full md:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills..."
            className="w-full rounded-full border border-gray-300 py-2 pr-10 pl-10 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
          <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute top-1/2 right-3 -translate-y-1/2 transform text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${searchQuery}-${currentPage}`}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={containerVariants}
          className="mb-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {paginatedSkills.length > 0 ? (
            paginatedSkills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="flex flex-col items-center justify-center rounded-lg p-4 shadow-md transition-shadow duration-300 hover:shadow-lg dark:shadow-md dark:shadow-gray-300"
              >
                <div
                  className={cn(
                    "mb-3 flex items-center justify-center text-4xl",
                    skill.name === "Expo"
                      ? "dark:brightness-200 dark:invert"
                      : "",
                  )}
                >
                  {skill.logo}
                </div>
                <h3 className="text-center font-medium text-gray-800 dark:text-gray-200">
                  {skill.name}
                </h3>
              </motion.div>
            ))
          ) : (
            <motion.div
              variants={itemVariants}
              className="col-span-full py-10 text-center text-gray-500"
            >
              No skills found. Try changing your search or category.
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="rounded-md bg-gray-100 px-3 py-1 text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50 dark:text-black"
          >
            Prev
          </button>
          {getPageNumbers().map((page, index) =>
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="px-3 py-1">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => setCurrentPage(Number(page))}
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full",
                  currentPage === page
                    ? "bg-blue-600 font-medium"
                    : "bg-gray-100 text-black hover:bg-gray-200",
                )}
              >
                {page}
              </button>
            ),
          )}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="rounded-md bg-gray-100 px-3 py-1 text-black hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
      <div className="mt-4 text-center text-sm text-gray-500">
        Showing{" "}
        {paginatedSkills.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0}{" "}
        - {Math.min(currentPage * itemsPerPage, filteredSkills.length)} of{" "}
        {filteredSkills.length} skills
      </div>
    </section>
  );
}
