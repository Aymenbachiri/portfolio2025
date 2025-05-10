"use client";
import { useNextTheme } from "@/lib/hooks/useNextTheme";
import { Moon, Sun } from "lucide-react";
import { type JSX } from "react";

export function ThemeToggle(): JSX.Element | null {
  const { theme, toggle, mounted } = useNextTheme();
  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className="cursor-pointer rounded-full p-2 transition-transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
