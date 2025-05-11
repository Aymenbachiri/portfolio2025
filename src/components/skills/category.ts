export type Category = {
  id:
    | "all"
    | "programming languages"
    | "frontend"
    | "backend"
    | "databases"
    | "tools & libraries";
  name: string;
};

export const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "programming languages", name: "Programming Languages" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "databases", name: "Databases" },
  { id: "tools & libraries", name: "Tools & Libraries" },
];
