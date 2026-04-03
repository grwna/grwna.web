import { useState } from "react";
import { ThemeSwitcher } from "@/components/islands/ThemeSwitcher";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="w-full bg-background border-b border-border pb-1 fixed top-0 z-[100] left-0">
            <nav className="py-2 px-4 md:py-2 md:px-8 flex flex-row items-center text-foreground w-full">
                {/* Logo Section */}
                <div className="flex-1 flex justify-start">
                    <a href="/" className="flex flex-row gap-2 items-center text-foreground no-underline shrink-0">
                        <h1 className="font-bold italic text-2xl relative top-px m-0">Grwna</h1>
                    </a>
                </div>

                {/* Nav Links Section (Centered) */}
                <ul className="hidden lg:flex flex-row gap-8 font-bold font-heading text-sm list-none m-0 p-0 items-center justify-center">
                    <li><a href="#skills" className="nav-link">Skills</a></li>
                    <li><a href="#tools" className="nav-link">Tools</a></li>
                    <li><a href="#experience" className="nav-link">Experience</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#writing" className="nav-link">Writing</a></li>
                </ul>

                {/* Actions Section (Right) */}
                <div className="flex-1 flex flex-row items-center justify-end">
                    <ThemeSwitcher />
                    <Button 
                        variant="ghost" size="icon" className="lg:hidden rounded-xl text-foreground ml-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <Menu className="w-12 h-auto text-foreground" />
                    </Button>
                </div>
            </nav>
            {/* Optional drop-down for mobile view could go here, triggered by mobileMenuOpen state */}
            {mobileMenuOpen && (
                <div className="lg:hidden bg-background border-t border-border flex flex-col p-6 gap-6 w-full absolute top-[100%] left-0 shadow-xl animate-in slide-in-from-top-4 duration-200">
                    <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="nav-link text-lg">Skills</a>
                    <a href="#tools" onClick={() => setMobileMenuOpen(false)} className="nav-link text-lg">Tools</a>
                    <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="nav-link text-lg">Experience</a>
                    <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="nav-link text-lg">Projects</a>
                    <a href="#writing" onClick={() => setMobileMenuOpen(false)} className="nav-link text-lg">Writing</a>
                </div>
            )}
        </header>
    );
}
