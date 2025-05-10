import type { JSX } from "react";
import { ThemeProvider } from "./theme-provider";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <ThemeProvider>{children}</ThemeProvider>;
}
