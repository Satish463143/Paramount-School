import React from 'react';
import { MapPin, Navigation, Map as MapIcon } from 'lucide-react';

const MapIntegration = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative group rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-slate-900 shadow-slate-200 dark:shadow-none" data-aos="zoom-in">
          
          {/* Mock Map Background (Using Unsplash for high-end look) */}
          <div className="relative h-[500px] w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112063.24559288!2d77.11211025530188!3d28.630453303884143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b34766285%3A0x4ede549a04a69c02!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="w-full h-full grayscale dark:invert dark:contrast-75 border-none"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
             
             {/* Floating Info Overlay */}
             <div className="absolute top-10 right-10 max-w-sm p-8 rounded-[3rem] bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl border border-white dark:border-slate-800 shadow-2xl shadow-black/10 animate-in slide-in-from-right duration-700">
                <div className="flex items-center gap-4 mb-6">
                   <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                      <MapPin className="text-white w-6 h-6" />
                   </div>
                   <div>
                      <h4 className="font-black text-foreground">Paramount School</h4>
                      <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">Principal Campus</p>
                   </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-8">
                  Plot No. 45, Education Hub, Near Central Park, New Delhi - 110001
                </p>
                <div className="flex gap-4">
                   <button className="flex-1 py-4 px-6 rounded-2xl bg-primary text-white text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2">
                      <Navigation className="w-4 h-4" /> Go
                   </button>
                   <button className="flex-1 py-4 px-6 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-2">
                      <MapIcon className="w-4 h-4" /> Save
                   </button>
                </div>
             </div>
          </div>

          {/* Artistic Frame Details */}
          <div className="absolute bottom-10 left-10 pointer-events-none">
             <div className="px-6 py-3 rounded-full bg-slate-950/20 backdrop-blur-sm text-[10px] text-white font-black uppercase tracking-[0.4em] border border-white/10">
                Lat: 28.6304 / Long: 77.1121
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapIntegration;
