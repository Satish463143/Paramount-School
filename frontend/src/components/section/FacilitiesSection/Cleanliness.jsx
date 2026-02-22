import React from 'react';
import Title from '@/components/common/Title/Title';

const maintenancePillars = [
  {
    title: 'Health & First Aid Facility',
    description: 'Basic first aid support and emergency response services are available to ensure student health and immediate care when required.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    ),
  },
  {
    title: 'Clean Drinking Water & Sanitation',
    description: 'The school maintains proper hygiene standards with clean drinking water and well-managed sanitation facilities for students.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21a4 4 0 0 1-4-4V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12a4 4 0 0 1-4 4Zm0 0h10a4 4 0 0 0 4-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v12a4 4 0 0 0 4 4Z"/><path d="M15 3v18"/></svg>
    ),
  },
  {
    title: 'Safe & Secure Campus',
    description: 'Boundary walls, controlled entry system, CCTV surveillance, and supervision ensure a disciplined and secure learning environment.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76Z"/></svg>
    ),
  },
  {
    title: 'Supervised & Monitored Environment',
    description: 'A structured discipline and monitoring system helps maintain order, safety, and a peaceful academic atmosphere.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
    ),
  },
  {
    title: 'Outdoor & Community Environment',
    description: 'Clean open spaces support outdoor learning, field activities, and community-based educational exposure.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 17.618a2 2 0 1 0 1.56 2.382"/><path d="M12.93 15.389a2 2 0 1 1 1.447 3.072"/><path d="M10 10c0-1.1-.9-2-2-2S6 8.9 6 10s.9 2 2 2h12c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2"/><path d="M14 6c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2"/></svg>
    ),
  },
];

const Cleanliness = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <Title 
          title="Care & Hygiene"
          subtitle="Cleanliness &"
          subtitle2="Campus Maintenance"
          description="We prioritize the health and comfort of our students through disciplined cleaning routines and proactive campus maintenance."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">
          {/* Visual Focus - Large Airy Image */}
          <div className="lg:col-span-7" data-aos="fade-right">
            <div className="relative group">
              <div className="overflow-hidden rounded-[2.5rem] shadow-sm ring-1 ring-slate-100 dark:ring-slate-800 p-3 bg-slate-50/50 dark:bg-slate-900/10">
                <img 
                  src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop" 
                  alt="Bright Organized Corridor" 
                  className="w-full h-[400px] md:h-[600px] object-cover rounded-[2rem] transition-transform duration-1000 group-hover:scale-[1.02]"
                />
              </div>
              
              {/* Floating Reassurance Tag */}
              <div className="absolute -bottom-6 -right-6 md:right-12 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-50 dark:border-slate-800 max-w-xs" data-aos="zoom-in" data-aos-delay="400">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Daily Sanitization</p>
                    <p className="text-xs text-slate-500">100% Protocol Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Maintenance Pillars List */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-left">
            <div className="space-y-2 mb-10">
              <span className="text-primary font-bold text-xs uppercase tracking-widest">Our Protocols</span>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">A Breath of Fresh Air</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our maintenance team works diligently behind the scenes to ensure every corner of the campus inspires focus and well-being.
              </p>
            </div>

            <div className="space-y-6">
              {maintenancePillars.map((pillar, index) => (
                <div 
                  key={index} 
                  className="flex gap-6 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-colors duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center justify-center text-slate-400 group-hover:text-primary transition-colors duration-300">
                    {pillar.icon}
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white leading-none">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Accent Separator */}
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4 text-xs font-medium text-slate-400 dark:text-slate-600">
                 <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                 Environmentally Friendly Cleaning Agents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cleanliness;
