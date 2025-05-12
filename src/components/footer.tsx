import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer className="border-border mx-auto w-full max-w-6xl border-t py-12">
      <div className="text-center">
        <p className="text-muted-foreground">
          &copy; {new Date().getFullYear()} Aymen Portfolio. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
