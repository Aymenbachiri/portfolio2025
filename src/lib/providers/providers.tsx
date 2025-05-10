import type { JSX } from "react";
import { ThemeProvider } from "./theme-provider";
import { LenisProvider } from "./lenis-provider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider>
      <LenisProvider />
      {children}
    </ThemeProvider>
  );
}
