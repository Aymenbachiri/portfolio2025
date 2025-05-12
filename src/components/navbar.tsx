"use client";

import { type JSX } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { useNavbar } from "@/lib/hooks/useNavbar";
import { cn } from "@/lib/utils/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar(): JSX.Element {
  const { isOpen, setIsOpen, scrolled } = useNavbar();

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-black/5 shadow-md shadow-gray-600 backdrop-blur-md duration-300 dark:bg-white/10 dark:drop-shadow-gray-100"
          : "bg-transparent",
      )}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <motion.div
          className="text-primary text-2xl font-bold"
          variants={itemVariants}
        >
          <Link href="#home">Aymen</Link>
        </motion.div>

        <motion.nav
          className="hidden items-center space-x-8 md:flex"
          variants={navbarVariants}
        >
          {navItems.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <Link href={item.href} className="transition-colors">
                {item.name}
              </Link>
            </motion.div>
          ))}

          <ThemeToggle />
        </motion.nav>

        <div className="flex items-center md:hidden">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-secondary hover:bg-secondary/80 cursor-pointer rounded-full p-2 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <motion.div
          className="border-border border-t md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-4 dark:bg-[#292a2c]">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-3 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
