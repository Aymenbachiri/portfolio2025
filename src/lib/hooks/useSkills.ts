import { type Category } from "@/components/skills/category";
import { type Skill, skillsData } from "@/components/skills/skils-list";
import { useEffect, useState } from "react";

type useSkillsReturn = {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: Category["id"];
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category["id"]>>;
  filteredSkills: Skill[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  paginatedSkills: Skill[];
  getPageNumbers: () => (string | number)[];
};

export const itemsPerPage = 10;

export function useSkills(): useSkillsReturn {
  const [selectedCategory, setSelectedCategory] =
    useState<Category["id"]>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skillsData);

  useEffect(() => {
    let result = skillsData;

    if (selectedCategory !== "all") {
      result = result.filter((skill) => skill.category === selectedCategory);
    }

    if (searchQuery.trim() !== "") {
      result = result.filter((skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    setFilteredSkills(result);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const paginatedSkills = filteredSkills.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const getPageNumbers: () => (string | number)[] = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let start = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
      const end = Math.min(totalPages - 1, start + maxVisiblePages - 3);

      if (end === totalPages - 1) {
        start = Math.max(2, end - (maxVisiblePages - 3));
      }

      if (start > 2) {
        pages.push("...");
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    currentPage,
    setCurrentPage,
    totalPages: totalPages,
    paginatedSkills,
    getPageNumbers,
    filteredSkills,
  };
}
