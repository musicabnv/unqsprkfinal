import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useContactModal } from '../contexts/ContactModalContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useContactModal();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Key Projects', path: '/projects' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Contact', path: null, action: openModal }
  ];

  return (
    <header className="bg-white/75 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
      <div className="px-4 sm:px-6 lg:px-16">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-[#1BA3C7] rounded-full flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/doalvffjs/image/upload/v1764616195/ChatGPT_Image_Dec_2__2025__12_35_09_AM-removebg-preview_ulwqbo.png"
                alt="UniqueSpark Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold uppercase text-gray-900">UniqueSpark</h1>
              <p className="text-xs text-gray-600 tracking-wide">Engineering India Pvt. Ltd.</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.path ? (
                  <Link
                    to={item.path}
                    className={`text-gray-700 hover:text-[#1BA3C7] font-medium transition-colors pb-1 ${
                      isActive(item.path) ? 'text-[#1BA3C7]' : ''
                    }`}
                  >
                    {item.name}
                    {isActive(item.path) && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1BA3C7]"></div>
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={item.action}
                    className="text-gray-700 hover:text-[#1BA3C7] font-medium transition-colors pb-1"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden py-1 border-t border-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          {isMenuOpen && (
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.path ? (
                    <Link
                      to={item.path}
                      className={`text-gray-700 hover:text-[#1BA3C7] font-medium transition-colors duration-200 ${
                        isActive(item.path) ? 'text-[#1BA3C7]' : ''
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        item.action?.();
                        setIsMenuOpen(false);
                      }}
                      className="text-gray-700 hover:text-[#1BA3C7] font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};