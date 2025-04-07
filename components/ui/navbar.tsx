"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/sip-sup-logo.png"
              alt="SIP-SUP Hospitality"
              width={60}
              height={60}
              className="mr-2"
            />
            <span
              className={cn(
                "font-bold text-xl transition-colors",
                isScrolled ? "text-white" : "text-primary"
              )}
            >
              SIP-SUP Hospitality
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className={cn(
                "font-medium transition-colors hover:text-gold",
                isScrolled ? "text-white" : "text-primary"
              )}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-medium transition-colors hover:text-gold",
                isScrolled ? "text-white" : "text-primary"
              )}
            >
              About
            </Link>
            <Link
              href="/services"
              className={cn(
                "font-medium transition-colors hover:text-gold",
                isScrolled ? "text-white" : "text-primary"
              )}
            >
              Services
            </Link>
            <Link
              href="/careers"
              className={cn(
                "font-medium transition-colors hover:text-gold",
                isScrolled ? "text-white" : "text-primary"
              )}
            >
              Careers
            </Link>
            {/* <Link
              href="/courses"
              className={cn(
                "font-medium transition-colors hover:text-gold",
                isScrolled ? "text-white" : "text-primary"
              )}
            >
              Courses
            </Link> */}
            <Link href="/contact">
              <Button className="bg-gold hover:bg-gold/90 text-primary mr-2">
                Get Started
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={isScrolled ? "text-white" : "text-primary"} />
            ) : (
              <Menu className={isScrolled ? "text-white" : "text-primary"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container px-4 py-4 flex flex-col space-y-4">
              <Link
                href="/"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/services"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/careers"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Careers
              </Link>
              {/* <Link
                href="/courses"
                className="font-medium text-primary py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link> */}
              <div className="flex space-x-2">
                <Link href="/contact">
                  <Button className="bg-gold hover:bg-gold/90 text-primary w-full">
                    Get Started
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-10"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
