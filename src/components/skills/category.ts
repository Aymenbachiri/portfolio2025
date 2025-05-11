export type Category = {
  id: "all" | "frontend" | "backend" | "database" | "tools" | "mobile";
  name: string;
};

export const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "frontend", name: "Frontend" },
  { id: "backend", name: "Backend" },
  { id: "database", name: "Database" },
  { id: "tools", name: "Tools" },
  { id: "mobile", name: "Mobile" },
];
