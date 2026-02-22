import React from 'react';

const environmentBlocks = [
  {
    title: 'Peaceful & Education-Friendly Location',
    description: 'Located in Ward No. 8, Tokha Municipality, Gongabu Baniyatar, the school provides a peaceful, safe, and education-friendly environment with strong community connection.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Outdoor Learning Environment',
    description: 'Learning extends beyond classrooms through educational field visits, environmental observation projects, community-based learning, gardening activities, and open-space group discussions.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Safe & Hygienic Campus',
    description: 'The campus maintains boundary walls, controlled entry, CCTV surveillance, supervision systems, clean drinking water, sanitation facilities, and structured discipline to ensure a secure and healthy learning atmosphere.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
  },
];

const CampusEnvironment = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Immersive Wide Strip Hero - Redesigned for Breathability */}
      

      {/* Breathable Atmosphere Blocks */}
      <div className="container mx-auto px-4 md:px-6 py-24 relative">
        <div className="max-w-3xl mb-16 md:mb-20" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-6">
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Nurturing Atmosphere</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
               An Environment
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                    To Thrive In
                </span>
            </h2>            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Paramount Academy offers a supportive and safe learning atmosphere designed to promote growth, discipline, and academic focus. Our campus environment reflects our commitment to holistic education, community values, and student well-being.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {environmentBlocks.map((block, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center space-y-6"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative group w-full">
                <div className="overflow-hidden rounded-[2.5rem] shadow-sm transform transition-transform duration-500 group-hover:-translate-y-2">
                  <img 
                    src={block.image} 
                    alt={block.title} 
                    className="w-full h-72 md:h-80 object-cover"
                  />
                  {/* Subtle Gradient Hover */}
                  <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Float Decorative Circle */}
                <div className={`absolute top-4 right-4 w-12 h-12 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 z-10 ${index % 2 === 0 ? 'text-emerald-500' : 'text-sky-500'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M2 18h2"/><path d="M20 18h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M22 22H2"/><path d="m8 22 4-10 4 10"/></svg>
                </div>
              </div>

              <div className="max-w-xs space-y-3">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  {block.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm">
                  {block.description}
                </p>
                <div className="pt-2">
                  <span className="w-12 h-1 bg-gradient-to-r from-emerald-500/20 to-sky-500/20 inline-block rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Closing Statement */}
        <div className="mt-32 text-center" data-aos="fade-up">
           <div className="inline-flex items-center gap-4 mb-8">
             <div className="h-px w-8 md:w-16 bg-slate-200 dark:bg-slate-800" />
             <p className="text-slate-400 dark:text-slate-600 font-medium uppercase tracking-widest text-xs">A Place to Belong</p>
             <div className="h-px w-8 md:w-16 bg-slate-200 dark:bg-slate-800" />
           </div>
           
           <h3 className="text-3xl md:text-5xl font-bold text-slate-800 dark:text-slate-200 max-w-3xl mx-auto leading-tight">
             Where every student finds their peaceful corner for <span className="text-emerald-500 italic">discovery.</span>
           </h3>
        </div>
      </div>
    </section>
  );
};

export default CampusEnvironment;