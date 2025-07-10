
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#hero" className="flex items-center touch-target">
              <img 
                src="/lovable-uploads/44a3e122-92fc-43a5-9711-2f69dea2de77.png" 
                alt="Black Pearl Associates Logo" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px]"
                style={{ maxHeight: '96px', minHeight: '48px' }}
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="nav-link text-black hover:text-gray-600 px-2 py-2 text-sm lg:text-base font-medium transition-colors duration-300 touch-target"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 lg:px-8 rounded-full transition-all duration-300 text-sm lg:text-base touch-target"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-md text-black hover:text-gray-600 focus:outline-none transition-colors duration-300 touch-target"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMenuOpen 
          ? "max-h-96 opacity-100" 
          : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md border-t border-gray-200">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-black hover:text-gray-600 block px-4 py-4 text-lg font-medium transition-colors duration-300 touch-target rounded-lg hover:bg-gray-100"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="px-4 py-4">
            <a
              href="#contact"
              className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-6 rounded-full transition-all duration-300 text-base inline-block w-full text-center touch-target"
              onClick={closeMenu}
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
