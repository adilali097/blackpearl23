
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="sm:col-span-2 text-center sm:text-left">
            <div className="mb-6 flex justify-center sm:justify-start">
              <img 
                src="https://i.ibb.co/tpnyCrjz/PNG.png" 
                alt="Black Pearl Associates Logo" 
                className="h-48 sm:h-56 md:h-64 lg:h-72 w-auto max-w-full"
              />
            </div>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-md text-sm sm:text-base leading-relaxed mx-auto sm:mx-0">
              We're here to guide you through the complexities of legal and financial matters with clarity and confidence.
            </p>
            <div className="text-sm sm:text-base text-gray-500">
              <p className="font-semibold text-white mb-2">Black Pearl</p>
              <p>Corporate Law & Tax Consultation</p>
            </div>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Services</h4>
            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <li><a href="#services" className="hover:text-white transition-colors min-h-[44px] block py-1">Consultancy & Advisory Services

</a></li>
              <li><a href="#services" className="hover:text-white transition-colors min-h-[44px] block py-1">Business Structuring</a></li>
              <li><a href="#services" className="hover:text-white transition-colors min-h-[44px] block py-1">Entity Registration Services</a></li>
              <li><a href="#services" className="hover:text-white transition-colors min-h-[44px] block py-1">Licenses & Registrations</a></li>
              <li><a href="#services" className="hover:text-white transition-colors min-h-[44px] block py-1">Business Agreements & Documentation</a></li>
              <li><a href="#services" className="hover:text-white transition-colors min-h-[44px] block py-1">Litigation, Arbitration & Settlement</a></li>
            </ul>
          </div>
          
          <div className="text-center sm:text-left">
            <h4 className="font-semibold mb-4 sm:mb-6 text-base sm:text-lg">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-400">
              <p><a href="mailto:Hello@blackpearlassociates.com" className="hover:text-white transition-colors min-h-[44px] block py-1 break-all">Hello@blackpearlassociates.com</a></p>
              <p><a href="tel:+919526191616" className="hover:text-white transition-colors min-h-[44px] block py-1">+91 95261 91616</a></p>
              <div className="mt-4 sm:mt-6">
                <p className="text-white font-medium text-sm sm:text-base">Excellence in:</p>
                <p className="text-sm sm:text-base">Corporate Law & Tax Consultation</p>
   <a href="https://instagram.com/demo" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
  <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Instagram" width="32" style={{  verticalAlign: 'middle' }} />
</a>
<a href="https://linkedin.com/demo" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
  <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="32" style={{ verticalAlign: 'middle' }} />
</a>
<a href="https://youtube.com/demo" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
  <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" width="32" style={{ verticalAlign: 'middle' }} />
</a>
<a href="https://facebook.com/demo" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
  <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="32" style={{ verticalAlign: 'middle' }} />
</a>

              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-sm sm:text-base text-gray-500">
            © 2024 Black Pearl Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
