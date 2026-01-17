import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const clients = [
  { 
    name: "CIE Automotive", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441080/cie_spzvu7.jpg",
    fallback: "CIE"
  },
  { 
    name: "Tata AutoComp", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441080/tata_xjerhd.jpg",
    fallback: "TATA"
  },
  { 
    name: "ASAL", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441079/asal_ovv7sv.jpg",
    fallback: "ASAL"
  },
  { 
    name: "GMP", 
    logo: null,
    fallback: "GMP"
  },
  { 
    name: "Tata Gotion", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441079/gotion_p8gdmu.jpg",
    fallback: "GOTION"
  },
  { 
    name: "Mungi Engineers", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441080/mungi_bubex5.jpg",
    fallback: "MUNGI"
  },
  { 
    name: "ISGEC", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441080/isgec_ftepgd.jpg",
    fallback: "ISGEC"
  },
  { 
    name: "Tata Prestolite", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441079/prest_esw0xv.jpg",
    fallback: "PRESTOLITE"
  },
  { 
    name: "Magneti Marelli", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441080/madnetmareli_c6rmkh.jpg",
    fallback: "MARELLI"
  },
  { 
    name: "Panse Group", 
    logo: "https://res.cloudinary.com/doalvffjs/image/upload/v1767441080/panse_bprzvz.jpg",
    fallback: "PANSE"
  },
  { 
    name: "Autocomp Corporation", 
    logo: null,
    fallback: "AUTOCOMP"
  }
];

const ClientLogo = ({ client, index }: { client: typeof clients[0], index: number }) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const shouldShowFallback = !client.logo || imageError;

  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group flex items-center justify-center min-h-[120px] animate-scaleIn"
    >
      <div className="text-center w-full">
        {!shouldShowFallback && (
          <div className="relative">
            <img
              src={client.logo!}
              alt={`${client.name} logo`}
              className={`max-w-full max-h-16 mx-auto object-contain transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onError={handleImageError}
              onLoad={handleImageLoad}
            />
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-gray-200 rounded animate-pulse"></div>
              </div>
            )}
          </div>
        )}
        
        {shouldShowFallback && (
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#E6F4F8] rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-[#1BA3C7] transition-colors duration-300">
              <span className="text-[#1BA3C7] group-hover:text-white font-bold text-xs transition-colors duration-300">
                {client.fallback}
              </span>
            </div>
          </div>
        )}
        
        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#1BA3C7] transition-colors duration-300 mt-3">
          {client.name}
        </h3>
      </div>
    </div>
  );
};

export const Clients = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleClients = isExpanded ? clients : clients.slice(0, 5);
  const hasMoreClients = clients.length > 5;

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#1BA3C7]">Clients</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading automotive and industrial companies across India
          </p>
        </div>
        
        <div 
          className={`grid transition-all duration-500 ease-in-out ${
            isExpanded 
              ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6' 
              : 'grid-cols-5 gap-6'
          }`}
          style={{
            maxHeight: isExpanded ? '1000px' : '200px',
            overflow: 'hidden'
          }}
        >
          {visibleClients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <ClientLogo client={client} index={index} />
            </motion.div>
          ))}
        </div>
        
        {hasMoreClients && (
          <div className="text-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center px-6 py-3 bg-white border-2 border-[#1BA3C7] text-[#1BA3C7] hover:bg-[#1BA3C7] hover:text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 group"
            >
              {isExpanded ? (
                <>
                  View Less
                  <ChevronUp className="ml-2 w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                </>
              ) : (
                <>
                  View More Clients
                  <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </>
              )}
            </button>
            
            {!isExpanded && (
              <p className="text-gray-600 italic mt-4">
                And {clients.length - 5} more leading companies across the automotive and industrial sectors...
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
};