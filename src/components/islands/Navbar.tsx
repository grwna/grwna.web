import { useState } from "react";
import { ThemeSwitcher } from "@/components/islands/ThemeSwitcher";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-background border-b border-border pb-1 fixed top-0 z-[100] left-0">
            <nav className="py-2 px-4 md:py-2 md:px-8 flex flex-row justify-between items-center text-foreground">
                <a href="/" className="flex flex-row gap-2 items-center text-foreground no-underline">
                    <h1 className="font-bold italic text-2xl relative top-px m-0">Grwna</h1>
                </a>
                {/* <input type="text"
                    className="bg-input rounded-2xl py-1.5 px-4 md:pl-8 md:pr-12 font-sans md:relative md:left-25 focus:outline-border text-foreground border-border border"
                    placeholder="Search projects..." /> */}
                <div className="flex flex-row items-center">
                    <ThemeSwitcher />
                    <Button 
                        variant="ghost" size="icon" className="md:hidden rounded-xl text-foreground"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-12 h-auto text-foreground" />
                    </Button>
                    <ul className="hidden md:flex flex-row gap-4 font-bold font-heading text-sm list-none m-0 p-0 items-center">
                        <li><a href="#about" className="nav-link">About</a></li>
                        <li><a href="#featured-projects" className="nav-link">Featured</a></li>
                    </ul>
                </div>
            </nav>
            {/* Optional drop-down for mobile view could go here, triggered by mobileMenuOpen state */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-background border-t border-border flex flex-col p-4 gap-4 w-full absolute top-[100%] left-0">
                    <a href="#featured-projects" onClick={() => setMobileMenuOpen(false)} className="nav-link">Featured</a>
                    <a href="/about" onClick={() => setMobileMenuOpen(false)} className="nav-link">About</a>
                </div>
            )}
        </header>
    );
}
