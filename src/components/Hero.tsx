import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useContactModal } from '../contexts/ContactModalContext';
import { useHeroCarousel } from '../hooks/useHeroCarousel';

const heroSlides = [
  {
    id: 1,
    backgroundImage: 'https://res.cloudinary.com/doalvffjs/image/upload/v1767708111/1nwm_jrpt26.webp',
    title: {
      line1: 'PRECISION WELDING & INSPECTION FIXTURE SOLUTIONS',
      line2: 'BUILT FOR ACCURACY, REPEATABILITY, AND RELIABILITY'
    },
    subtitle: 'Complete in-house engineering for welding and inspection fixtures — covering design, development, assembly, electrical integration, and on-site installation to ensure dimensional accuracy and production consistency.'
  },
  {
    id: 2,
    backgroundImage: 'https://res.cloudinary.com/doalvffjs/image/upload/v1767708111/2nwm_yltsyq.webp',
    title: {
      line1: 'INTELLIGENT PROCESS AUTOMATION & ROBOTIC SYSTEMS',
      line2: 'ENGINEERED FOR END-TO-END MANUFACTURING EXCELLENCE'
    },
    subtitle: 'Comprehensive automation solutions including robotic cells, conveyor systems, leakage testing SPMs, SCADA, PLC programming, and electrical integration — delivered from feasibility study to commissioning.'
  },
  {
    id: 3,
    backgroundImage: 'https://res.cloudinary.com/doalvffjs/image/upload/v1767708111/3nwm_sbx4ri.webp',
    title: {
      line1: 'ADVANCED MACHINING & LASER PROCESSING CAPABILITIES',
      line2: 'PRECISION ENGINEERED FOR HEAVY AND HIGH-VALUE COMPONENTS'
    },
    subtitle: 'High-accuracy VMC machining and laser processing solutions for aluminium extrusions, fabricated structures, heavy components, and defence applications — supported by large-bed machining centers up to 8 meters.'
  },
  {
    id: 4,
    backgroundImage: 'https://res.cloudinary.com/doalvffjs/image/upload/v1768462131/bc981173-8b97-42cc-80b3-ce00576efd5a_arfdlt.png',
    title: {
      line1: 'ROBOTIC & MANUAL WELDING ASSEMBLY SOLUTIONS',
      line2: 'DESIGNED FOR STRUCTURAL STRENGTH AND PRODUCTION SCALE'
    },
    subtitle: 'Dedicated production teams delivering robotic MIG welding, manual MIG/TIG welding, laser welding, and fusion welding for aluminium and MS assemblies — including battery enclosures, sheet metal parts, and heavy fabrication structures.'
  }
];

export const Hero = () => {
  const { openModal } = useContactModal();
  const navigate = useNavigate();
  const {
    currentSlide,
    nextSlide,
    prevSlide,
    goToSlide,
    isHovered,
    setIsHovered,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useHeroCarousel(heroSlides.length);

  return (
    <section id="home" className="relative w-full min-h-[600px] h-[70vh] sm:h-[60vh] md:h-[50vw] max-h-[calc(100vh-5rem)] flex items-center hero-carousel-container">
      {/* Carousel Track */}
      <div
        className="hero-carousel-track w-full h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, index) => (
          <div key={slide.id} className="hero-carousel-slide relative w-full h-full flex items-center">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/25"></div>
            </div>

            {/* Content */}
            <div key={currentSlide} className="relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-16 md:py-24 lg:py-32">
              <div className="max-w-full sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight animate-fadeIn">
                  {slide.title.line1}
                  <span className="block text-[#1BA3C7]">{slide.title.line2}</span>
                </h1>

                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-6 sm:mb-8 md:mb-12 leading-relaxed animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  {slide.subtitle}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={openModal}
                    className="bg-[#1BA3C7] hover:bg-[#0F6E8C] text-white px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center group"
                  >
                    <span className="whitespace-nowrap">TALK TO OUR ENGINEERING TEAM</span>
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                  </button>

                  <button
                    onClick={() => navigate('/projects')}
                    className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm md:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95 flex items-center justify-center group"
                  >
                    <span className="whitespace-nowrap">VIEW KEY PROJECTS</span>
                    <Play className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform flex-shrink-0" />
                  </button>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-16 pt-6 sm:pt-8 border-t border-gray-600 animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#1BA3C7] mb-1 sm:mb-2">3+</div>
                    <div className="text-xs sm:text-sm text-gray-300">Robotic Welding Cells</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#1BA3C7] mb-1 sm:mb-2">2</div>
                    <div className="text-xs sm:text-sm text-gray-300">Large-Bed VMC Machines</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#1BA3C7] mb-1 sm:mb-2">10T & 20T</div>
                    <div className="text-xs sm:text-sm text-gray-300">Overhead Cranes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl font-bold text-[#1BA3C7] mb-1 sm:mb-2">Full</div>
                    <div className="text-xs sm:text-sm text-gray-300">In-House Design & Manufacturing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="hero-carousel-nav prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="hero-carousel-nav next"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="hero-carousel-pagination">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`hero-carousel-dot ${index === currentSlide ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};