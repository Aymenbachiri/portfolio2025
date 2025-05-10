import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type useNextThemeReturn = {
  theme: string | undefined;
  toggle: () => void;
  mounted: boolean;
};

export function useNextTheme(): useNextThemeReturn {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return { theme, toggle, mounted };
}
