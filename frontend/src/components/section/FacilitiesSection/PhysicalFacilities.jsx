import React from 'react';

const sportsAreas = [
  {
    title: 'Outdoor Playground',
    description: 'Spacious playground for football and various outdoor games that promote teamwork, discipline, and physical strength.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop',
    tag: 'Outdoor Sports',
  },
  {
    title: 'Basketball & Volleyball Courts',
    description: 'Dedicated courts for basketball and volleyball encouraging structured training, coordination, and team spirit.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    tag: 'Team Games',
  },
  {
    title: 'Indoor Games & Athletics',
    description: 'Facilities for indoor games such as chess and table tennis along with athletics training programs for overall fitness development.',
    image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?q=80&w=800&auto=format&fit=crop',
    tag: 'Skill Development',
  },
  {
    title: 'Physical Training & Competitions',
    description: 'Regular physical training sessions, annual sports events, and inter-school competitions to build sportsmanship and leadership qualities.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop',
    tag: 'Leadership & Fitness',
  },
];

const PhysicalFacilities = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      {/* Decorative Angled Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-64 bg-slate-50 dark:bg-slate-900/50 -skew-y-6 origin-top-right -z-10" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Panoramic Hero Section - Integrated Header */}
        <div className="relative group mb-24" data-aos="fade-up">
          <div className="overflow-hidden rounded-[3rem] shadow-2xl relative border border-slate-100 dark:border-slate-800">
            <img 
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop" 
              alt="Panoramic Sports Field" 
              className="w-full h-[350px] md:h-[650px] object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Dynamic Overlay for Movement & Content */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/20 to-transparent flex items-end md:items-center p-8 md:p-16">
              <div className="max-w-2xl text-white">
                <span className="inline-block px-4 py-1.5 bg-secondary/20 backdrop-blur-md border border-secondary/30 text-secondary text-[10px] font-bold uppercase tracking-wider rounded-full mb-6">
                  Physical Development
                </span>
                <h3 className="text-3xl md:text-6xl font-black mb-6 leading-tight">
                  Structured Play, <br />
                  <span className="text-secondary italic">Disciplined</span> Growth
                </h3>
                <p className="text-slate-200 text-base md:text-lg opacity-90 leading-relaxed font-medium">
                  We believe physical health is the foundation of mental agility. Our structured sports programs nurture team spirit, discipline, and lifelong fitness habits.
                </p>
              </div>
            </div>
          </div>
          
          {/* Subtle Decorative Circle */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-2xl -z-10 animate-blob" />
        </div>

        {/* Staggered Area Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-y-12">
          {sportsAreas.map((area, index) => (
            <div 
              key={index}
              className={`flex flex-col gap-6 ${index % 2 === 1 ? 'md:translate-y-8 lg:translate-y-12' : ''}`}
            >
              {/* Image Block with Layered Shadow */}
              <div 
                className="group relative" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl">
                  <img 
                    src={area.image} 
                    alt={area.title} 
                    className="w-full h-64 md:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Diagonal Highlight Overlay */}
                  <div className="absolute top-0 left-0 w-full h-full bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
                
                {/* Float Tag */}
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-slate-900 dark:text-white shadow-sm">
                  {area.tag}
                </div>
              </div>

              {/* Content Block */}
              <div 
                className="space-y-3"
                data-aos="fade-up" 
                data-aos-delay={index * 100 + 50}
              >
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  {area.title}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-l-2 border-slate-200 dark:border-slate-800 pl-4">
                  {area.description}
                </p>
                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-semibold text-secondary lowercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                    Professional Guidance
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Angle Cut and Divider */}
      <div className="mt-24 h-px w-full bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
    </section>
  );
};

export default PhysicalFacilities;
