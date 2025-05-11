import type { Category } from "./category";

export type Skill = {
  name: string;
  logo: string;
  category: Category["id"];
};

export const skillsData: Skill[] = [
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
