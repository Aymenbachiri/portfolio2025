"use client";
import { useTheme } from "next-themes";
import { type JSX, useEffect, useState } from "react";

export function ThemeToggle(): JSX.Element | null {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        setTheme(next);
      });
    } else {
      setTheme(next);
    }
  };

  return (
    <button
      onClick={toggle}
      className="cursor-pointer rounded-full p-2 transition-transform hover:scale-110"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
