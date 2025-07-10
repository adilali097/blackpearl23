
import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const InteractiveNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Calculate scroll progress
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const progress = Math.min(100, (window.pageYOffset / (docHeight - winHeight)) * 100);
      setScrollProgress(progress);
      
      // Update active section
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = window.innerWidth < 768 ? 100 : 80;
      window.scrollTo({
        top: element.offsetTop - offset,
        behavior: "smooth"
      });
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-white text-black p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 touch-target"
        aria-label="Back to top"
      >
        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Section Navigation Dots - Desktop Only */}
      <div className="hidden lg:flex fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-3">
        <div className="bg-white/10 backdrop-blur-md rounded-full py-4 px-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-3 h-3 mb-3 last:mb-0 rounded-full transition-all duration-300 hover:scale-125 ${
                activeSection === section.id
                  ? "bg-white shadow-lg"
                  : "bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to ${section.label}`}
              title={section.label}
            >
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {section.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Mobile Progress Indicator */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-1 bg-gray-800">
        <div 
          className="h-full bg-white transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Quick Navigation - Bottom Sheet Style */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="bg-black/80 backdrop-blur-md rounded-xl p-2 mx-auto max-w-sm">
          <div className="flex justify-between items-center space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`flex-1 py-2 px-1 rounded-lg text-xs font-medium transition-all duration-300 touch-target min-h-[40px] ${
                  activeSection === section.id
                    ? "bg-white text-black"
                    : "text-white hover:bg-white/20"
                }`}
                aria-label={`Go to ${section.label}`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default InteractiveNavigation;
