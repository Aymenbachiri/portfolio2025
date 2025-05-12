import type { ProjectCategory } from "@/components/projects/projects-categories";
import {
  type ProjectsData,
  projectsData,
} from "@/components/projects/projects-data";
import { useState } from "react";

type UseProjectsReturn = {
  filteredProjects: ProjectsData[];
  activeCategory: ProjectCategory["id"];
  setActiveCategory: (category: ProjectCategory["id"]) => void;
};

export function useProjects(): UseProjectsReturn {
  const [activeCategory, setActiveCategory] =
    useState<ProjectCategory["id"]>("nextjs");

  const filteredProjects: ProjectsData[] = projectsData.filter(
    (project) => project.category === activeCategory,
  );

  return {
    filteredProjects,
    activeCategory,
    setActiveCategory,
  };
}
