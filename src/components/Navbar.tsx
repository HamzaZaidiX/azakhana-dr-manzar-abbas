import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Videos", href: "#videos" },
  { title: "Events", href: "#events" },
  { title: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "sticky top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-sm shadow-md select-none cursor-default",
        scrolled
          ? "backdrop-blur-md bg-white/10 dark:bg-islamic-black/30 py-3"
          : "bg-transparent py-3 shadow-md"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative select-none cursor-default">
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="font-semibold text-lg text-islamic-gold hover:text-islamic-green dark:text-white dark:hover:text-islamic-red transition-colors align-center"
            >
              {link.title}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-islamic-white hover:text-islamic-green dark:text-islamic-cream dark:hover:text-islamic-gold"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Center: Logo, shown on scroll */}
        <div
          className={cn(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300",
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          )}
        >
          <a
            href="/"
            className="dark:text-islamic-gold text-islamic-black hover:scale-105 hover:text-islamic-green transition-colors"
          >
            <h1 className="flex-wrap text-center text-xl font-semibold md:text-4xl dark:text-[#d43434] text-islamic-black hover:scale-105 hover:text-islamic-green dark:text-islamic-gold dark:hover:text-islamic-red transition-colors urdu-text">
              عزاخانہ ڈاکٹر منظر عباس
            </h1>
          </a>
        </div>

        {/* Theme Toggle Button */}
        <ThemeToggle />
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden backdrop-blur-md bg-white/80 dark:bg-islamic-black/80 shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col items-center space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="py-2 text-islamic-gray hover:text-islamic-green dark:text-white dark:hover:text-islamic-red transition-colors items-center font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




