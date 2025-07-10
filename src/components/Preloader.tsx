
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-black transition-opacity duration-500 ${progress >= 100 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-2">
            Black Pearl
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-gothic">
            Associates
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Legal & Financial Excellence
          </p>
        </div>
        
        <div className="w-64 h-1 bg-gray-800 rounded-full mx-auto mb-4 overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-gray-500 text-sm">
          {progress < 100 ? 'Loading...' : 'Welcome'}
        </p>
      </div>
    </div>
  );
};

export default Preloader;
