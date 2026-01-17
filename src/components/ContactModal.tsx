import React from 'react';
import { X, Mail, Phone, MapPin, Clock } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 text-white p-8 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
          <p className="text-gray-300">We're here to help with your automation needs</p>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6">
          {/* Email Section */}
          <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1BA3C7] p-3 rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Email Us</h3>
                <div className="space-y-2">
                  <a
                    href="mailto:Jagdish@uniqueautomationgroup.com"
                    className="block text-[#1BA3C7] hover:text-[#0F6E8C] font-medium transition-colors duration-200 hover:underline"
                  >
                    Jagdish@uniqueautomationgroup.com
                  </a>
                  <a
                    href="mailto:Umesh@uniqueautomationgroup.com"
                    className="block text-[#1BA3C7] hover:text-[#0F6E8C] font-medium transition-colors duration-200 hover:underline"
                  >
                    Umesh@uniqueautomationgroup.com
                  </a>
                  <a
                    href="mailto:Sales@uniqueautomationgroup.com"
                    className="block text-[#1BA3C7] hover:text-[#0F6E8C] font-medium transition-colors duration-200 hover:underline"
                  >
                    Sales@uniqueautomationgroup.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1BA3C7] p-3 rounded-lg flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Call Us</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-700 font-medium mb-1">Mr. Jagdish Bidve</p>
                    <a
                      href="tel:+918805013147"
                      className="text-[#1BA3C7] hover:text-[#0F6E8C] font-medium transition-colors duration-200 hover:underline text-lg"
                    >
                      +91 8805013147
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1BA3C7] p-3 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-3">Visit Us</h3>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C%2FO+Tulsi+Technocrafts%2C+Gat+No.284+Near+Ahmednagar+Forging%2C+Nanekar+Wadi%2C+Chakan-410501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#1BA3C7] transition-colors duration-200 block"
                >
                  <span className="font-medium">C/O Tulsi Technocrafts, Gat No.284</span><br />
                  Near Ahmednagar Forging, Nanekar Wadi<br />
                  Chakan-410501, Pune, India
                  <span className="block mt-2 text-[#1BA3C7] text-sm hover:underline">
                    View on Google Maps →
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Office Hours Section */}
          <div className="bg-[#E6F4F8] p-6 rounded-xl">
            <div className="flex items-start space-x-4">
              <div className="bg-[#1BA3C7] p-3 rounded-lg flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <p className="text-center text-gray-600 mb-4">
              Ready to discuss your automation project?
            </p>
            <button
              onClick={onClose}
              className="w-full bg-[#1BA3C7] hover:bg-[#0F6E8C] text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
