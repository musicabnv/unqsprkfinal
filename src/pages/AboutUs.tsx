import React from 'react';
import { ArrowRight, MapPin, Calendar, Users, CheckCircle, Cog, Zap, TestTube, Wrench, Factory, Shield } from 'lucide-react';
import { useContactModal } from '../contexts/ContactModalContext';

export const AboutUs = () => {
  const { openModal } = useContactModal();
  const coreServices = [
    {
      title: "Welding Solutions",
      icon: <Zap className="w-6 h-6" />,
      items: ["Spot welding fixtures", "MIG welding fixtures", "Welding SPM"]
    },
    {
      title: "Automation & Assembly", 
      icon: <Cog className="w-6 h-6" />,
      items: ["Assembly lines", "Robotic cells (Design, Development)", "Robotic gestures SPM (Programming, installation, proving)"]
    },
    {
      title: "Testing & Inspection",
      icon: <TestTube className="w-6 h-6" />,
      items: ["Leakage testing SPM", "Inspection fixtures", "Inspection SPM"]
    },
    {
      title: "Pressing Solutions",
      icon: <Factory className="w-6 h-6" />,
      items: ["Hydraulic pressing SPM"]
    }
  ];

  const machiningCapabilities = [
    {
      title: "High Precision Machining",
      icon: <Wrench className="w-6 h-6" />,
      items: ["MS fabrication", "Aluminium fabrication & extrusions", "3D profile machining"]
    },
    {
      title: "Welded Assemblies",
      icon: <Shield className="w-6 h-6" />,
      items: ["Robotic welding for MS & aluminium assemblies", "Manual welding for MS & aluminium assemblies"]
    }
  ];

  const partners = [
    "Schneider", "ABB", "Siemens", "SICK", "SMC", "Tunkers"
  ];

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
            About <span className="text-[#1BA3C7]">UniqueSpark</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl">
            Engineering-driven automation, welding, and machining solutions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Who We Are Section */}
        <section className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Who We Are</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                UniqueSpark Engineering Pvt. Ltd. began its journey in 2018 as Unique Electricals Sales & Services in Bhosari MIDC, Pune. The company initially focused on electrical supply, equipment, SPM manufacturing, welding fixtures, robotic cells, and industrial services.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E6F4F8] p-2 rounded-full hover:bg-[#1BA3C7] hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5 text-[#1BA3C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Founded in 2018 in Bhosari MIDC, Pune</h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E6F4F8] p-2 rounded-full hover:bg-[#1BA3C7] hover:text-white transition-all duration-300">
                    <Calendar className="w-5 h-5 text-[#1BA3C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Expanded to Chakan and registered as Unique Automation & Robotics in 2022</h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E6F4F8] p-2 rounded-full hover:bg-[#1BA3C7] hover:text-white transition-all duration-300">
                    <CheckCircle className="w-5 h-5 text-[#1BA3C7]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Trusted for quality, reliability, and long-term client relationships.</h4>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div 
                className="h-96 bg-cover bg-center rounded-2xl shadow-2xl"
                style={{
                  backgroundImage: 'url(https://res.cloudinary.com/doalvffjs/image/upload/v1767012292/file_00000000fe0072079b85224d42ef186f_vnlv84.webp)'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Core Solutions */}
        <section className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Core Solutions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-[#E6F4F8] p-3 rounded-full">
                      <div className="text-[#1BA3C7]">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1BA3C7] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Machining & Fabrication Capabilities */}
        <section className="py-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Machining & Fabrication Capabilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {machiningCapabilities.map((capability, index) => (
              <div 
                key={index} 
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-[#E6F4F8] p-3 rounded-full">
                    <div className="text-[#1BA3C7]">
                      {capability.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{capability.title}</h3>
                </div>
                <ul className="space-y-3">
                  {capability.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1BA3C7] rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">
                        {item.includes('Robotic welding') || item.includes('Manual welding') ? (
                          <>
                            <strong>{item.split(' for ')[0]}</strong> for {item.split(' for ')[1]}
                          </>
                        ) : (
                          item
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Commitment to Quality</h3>
                <p className="text-gray-700">
                  Delivering results that exceed customer expectations.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trusted Technology Partners</h3>
                <div className="flex flex-wrap justify-center gap-3 mb-4">
                  {partners.map((partner, index) => (
                    <span 
                      key={index} 
                      className="bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5 hover:bg-[#E6F4F8] cursor-default"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Improvement</h3>
                <p className="text-gray-700">
                  Constantly evaluate new technologies to enhance our services better customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="bg-[#E6F4F8] border-l-4 border-[#1BA3C7] p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-800 leading-relaxed font-medium max-w-4xl mx-auto">
              To associate with customers to build reliable, secure, manageable, and flexible industrial infrastructure that establishes a strong foundation for achieving their business objectives.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Partner With UniqueSpark</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            From concept to commissioning, UniqueSpark delivers automation solutions built on engineering precision, quality, and trust.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={openModal}
              className="bg-[#1BA3C7] hover:bg-[#0F6E8C] text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center group"
            >
              Connect With Our Team
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={openModal}
              className="border-2 border-[#1BA3C7] text-[#1BA3C7] hover:bg-[#1BA3C7] hover:text-white px-10 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center group"
            >
              Request a Technical Discussion
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
