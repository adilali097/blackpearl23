
import React from "react";
import { 
  Scale, 
  Calculator, 
  Shield, 
  FileText, 
  TrendingUp, 
  Users 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Legal Consulting",
      description: "Expert legal guidance to navigate complex legal matters with confidence and clarity."
    },
    {
      icon: Calculator,
      title: "Financial Advisory",
      description: "Strategic financial planning and advisory services tailored to your goals."
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Comprehensive risk assessment and mitigation strategies for your business."
    },
    {
      icon: FileText,
      title: "Contract Review",
      description: "Thorough contract analysis and negotiation to protect your interests."
    },
    {
      icon: TrendingUp,
      title: "Investment Planning",
      description: "Strategic investment advice to help grow and protect your wealth."
    },
    {
      icon: Users,
      title: "Corporate Law",
      description: "Complete corporate legal services from formation to compliance and beyond."
    }
  ];

  return (
    <section id="services" className="w-full bg-black py-12 sm:py-16 lg:py-20">
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
              return (
                <div key={service.title} className="bg-gray-900 border border-gray-700 rounded-xl p-4 sm:p-6 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-xl touch-friendly">
                  <div className="mb-3 sm:mb-4">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h5 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2 sm:mb-3">
                    {service.title}
                  </h5>
                  <p className="text-gray-400 text-xs sm:text-sm md:text-base leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center animate-on-scroll px-4">
          <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8">
            <h4 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-white mb-3 sm:mb-4 md:mb-6">
              What Sets Us Apart
            </h4>
            <p className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
              Our method is rooted in honest, straightforward advice and tailored strategies designed to align with your life and business goals. We help you avoid common pitfalls and uncover new opportunities through clear, confident guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
