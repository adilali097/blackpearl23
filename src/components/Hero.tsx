import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return <section className="overflow-hidden relative bg-black min-h-screen flex items-center justify-center" id="hero">
      <div className="mobile-container w-full" ref={containerRef}>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gray-800 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 md:mb-8 opacity-0 animate-fade-in" style={{
          animationDelay: "0.1s"
        }}>
            <span>Legal & Financial Excellence</span>
          </div>
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight opacity-0 animate-fade-in text-white mb-4 sm:mb-6 md:mb-8" style={{
          animationDelay: "0.3s"
        }}>
            Built for Brands That Mean Business.
          </h1>
          
          <p style={{
          animationDelay: "0.5s"
        }} className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-0 animate-fade-in text-gray-300 font-normal max-w-4xl mb-4 sm:mb-6 md:mb-8 px-2">
            We deliver legal and financial strategies that don't just check boxes—they build power, mitigate risk, and unlock opportunity. we guide high-growth companies through legal clarity and financial confidence. so your brand grows stronger, faster, and with less friction.
          </p>

          <p style={{
          animationDelay: "0.6s"
        }} className="text-xs sm:text-sm md:text-base lg:text-lg opacity-0 animate-fade-in text-gray-400 mb-6 sm:mb-8 md:mb-12">Trusted by founders, backed by specialists.</p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto opacity-0 animate-fade-in mb-6 sm:mb-8 md:mb-12 max-w-md sm:max-w-none" style={{
          animationDelay: "0.7s"
        }}>
            <a href="#contact" className="flex items-center justify-center group bg-white hover:bg-gray-200 text-black font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto touch-target text-sm sm:text-base">
              <span className="mr-2">Talk to an Advisor</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </a>
            
            <a href="#about" className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all duration-300 w-full sm:w-auto text-center touch-target text-sm sm:text-base">
              Learn More
            </a>
          </div>

          <p style={{
          animationDelay: "0.8s"
        }} className="text-gray-500 text-xs sm:text-sm opacity-0 animate-fade-in text-center px-4">
            More than just providing solutions, we stand beside you.
          </p>
        </div>
      </div>
    </section>;
};
export default Hero;