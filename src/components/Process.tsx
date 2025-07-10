
import React from "react";
import { Search, FolderOpen, Calendar, Palette, Clock, Play } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "Analyze",
      description: "Deep analysis of your legal and financial situation to understand your unique challenges"
    },
    {
      icon: FolderOpen,
      title: "Strategize",
      description: "Developing tailored strategies that align with your life and business goals"
    },
    {
      icon: Calendar,
      title: "Plan",
      description: "Creating clear roadmaps with actionable steps and realistic timelines"
    },
    {
      icon: Palette,
      title: "Execute",
      description: "Implementing solutions with precision and attention to detail"
    },
    {
      icon: Clock,
      title: "Monitor",
      description: "Continuous monitoring and adjustment to ensure optimal outcomes"
    },
    {
      icon: Play,
      title: "Succeed",
      description: "Achieving lasting success through our proven methodology and ongoing support"
    }
  ];

  return (
    <section id="process" className="w-full bg-gray-900 py-12 sm:py-16 lg:py-20">
      <div className="mobile-container">
        <div className="max-w-5xl mx-auto text-center mb-8 sm:mb-12 md:mb-16 animate-on-scroll px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Our Process
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-white mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto px-2">
            A structured approach designed to cut through the noise and focus on what truly matters for your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto animate-on-scroll px-4">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={step.title} className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:transform hover:translate-y-[-4px] hover:shadow-xl touch-friendly">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                  </div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-xs sm:text-sm font-semibold text-white">{index + 1}</span>
                  </div>
                </div>
                <h5 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-2 sm:mb-3">
                  {step.title}
                </h5>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
