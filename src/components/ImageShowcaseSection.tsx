
import React, { useState, useRef, useEffect } from "react";

const ImageShowcaseSection = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
          y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
        });
      }
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full pt-0 pb-8 sm:pb-12 bg-white relative overflow-hidden" 
      id="showcase"
    >
      {/* Interactive background elements */}
      <div 
        className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60 blur-xl transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-pink-100 to-yellow-100 rounded-full opacity-50 blur-lg transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)` }}
      />

      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 text-interactive">
            Experience the Future Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Our cutting-edge humanoid robot is designed to transform how we interact 
            with technology in everyday environments.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll hover:shadow-elegant-hover transition-all duration-500 group">
          <div className="relative w-full interactive-cursor">
            <img 
              ref={imageRef}
              src="/lovable-uploads/c3d5522b-6886-4b75-8ffc-d020016bb9c2.png" 
              alt="Advanced humanoid robot with orange and white design" 
              className={`w-full h-auto object-cover transition-all duration-700 group-hover:scale-105 ${
                isImageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setIsImageLoaded(true)}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 0.1}deg) rotateY(${mousePosition.x * 0.1}deg)`
              }}
            />
            
            {/* Interactive overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center p-6">
              <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Interactive Demo Available</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-4 sm:p-8 interactive-element">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4 group-hover:text-gray-700 transition-colors duration-300">
              Next Generation Robotics
            </h3>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
              Built with precision engineering and sophisticated AI, our robots seamlessly 
              integrate into various environments, from homes to hospitals, providing 
              assistance and enriching human experiences.
            </p>
            
            {/* Interactive stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-100">
              <div className="text-center hover-lift cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 pulse-interactive">99.9%</div>
                <div className="text-xs text-gray-500">Uptime</div>
              </div>
              <div className="text-center hover-lift cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 pulse-interactive">24/7</div>
                <div className="text-xs text-gray-500">Available</div>
              </div>
              <div className="text-center hover-lift cursor-pointer">
                <div className="text-2xl font-bold text-gray-900 pulse-interactive">AI+</div>
                <div className="text-xs text-gray-500">Powered</div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive call-to-action */}
        <div className="text-center mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <button className="button-primary btn-interactive group">
            <span className="relative z-10">Explore Interactive Demo</span>
            <div className="ml-2 transition-transform group-hover:translate-x-1">→</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
