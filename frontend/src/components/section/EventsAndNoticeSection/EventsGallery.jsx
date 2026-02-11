import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Calendar } from 'lucide-react';

const eventsGalleryData = [
  {
    id: 1,
    title: 'Annual Sports Day 2026',
    date: '15 Feb 2026',
    description: 'A celebration of athleticism, teamwork, and school spirit.',
    images: [
      { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', caption: 'The Final Sprint' },
      { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', caption: 'Team Coordination' },
      { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', caption: 'Trophy Ceremony' },
      { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', caption: 'Junior Athletics' },
      { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', caption: 'Closing Parade' },
      { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', caption: 'Closing Parade' },
      { url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?q=80&w=800&auto=format&fit=crop', caption: 'Closing Parade' },
    ],
  },
];

const EventsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeEventImages, setActiveEventImages] = useState([]);

  const openLightbox = (images, index) => {
    setActiveEventImages(images);
    setCurrentIndex(index);
    setSelectedImage(images[index]);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % activeEventImages.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(activeEventImages[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + activeEventImages.length) % activeEventImages.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(activeEventImages[prevIdx]);
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
  }, [selectedImage, currentIndex]);

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

        {/* Events Mosaic Blocks */}
        <div className="space-y-32">
          {eventsGalleryData.map((event, eventIdx) => (
            <div key={event.id} className="group">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10" data-aos="fade-up">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest">
                    <Calendar className="w-4 h-4 text-primary" />
                    {event.date}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black text-foreground group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground font-medium max-w-xl">{event.description}</p>
                </div>
                <button className="px-8 py-3 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm hover:scale-105 transition-transform shadow-lg shadow-slate-200 dark:shadow-none">
                  View Full Gallery
                </button>
              </div>

              {/* Mosaic Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 h-[500px] md:h-[600px]">
                {/* Hero Image */}
                <div 
                  className="col-span-2 row-span-2 relative overflow-hidden rounded-[2.5rem] cursor-pointer group/img shadow-xl"
                  onClick={() => openLightbox(event.images, 0)}
                  data-aos="fade-right"
                >
                  <img 
                    src={event.images[0].url} 
                    alt={event.images[0].caption} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110 group-hover/img:rotate-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                     <span className="text-white font-bold text-lg">{event.images[0].caption}</span>
                     <div className="flex items-center gap-2 text-white/70 text-sm mt-1">
                        <Maximize2 className="w-4 h-4" /> Click to enlarge
                     </div>
                  </div>
                </div>

                {/* Supporting Images */}
                {event.images.slice(1, 5).map((img, idx) => (
                  <div 
                    key={idx}
                    className={`relative overflow-hidden rounded-[2rem] cursor-pointer group/img shadow-lg ${
                      idx === 2 ? 'md:col-span-2' : ''
                    }`}
                    onClick={() => openLightbox(event.images, idx + 1)}
                    data-aos="zoom-in"
                    data-aos-delay={idx * 100}
                  >
                    <img 
                      src={img.url} 
                      alt={img.caption} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover/img:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                       <Maximize2 className="w-8 h-8 text-white scale-50 group-hover/img:scale-100 transition-transform" />
                    </div>
                    {idx === 3 && event.images.length > 5 && (
                      <div className="absolute inset-0 bg-slate-900/60 flex items-center justify-center">
                         <span className="text-white font-black text-2xl">+{event.images.length - 5} More</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
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
                    src={selectedImage.url} 
                    alt={selectedImage.caption} 
                    className="w-full h-full object-contain"
                  />
                  {/* Caption Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                     <p className="text-white text-xl font-bold text-center tracking-wide">
                        {selectedImage.caption}
                     </p>
                     <div className="text-white/50 text-xs mt-2 text-center flex items-center justify-center gap-4">
                        <span>Image {currentIndex + 1} of {activeEventImages.length}</span>
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