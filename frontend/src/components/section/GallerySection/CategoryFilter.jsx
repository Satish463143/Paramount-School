import React, { useState, useRef, useEffect } from 'react';

const categories = [
  {
    id: 'events',
    title: 'Events',
    tagline: 'Lively School Gatherings',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop',
    color: 'emerald',
  },
  {
    id: 'sports',
    title: 'Sports',
    tagline: 'Athletic Excellence',
    image: 'https://images.unsplash.com/photo-1541534401786-2077e875e05a?q=80&w=1200&auto=format&fit=crop',
    color: 'sky',
  },
  {
    id: 'academic',
    title: 'Academics',
    tagline: 'Learning Journeys',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
    color: 'indigo',
  },
  {
    id: 'cultural',
    title: 'Cultural',
    tagline: 'Artistic Expressions',
    image: 'https://images.unsplash.com/photo-1514525253361-bee24387052b?q=80&w=1200&auto=format&fit=crop',
    color: 'purple',
  },
  {
    id: 'campus',
    title: 'Campus',
    tagline: 'Daily Life & Vibes',
    image: 'https://images.unsplash.com/photo-1523050853051-f750004987a9?q=80&w=1200&auto=format&fit=crop',
    color: 'rose',
  },
  {
    id: 'trips',
    title: 'Field Trips',
    tagline: 'Exploring the World',
    image: 'https://images.unsplash.com/photo-1503919919749-646dc41097e3?q=80&w=1200&auto=format&fit=crop',
    color: 'amber',
  },
];

const CategoryFilter = ({ onCategoryChange }) => {
  const [activeCategory, setActiveCategory] = useState('events');
  const scrollRef = useRef(null);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
    if (onCategoryChange) {
      onCategoryChange(categoryId);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 mb-16" data-aos="fade-up">
        <div className="flex flex-col md:flex-row items-baseline gap-6 justify-between">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-4 leading-none tracking-tighter">
              Visual <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">Journeys</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium">
              Dive into our world through a high-definition lens. Select a category to explore curated memories.
            </p>
          </div>
          <div className="hidden lg:block text-right">
             <span className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Horizontal Explorer</span>
             <div className="flex gap-2 mt-2 justify-end">
                <div className="w-8 h-1 bg-primary rounded-full" />
                <div className="w-12 h-1 bg-slate-100 dark:bg-slate-800 rounded-full" />
             </div>
          </div>
        </div>
      </div>

      {/* The "Visual Lens" Horizontal Selector */}
      <div className="relative w-full overflow-x-auto no-scrollbar pb-10" ref={scrollRef}>
        <div className="flex flex-nowrap gap-6 px-4 md:px-[5vw]">
          {categories.map((cat, index) => (
            <button 
              key={cat.id}
              onClick={() => handleCategoryClick(cat.id)}
              className={`group relative flex-shrink-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                activeCategory === cat.id 
                  ? 'w-[75vw] md:w-[45vw] lg:w-[35vw]' 
                  : 'w-[20vw] md:w-[15vw] lg:w-[12vw]'
              }`}
            >
              <div className={`relative h-[50vh] md:h-[60vh] w-full rounded-[3.5rem] md:rounded-[5rem] overflow-hidden shadow-2xl transition-all duration-500 ${
                activeCategory === cat.id ? 'ring-8 ring-primary/20 scale-[0.98]' : 'hover:scale-95'
              }`}>
                {/* Parallax Background */}
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className={`w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 ${
                    activeCategory === cat.id ? 'scale-110 grayscale-0' : 'grayscale-[0.4] filter contrast-125'
                  }`}
                />
                
                {/* Overlay Layers */}
                <div className={`absolute inset-0 bg-slate-900/40 transition-opacity duration-700 ${
                  activeCategory === cat.id ? 'opacity-20' : 'opacity-60 group-hover:opacity-40'
                }`} />
                
                {/* Content - Expanding Lens Effect */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                  <div className={`transition-all duration-700 ${
                    activeCategory === cat.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <span className={`inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 text-white text-[10px] font-black uppercase tracking-widest mb-4`}>
                      {cat.tagline}
                    </span>
                    <h3 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Minimized View Title (Vertical Text) */}
                  <div className={`absolute transition-all duration-700 pointer-events-none ${
                    activeCategory === cat.id ? 'opacity-0 scale-50' : 'opacity-100 scale-100'
                  }`}>
                    <h4 className="text-xl md:text-2xl font-black text-white/90 uppercase tracking-widest whitespace-nowrap rotate-90 origin-center">
                      {cat.title}
                    </h4>
                  </div>
                </div>

                {/* Animated Indicator line */}
                <div className={`absolute bottom-10 left-10 right-10 flex justify-center transition-all duration-700 ${
                  activeCategory === cat.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                }`}>
                   <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-2/3 animate-loading-bar" />
                   </div>
                </div>
              </div>

              {/* Magnetic Hover Indicator (Floating Dot) */}
              {activeCategory === cat.id && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 pointer-events-none animate-bounce">
                  <div className={`w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/40`}>
                     <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(50%); }
          100% { transform: translateX(100%); }
        }
        .animate-loading-bar {
          animation: loading-bar 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default CategoryFilter;