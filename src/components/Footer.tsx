import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-[#1BA3C7] rounded-full flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/doalvffjs/image/upload/v1764616195/ChatGPT_Image_Dec_2__2025__12_35_09_AM-removebg-preview_ulwqbo.png"
                  alt="UniqueSpark Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">UniqueSpark</h3>
                <p className="text-sm text-gray-400 uppercase tracking-wide">Engineering India Pvt. Ltd.</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Leading provider of advanced automation and robotic solutions, specializing in welding fixtures, 
              assembly lines, and SPM manufacturing with over 15 years of industry experience.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-[#1BA3C7] p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#1BA3C7] p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-[#1BA3C7] p-3 rounded-lg transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-[#1BA3C7] transition-all duration-200 hover:translate-x-1">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-[#1BA3C7] transition-all duration-200 hover:translate-x-1">About Us</a></li>
              <li><a href="#projects" className="text-gray-300 hover:text-[#1BA3C7] transition-all duration-200 hover:translate-x-1">Key Projects</a></li>
              <li><a href="#capabilities" className="text-gray-300 hover:text-[#1BA3C7] transition-all duration-200 hover:translate-x-1">Capabilities</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-[#1BA3C7] transition-all duration-200 hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#1BA3C7]" />
                <span className="text-gray-300 text-sm">Sales@uniqueautomationgroup.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#1BA3C7]" />
                <span className="text-gray-300 text-sm">+91 8805013147</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#1BA3C7] mt-1" />
                <span className="text-gray-300 text-sm">
                  Nanekar Wadi, Chakan<br />
                  Pune, India - 410501
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 UniqueSpark Engineering India Pvt. Ltd. All rights reserved. |
            <a href="#" className="text-[#1BA3C7] hover:text-[#0F6E8C] ml-1">Privacy Policy</a> |
            <a href="#" className="text-[#1BA3C7] hover:text-[#0F6E8C] ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};
