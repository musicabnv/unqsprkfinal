import React from 'react';
import { ArrowRight, Cog, Zap, Wrench, Factory, Users, Shield, CheckCircle } from 'lucide-react';
import { useContactModal } from '../contexts/ContactModalContext';

export const Capabilities = () => {
  const { openModal } = useContactModal();
  const capabilitiesOverview = [
    {
      title: "Welding/Inspection Fixtures",
      icon: <Wrench className="w-8 h-8" />,
      description: "Advanced in-house infrastructure enabling complete automation, welding and manufacturing solutions"
    },
    {
      title: "Process Automation & Robotics", 
      icon: <Cog className="w-8 h-8" />,
      description: "Advanced in-house infrastructure enabling complete automation, welding and manufacturing solutions"
    },
    {
      title: "Machining (VMC) & Laser Process",
      icon: <Factory className="w-8 h-8" />,
      description: "Advanced in-house infrastructure enabling complete automation, welding and manufacturing solutions"
    },
    {
      title: "Welding Assembly",
      icon: <Zap className="w-8 h-8" />,
      description: "Advanced in-house infrastructure enabling complete automation, welding and manufacturing solutions"
    }
  ];

  const weldingProcesses = [
    "Projection welding",
    "Clinching", 
    "Robotic MIG welding for Mild Steel",
    "Robotic MIG welding for Aluminium",
    "Robotic spot welding",
    "Laser welding",
    "TIG welding"
  ];

  const rfqPlanning = [
    "Feasibility study",
    "Process finalisation", 
    "Cycle time calculation",
    "Resource mapping",
    "Line balancing"
  ];

  const engineeringExecution = [
    "In-house mechanical & electrical design team",
    "Electrical engineers and electricians",
    "PLC and robot programming capability", 
    "Assembly and commissioning teams",
    "Installation support across India"
  ];

  const machiningCapabilities = [
    "Precision machining",
    "Fabrication",
    "Aluminium extrusions", 
    "Castings"
  ];

  const industriesServed = [
    "Automotive",
    "Heavy equipment",
    "Defence"
  ];

  const machiningAssets = [
    "Large-format VMC machines",
    "High-accuracy machining centres"
  ];

  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-gray-700 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/7479032/pexels-photo-7479032.jpeg)'
          }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-[#1BA3C7]">Capabilities</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-8">
            Engineering, automation, and manufacturing excellence across the complete project lifecycle.
          </p>
          <p className="text-lg hidden text-gray-300 max-w-4xl">
            We deliver end-to-end automation, welding, and precision machining solutions for automotive and industrial manufacturing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Capabilities at a Glance */}
        <section className="py-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">Capabilities at a Glance</h2>
          <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Delivering advanced engineering and manufacturing excellence across the entire product lifecycle
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilitiesOverview.map((capability, index) => (
              <div 
                key={index} 
                className="text-center animate-scaleIn hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-[#E6F4F8] p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <div className="text-[#1BA3C7]">
                    {capability.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{capability.title}</h3>
                <p className="text-sm text-gray-600">{capability.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Production & Welding Capabilities */}
        {/* Welding & Inspection Fixtures */}
        <section className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Welding & Inspection Fixtures</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Complete in-house engineering for welding and inspection fixtures — covering design, development, assembly, electrical integration, and on-site installation to ensure dimensional accuracy and production consistency.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Capabilities / Scope</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Welding fixtures (spot, MIG, manual & robotic)",
                      "Inspection fixtures & gauges",
                      "Assembly & inspection fixtures",
                      "Mechanical design & detailing",
                      "Electrical integration & installation support"
                    ].map((capability, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#1BA3C7] flex-shrink-0" />
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div 
                  className="h-96 bg-cover bg-center rounded-2xl shadow-lg flex items-center justify-center"
                  style={{
                    backgroundImage: 'url(https://res.cloudinary.com/doalvffjs/image/upload/v1767777394/download_2_nclacu.png)'
                  }}
                >
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Automation & Robotics */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-lg flex items-center justify-center"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/doalvffjs/image/upload/v1767777392/download_1_xkxbch.png)'
                }}
              >
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Process Automation & Robotics</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                End-to-end automation and robotics solutions delivered by an in-house engineering team — from feasibility and process planning to commissioning and line stabilization.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Capabilities / Scope</h3>
                <div className="space-y-3">
                  {[
                    "Robotic cells & robotic welding systems",
                    "Conveyor lines & material handling systems",
                    "Special Purpose Machines (SPM)",
                    "Leakage testing SPMs",
                    "PLC & SCADA programming",
                    "Mechanical & electrical system integration",
                    "Installation & commissioning support"
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#1BA3C7] flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Machining (VMC) & Laser Processing */}
        <section className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Machining (VMC) & Laser Processing</h2>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Precision machining and laser processing capabilities supporting high-value and heavy-duty components for automotive, industrial, and defence applications.
                </p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Capabilities / Scope</h3>
                  <div className="space-y-3">
                    {[
                      "VMC machining with large-bed capacity (up to 8 meters)",
                      "Aluminium extrusions machining",
                      "MS fabricated structures",
                      "Heavy structural components",
                      "Defence-grade machining applications",
                      "Laser cutting & laser processing setup"
                    ].map((capability, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#1BA3C7] flex-shrink-0" />
                        <span className="text-gray-700">{capability}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div 
                  className="h-96 bg-cover bg-center rounded-2xl shadow-lg flex items-center justify-center"
                  style={{
                    backgroundImage: 'url(https://res.cloudinary.com/doalvffjs/image/upload/v1767777387/brave_screenshot_gemini.google.com_iljuxt.png)'
                  }}
                >
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welding Assemblies */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-lg flex items-center justify-center"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/doalvffjs/image/upload/v1767777392/download_3_yuq9ug.png)'
                }}
              >
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Welding Assemblies</h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Dedicated production and fabrication capabilities delivering high-quality welded assemblies with consistency, strength, and scalability.
              </p>
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Capabilities / Scope</h3>
                <div className="space-y-3">
                  {[
                    "Robotic MIG welding",
                    "Manual MIG welding",
                    "TIG welding",
                    "Laser welding & fusion welding",
                    "Aluminium & MS welding assemblies",
                    "Battery enclosures (Aluminium & MS) with IP-rated designs",
                    "Sheet metal and heavy fabrication assemblies"
                  ].map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#1BA3C7] flex-shrink-0" />
                      <span className="text-gray-700">{capability}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to build with precision?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Partner with UniqueSpark for comprehensive automation, welding, and manufacturing solutions that deliver results.
          </p>
          
          <button
            onClick={openModal}
            className="bg-[#1BA3C7] hover:bg-[#0F6E8C] text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto group"
          >
            Get in Touch
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </div>
    </div>
  );
};