
import React from "react";

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-900 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="mobile-container">
        <div className="max-w-5xl mx-auto text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-on-scroll px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            About Us
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-white mx-auto mb-6 sm:mb-8 md:mb-10"></div>
          
          <div className="max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12">
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
              At Black Pearl Associates, we believe in strategy over shortcuts. Inspired by the sharp thinking and relentless execution you'd expect from New York's elite firms, we offer more than legal or financial compliance. we offer clarity, leverage, and growth.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
              We operate with the precision of a top-tier law firm and the foresight of a seasoned financial advisory team. Whether you're an emerging startup or an established brand in transition, we help you build a stronger foundation, avoid costly mistakes, and accelerate smart progress.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white mb-3 sm:mb-4 md:mb-6">
                Mission
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                To be the strategic backbone for businesses that want to move with confidence. legally, financially, and operationally.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white mb-3 sm:mb-4 md:mb-6">
                Vision
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                To build a new standard of advisory. one that blends the discipline of law, the insight of finance, and the grit of business leadership to empower the next generation of market leaders.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll px-4 mt-8 md:mt-12">
          <p className="text-center text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            More than just providing solutions, we stand beside you—driving your progress and helping lay the groundwork for lasting success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
