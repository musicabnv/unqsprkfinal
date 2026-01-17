import React, { useState } from 'react';

export const KeyProjects = () => {
  const [activeTab, setActiveTab] = useState('All Projects');

  const tabs = [
    'All Projects',
    'Welding Lines',
    'Assembly Lines',
    'Robotic Cells',
    'SPM & Inspection Systems'
  ];

  const projects = [
    {
      title: "BIW Spot Welding Line – P500 Platform",
      description: "Complete BIW spot welding automation line executed for high-volume automotive production.",
      projectType: "Robotic Welding Line",
      categories: ['Welding Lines', 'Robotic Cells'], // Spot welding + robotic automation
      scopeOfWork: [
        "Process finalization",
        "Design & manufacturing",
        "Electrical & PLC with SCADA",
        "Robot integration and interlocking",
        "Installation and proving"
      ],
      keyTechnologies: [
        "Robotic welding",
        "Spot welding",
        "Safety & interlocking systems"
      ],
      image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772834/download_1_mbajed.png"
    },
    {
      title: "Robotic Spot & MIG Welding Line – Battery Tray",
      description: "Robotic spot and MIG welding line for EV battery tray manufacturing.",
      projectType: "Robotic Welding Line",
      categories: ['Welding Lines', 'Robotic Cells'], // Spot + MIG welding + robotic
      scopeOfWork: [
        "Process & line design",
        "Fixture & tooling design",
        "Manufacturing & fabrication",
        "Installation, commissioning & proving"
      ],
      image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772833/download_3_oezjop.png"
    },
    {
      title: "Robotic MIG Welding Line – Rear Twist Beam",
      description: "Robotic MIG welding system developed for rear twist beam manufacturing.",
      projectType: "Robotic Welding Line",
      categories: ['Welding Lines', 'Robotic Cells'], // MIG welding + robotic
      scopeOfWork: [
        "Process & line design",
        "Fixture & tooling design",
        "Manufacturing & fabrication",
        "Electrical & PLC integration",
        "Installation, commissioning & proving"
      ],
      image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772833/download_2_b6pxcg.png"
    },
    {
      title: "Hydraulic Bush Pressing SPM",
      description: "Special purpose hydraulic pressing machine developed for precision assembly operations.",
      projectType: "Special Purpose Machine",
      categories: ['SPM & Inspection Systems'], // SPM category only
      scopeOfWork: [
        "Mechanical design",
        "Hydraulic system integration",
        "Control panel & PLC",
        "Safety interlocking and trials"
      ],
      image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772832/download_4_oviecq.png"
    },
    {
      title: "Inspection SPM – Rear Twist Beam Assembly",
      description: "End-of-line inspection system for rear twist beam assemblies.",
      projectType: "Inspection System",
      categories: ['SPM & Inspection Systems'], // Inspection/metrology SPM
      scopeOfWork: [
        "Dimensional inspection system",
        "Sensor integration",
        "PLC logic and reporting",
        "Operator-friendly HMI"
      ],
      image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772833/download_5_fmpg96.png"
    },
    {
      title: "Conveyor Line for EV Electric Motor Assembly",
      description: "Conveyor-based assembly line for electric motor production with integrated testing.",
      projectType: "Assembly Line",
      categories: ['Assembly Lines'], // Assembly + testing line
      scopeOfWork: [
        "Conveyor automation",
        "Assembly stations",
        "Integrated testing systems",
        "Electrical & PLC integration"
      ],
      image: "https://res.cloudinary.com/doalvffjs/image/upload/v1767772833/download_6_ct7rok.png"
    }
  ];

  // Filter projects based on active tab
  const filteredProjects = activeTab === 'All Projects' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeTab));

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7479032/pexels-photo-7479032.jpeg)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Key <span className="text-[#1BA3C7]">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl">
            Selected automation, welding, and machining projects delivered for automotive and industrial manufacturing.
          </p>
        </div>
      </div>

      {/* Project Category Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-300 hover:text-[#1BA3C7] ${
                  activeTab === tab
                    ? 'border-[#1BA3C7] text-[#1BA3C7]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-8">
                {/* Project Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 uppercase tracking-wide">
                        Project Type
                      </h4>
                      <p className="text-gray-700">{project.projectType}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Scope of Work
                      </h4>
                      <ul className="space-y-2">
                        {project.scopeOfWork.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-[#1BA3C7] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {project.keyTechnologies && (
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                          Key Technologies
                        </h4>
                        <ul className="space-y-2">
                          {project.keyTechnologies.map((tech, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-[#1BA3C7] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700 text-sm">{tech}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Image Placeholder */}
                <div className={`w-64 ${index === 0 ? 'h-[32rem]' : 'h-48'} flex-shrink-0`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};