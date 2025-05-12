export type ProjectCategory = {
  id: string;
  name: string;
};

export const categories: ProjectCategory[] = [
  { id: "nextjs", name: "Next.js" },
  { id: "expressjs", name: "Express.js" },
  { id: "reactnative", name: "React Native (Expo)" },
  { id: "aspnetcore", name: "ASP.NET Core" },
];
