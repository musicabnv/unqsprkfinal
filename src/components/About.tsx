import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const About = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#1BA3C7] mb-4">
              About UniqueSpark
            </h2>

            <p className="text-xl md:text-2xl italic text-[#1BA3C7] mb-8">
              Innovative Solution for Everything…
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              UniqueSpark Engineering Pvt. Ltd. delivers end-to-end automation, robotic welding, fixture development, and SPM solutions. Originating as Unique Electricals in 2018 and evolving into Unique Automation & Robotics LLP in 2022, the company has grown into a trusted industrial engineering partner with strong manufacturing and automation capabilities.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Located in Chakan, Pune, we have earned a reputation for excellence and professionalism, building sustainable business relationships with leading automotive and industrial clients through innovative automation solutions.
            </p>

            <button
              onClick={() => navigate('/capabilities')}
              className="border-2 border-[#1BA3C7] text-[#1BA3C7] hover:bg-[#1BA3C7] hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center group"
            >
              Know more about us
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div
              className="h-96 bg-cover bg-center rounded-2xl shadow-lg"
              style={{
                backgroundImage: 'url(https://res.cloudinary.com/doalvffjs/image/upload/v1767012292/file_00000000fe0072079b85224d42ef186f_vnlv84.webp)'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};