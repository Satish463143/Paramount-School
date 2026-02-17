import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Download } from 'lucide-react';
import { useListAllQuery } from '@/api/gallery.api';

const MainImage = ({ activeCategory }) => {
  // Fetch all galleries with a high limit to allow client-side filtering
  // avoiding API changes as requested
  const { data, isLoading, isError } = useListAllQuery({ limit: 1000 });
  
  const allGalleries = data?.result || [];

  // Filter images based on activeCategory
  // Checks if the gallery's category array contains the activeCategory ID
  const images = React.useMemo(() => {
    if (!activeCategory || activeCategory === 'All') return allGalleries;
    return allGalleries.filter(img => 
      img.category?.some(cat => (cat._id || cat) === activeCategory)
    );
  }, [allGalleries, activeCategory]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e?.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(images[nextIdx]);
  };

  const prevImage = (e) => {
    e?.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(images[prevIdx]);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  if (isLoading) return <div className="py-32 text-center">Loading gallery...</div>;

  if (images.length === 0) {
    return (
      <section className="pb-32 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 text-center py-20">
             <p className="text-slate-500 text-lg">No images found in this category.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-32 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* The Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8 min-h-[400px]">
          {images.map((img, idx) => (
            <div 
              key={img._id}
              className="relative group cursor-pointer break-inside-avoid rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform-gpu hover:-translate-y-2"
              data-aos="fade-up"
              onClick={() => openLightbox(img, idx)}
            >
              <img 
                src={img.image} 
                alt={img.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                // Fallback aspect ratio or random if type is missing
                style={{ aspectRatio: idx % 3 === 0 ? '16/10' : idx % 3 === 1 ? '3/4' : '1/1' }}
              />
              
              {/* Pro Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                 <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h4 className="text-white text-xl font-black mb-2">{img.title}</h4>
                    <div className="flex items-center gap-4 text-white/70">
                       <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
                          <Maximize2 className="w-4 h-4" /> Focus
                       </div>
                    </div>
                 </div>
              </div>

              {/* Decorative Corner Label */}
              <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] text-white font-black uppercase tracking-widest border border-white/30">
                   Capture #{idx + 1}
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Portal Lightbox (Fixed outside the content flow) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/98 backdrop-blur-2xl transition-all duration-500 animate-in fade-in"
            onClick={closeLightbox}
          >
            {/* Control Bar */}
            <div className="absolute top-0 left-0 right-0 p-8 flex justify-between items-center z-[1001]" onClick={e => e.stopPropagation()}>
               <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                     <Maximize2 className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-white font-black text-lg leading-none">{selectedImage.title}</h5>
                    <p className="text-white/40 text-xs font-bold mt-1 uppercase tracking-widest">Image {currentIndex + 1} of {images.length}</p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <button className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer">
                    <Download className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={closeLightbox}
                    className="w-12 h-12 rounded-2xl bg-white/10 text-white flex items-center justify-center hover:bg-rose-500 transition-all cursor-pointer"
                  >
                    <X className="w-6 h-6" />
                  </button>
               </div>
            </div>

            {/* Main Stage */}
            <div className="relative w-full h-full flex items-center justify-center px-4 md:px-24">
               {/* Nav Buttons */}
               <button 
                 onClick={prevImage}
                 className="absolute left-4 md:left-12 p-4 rounded-[2rem] bg-white/5 text-white hover:bg-white/10 transition-all z-[1001] cursor-pointer"
               >
                 <ChevronLeft className="w-10 h-10" />
               </button>

               <div className="relative max-w-6xl max-h-[75vh] w-full flex justify-center group" onClick={e => e.stopPropagation()}>
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title}
                    className="max-w-full max-h-[75vh] object-contain rounded-3xl shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transition-transform duration-500 group-hover:scale-[1.02]"
                  />
               </div>

               <button 
                 onClick={nextImage}
                 className="absolute right-4 md:right-12 p-4 rounded-[2rem] bg-white/5 text-white hover:bg-white/10 transition-all z-[1001] cursor-pointer"
               >
                 <ChevronRight className="w-10 h-10" />
               </button>
            </div>

            {/* Aesthetic Progress Dots */}
            <div className="absolute bottom-10 flex gap-2 z-[1001]" onClick={e => e.stopPropagation()}>
               {images.map((_, i) => (
                 <div 
                   key={i} 
                   className={`h-1 rounded-full transition-all duration-500 ${
                     i === currentIndex ? 'w-8 bg-primary shadow-[0_0_10px_rgba(var(--primary),0.5)]' : 'w-2 bg-white/20'
                   }`} 
                 />
               ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MainImage;