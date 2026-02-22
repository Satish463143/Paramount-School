import React from 'react';

const safetyMeasures = [
  {
    title: 'CCTV Surveillance',
    description: 'Campus monitored through CCTV surveillance to maintain safety, discipline, and a secure academic environment.',
    image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Controlled Entry System',
    description: 'Boundary walls and controlled entry ensure regulated access and a safe learning atmosphere.',
    image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Supervised & Disciplined Campus',
    description: 'Structured discipline and monitoring systems provide a peaceful, supervised environment for students.',
    image: 'https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Health & First Aid Support',
    description: 'Basic first aid facility and emergency response support available to ensure student well-being.',
    image: 'https://images.unsplash.com/photo-1599839575945-a9e5af0c3fa5?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hygiene & Sanitation',
    description: 'Clean drinking water and proper sanitation facilities maintained to ensure a healthy campus environment.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop',
  },
];

const SafetySecurity = () => {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        {/* Integrated Hero Header - Redesigned to be less repetitive */}
        <div 
          className="relative mb-20 rounded-[3rem] overflow-hidden shadow-2xl group border border-slate-200 dark:border-slate-800"
          data-aos="zoom-in"
        >
          <img 
            src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=1200&auto=format&fit=crop" 
            alt="Safety and Security Hero" 
            className="w-full h-[300px] md:h-[450px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Focused Content Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/40 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-2xl text-left">
              <span className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                Safety & Trust
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                Institutional <br />
                <span className="text-primary">Security</span> & Health
              </h3>
              <p className="text-slate-200 text-base md:text-lg opacity-90 leading-relaxed font-medium">
                  With CCTV surveillance, controlled entry systems, and structured campus monitoring, Paramount Academy maintains a secure, disciplined, and student-focused learning atmosphere.
              </p>
            </div>
          </div>
        </div>

        {/* Central Shield Layout */}
        <div className="max-w-6xl mx-auto border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden bg-white dark:bg-slate-950 shadow-sm relative">
          {/* Subtle Vertical Rhythm Lines */}
          <div className="absolute top-0 left-1/2 -translate-x-px w-px h-full bg-slate-100 dark:bg-slate-800/10 hidden lg:block" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Primary Pillar - Large Block */}
            <div className="p-8 md:p-12 border-b border-slate-100 dark:border-slate-800 lg:border-b-0 lg:border-r border-slate-100 dark:border-slate-800 overflow-hidden" data-aos="fade-in">
              <div className="relative h-full flex flex-col justify-between group">
                <div className="mb-6 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                    Secure & Supervised Environment
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our safety strategy is built on a foundation of proactive monitoring and strict institutional protocols. Every student's presence is accounted for within our secure campus perimeter.
                  </p>
                </div>
                <div className="overflow-hidden rounded-2xl h-64 mt-4 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=800&auto=format&fit=crop" 
                    alt="Campus Security" 
                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>
            </div>

            {/* Sub-Pillars Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y divide-x divide-slate-100 dark:divide-slate-800">
              {safetyMeasures.map((measure, index) => (
                <div 
                  key={index} 
                  className={`p-8 md:p-10 flex flex-col justify-between hover:bg-slate-50/50 dark:hover:bg-slate-900/30 transition-colors duration-300`} 
                  data-aos="fade-in" 
                  data-aos-delay={index * 100}
                >
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary" />
                      {measure.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {measure.description}
                    </p>
                  </div>
                  <div className="mt-8 overflow-hidden rounded-xl h-24 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                    <img 
                      src={measure.image} 
                      alt={measure.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                </div>
              ))}
              
              {/* Emergency Contact Block */}
              <div className="p-8 md:p-10 bg-slate-900 dark:bg-primary/20 text-white flex flex-col justify-center items-center text-center space-y-4" data-aos="fade-in">
                <h4 className="text-xl font-bold">Safe & Secure Campus</h4>
                <p className="text-sm text-slate-300">
                    Structured discipline, supervision, and monitoring systems ensure a peaceful and protected learning environment.
                </p>
                <div className="w-16 h-px bg-white/20" />
                <span className="text-[10px] uppercase tracking-widest font-bold">School Safety System</span>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Security Statement */}
        <div className="mt-20 text-center max-w-2xl mx-auto" data-aos="fade-up">
           <p className="text-slate-500 dark:text-slate-500 italic text-sm">
             "Safety is not just a feature; it is the silent foundation upon which our educational excellence is built."
           </p>
        </div>
      </div>
    </section>
  );
};

export default SafetySecurity;