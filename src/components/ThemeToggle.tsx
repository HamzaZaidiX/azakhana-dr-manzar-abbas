import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { Toggle } from "@/components/ui/toggle";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Toggle
      onClick={toggleTheme}
      className="p-2 rounded-full bg-islamic-cream/20 text-islamic-black dark:bg-islamic-black/40 dark:text-islamic-gold hover:bg-islamic-cream/30 dark:hover:bg-islamic-black/60 transition-colors backdrop-blur-sm "
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun className="hover:animate-pulse" size={20} />
      ) : (
        <Moon className="hover:animate-pulse" size={20} />
      )}
    </Toggle>
  );
};

export default ThemeToggle;
