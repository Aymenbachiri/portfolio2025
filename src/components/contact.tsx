"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { GithubIcon } from "@/lib/icons/gitub-icon";
import { LinkedInIcon } from "@/lib/icons/linkedin-icon";
import { useForm } from "react-hook-form";
import { contactFormSchema, type ContactFormValues } from "@/lib/schema/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

export function Contact(): JSX.Element {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    return toast.promise(
      async () => {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to send message");
        }

        reset();
        return await response.json();
      },
      {
        loading: "Sending your message...",
        success: "Message sent successfully!",
        error: (err) => `Error: ${err.message}`,
      },
    );
  };

  return (
    <section id="contact" className="mx-auto w-full max-w-6xl py-12">
      <div className="m-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Get In Touch</h2>
          <div className="mx-auto h-1 w-20 bg-gray-500" />
        </motion.div>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 mr-4 rounded-full p-3">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <a
                    href="mailto:aymen.bachiri99@gmail.com"
                    className="text-muted-foreground hover:text-primary"
                  >
                    aymen.bachiri99@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 mr-4 rounded-full p-3">
                  <Phone className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <a
                    href="tel:+213697286826"
                    className="text-muted-foreground hover:text-primary"
                  >
                    +213697286826
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-primary/10 mr-4 rounded-full p-3">
                  <MapPin className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold">Location</h4>
                  <p className="text-muted-foreground">Bou Saada, Algeria</p>
                </div>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="mb-6 text-2xl font-bold">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Aymenbachiri?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full p-3 text-2xl transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/aymen-bachiri-9442b5287"
                  className="bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full p-3 text-2xl transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-2xl font-bold">Send Me a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className={`border-border focus:ring-primary w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                    errors.name ? "border-red-500" : ""
                  }`}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className={`border-border focus:ring-primary w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                    errors.email ? "border-red-500" : ""
                  }`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Enter your subject"
                  className={`border-border focus:ring-primary w-full rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                    errors.subject ? "border-red-500" : ""
                  }`}
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.subject.message}
                  </p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Enter your message"
                  rows={5}
                  className={`border-border focus:ring-primary w-full resize-none rounded-lg border px-4 py-3 focus:ring-2 focus:outline-none ${
                    errors.message ? "border-red-500" : ""
                  }`}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.message.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-primary-foreground hover:bg-primary/90 flex w-full items-center justify-center rounded-md px-8 py-3 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? (
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ) : (
                  <Send className="mr-2 h-5 w-5" />
                )}
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
