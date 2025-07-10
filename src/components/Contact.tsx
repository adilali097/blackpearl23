import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    services: "",
    message: ""
  });
  const serviceOptions = ["Legal Consulting", "Financial Advisory", "Risk Management", "Contract Review", "Investment Planning", "Corporate Law"];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = e.target;
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
Services: ${formData.services || 'Not specified'}
Message: ${formData.message || 'No message provided'}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919048191616?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    toast.success("Redirecting to WhatsApp to send your message!");
    setFormData({
      name: "",
      email: "",
      services: "",
      message: ""
    });
  };
  return <section id="contact" className="w-full bg-black py-12 sm:py-16 lg:py-20">
      <div className="mobile-container">
        <div className="max-w-4xl mx-auto text-center mb-6 sm:mb-8 md:mb-12 lg:mb-16 animate-on-scroll px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4 sm:mb-6">
            Contact Us
          </h2>
          <div className="w-12 sm:w-16 md:w-20 h-1 bg-white mx-auto mb-4 sm:mb-6 md:mb-8"></div>
          
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-semibold text-white mb-3 sm:mb-4 md:mb-6">
            Get Expert Legal & Financial Guidance
          </h3>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed px-2 mb-2 sm:mb-3 md:mb-4">
            Ready to navigate your legal and financial challenges with confidence?
          </p>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-400 px-2">
            Contact us today for straightforward advice and tailored strategies:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto px-4">
          <div className="animate-on-scroll">
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                    Name *
                  </label>
                  <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border-gray-600 text-white min-h-[48px] text-sm sm:text-base focus:ring-2 focus:ring-white focus:border-transparent" required />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                    Email *
                  </label>
                  <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border-gray-600 text-white min-h-[48px] text-sm sm:text-base focus:ring-2 focus:ring-white focus:border-transparent" required />
                </div>
                
                <div>
                  <label htmlFor="services" className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                    Services You're Looking For
                  </label>
                  <select id="services" name="services" value={formData.services} onChange={handleChange} className="w-full px-3 py-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent bg-gray-800 text-white min-h-[48px] text-sm sm:text-base touch-manipulation">
                    <option value="">Select a service</option>
                    {serviceOptions.map(service => <option key={service} value={service}>
                        {service}
                      </option>)}
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-white mb-1 sm:mb-2">
                    Message (Optional)
                  </label>
                  <Textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className="w-full bg-gray-800 border-gray-600 text-white text-sm sm:text-base focus:ring-2 focus:ring-white focus:border-transparent" />
                </div>
                
                <button type="submit" className="w-full bg-white hover:bg-gray-200 text-black font-medium py-3 sm:py-4 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98] min-h-[48px] text-sm sm:text-base touch-manipulation">
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>

          <div className="animate-on-scroll">
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
              <h4 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-white mb-3 sm:mb-4 md:mb-6">
                Get In Touch
              </h4>
              
              <div className="space-y-3 sm:space-y-4 md:space-y-6">
                <div>
                  <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Company</h5>
                  <p className="text-gray-300 text-xs sm:text-sm md:text-base">BLACK PEARL ASSOCIATES</p>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Email</h5>
                  <a href="mailto:info@blackpearlassociates.com" className="text-white hover:underline text-xs sm:text-sm md:text-base touch-target break-all">Hello@blackpearlassociates.com</a>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Phone</h5>
                  <a href="tel:+919048191616" className="text-white hover:underline text-xs sm:text-sm md:text-base touch-target">+91 95261 91616</a>
                </div>
                
                <div>
                  <h5 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">Offices</h5>
                  <div className="space-y-1 text-gray-300">
                    <p className="text-xs sm:text-sm md:text-base"> Room no: 73/104, City Center, Pavangad, Puthyangadi (P O), Calicut, Kerala - 673021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;