
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-brand-dark">
            <span className="text-brand-light">Tech</span>Solutions
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <a
            href="#about"
            className="text-gray-700 hover:text-brand-light font-medium transition-colors"
          >
            Sobre
          </a>
          <a
            href="#services"
            className="text-gray-700 hover:text-brand-light font-medium transition-colors"
          >
            Serviços
          </a>
          <a
            href="#benefits"
            className="text-gray-700 hover:text-brand-light font-medium transition-colors"
          >
            Benefícios
          </a>
          <a
            href="#testimonials"
            className="text-gray-700 hover:text-brand-light font-medium transition-colors"
          >
            Depoimentos
          </a>
          <Button
            asChild
            className="bg-brand-dark hover:bg-blue-900 text-white"
          >
            <a href="#contact">Contato</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg py-4 absolute top-full left-0 right-0 border-t border-gray-200">
          <div className="container mx-auto flex flex-col space-y-4">
            <a
              href="#about"
              className="text-gray-700 hover:text-brand-light font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sobre
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-brand-light font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Serviços
            </a>
            <a
              href="#benefits"
              className="text-gray-700 hover:text-brand-light font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#testimonials"
              className="text-gray-700 hover:text-brand-light font-medium transition-colors px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Depoimentos
            </a>
            <a
              href="#contact"
              className="bg-brand-dark text-white font-medium px-4 py-2 rounded-md hover:bg-blue-900 transition-colors inline-block mx-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contato
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
