import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "BIW Spot Welding Line – P500 Platform",
    description: "Complete BIW spot welding automation line executed for high-volume automotive production.",
    image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772834/download_1_mbajed.png"
  },
  {
    title: "Robotic Spot & MIG Welding Line – Battery Tray",
    description: "Robotic spot and MIG welding line for EV battery tray manufacturing.",
    image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772833/download_3_oezjop.png"
  },
  {
    title: "Conveyor Line for EV Electric Motor Assembly",
    description: "Conveyor-based assembly line for electric motor production with integrated testing.",
    image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772833/download_6_ct7rok.png"
  }
];

export const ProjectHighlights = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key <span className="text-[#1BA3C7]">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing our expertise in delivering complex automation and welding solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group animate-fadeIn"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className="h-full bg-black bg-opacity-40 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-[#1BA3C7] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <button className="text-[#1BA3C7] hidden hover:text-[#0F6E8C] font-semibold flex items-center group transition-all duration-200 hover:bg-gray-100 px-2 py-1 rounded">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button
            onClick={() => navigate('/projects')}
            className="border-2 border-[#1BA3C7] text-[#1BA3C7] hover:bg-[#1BA3C7] hover:text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center mx-auto group"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};