import React from 'react';
import { Settings, Wrench, Factory, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const strengths = [
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Production & Machining",
    description: "A focused production and quality team backed by skilled VMC operators — ensuring precision manufacturing, repeatability, and production-ready delivery."
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Controls & Automation",
    description: "PLC programmers, robot programmers, and electrical engineers delivering robust automation, SCADA, safety interlocking, and complete line integration."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Mechanical & Design Engineering", 
    description: "Dedicated mechanical engineers, designers, and fitters supporting fixture design, SPM development, robotic cells, and heavy fabrication systems."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Project & Operational Support",
    description: "Strong project management, SCM, finance, and administrative teams ensuring smooth coordination, timely execution, and long-term customer support."
  }
];

export const WhyUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why <span className="text-[#1BA3C7]">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Built on strong in-house engineering depth for dependable, end-to-end project execution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {strengths.map((strength, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group animate-fadeIn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-center mb-6">
                <div className="bg-[#E6F4F8] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1BA3C7] transition-colors duration-300">
                  <div className="text-[#1BA3C7] group-hover:text-white transition-colors duration-300">
                    {strength.icon}
                  </div>
                </div>
              </div>
              
              <div className="text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {strength.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {strength.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 italic max-w-4xl mx-auto">
            From engineering design to shopfloor execution — every capability is built and controlled under one roof.
          </p>
        </div>
      </div>
    </section>
  );
};