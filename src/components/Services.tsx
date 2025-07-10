import React from "react";
import { Scale, Calculator, Shield, FileText, TrendingUp, Users, Building2, Award } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Users,
    title: "Consultancy and Advisory Services",
    description: "Expert guidance to aid informed decision-making for businesses and individuals."
  }, {
    icon: TrendingUp,
    title: "Business Structuring",
    description: "Conducting market analysis, project reports, investor pitches, valuations, audits, and aiding in fundraising."
  }, {
    icon: Building2,
    title: "Entity Registration Services",
    description: "Assisting in choosing the right organizational structure. Includes: Partnership, LLP, and Company Registrations; Entity Conversions."
  }, {
    icon: Award,
    title: "Licenses and Registrations",
    description: "Facilitating registrations for trademarks, copyrights, patents, ISO, GST, Start-ups, IEC, FSSAI, RERA, MSME, and Property."
  }, {
    icon: FileText,
    title: "Business Agreements' Documentation",
    description: "Crafting crucial legal documents for business clarity and protection. Includes: Rental Agreements, Partnership Deeds, MOUs, Franchise Agreements, Investor Agreements, Share Purchase Agreements, Distribution Agreements, Settlement Deeds, Power Of Attorneys, Joint Venture Agreements, Take Over Agreements, Brand Endorsement Agreements."
  }, {
    icon: Scale,
    title: "Litigation, Arbitration, and Settlement",
    description: "Resolving legal disputes within or involving companies."
  }];
  return <section id="services" className="w-full bg-black py-12 sm:py-16 lg:py-20">
      <div className="mobile-container">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Services
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-white mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white mb-3 sm:mb-4 md:mb-6">
            What We Do Best
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto px-2">
            Comprehensive legal and financial services designed to help you make well-informed decisions and achieve lasting success.
          </p>
        </div>

        <div className="mb-8 sm:mb-12 md:mb-16 animate-on-scroll px-4">
          <h4 className="text-base sm:text-lg md:text-xl font-display font-semibold text-white mb-4 sm:mb-6 md:mb-8 text-center">
            Our Core Services:
          </h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => {
            const IconComponent = service.icon;
            return <div key={service.title} className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-xl touch-friendly">
                  <div className="mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h5>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>;
          })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-on-scroll px-4">
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h4 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-white mb-3 sm:mb-4 md:mb-6">
              What Sets Us Apart
            </h4>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto">No fluff. No recycled playbooks. Every client engagement is rooted in a clear objective: to build legally strong, financially sound, and strategically scalable businesses.
We’re not here for vanity metrics or surface-level advice—we’re here for long-term equity, market positioning, and real leverage.</p>
          </div>
        </div>
      </div>
    </section>;
};
export default Services;