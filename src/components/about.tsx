"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { JSX } from "react";
import image from "../../public/assets/aymen-bachiri.webp";

export function About(): JSX.Element {
  return (
    <section id="about" className="m-4 sm:m-0">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">About Me</h2>
          <div className="mx-auto mb-10 h-1 w-20 bg-gray-500" />
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
                src={image}
                alt="Developer"
                placeholder="blur"
                width={450}
                height={450}
                sizes="(min-width: 480px) 450px, calc(93.75vw + 19px)"
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
            <section className="col-span-2">
              <h1 className="text-center text-xl tracking-widest text-[#5651e5] uppercase md:text-start">
                About Me
              </h1>
              <h2 className="py-4">Who I Am</h2>
              <p className="py-2">
                Hello! I&apos;m Aymen, a passionate{" "}
                <span className="font-bold dark:text-white">
                  Full-Stack Web
                </span>{" "}
                and{" "}
                <span className="font-bold dark:text-white">
                  Mobile Developer
                </span>{" "}
                specializing in{" "}
                <span className="font-bold dark:text-white">Next.js</span>,{" "}
                <span className="font-bold dark:text-white">Express.js</span>,{" "}
                <span className="font-bold dark:text-white">
                  React Native Expo
                </span>
                , and{" "}
                <span className="font-bold dark:text-white">ASP.NET Core</span>{" "}
                development. My journey into tech started after studying
                mathematics at École Normale Supérieure de Kouba, where I
                initially aspired to become a math teacher. However, my love for
                problem-solving and technology led me to pivot into web and
                mobile development.
              </p>
              <p className="py-2">
                With a strong foundation in{" "}
                <span className="font-bold dark:text-white">mathematics</span>{" "}
                and programming, including algorithms in C, I now focus on
                creating dynamic, scalable, and responsive web and mobile
                applications. My expertise spans modern technologies such as{" "}
                <span className="font-bold dark:text-white">Next.js</span> for
                server-side rendering,{" "}
                <span className="font-bold dark:text-white">Typescript</span>{" "}
                for type safety, and{" "}
                <span className="font-bold dark:text-white">
                  React Native Expo
                </span>{" "}
                for cross-platform mobile development. Additionally, I am
                proficient in building powerful APIs and back-end systems with{" "}
                <span className="font-bold dark:text-white">ASP.NET Core</span>.
              </p>
              <p className="py-2">
                I am constantly learning and embracing new challenges, always
                striving to improve the user experience and deliver
                high-quality, maintainable code. My goal is to craft seamless,
                intuitive applications that make a real impact.
              </p>
            </section>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h4 className="font-bold">Name:</h4>
                <p className="text-muted-foreground">Aymen Bachiri</p>
              </div>
              <div>
                <h4 className="font-bold">Email:</h4>
                <p className="text-muted-foreground">
                  aymen.bachiri99@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-bold">Location:</h4>
                <p className="text-muted-foreground">Bou Saada, Algeria</p>
              </div>
              <div>
                <h4 className="font-bold">Availability:</h4>
                <p className="text-muted-foreground">
                  Full-time - Part-time - Freelance
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
