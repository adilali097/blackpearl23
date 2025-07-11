
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

  return (
    <section className="overflow-hidden relative bg-black min-h-screen flex items-center justify-center" id="hero">
      <div className="w-full px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto py-16 sm:py-20 md:py-24 lg:py-32">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-gray-800 text-white text-xs sm:text-sm font-medium mb-6 sm:mb-8 opacity-0 animate-fade-in" style={{
            animationDelay: "0.1s"
          }}>
            <span>Legal & Financial Excellence</span>
          </div>
          
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight opacity-0 animate-fade-in text-white mb-6 sm:mb-8" style={{
            animationDelay: "0.3s"
          }}>
            Built for Brands That Mean Business.
          </h1>
          
          <p style={{
            animationDelay: "0.5s"
          }} className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed opacity-0 animate-fade-in text-gray-300 font-normal max-w-4xl mb-6 sm:mb-8 px-4">
            We deliver legal and financial strategies that don't just check boxes—they build power, mitigate risk, and unlock opportunity. we guide high-growth companies through legal clarity and financial confidence. so your brand grows stronger, faster, and with less friction.
          </p>

          <p style={{
            animationDelay: "0.6s"
          }} className="text-sm sm:text-base md:text-lg lg:text-xl opacity-0 animate-fade-in text-gray-400 mb-8 sm:mb-12">Trusted by founders, backed by specialists.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto opacity-0 animate-fade-in mb-8 sm:mb-12 max-w-md sm:max-w-none px-4 sm:px-0" style={{
            animationDelay: "0.7s"
          }}>
            <a href="#contact" className="flex items-center justify-center group bg-white hover:bg-gray-200 text-black font-medium py-4 sm:py-4 px-8 sm:px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto min-h-[48px] text-base sm:text-base">
              <span className="mr-2">Talk to an Advisor</span>
              <ArrowRight className="w-5 h-5 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 flex-shrink-0" />
            </a>
            
            <a href="#about" className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium py-4 sm:py-4 px-8 sm:px-8 rounded-full transition-all duration-300 w-full sm:w-auto text-center min-h-[48px] flex items-center justify-center text-base sm:text-base">
              Learn More
            </a>
          </div>

          <p style={{
            animationDelay: "0.8s"
          }} className="text-gray-500 text-sm sm:text-base opacity-0 animate-fade-in text-center px-4">
            More than just providing solutions, we stand beside you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
