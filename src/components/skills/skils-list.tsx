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
import { MongooseIcon } from "@/lib/icons/mongoose-icon";
import { EntityFrameWorkIcon } from "@/lib/icons/entity-icon";
import Postman from "@/lib/icons/postman-icon";
import { ThunderClientIcon } from "@/lib/icons/thunderclient-icon";
import Swagger from "@/lib/icons/swagger-icon";
import { ScalarIcon } from "@/lib/icons/scalar-icon";
import MongoDB from "@/lib/icons/mongodb-icon";
import Firebase from "@/lib/icons/firebase-icon";
import Supabase from "@/lib/icons/supabase-icon";
import Figma from "@/lib/icons/figma-icon";
import VisualStudioCode from "@/lib/icons/vscode-icon";
import Cursor from "@/lib/icons/cursor-icon";
import Windsurf from "@/lib/icons/windsurf-icon";
import { AndroidStudioIcon } from "@/lib/icons/androidstudio-icon";
import Git from "@/lib/icons/git-icon";
import GitHub from "@/lib/icons/github-icon";
import NPM from "@/lib/icons/npm-icon";
import Bun from "@/lib/icons/bun-icon";
import VisualStudio from "@/lib/icons/visualstudio-icon";
import Docker from "@/lib/icons/docker-icon";
import Prisma from "@/lib/icons/prisma-icon";
import JWT from "@/lib/icons/jwt-icon";
import { NextAuthIcon } from "@/lib/icons/nextauth-icon";
import Clerk from "@/lib/icons/clerk-icon";
import { KindeIcon } from "@/lib/icons/kinde-icon";
import Auth0 from "@/lib/icons/auth0-icon";
import BetterAuth from "@/lib/icons/betterauth-icon";
import { ReactHookFormIcon } from "@/lib/icons/reacthookform-icon";
import Zod from "@/lib/icons/zod-icon";
import Redux from "@/lib/icons/redux-icon";
import { JotaiICon } from "@/lib/icons/jotai-icon";
import { NextIntlIcon } from "@/lib/icons/next_intl-icon";
import { ExpoLocalizationIcon } from "@/lib/icons/expo_localization-icon";
import Socketio from "@/lib/icons/socket-icon";
import Motion from "@/lib/icons/motion-icon";
import { ReanimatedIcon } from "@/lib/icons/reanimated-icon";
import { TailwindMergeIcon } from "@/lib/icons/tailwind_merge-icon";
import { AxisoIcon } from "@/lib/icons/axios-icon";
import SWR from "@/lib/icons/swr-icon";
import { LenisIcon } from "@/lib/icons/lenis-icon";
import { ReactHotToastIcon } from "@/lib/icons/reacthottoast-icon";
import Resend from "@/lib/icons/resend-icon";
import { ReactNavigationIcon } from "@/lib/icons/react_navigation-icon";
import { RechartsIcon } from "@/lib/icons/recharts-icon";
import { NativeWindIcon } from "@/lib/icons/nativewind-icon";
import { GorhomBottomSheetIcon } from "@/lib/icons/gorhom_bottomsheet-icon";
import AmazonWebServices from "@/lib/icons/s3-icon";
import { RecaptchaIcon } from "@/lib/icons/recaptcha-icon";
import { ReactNativePaperIcon } from "@/lib/icons/reactnativepaper-icon";

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
  { name: "mongoose", logo: <MongooseIcon />, category: "backend" },
  {
    name: "Entity Framework",
    logo: <EntityFrameWorkIcon />,
    category: "backend",
  },
  { name: "Postman", logo: <Postman />, category: "backend" },
  { name: "Thunder Client", logo: <ThunderClientIcon />, category: "backend" },
  { name: "Swagger", logo: <Swagger />, category: "backend" },
  { name: "Scalar", logo: <ScalarIcon />, category: "backend" },

  // Databases
  { name: "MongoDB", logo: <MongoDB />, category: "databases" },
  { name: "Firebase", logo: <Firebase />, category: "databases" },
  { name: "Supabase", logo: <Supabase />, category: "databases" },

  // Tools & Libraries
  { name: "Figma", logo: <Figma />, category: "tools & libraries" },
  { name: "VSCode", logo: <VisualStudioCode />, category: "tools & libraries" },
  {
    name: "Visual Studio",
    logo: <VisualStudio />,
    category: "tools & libraries",
  },
  { name: "Cursor", logo: <Cursor />, category: "tools & libraries" },
  { name: "Windsurf", logo: <Windsurf />, category: "tools & libraries" },
  {
    name: "Android Studio",
    logo: <AndroidStudioIcon />,
    category: "tools & libraries",
  },
  { name: "Git", logo: <Git />, category: "tools & libraries" },
  { name: "GitHub", logo: <GitHub />, category: "tools & libraries" },
  { name: "npm", logo: <NPM />, category: "tools & libraries" },
  { name: "bun", logo: <Bun />, category: "tools & libraries" },
  { name: "Docker", logo: <Docker />, category: "tools & libraries" },
  { name: "prisma", logo: <Prisma />, category: "tools & libraries" },
  { name: "firebase admin", logo: <Firebase />, category: "tools & libraries" },
  { name: "RestAPI", logo: "", category: "tools & libraries" },
  { name: "jwt", logo: <JWT />, category: "tools & libraries" },
  { name: "bcryptjs", logo: "", category: "tools & libraries" },
  { name: "bcrypt ts", logo: "", category: "tools & libraries" },
  {
    name: "NextAuth (auth.js)",
    logo: <NextAuthIcon />,
    category: "tools & libraries",
  },
  { name: "Clerk", logo: <Clerk />, category: "tools & libraries" },
  { name: "Kinde", logo: <KindeIcon />, category: "tools & libraries" },
  { name: "Auth0", logo: <Auth0 />, category: "tools & libraries" },
  { name: "better auth", logo: <BetterAuth />, category: "tools & libraries" },
  {
    name: "React Hook Form",
    logo: <ReactHookFormIcon />,
    category: "tools & libraries",
  },
  { name: "Formik", logo: "", category: "tools & libraries" },
  { name: "Yup", logo: "", category: "tools & libraries" },
  { name: "zod", logo: <Zod />, category: "tools & libraries" },
  { name: "Redux Toolkit", logo: <Redux />, category: "tools & libraries" },
  { name: "Redux Persist", logo: <Redux />, category: "tools & libraries" },
  { name: "jotai", logo: <JotaiICon />, category: "tools & libraries" },
  { name: "Context API", logo: "", category: "tools & libraries" },
  { name: "react-helmet", logo: "", category: "tools & libraries" },
  { name: "helmet.js", logo: "", category: "tools & libraries" },
  { name: "seo", logo: "", category: "tools & libraries" },
  { name: "next-seo", logo: "", category: "tools & libraries" },
  { name: "next-intl", logo: <NextIntlIcon />, category: "tools & libraries" },
  {
    name: "expo localization",
    logo: <ExpoLocalizationIcon />,
    category: "tools & libraries",
  },
  { name: "react i18next", logo: "", category: "tools & libraries" },
  { name: "socket.io", logo: <Socketio />, category: "tools & libraries" },
  { name: "problem solving", logo: "", category: "tools & libraries" },
  { name: "Framer Motion", logo: <Motion />, category: "tools & libraries" },
  {
    name: "Reanimated",
    logo: <ReanimatedIcon />,
    category: "tools & libraries",
  },
  { name: "clsx", logo: "", category: "tools & libraries" },
  {
    name: "tailwind merge",
    logo: <TailwindMergeIcon />,
    category: "tools & libraries",
  },
  { name: "next-themes", logo: "", category: "tools & libraries" },
  { name: "axios", logo: <AxisoIcon />, category: "tools & libraries" },
  { name: "SWR", logo: <SWR />, category: "tools & libraries" },
  { name: "lenis scroll", logo: <LenisIcon />, category: "tools & libraries" },
  {
    name: "react-hot-toast",
    logo: <ReactHotToastIcon />,
    category: "tools & libraries",
  },
  { name: "sonner", logo: "", category: "tools & libraries" },
  { name: "react-toastify", logo: "", category: "tools & libraries" },
  {
    name: "react-native-toast-message",
    logo: "",
    category: "tools & libraries",
  },
  { name: "resend", logo: <Resend />, category: "tools & libraries" },
  { name: "nextjs-toploader", logo: "", category: "tools & libraries" },
  { name: "Expo router", logo: "", category: "tools & libraries" },
  {
    name: "react navigation",
    logo: <ReactNavigationIcon />,
    category: "tools & libraries",
  },
  {
    name: "NativeWind",
    logo: <NativeWindIcon />,
    category: "tools & libraries",
  },
  {
    name: "react-native-responsive-screen",
    logo: "",
    category: "tools & libraries",
  },
  { name: "recharts", logo: <RechartsIcon />, category: "tools & libraries" },
  {
    name: "gorhom bottom sheet",
    logo: <GorhomBottomSheetIcon />,
    category: "tools & libraries",
  },
  { name: "react audio visualize", logo: "", category: "tools & libraries" },
  { name: "react native swiper", logo: "", category: "tools & libraries" },
  { name: "react native calendar", logo: "", category: "tools & libraries" },
  { name: "Edgestore", logo: "", category: "tools & libraries" },
  { name: "s3", logo: <AmazonWebServices />, category: "tools & libraries" },
  { name: "react-select", logo: "", category: "tools & libraries" },
  {
    name: "react google recaptcha",
    logo: <RecaptchaIcon />,
    category: "tools & libraries",
  },
  {
    name: "react native paper",
    logo: <ReactNativePaperIcon />,
    category: "tools & libraries",
  },
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
