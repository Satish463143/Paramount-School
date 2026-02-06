import React from "react";
import { Calendar, ArrowRight, Star, Sparkles, MapPin } from "lucide-react";
import Button from "../../common/Button/Button";

const EVENTS_DATA = [
  {
    id: 1,
    title: "Annual Sports Meet 2026",
    description: "A grand celebration of athleticism, team spirit, and physical excellence featuring over 20 competitive disciplines.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
    date: "15",
    month: "FEB",
    featured: true,
    tag: "Major Event",
    delay: 100
  },
  {
    id: 2,
    title: "Cultural Arts Fest",
    description: "Showcasing student talent through vibrant performances, music, and art.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
    date: "22",
    month: "MAR",
    featured: false,
    delay: 200
  },
  {
    id: 3,
    title: "Science & Innovation",
    description: "Fostering curiosity through hands-on student projects and modern technological models.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    date: "10",
    month: "APR",
    featured: false,
    delay: 300
  },
  {
    id: 4,
    title: "Educational Field Trip",
    description: "Expanding horizons with outdoor learning and historical exploration.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
    date: "05",
    month: "MAY",
    featured: false,
    delay: 400
  }
];

const Events = () => {
  const featuredEvent = EVENTS_DATA.find(e => e.featured);
  const otherEvents = EVENTS_DATA.filter(e => !e.featured);

  return (
    <section className="py-24 relative overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-500">
      {/* Decorative Blobs consistent with CTA */}
      <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-20 text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.3em] uppercase rounded-full border border-primary/10">
            <Sparkles size={12} className="text-secondary" />
            Discover School Life
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight">
            Events & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Activities.</span>
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto leading-relaxed">
            Beyond the classroom, our students engage in a rich variety of cultural and 
            academic activities that foster lifelong growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Featured Event: Asymmetric Highlight */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="group relative h-full min-h-[500px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
              <img 
                src={featuredEvent.image} 
                alt={featuredEvent.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              {/* Featured Label */}
              <div className="absolute top-8 left-8 flex items-center gap-3 bg-white/20 backdrop-blur-xl border border-white/30 px-6 py-3 rounded-2xl text-white">
                <Star size={18} className="fill-secondary text-secondary" />
                <span className="text-xs font-bold tracking-widest uppercase">{featuredEvent.tag}</span>
              </div>

              {/* Featured Content Overlay */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-10 rounded-[2.5rem] shadow-2xl">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 text-secondary mb-4">
                        <Calendar size={20} />
                        <span className="text-lg font-black tracking-tighter text-white">
                          {featuredEvent.date} {featuredEvent.month}, 2026
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
                        {featuredEvent.title}
                      </h3>
                      <p className="text-white/70 text-base max-w-md leading-relaxed">
                        {featuredEvent.description}
                      </p>
                    </div>
                    
                    <button className="shrink-0 w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-500 shadow-xl shadow-secondary/20">
                      <ArrowRight size={32} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* More Activities: Glassmorphism List */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center justify-between mb-8 pl-4" data-aos="fade-up">
              <h4 className="text-xl font-bold tracking-tight text-foreground">Upcoming Activities</h4>
              <a href="#" className="text-sm font-bold text-secondary flex items-center gap-2 hover:gap-3 transition-all">
                VIEW ALL <ArrowRight size={16} />
              </a>
            </div>

            {otherEvents.map((event, idx) => (
              <div 
                key={event.id}
                className="group flex flex-col sm:flex-row items-center gap-6 p-6 bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] transition-all duration-500 hover:bg-card hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1"
                data-aos="fade-left"
                data-aos-delay={event.delay}
              >
                <div className="relative w-full sm:w-32 h-32 shrink-0 rounded-[1.5rem] overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3 py-1.5 rounded-xl text-center">
                    <p className="text-sm font-black leading-none text-foreground">{event.date}</p>
                    <p className="text-[8px] font-bold text-muted-foreground uppercase">{event.month}</p>
                  </div>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors duration-300">
                    {event.title}
                  </h4>
                  <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                </div>

                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <ArrowRight size={18} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Events;
