import React from 'react';
import { MapPin, Phone, ArrowRight, Home } from 'lucide-react';

const SchoolVisit = () => {
  return (
    <section className="py-24 md:py-32 bg-primary/[0.02] relative overflow-hidden" id="school-visit">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
         <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-pulse" />
         <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Image Container */}
          <div className="w-full lg:w-1/2" data-aos="fade-right">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-secondary/10 rounded-[3rem] blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative rounded-[3rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200" 
                  alt="School Campus" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 p-4 rounded-2xl bg-background/90 backdrop-blur-md border border-white/20 shadow-xl flex items-center gap-4 animate-bounce-subtle">
                   <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                     <MapPin size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Location</p>
                     <p className="text-sm font-bold text-foreground">Paramount Main Campus</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Invitation Content */}
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <Home className="text-secondary" size={20} />
                <span className="text-secondary font-bold text-sm tracking-[0.2em] uppercase">Open Invitation</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-foreground mb-8 leading-[1.15]">
                Experience Our <br />
                <span className="text-primary italic">Learning Environment</span> Firsthand.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                We invite you to tour our classrooms, meet our dedicated faculty, and see how we create a safe and nurturing space for every student. Let's start a conversation about your child's future in an environment that values growth and discovery.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <button className="group px-8 py-5 bg-primary text-white rounded-full font-bold shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 flex items-center gap-3 active:scale-95 w-full sm:w-auto justify-center">
                  Schedule a Visit
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </button>
                <button className="px-8 py-5 border-2 border-primary/20 hover:border-primary text-primary rounded-full font-bold transition-all duration-300 flex items-center gap-3 active:scale-95 w-full sm:w-auto justify-center">
                  Contact Admissions
                  <Phone size={18} />
                </button>
              </div>

              {/* Trust Indicator */}
              <div className="mt-12 pt-8 border-t border-border/50">
                 <p className="text-sm text-muted-foreground flex items-center gap-3 italic">
                   <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                   Visits are available Monday to Friday, 9:00 AM — 3:00 PM.
                 </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SchoolVisit;