
import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    services: "",
    message: ""
  });

  const serviceOptions = [
    "Legal Consulting",
    "Financial Advisory", 
    "Risk Management",
    "Contract Review",
    "Investment Planning",
    "Corporate Law"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast.error("Please fill in all required fields");
      return;
    }

    const message = `New contact form submission:

Name: ${formData.name}
Email: ${formData.email}
Company Name: ${formData.companyName || 'Not specified'}
Phone Number: ${formData.phoneNumber || 'Not specified'}
Services: ${formData.services || 'Not specified'}
Message: ${formData.message || 'No message provided'}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919048191616?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecting to WhatsApp to send your message!");
    
    setFormData({
      name: "",
      email: "",
      companyName: "",
      phoneNumber: "",
      services: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="w-full bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12 lg:mb-16 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 sm:mb-8">
            Contact Us
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-semibold text-white mb-4 sm:mb-6">
            Get Expert Legal & Financial Guidance
          </h3>
          
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-3 sm:mb-4">
            Ready to navigate your legal and financial challenges with confidence?
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-400">
            Contact us today for straightforward advice and tailored strategies:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          <div className="animate-on-scroll">
            <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm sm:text-base font-medium text-white mb-2">Company name *</label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full bg-gray-800 border-gray-600 text-white min-h-[48px] text-base focus:ring-2 focus:ring-white focus:border-transparent" 
                    required 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm sm:text-base font-medium text-white mb-2">Name *</label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full bg-gray-800 border-gray-600 text-white min-h-[48px] text-base focus:ring-2 focus:ring-white focus:border-transparent" 
                    required 
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="block text-sm sm:text-base font-medium text-white mb-2">Email</label>
                  <Input 
                    type="text" 
                    id="companyName" 
                    name="companyName" 
                    value={formData.companyName} 
                    onChange={handleChange} 
                    className="w-full bg-gray-800 border-gray-600 text-white min-h-[48px] text-base focus:ring-2 focus:ring-white focus:border-transparent" 
                  />
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    value={formData.phoneNumber} 
                    onChange={handleChange} 
                    className="w-full bg-gray-800 border-gray-600 text-white min-h-[48px] text-base focus:ring-2 focus:ring-white focus:border-transparent" 
                  />
                </div>
                
                <div>
                  <label htmlFor="services" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Services You're Looking For
                  </label>
                  <select 
                    id="services" 
                    name="services" 
                    value={formData.services} 
                    onChange={handleChange} 
                    className="w-full px-4 py-4 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-gray-800 text-white min-h-[48px] text-base"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm sm:text-base font-medium text-white mb-2">
                    Message (Optional)
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    rows={4} 
                    className="w-full bg-gray-800 border-gray-600 text-white text-base focus:ring-2 focus:ring-white focus:border-transparent" 
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-white hover:bg-gray-200 text-black font-medium py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-base"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 h-full flex flex-col justify-center">
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-display font-semibold text-white mb-8 sm:mb-10 text-center lg:text-left">
                Get In Touch
              </h4>
              
              <div className="space-y-6 sm:space-y-8">
                <div className="text-center lg:text-left">
                  <h5 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-xl">Company</h5>
                  <p className="text-gray-300 text-base sm:text-lg md:text-xl font-medium">BLACK PEARL ASSOCIATES</p>
                </div>
                
                <div className="text-center lg:text-left">
                  <h5 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-xl">Email</h5>
                  <a href="mailto:Hello@blackpearlassociates.com" className="text-white hover:text-gray-300 transition-colors duration-300 text-base sm:text-lg md:text-xl min-h-[44px] inline-block py-1 break-all hover:underline">
                    Hello@blackpearlassociates.com
                  </a>
                </div>
                
                <div className="text-center lg:text-left">
                  <h5 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-xl">Phone</h5>
                  <a href="tel:+919526191616" className="text-white hover:text-gray-300 transition-colors duration-300 text-base sm:text-lg md:text-xl min-h-[44px] inline-block py-1 hover:underline">
                    +91 95261 91616
                  </a>
                </div>
                
                <div className="text-center lg:text-left">
                  <h5 className="font-semibold text-white mb-3 sm:mb-4 text-lg sm:text-xl">Office</h5>
                  <div className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-sm mx-auto lg:mx-0">
                    <p>Room no: 73/104, City Center,</p>
                    <p>Pavangad, Puthyangadi (P O),</p>
                    <p>Calicut, Kerala - 673021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
