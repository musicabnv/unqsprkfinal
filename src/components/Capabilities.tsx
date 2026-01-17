import React from 'react';
import { Wrench, Cog, Factory, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const capabilities = [
  {
    title: "Welding/Inspection Fixtures",
    icon: <Wrench className="w-8 h-8" />,
    image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767777394/download_2_nclacu.png"
  },
  {
    title: "Process Automation & Robotics", 
    icon: <Cog className="w-8 h-8" />,
    image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767777392/download_1_xkxbch.png"
  },
  {
    title: "Machining (VMC) & Laser Process",
    icon: <Factory className="w-8 h-8" />,
    image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767777387/brave_screenshot_gemini.google.com_iljuxt.png"
  },
  {
    title: "Welding Assembly",
    icon: <Zap className="w-8 h-8" />,
    image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767777392/download_3_yuq9ug.png"
  }
];

export const Capabilities = () => {
  return (
    <section id="capabilities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#1BA3C7]">Capabilities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced in-house infrastructure enabling complete automation, welding and manufacturing solutions
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeIn overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${capability.image})` }}
              >
                <div className="h-full bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <div className="text-[#1BA3C7] mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900">
                  {capability.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};