"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function ContextAwareNavigation() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setIsVisible(window.scrollY > 200);

      // Determine active section based on scroll position
      const sections = ["contact", "biography", "gallery", "home"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 200) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string, withOffset: boolean) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      handleMobileMenuClose();
      return;
    }

    if (withOffset) {
      const yOffset = -100; // Adjust this value based on your fixed header height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      element.scrollIntoView({ behavior: "smooth" });
    }

    handleMobileMenuClose();
  };

  const NavLink = ({
    section,
    withOffset = false,
    children,
  }: {
    section: string;
    withOffset?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      onClick={() => scrollToSection(section, withOffset)}
      className={`text-sm uppercase tracking-widest transition-all duration-300 relative group ${
        activeSection === section
          ? "text-white"
          : "text-neutral-400 hover:text-white"
      }`}
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
    </button>
  );

  return (
    <>
      {/* Fixed navigation that appears on scroll */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible
            ? "translate-y-0 opacity-100 backdrop-blur-md bg-black/80"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between py-4">
          <button
            onClick={() => scrollToSection("start", true)}
            className="text-lg tracking-wide"
          >
            Aleyna
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink section="gallery" withOffset>
              Gallery
            </NavLink>
            <NavLink section="biography">Biography</NavLink>
            <NavLink section="contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden p-2 text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Progress indicator */}
        <div
          className="absolute bottom-0 left-0 h-0.5 bg-white transition-all duration-300"
          style={{
            width: `${Math.min(
              (scrollY /
                (document.documentElement.scrollHeight - window.innerHeight)) *
                100,
              100
            )}%`,
          }}
        />

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <NavLink section="gallery" withOffset>
              Gallery
            </NavLink>
            <NavLink section="biography">Biography</NavLink>
            <NavLink section="contact">Contact</NavLink>
          </nav>
        </div>
      </div>

      {/* Main header navigation */}
      <header className="border-b border-neutral-800 relative z-20">
        <div className="container mx-auto px-4 flex items-center justify-between py-4 md:py-6">
          <button
            onClick={() => scrollToSection("start", true)}
            className="text-xl md:text-2xl tracking-wide font-light"
          >
            Aleyna
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink section="gallery" withOffset>
              Gallery
            </NavLink>
            <NavLink section="biography">Biography</NavLink>
            <NavLink section="contact">Contact</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="md:hidden p-2 text-white"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-neutral-800 transition-all duration-300 z-30 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <NavLink section="gallery" withOffset>
              Gallery
            </NavLink>
            <NavLink section="biography">Biography</NavLink>
            <NavLink section="contact">Contact</NavLink>
          </nav>
        </div>
      </header>
    </>
  );
}
