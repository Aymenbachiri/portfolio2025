import { ThemeProvider as NextThemeProvider } from "next-themes";
import type { JSX } from "react";

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <NextThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemeProvider>
  );
}
