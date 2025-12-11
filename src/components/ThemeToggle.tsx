import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<'light' | 'plum'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'plum' | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle('plum', saved === 'plum');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'plum' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('plum', newTheme === 'plum');
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-4 right-4 z-50 rounded-full bg-card/80 backdrop-blur-sm border border-border shadow-soft hover:bg-secondary"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-4 w-4 text-foreground" />
      ) : (
        <Sun className="h-4 w-4 text-foreground" />
      )}
    </Button>
  );
};
