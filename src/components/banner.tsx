"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowDown } from "lucide-react";
import type { JSX } from "react";

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
            className="text-4xl font-bold md:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-primary">Software Developer</span> Portfolio
          </motion.h1>

          <motion.p
            className="text-muted-foreground mx-auto max-w-3xl text-xl md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Building modern web & mobile applications with cutting-edge
            technologies
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 pt-8 sm:flex-row"
          >
            <Link
              href="#projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 py-3 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-8 py-3 transition-colors"
            >
              Contact Me
            </Link>
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
