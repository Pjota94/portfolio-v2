"use client";
import { ThemeProvider } from "next-themes";
import "animate.css";
import { AnimatePresence } from "framer-motion";

const Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <AnimatePresence>{children}</AnimatePresence>
    </ThemeProvider>
  );
};

export default Provider;
