import React from 'react';
import { Wrench, Factory, Cog, Zap, Shield, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Robotic Welding Cells",
    description: "Complete robotic MIG and spot welding cells for BIW components, rain channel, rear twist beam, front crash, and MBR assemblies.",
    features: ["Robotic MIG welding cells", "Robotic spot welding cells", "BIW component welding"]
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Welding Fixtures",
    description: "Comprehensive range of welding fixtures including geo fixtures, re-spot fixtures, pick & drop fixtures, MIG and spot welding fixtures.",
    features: ["Geo fixtures", "Re-spot fixtures", "MIG & spot welding fixtures"]
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "SPM Manufacturing",
    description: "Hydraulic bush/bearing pressing SPM, inspection SPMs, and leakage testing SPMs for battery trays and fuel tanks.",
    features: ["Hydraulic pressing SPM", "Inspection SPMs", "Leakage testing SPMs"]
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Assembly & Inspection Fixtures",
    description: "CMM holding fixtures, assembly inspection fixtures, toe & camber inspection, and runout inspection setups.",
    features: ["CMM holding fixtures", "Assembly inspection", "Toe & camber inspection"]
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Automation & Control Systems",
    description: "PLC programming, panel manufacturing, SCADA systems, and barcode & traceability integration.",
    features: ["PLC programming", "SCADA systems", "Barcode integration"]
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: "Material Handling & Transfer Systems",
    description: "Conveyor lines, robotic material transfer systems, and custom handling automation solutions.",
    features: ["Conveyor lines", "Robotic material transfer", "Custom handling automation"]
  }
];

export const Services = () => {
  return (
    <section id="solutions" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#1BA3C7]">Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive automation, welding, machining and SPM solutions designed to meet advanced industrial requirements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeIn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-[#1BA3C7] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 line-height-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700 hover:text-[#1BA3C7] transition-colors duration-200">
                    <div className="w-2 h-2 bg-[#1BA3C7] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};