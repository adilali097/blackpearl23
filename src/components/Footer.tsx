
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 md:py-12">
      <div className="mobile-container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <div className="sm:col-span-2">
            <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-2 sm:mb-3 md:mb-4">Black Pearl Associates</h3>
            <p className="text-gray-400 mb-2 sm:mb-3 md:mb-4 max-w-md text-xs sm:text-sm md:text-base leading-relaxed">
              We're here to guide you through the complexities of legal and financial matters with clarity and confidence.
            </p>
            <div className="text-xs sm:text-sm text-gray-500">
              <p className="font-semibold text-white mb-1"><img src="https://i.ibb.co/ymdHpZNN/PNG.png" /></p>
              <p>Corporate Law & Tax Consultation</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Services</h4>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors touch-target block py-1">Legal Consulting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors touch-target block py-1">Financial Advisory</a></li>
              <li><a href="#services" className="hover:text-white transition-colors touch-target block py-1">Risk Management</a></li>
              <li><a href="#services" className="hover:text-white transition-colors touch-target block py-1">Investment Planning</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 sm:mb-3 md:mb-4 text-xs sm:text-sm md:text-base">Contact</h4>
            <div className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-400">
              <p><a href="mailto:Hello@blackpearlassociates.com" className="hover:text-white transition-colors touch-target block py-1 break-all">Hello@blackpearlassociates.com</a></p>
              <p><a href="tel:+919526191616" className="hover:text-white transition-colors touch-target block py-1">+91 95261 91616</a></p>
              <div className="mt-2 sm:mt-3">
                <p className="text-white font-medium text-xs sm:text-sm">Excellence in:</p>
                <p className="text-xs sm:text-sm">Corporate Law & Tax Consultation</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 md:pt-8 text-center">
          <p className="text-xs sm:text-sm text-gray-500">
            © 2024 Black Pearl Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
