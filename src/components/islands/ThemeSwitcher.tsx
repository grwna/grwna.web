import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        setIsDark(document.documentElement.classList.contains("dark"));
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        root.classList.toggle("dark");
        const isCurrentlyDark = root.classList.contains("dark");
        setIsDark(isCurrentlyDark);
        localStorage.setItem("theme", isCurrentlyDark ? "dark" : "light");
    };

    return (
        <Button 
            id="theme-toggle"
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="mr-1 md:mr-3 rounded-xl transition-colors"
            aria-label="Toggle theme"
        >
            <Sun className={`w-6 h-auto ${isDark ? "hidden" : "block"} text-foreground`} />
            <Moon className={`w-6 h-auto ${isDark ? "block" : "hidden"} text-foreground`} />
        </Button>
    );
}
