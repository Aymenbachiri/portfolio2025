"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import type { JSX } from "react";
import { ResumeIcon } from "@/lib/icons/resume-icon";
import { LinkedInIcon } from "@/lib/icons/linkedin-icon";
import { GithubIcon } from "@/lib/icons/gitub-icon";

const links = [
  {
    icon: <LinkedInIcon />,
    url: "https://www.linkedin.com/in/aymen-bachiri-9442b5287",
    label: "Go to my LinkedIn",
  },
  {
    icon: <GithubIcon />,
    url: "https://github.com/Aymenbachiri?tab=repositories",
    label: "Go to my GitHub account",
  },
  {
    icon: <ResumeIcon />,
    url: "/resume.pdf",
    label: "See my resume",
  },
];

export function Banner(): JSX.Element {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center"
    >
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            className="text-4xl font-bold text-[#324159] md:text-6xl lg:text-7xl dark:text-[#fff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I&apos;m <span className="text-[#5251df]">Aymen</span>
          </motion.h1>

          <motion.p
            className="mx-auto text-xl text-[#324159] md:text-3xl dark:text-[#fff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Next.js - Express.js - React Native - Asp .Net Core Developer
          </motion.p>
          <motion.p
            className="mx-auto max-w-3xl text-sm text-[#324159] md:text-sm dark:text-[#fff]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Passionate about building modern, responsive web and mobile
            applications that enhance user experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="m-auto flex max-w-[330px] items-center justify-center gap-10 py-4"
          >
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index} className="group relative">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="block cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 sm:text-2xl dark:text-[#e6e6e6]"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                  <span
                    role="tooltip"
                    className="absolute bottom-full left-1/2 mb-2 w-max -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs whitespace-nowrap text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gray-700"
                  >
                    {link.label}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 transform"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1,
          duration: 1,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <Link href="#about" aria-label="Scroll to About section">
          <ArrowDown className="text-primary h-8 w-8" />
        </Link>
      </motion.div>
    </section>
  );
}
