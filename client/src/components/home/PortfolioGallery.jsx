import React, { useState, useEffect } from 'react';
import { Plus, X, ChevronLeft, ChevronRight, Eye, Sparkles } from 'lucide-react';

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Curated portfolio assets from existing project imagery
  const galleryItems = [
    {
      id: 1,
      title: 'Grand Gala Runway & Stage Architecture',
      category: 'Stages & Production',
      image: '/images/hero-stage.png',
      location: 'Kolkata Hotel Ballroom',
      aspect: 'col-span-1 md:col-span-2 row-span-2 aspect-[16/10] md:aspect-auto',
    },
    {
      id: 2,
      title: 'Traditional Vedic Mandap & Bridal Florals',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
      location: 'Heritage Rajbari Courtyard',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 3,
      title: 'Gourmet In-House Banquet Spread',
      category: 'Banquets & Catering',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1200&q=80',
      location: 'Executive Dining Setup',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 4,
      title: '3D LED Stage Fabrication & Acoustic Concert Sound',
      category: 'Stages & Production',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80',
      location: 'Convention Center, Kolkata',
      aspect: 'col-span-1 aspect-[16/10]',
    },
    {
      id: 5,
      title: 'Romantic Evening Floral Canopy & Ambience',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
      location: 'Lawn Pavilion',
      aspect: 'col-span-1 aspect-[16/10]',
    },
    {
      id: 6,
      title: 'Grand Chandelier Ballroom Reception',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
      location: 'Five-Star Banquet Hall',
      aspect: 'col-span-1 md:col-span-2 aspect-[16/9]',
    },
    {
      id: 7,
      title: 'Outdoor Festive Lanterns & Dining Pathway',
      category: 'Banquets & Catering',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80',
      location: 'Open Garden Grounds',
      aspect: 'col-span-1 aspect-[4/5]',
    },
    {
      id: 8,
      title: 'Sacred Ritual Mandap Setup',
      category: 'Weddings',
      image: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1200&q=80',
      location: 'Traditional Biye Bari',
      aspect: 'col-span-1 aspect-[4/5]',
    },
  ];

  const categories = ['All', 'Weddings', 'Banquets & Catering', 'Stages & Production'];

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % filteredItems.length);
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F5] dark:bg-[#141210] border-b border-[#E8E0D5] dark:border-[#38312B] transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        
        {/* Editorial Section Header (Inspired by Bottega53 & IDO Events) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center space-x-2">
              <span className="w-6 h-px bg-[#C5A059]" />
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6B1D2F] dark:text-[#E0CFA6]">
                Visual Journal
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl text-[#2B2625] dark:text-[#FAF8F5] font-normal tracking-tight leading-[1.12]">
              Capturing Moments of <br />
              <span className="italic font-serif text-[#6B1D2F] dark:text-[#E0CFA6]">Grandeur & Intimacy.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#5A524E] dark:text-[#D4CCC2] font-light leading-relaxed">
              An editorial look through our recent event stagecraft, bespoke mandap styling, and live culinary spreads.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs uppercase tracking-[0.14em] font-medium px-4 py-2 rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#6B1D2F] text-white shadow-sm'
                    : 'bg-white dark:bg-[#1C1917] text-[#5A524E] dark:text-[#D4CCC2] border border-[#E8E0D5] dark:border-[#38312B] hover:border-[#6B1D2F] dark:hover:border-[#C5A059]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry-Style Asymmetrical Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px] sm:auto-rows-[300px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className={`group relative rounded-2xl overflow-hidden border border-[#E8E0D5] dark:border-[#38312B] bg-white dark:bg-[#1C1917] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${item.aspect}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />

              {/* Dark Ambient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6" />

              {/* Top Plus Icon Indicator (Bottega53 Inspiration) */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md text-[#E0CFA6] border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                <Plus className="w-4 h-4 stroke-[2]" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#E0CFA6] block mb-1">
                  {item.category} • {item.location}
                </span>
                <h3 className="font-serif text-lg sm:text-xl font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {/* ========================================================================= */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-in"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Top Bar: Counter & Close */}
          <div
            className="flex items-center justify-between text-white/80 max-w-[1280px] w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-xs uppercase tracking-[0.2em] text-[#E0CFA6] font-mono">
              0{lightboxIndex + 1} / 0{filteredItems.length}
            </div>

            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Center Image Container */}
          <div
            className="relative flex items-center justify-center my-auto max-w-5xl mx-auto w-full h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl animate-fade-in"
            />

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={() =>
                setLightboxIndex(
                  (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                )
              }
              className="absolute left-2 sm:-left-16 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={() =>
                setLightboxIndex((lightboxIndex + 1) % filteredItems.length)
              }
              className="absolute right-2 sm:-right-16 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Title Bar */}
          <div
            className="text-center text-white max-w-xl mx-auto pb-4"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#E0CFA6] font-semibold block mb-1">
              {filteredItems[lightboxIndex].category} • {filteredItems[lightboxIndex].location}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-normal text-white">
              {filteredItems[lightboxIndex].title}
            </h4>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;