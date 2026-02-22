import React from 'react';

const techFacilities = [
  {
    title: 'ICT & Computer Lab',
    description: 'Equipped with modern computers and internet access to support structured digital learning and academic research.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop',
    color: 'bg-blue-50 dark:bg-blue-900/20',
    accent: 'text-blue-600 dark:text-blue-400',
    blobClass: 'rounded-[30%_70%_70%_30%/30%_30%_70%_70%]',
  },
  {
    title: 'Practical Computer Classes',
    description: 'Hands-on ICT sessions from basic to advanced levels to build strong digital literacy and technical skills.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    color: 'bg-emerald-50 dark:bg-emerald-900/20',
    accent: 'text-emerald-600 dark:text-emerald-400',
    blobClass: 'rounded-[70%_30%_30%_70%/60%_40%_60%_40%]',
  },
  {
    title: 'Multimedia Learning Tools',
    description: 'Digital tools and presentation systems integrated into classroom learning for interactive and engaging instruction.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb28f74b0cd?q=80&w=800&auto=format&fit=crop',
    color: 'bg-amber-50 dark:bg-amber-900/20',
    accent: 'text-amber-600 dark:text-amber-400',
    blobClass: 'rounded-[40%_60%_60%_40%/70%_30%_30%_70%]',
  },
  {
    title: 'Research & Project Support',
    description: 'Technology-enabled support for academic projects, research assignments, and digital presentations across grade levels.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
    color: 'bg-purple-50 dark:bg-purple-900/20',
    accent: 'text-purple-600 dark:text-purple-400',
    blobClass: 'rounded-[60%_40%_40%_60%/40%_40%_60%_60%]',
  },
];

const LearningFacilities = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-50/50 dark:bg-[#020617] transition-colors duration-300">
      {/* Background Decorative Shapes */}
      <div className="absolute top-20 -left-20 w-80 h-80 bg-blue-200/20 dark:bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Integrated Hero Header */}
        <div 
          className="relative mb-20 rounded-[3rem] overflow-hidden shadow-2xl group border border-slate-100 dark:border-slate-800"
          data-aos="zoom-in"
        >
          <img 
            src="https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=1200&auto=format&fit=crop" 
            alt="Digital Classroom Hero" 
            className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Refined Content Overlay - Integrated Title */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-900/40 to-transparent flex items-center p-8 md:p-16">
            <div className="max-w-2xl text-left">
              <span className="inline-block px-4 py-1.5 bg-blue-600/20 backdrop-blur-md border border-blue-400/30 text-blue-400 text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                Digital & Smart Learning
              </span>
              <h3 className="text-3xl md:text-6xl font-black text-white mb-6 leading-tight drop-shadow-xl">
                The Future of <br />
                <span className="text-blue-400">Education</span> is Here
              </h3>
              <p className="text-slate-200 text-base md:text-lg opacity-90 leading-relaxed font-medium">
                We empower our students with modern tools that make learning interactive, engaging, and future-ready, all within a safe and guided environment.
              </p>
            </div>
          </div>
        </div>

        {/* Creative Staggered Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-20 lg:gap-x-16">
          {techFacilities.map((facility, index) => (
            <div 
              key={index}
              className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:translate-y-12' : ''}`}
            >
              {/* Image Block with Blob Shape */}
              <div 
                className={`relative w-full lg:w-1/2 group`}
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className={`overflow-hidden transition-all duration-500 ${facility.blobClass} group-hover:rounded-2xl shadow-xl`}>
                  <img 
                    src={facility.image} 
                    alt={facility.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Decorative floating shape behind image */}
                <div className={`absolute -inset-4 ${facility.color} -z-10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </div>

              {/* Content Block */}
              <div 
                className="w-full lg:w-1/2 space-y-4"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className={`w-12 h-1 ${facility.color.replace('/20', '')} rounded-full`} />
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                  {facility.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  {facility.description}
                </p>
                <button className={`flex items-center gap-2 text-sm font-bold ${facility.accent} hover:gap-3 transition-all cursor-pointer`}>
                  Explore Space
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V120H0V27.35C58.32,54.1,118.84,72,181.87,71.27c62.58-.73,121.46-15.06,177.37-23.79" className="fill-white dark:fill-slate-950 opacity-100"></path>
        </svg>
      </div>
    </section>
  );
};

export default LearningFacilities;
