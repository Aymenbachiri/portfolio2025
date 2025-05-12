import type { JSX } from "react";
import { ThemeProvider } from "./theme-provider";
import { LenisProvider } from "./lenis-provider";
import { Toaster } from "sonner";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <ThemeProvider>
      <LenisProvider />
      <Toaster richColors position="top-right" />
      {children}
    </ThemeProvider>
  );
}
