"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { JSX } from "react";

export function About(): JSX.Element {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="bg-primary mx-auto h-1 w-20"></div>
        </motion.div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mx-auto aspect-square max-w-md"
          >
            <div className="border-primary absolute inset-0 translate-x-4 translate-y-4 transform rounded-lg border-2"></div>
            <div className="bg-muted relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Developer"
                width={400}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Software Developer</h3>
            <p className="text-muted-foreground">
              I&apos;m a passionate software developer with expertise in
              building modern web applications. I specialize in frontend
              development with React and Next.js, as well as backend development
              with Express.js and ASP.NET Core.
            </p>
            <p className="text-muted-foreground">
              With a strong foundation in software engineering principles and a
              keen eye for design, I create responsive, accessible, and
              performant applications that provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold">Name:</h4>
                <p className="text-muted-foreground">John Doe</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">john@example.com</p>
              </div>
              <div>
                <h4 className="font-bold">Location:</h4>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
              <div>
                <h4 className="font-bold">Availability:</h4>
                <p className="text-muted-foreground">Full-time</p>
              </div>
            </div>

            <a
              href="#"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-block rounded-md px-8 py-3 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
