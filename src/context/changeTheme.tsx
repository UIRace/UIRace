"use client";
import React, { createContext, useEffect, useState } from "react";
import useHasMounted from "@hooks/useHasMounted";

type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  setThemeDark: () => void;
  setThemeLight: () => void;
};

export const ThemeContext = createContext<ThemeContext | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const hasMounted = useHasMounted();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    if (!hasMounted) return;

    const storedTheme = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    const resolvedTheme = storedTheme || (prefersDark ? "dark" : "light");

    document.documentElement.classList.toggle("dark", resolvedTheme === "dark");
    setTheme(resolvedTheme);
  }, [hasMounted]);

  const setThemeDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
    setTheme("dark");
  };

  const setThemeLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
    setTheme("light");
  };

  if (!hasMounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, setThemeDark, setThemeLight }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
