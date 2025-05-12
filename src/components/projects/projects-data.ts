export type ProjectsData = {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  repoUrl: string;
  demoUrl: string;
  slug: string;
};

export const projectsData: ProjectsData[] = [
  {
    id: "project1",
    title: "E-commerce Platform",
    description:
      "A full-featured e-commerce platform with product listings, cart, and checkout.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
    category: "nextjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "ecommerce-platform",
  },
  {
    id: "project2",
    title: "Blog CMS",
    description: "A content management system for blogs with markdown support.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
    category: "nextjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "blog-cms",
  },
  {
    id: "project3",
    title: "Task Management API",
    description:
      "RESTful API for task management with authentication and authorization.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Express.js", "MongoDB", "JWT", "Docker"],
    category: "expressjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "task-management-api",
  },
  {
    id: "project4",
    title: "Real-time Chat",
    description: "Real-time chat application with private and group messaging.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["Express.js", "Socket.io", "React", "Redis"],
    category: "expressjs",
    repoUrl: "#",
    demoUrl: "#",
    slug: "real-time-chat",
  },
  {
    id: "project5",
    title: "Fitness Tracker App",
    description: "Mobile app for tracking workouts, nutrition, and progress.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    category: "reactnative",
    repoUrl: "#",
    demoUrl: "#",
    slug: "fitness-tracker-app",
  },
  {
    id: "project6",
    title: "Travel Companion",
    description:
      "Mobile app for planning trips, finding attractions, and tracking expenses.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["React Native", "Expo", "Google Maps API", "AsyncStorage"],
    category: "reactnative",
    repoUrl: "#",
    demoUrl: "#",
    slug: "travel-companion",
  },
  {
    id: "project7",
    title: "Inventory Management System",
    description:
      "Web application for managing inventory, orders, and suppliers.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["ASP.NET Core", "Entity Framework", "SQL Server", "Blazor"],
    category: "aspnetcore",
    repoUrl: "#",
    demoUrl: "#",
    slug: "inventory-management-system",
  },
  {
    id: "project8",
    title: "HR Portal",
    description:
      "Employee management portal with time tracking and performance reviews.",
    image: "/placeholder.svg?height=300&width=500",
    technologies: ["ASP.NET Core", "Identity", "SQL Server", "React"],
    category: "aspnetcore",
    repoUrl: "#",
    demoUrl: "#",
    slug: "hr-portal",
  },
];
