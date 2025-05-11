import type { Category } from "./category";
import HTML5 from "@/lib/icons/html-icon";
import CSS from "@/lib/icons/css-icon";
import JavaScript from "@/lib/icons/javascript-icon";
import TypeScript from "@/lib/icons/typescript-icon";
import C from "@/lib/icons/csharp-icon";
import TailwindCSS from "@/lib/icons/tailwind-icon";
import ReactIcon from "@/lib/icons/react-icon";
import Nextjs from "@/lib/icons/next-icon";
import Expo from "@/lib/icons/expo-icon";
import Shadcnui from "@/lib/icons/shadcnui-icon";
import { MaterialTailwindIcon } from "@/lib/icons/material-tailwind-icon";
import MaterialUI from "@/lib/icons/material-ui-icon";
import DaisyUI from "@/lib/icons/daisyui-icon";
import ChakraUI from "@/lib/icons/chakraui-icon";
import Nodejs from "@/lib/icons/node-icon";
import Expressjs from "@/lib/icons/express-icon";
import { DotnetcoreIcon } from "@/lib/icons/dotnetcore-icon";

export type Skill = {
  name: string;
  logo: React.ReactNode;
  category: Category["id"];
};

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "HTML", logo: <HTML5 />, category: "programming languages" },
  { name: "CSS", logo: <CSS />, category: "programming languages" },
  {
    name: "JavaScript",
    logo: <JavaScript />,
    category: "programming languages",
  },
  {
    name: "TypeScript",
    logo: <TypeScript />,
    category: "programming languages",
  },
  { name: "C#", logo: <C />, category: "programming languages" },

  // Frontend
  { name: "Tailwind CSS", logo: <TailwindCSS />, category: "frontend" },
  { name: "React", logo: <ReactIcon />, category: "frontend" },
  { name: "Next.js", logo: <Nextjs />, category: "frontend" },
  { name: "React Native", logo: <ReactIcon />, category: "frontend" },
  { name: "Expo", logo: <Expo />, category: "frontend" },
  { name: "ShadcnUi", logo: <Shadcnui />, category: "frontend" },
  {
    name: "Material Tailwind",
    logo: <MaterialTailwindIcon />,
    category: "frontend",
  },
  {
    name: "Material UI",
    logo: <MaterialUI />,
    category: "frontend",
  },
  { name: "Daisy UI", logo: <DaisyUI />, category: "frontend" },
  { name: "Chakra UI", logo: <ChakraUI />, category: "frontend" },

  // Backend
  { name: "Node.js", logo: <Nodejs />, category: "backend" },
  { name: "Express.js", logo: <Expressjs />, category: "backend" },
  { name: "ASP.NET Core", logo: <DotnetcoreIcon />, category: "backend" },
  { name: "mongoose", logo: "", category: "backend" },
  { name: "Entity Framework", logo: "", category: "backend" },
  { name: "Postman", logo: "", category: "backend" },
  { name: "Thunder Client", logo: "", category: "backend" },
  { name: "Swagger", logo: "", category: "backend" },
  { name: "Scalar", logo: "", category: "backend" },

  // Databases
  { name: "MongoDB", logo: "", category: "databases" },
  { name: "Firebase", logo: "", category: "databases" },
  { name: "Supabase", logo: "", category: "databases" },

  // Tools & Libraries
  { name: "Figma", logo: "", category: "tools & libraries" },
  { name: "VSCode", logo: "", category: "tools & libraries" },
  { name: "Visual Studio", logo: "", category: "tools & libraries" },
  { name: "Cursor", logo: "", category: "tools & libraries" },
  { name: "Windsurf", logo: "", category: "tools & libraries" },
  { name: "Android Studio", logo: "", category: "tools & libraries" },
  { name: "Git", logo: "", category: "tools & libraries" },
  { name: "GitHub", logo: "", category: "tools & libraries" },
  { name: "npm", logo: "", category: "tools & libraries" },
  { name: "bun", logo: "", category: "tools & libraries" },
  { name: "Docker", logo: "", category: "tools & libraries" },
  { name: "prisma", logo: "", category: "tools & libraries" },
  { name: "firebase admin", logo: "", category: "tools & libraries" },
  { name: "RestAPI", logo: "", category: "tools & libraries" },
  { name: "jwt", logo: "", category: "tools & libraries" },
  { name: "bcryptjs", logo: "", category: "tools & libraries" },
  { name: "bcrypt ts", logo: "", category: "tools & libraries" },
  { name: "NextAuth (auth.js)", logo: "", category: "tools & libraries" },
  { name: "Clerk", logo: "", category: "tools & libraries" },
  { name: "Kinde", logo: "", category: "tools & libraries" },
  { name: "Auth0", logo: "", category: "tools & libraries" },
  { name: "better auth", logo: "", category: "tools & libraries" },
  { name: "React Hook Form", logo: "", category: "tools & libraries" },
  { name: "Formik", logo: "", category: "tools & libraries" },
  { name: "Yup", logo: "", category: "tools & libraries" },
  { name: "zod", logo: "", category: "tools & libraries" },
  { name: "Redux Toolkit", logo: "", category: "tools & libraries" },
  { name: "Redux Persist", logo: "", category: "tools & libraries" },
  { name: "jotai", logo: "", category: "tools & libraries" },
  { name: "Context API", logo: "", category: "tools & libraries" },
  { name: "react-helmet", logo: "", category: "tools & libraries" },
  { name: "helmet.js", logo: "", category: "tools & libraries" },
  { name: "seo", logo: "", category: "tools & libraries" },
  { name: "next-seo", logo: "", category: "tools & libraries" },
  { name: "next-intl", logo: "", category: "tools & libraries" },
  { name: "expo localization", logo: "", category: "tools & libraries" },
  { name: "react i18next", logo: "", category: "tools & libraries" },
  { name: "socket.io", logo: "", category: "tools & libraries" },
  { name: "problem solving", logo: "", category: "tools & libraries" },
  { name: "Framer Motion", logo: "", category: "tools & libraries" },
  { name: "Reanimated", logo: "", category: "tools & libraries" },
  { name: "clsx", logo: "", category: "tools & libraries" },
  { name: "tailwind merge", logo: "", category: "tools & libraries" },
  { name: "next-themes", logo: "", category: "tools & libraries" },
  { name: "axios", logo: "", category: "tools & libraries" },
  { name: "SWR", logo: "", category: "tools & libraries" },
  { name: "lenis scroll", logo: "", category: "tools & libraries" },
  { name: "react-hot-toast", logo: "", category: "tools & libraries" },
  { name: "sonner", logo: "", category: "tools & libraries" },
  { name: "react-toastify", logo: "", category: "tools & libraries" },
  {
    name: "react-native-toast-message",
    logo: "",
    category: "tools & libraries",
  },
  { name: "resend", logo: "", category: "tools & libraries" },
  { name: "nextjs-toploader", logo: "", category: "tools & libraries" },
  { name: "Expo router", logo: "", category: "tools & libraries" },
  { name: "react navigation", logo: "", category: "tools & libraries" },
  { name: "NativeWind", logo: "", category: "tools & libraries" },
  {
    name: "react-native-responsive-screen",
    logo: "",
    category: "tools & libraries",
  },
  { name: "recharts", logo: "", category: "tools & libraries" },
  { name: "gorhom bottom sheet", logo: "", category: "tools & libraries" },
  { name: "react audio visualize", logo: "", category: "tools & libraries" },
  { name: "react native swiper", logo: "", category: "tools & libraries" },
  { name: "react native calendar", logo: "", category: "tools & libraries" },
  { name: "Edgestore", logo: "", category: "tools & libraries" },
  { name: "s3", logo: "", category: "tools & libraries" },
  { name: "react-select", logo: "", category: "tools & libraries" },
  { name: "react google recaptcha", logo: "", category: "tools & libraries" },
  { name: "react native paper", logo: "", category: "tools & libraries" },
  { name: "react native picker", logo: "", category: "tools & libraries" },
  { name: "expo web browser", logo: "", category: "tools & libraries" },
  {
    name: "react native ui datepicker",
    logo: "",
    category: "tools & libraries",
  },
  {
    name: "react native async storage",
    logo: "",
    category: "tools & libraries",
  },
  { name: "expo secure storage", logo: "", category: "tools & libraries" },
  { name: "mapbox", logo: "", category: "tools & libraries" },
  { name: "react day picker", logo: "", category: "tools & libraries" },
  { name: "nanoid", logo: "", category: "tools & libraries" },
  { name: "uuid", logo: "", category: "tools & libraries" },
  { name: "react native collapsible", logo: "", category: "tools & libraries" },
  {
    name: "react-native-community-netinfo",
    logo: "",
    category: "tools & libraries",
  },
  { name: "expo-av", logo: "", category: "tools & libraries" },
];
