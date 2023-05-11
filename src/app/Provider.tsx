"use client";

import { ThemeProvider } from "next-themes";
import Navbar from "../components/Navbar";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class'>
      <Navbar />
      {children}
    </ThemeProvider>
  );
}
