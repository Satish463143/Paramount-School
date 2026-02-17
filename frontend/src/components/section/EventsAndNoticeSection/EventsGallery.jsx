import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { useListAllQuery } from '@/api/gallery.api';


const EventsGallery = () => {
  const {data, isLoading, error} = useListAllQuery()
  const eventsGalleryData = data?.result || []
  console.log(eventsGalleryData)

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(eventsGalleryData[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % eventsGalleryData.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(eventsGalleryData[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + eventsGalleryData.length) % eventsGalleryData.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(eventsGalleryData[prevIdx]);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex, eventsGalleryData]);

  if (isLoading) return <div className="py-24 text-center">Loading gallery...</div>

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-[0.3em] mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Visual Memories
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-foreground leading-tight mb-6">
            Moments That <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">Defined Us</span>
          </h2>
          <p className="text-lg text-muted-foreground font-medium">
            A window into the vibrant life at Paramount School, capturing the energy, creativity, and joy of our students.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {eventsGalleryData.slice(0, 12).map((item, index) => (
            <div 
              key={item._id} 
              className="group relative aspect-square overflow-hidden rounded-[2rem] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              onClick={() => openLightbox(index)}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </span>
                <div className="flex items-center gap-2 text-white/70 text-xs mt-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                   <Maximize2 className="w-3 h-3" /> Click to enlarge
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center" data-aos="fade-up">
          <button className="px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm tracking-wide hover:scale-105 transition-transform shadow-lg shadow-slate-200 dark:shadow-none">
            View Full Gallery Archive
          </button>
        </div>

        {/* Global Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-xl transition-all animate-in fade-in duration-300">
            {/* Close Button */}
            <button 
              onClick={closeLightbox}
              className="absolute top-8 right-8 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all z-[110]"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Navigation Buttons */}
            <button 
              onClick={prevImage}
              className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all z-[110]"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/5 text-white hover:bg-white/10 transition-all z-[110]"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            {/* Main Content */}
            <div className="relative max-w-5xl w-full px-4 flex flex-col items-center">
               <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="w-full h-full object-contain bg-black/50"
                  />
                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                     <p className="text-white text-2xl font-bold text-center tracking-wide drop-shadow-md">
                        {selectedImage.title}
                     </p>
                     <div className="text-white/60 text-sm mt-2 text-center flex items-center justify-center gap-4">
                        <span>Image {currentIndex + 1} of {eventsGalleryData.length}</span>
                     </div>
                  </div>
               </div>
            </div>

            {/* Background Texture for Lightbox */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          </div>
        )}

      </div>
    </section>
  );
};
export default EventsGallery;