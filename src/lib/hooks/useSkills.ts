import { type Category } from "@/components/skills/category";
import { type Skill, skillsData } from "@/components/skills/skils-list";
import { useEffect, useState } from "react";

export const SKILLS_PER_PAGE = 10;

type useSkillsReturn = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: Category["id"];
  setSelectedCategory: React.Dispatch<React.SetStateAction<Category["id"]>>;
  filteredSkills: Skill[];
  currentPage: number;
  totalPages: number;
  goToPage: (pageNumber: number) => void;
  currentSkills: Skill[];
  indexOfFirstSkill: number;
  indexOfLastSkill: number;
};

export function useSkills(): useSkillsReturn {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "frontend" | "backend" | "database" | "tools" | "mobile"
  >("all");
  const [filteredSkills, setFilteredSkills] = useState<Skill[]>(skillsData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

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
    setCurrentPage(1);
  }, [searchTerm, selectedCategory]);

  const indexOfLastSkill = currentPage * SKILLS_PER_PAGE;
  const indexOfFirstSkill = indexOfLastSkill - SKILLS_PER_PAGE;
  const currentSkills = filteredSkills.slice(
    indexOfFirstSkill,
    indexOfLastSkill,
  );

  const goToPage = (pageNumber: number): void => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)));
  };

  return {
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
  };
}
