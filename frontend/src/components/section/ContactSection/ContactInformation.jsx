import React from 'react';
import { Mail, Clock, Phone, MapPin, ArrowUpRight, Compass } from 'lucide-react';

const contactData = [
    
  {
    id: 1,
    tag: 'OFFICIAL MAIL',
    title: 'Email Us',
    icon: Mail,
    details: ['info@paramountschool.edu', 'admissions@paramountschool.edu'],
    position: 'top-left', // Custom class for radial positioning
  },
  {
    id: 2,
    tag: 'SCHOOL HOURS',
    title: 'Availability',
    icon: Clock,
    details: ['Sun - Fri: 8:00 AM - 3:00 PM', 'Saturday: Closed'],
    position: 'top-right',
  },
  {
    id: 3,
    tag: 'PRIMARY CALL',
    title: 'Contact Us',
    icon: Phone,
    details: ['+91 11 2345 6789', '+91 98765 43210'],
    position: 'bottom-left',
  },
  {
    id: 4,
    tag: 'CAMPUS LOCATION',
    title: 'Visit Us',
    icon: MapPin,
    details: ['Ward No. 8, Tokha Municipality,', 'Gongabu Baniyatar, Nepal'],
    position: 'bottom-right',
  },
];

const ContactInformation = () => {
  return (
    <section className="py-32 bg-[#020617] relative overflow-hidden min-h-[800px] flex items-center justify-center">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Centered Radial Ripples */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
         <div className="w-[300px] h-[300px] border border-slate-800 rounded-full animate-pulse opacity-20" />
         <div className="absolute w-[500px] h-[500px] border border-slate-800 rounded-full opacity-10" />
         <div className="absolute w-[700px] h-[700px] border border-slate-800 rounded-full opacity-5" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Desktop Radial Layout */}
        <div className="hidden lg:block relative h-[700px] w-full">
           
           {/* Center Logo Hub */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="relative group">
                 {/* Decorative Glow */}
                 <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/40 transition-all duration-700" />
                 
                 {/* Logo Container */}
                 <div className="relative w-32 h-32 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center p-6 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <img 
                      src="/logo.png" 
                      alt="Paramount School Logo" 
                      className="w-full h-full object-contain filter brightness-125"
                    />
                 </div>

                 {/* Orbiting Ring */}
                 <div className="absolute -inset-4 border border-primary/20 rounded-full animate-spin-slow" />
              </div>
           </div>

           {/* Branching Contact Cards */}
           {contactData.map((item) => {
             const positionClasses = {
               'top-left': 'top-0 left-0',
               'top-right': 'top-0 right-0 text-right',
               'bottom-left': 'bottom-0 left-0',
               'bottom-right': 'bottom-0 right-0 text-right',
             };

             return (
               <div 
                 key={item.id}
                 className={`absolute w-[380px] group ${positionClasses[item.position]}`}
                 data-aos={item.position.includes('top') ? 'fade-down' : 'fade-up'}
               >
                 <div className="relative">
                    {/* Tag Label */}
                    <div className={`absolute -top-4 ${item.position.includes('right') ? 'right-6' : 'left-6'} z-10`}>
                       <span className="px-4 py-1.5 bg-white rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-lg">
                          {item.tag}
                       </span>
                    </div>

                    {/* Glass Card */}
                    <div className="relative p-10 rounded-[3rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-500 group-hover:bg-slate-900/60 group-hover:border-white/10 group-hover:-translate-y-2">
                       <div className={`flex items-start gap-6 ${item.position.includes('right') ? 'flex-row-reverse' : 'flex-row'}`}>
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                             <item.icon className="w-8 h-8 text-primary" />
                          </div>
                          <div className="space-y-4">
                             <h3 className="text-3xl font-black text-white">{item.title}</h3>
                             <div className="space-y-1">
                                {item.details.map((line, i) => (
                                  <p key={i} className="text-slate-400 font-bold text-sm tracking-wide">
                                    {line}
                                  </p>
                                ))}
                             </div>
                          </div>
                       </div>

                       <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                          <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em]">Connect Now</span>
                          <button className={`w-12 h-12 rounded-full ${item.position === 'top-left' ? 'bg-sky-400 text-white' : 'bg-slate-800 text-slate-400'} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                             <ArrowUpRight className="w-6 h-6" />
                          </button>
                       </div>
                    </div>
                 </div>
               </div>
             );
           })}
        </div>

        {/* Mobile / Tablet View (Structured Stack) */}
        <div className="lg:hidden space-y-12">
           <div className="flex justify-center mb-16">
              <div className="w-24 h-24 rounded-full bg-slate-900 border border-slate-800 p-4">
                 <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {contactData.map((item) => (
                <div key={item.id} className="relative p-8 rounded-[2.5rem] bg-slate-900/60 backdrop-blur-lg border border-white/5">
                   <div className="absolute -top-3 left-6">
                      <span className="px-3 py-1 bg-white rounded-full text-[9px] font-black text-slate-900 uppercase">
                        {item.tag}
                      </span>
                   </div>
                   <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                         <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-black text-white">{item.title}</h3>
                   </div>
                   <div className="space-y-1 mb-6">
                      {item.details.map((line, i) => (
                        <p key={i} className="text-slate-400 text-sm font-medium">{line}</p>
                      ))}
                   </div>
                   <button className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
                      Connect Now <ArrowUpRight className="w-4 h-4" />
                   </button>
                </div>
              ))}
           </div>
        </div>
      </div>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default ContactInformation;