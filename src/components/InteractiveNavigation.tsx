import React, { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
const InteractiveNavigation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sections = [{
    id: "hero",
    label: "Home"
  }, {
    id: "about",
    label: "About"
  }, {
    id: "services",
    label: "Services"
  }, {
    id: "process",
    label: "Process"
  }, {
    id: "contact",
    label: "Contact"
  }];
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
      const progress = Math.min(100, window.pageYOffset / (docHeight - winHeight) * 100);
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
  return <>
      {/* Back to Top Button - Modern Design */}
      <button onClick={scrollToTop} className="fixed bottom-6 right-6 z-50 bg-white/90 backdrop-blur-xl text-black p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 touch-target border border-white/20" aria-label="Back to top">
        <ChevronUp className="w-5 h-5" />
      </button>

      {/* Section Navigation Dots - Modern Design */}
      <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-40 flex-col space-y-2">
        
      </div>

      {/* Mobile Progress Indicator - Modern Design */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 h-1 bg-black/20 backdrop-blur-sm">
        <div className="h-full bg-gradient-to-r from-white via-gray-200 to-white transition-all duration-300 shadow-lg" style={{
        width: `${scrollProgress}%`
      }} />
      </div>

      {/* Mobile Quick Navigation - Modern Design */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-40">
        <div className="bg-black/80 backdrop-blur-2xl rounded-2xl p-3 mx-auto max-w-md border border-white/10 shadow-2xl">
          <div className="flex justify-between items-center space-x-2">
            {sections.map(section => <button key={section.id} onClick={() => scrollToSection(section.id)} className={`flex-1 py-3 px-2 rounded-xl text-xs font-semibold transition-all duration-300 touch-target min-h-[48px] ${activeSection === section.id ? "bg-white text-black shadow-lg scale-105" : "text-white hover:bg-white/20 hover:scale-102"}`} aria-label={`Go to ${section.label}`}>
                {section.label}
              </button>)}
          </div>
        </div>
      </div>
    </>;
};
export default InteractiveNavigation;