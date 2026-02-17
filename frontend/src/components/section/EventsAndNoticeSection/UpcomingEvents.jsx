import { useListAllQuery } from '@/api/events.api';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';



// Utility function to format day
const getDay = (dateString) => {
  const date = new Date(dateString);
  return date.getDate().toString().padStart(2, '0');
};

// Utility function to format month and year
const getMonthYear = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
};

const UpcomingEvents = () => {
  const {data, isLoading, error} = useListAllQuery({page: 1, limit: 100})
  const location = useLocation();

  const eventsList = data?.result || []

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <section  className="py-32 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative" id="events">
        {/* Header - Designerly & Asymmetric */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-32" data-aos="fade-up">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-primary" />
              <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase">Vibrancy Roadmap</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-foreground leading-[0.9] tracking-tighter">
              Upcoming <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Programs</span>
            </h2>
          </div>
          <div className="max-w-md lg:pb-4">
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
              A curated stream of academic milestones, cultural festivals, and community gatherings that define our campus spirit.
            </p>
          </div>
        </div>

        {/* Organic Flowing Content */}
        <div className="relative max-w-6xl mx-auto">
          {/* Subtle Implied Curve Line (Hidden on mobile) */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block">
            <svg className="w-full h-full text-slate-100 dark:text-slate-800" viewBox="0 0 1000 1200" fill="none" preserveAspectRatio="none">
              <path d="M500,0 C800,400 200,800 500,1200" stroke="currentColor" strokeWidth="2" strokeDasharray="12 12" />
            </svg>
          </div>

          <div className="space-y-40 md:space-y-64">
            {eventsList.map((event, index) => (
              <div 
                key={event.id}
                className={`relative flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Hero Image Section - Masked & Layered */}
                <div 
                  className="relative group w-full lg:w-3/5"
                  data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                >
                  <div className={`relative aspect-[16/10] overflow-hidden rounded-[4rem] md:rounded-[6rem] border-8 border-white dark:border-slate-900 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] transform-gpu`}>
                    <img 
                      src={event.image || 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=600&auto=format&fit=crop'} 
                      alt={event.title} 
                      className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                    />
                    {/* Artistic Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60" />
                  </div>

                  {/* Decorative Floaters */}
                  <div className={`absolute -top-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse`} />
                  <div className={`absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl`} />
                </div>

                {/* Massive Hero Date Badge - Overlapping & Designerly */}
                <div 
                  className={`absolute z-20 top-1/2 -translate-y-1/2 ${
                    index % 2 === 0 ? 'right-0 lg:left-1/2 lg:-translate-x-1/2' : 'left-0 lg:left-1/2 lg:-translate-x-1/2'
                  }`}
                  data-aos="zoom-in"
                >
                  <div className="relative group">
                    <div className={`w-36 h-36 md:w-48 md:h-48 rounded-[3rem] bg-white/70 dark:bg-slate-900/80 backdrop-blur-2xl border-2 border-white dark:border-slate-800 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110`}>
                      <span className={`text-6xl md:text-8xl font-black text-sky-600 dark:text-sky-400 leading-none tracking-tighter`}>
                        {getDay(event.date)}
                      </span>
                      <span className="text-sm md:text-lg font-black text-slate-900 dark:text-white uppercase tracking-[0.4em] mt-2">
                        {getMonthYear(event.date)}
                      </span>
                    </div>
                    {/* Visual Connector Dot */}
                    <div className={`absolute -bottom-4 right-1/4 w-12 h-12 bg-white dark:bg-slate-900 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex items-center justify-center animate-bounce`}>
                        <div className={`w-4 h-4 rounded-full bg-sky-500`} />
                    </div>
                  </div>
                </div>

                {/* Event Content - Asymmetric & Sophisticated */}
                <div  
                  className={`w-full lg:w-2/5 ${index % 2 === 1 ? 'lg:text-right' : 'lg:text-left'}`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                >
                  <div className="relative z-10">
                    <span className={`inline-block px-4 py-1.5 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-black uppercase tracking-widest mb-6`}>
                      Principal Activity
                    </span>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight group">
                      {event.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium mb-10">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Dynamic Component */}
        <div className="mt-40 text-center" data-aos="fade-up">
           <div className="inline-block p-12 rounded-[4rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 relative group overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-3xl md:text-4xl font-black mb-4">Planning Ahead?</h4>
                <p className="text-muted-foreground mb-8 max-w-sm mx-auto font-medium">Download our comprehensive yearly calendar to sync with your family schedule.</p>
                <button className="px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                  Access Academic Calendar
                </button>
              </div>
              {/* Decorative Particle Elements */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-3xl group-hover:scale-150 transition-transform" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl group-hover:p-12 transition-all" />
           </div>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;