import React from 'react';
import schoolImg from '@/assets/school.jpg';

const infrastructureData = [
  {
    id: '01',
    title: 'Classrooms',
    description: 'Our classrooms are designed to be bright, airy, and conducive to focused learning. Each space is organized to minimize distractions and maximize student-teacher interaction.',
    image: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '02',
    title: 'Smart Classrooms',
    description: 'Integrated with modern interactive boards and digital tools, these rooms transform traditional lessons into engaging multimedia experiences that cater to diverse learning styles.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '03',
    title: 'Science Laboratories',
    description: 'Equipped with high-standard safety gear and modern scientific apparatus, our labs encourage hands-on discovery and nurture a spirit of empirical inquiry among students.',
    image: 'https://images.unsplash.com/photo-1563906480205-6de57492f1fb?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '04',
    title: 'Computer Labs',
    description: 'Featuring the latest workstations and high-speed connectivity, our tech labs ensure that every student builds essential digital literacy in a structured and guided environment.',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: '05',
    title: 'Library & Reading Room',
    description: 'A sanctuary for knowledge, our library offers a vast collection of academic resources in a quiet, climate-controlled space designed for deep research and reading.',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=1200&auto=format&fit=crop',
  },
];

const AcademicInfrastructure = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mb-16 md:mb-20" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-6">
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Academic Facilities</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
               Built for Learning
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                    Powered by Structure
                </span>
            </h2>            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                From well-equipped classrooms to advanced laboratories, our infrastructure ensures students learn in an organized, inspiring, and supportive environment.
            </p>
        </div>

        <div className="space-y-24">
          {infrastructureData.map((item, index) => (
            <div 
              key={item.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
            >
              {/* Image Column */}
              <div 
                className="w-full lg:w-[60%] group relative"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 shadow-xl">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Accent Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 dark:bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              </div>

              {/* Content Column */}
              <div 
                className="w-full lg:w-[40%] space-y-6"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <div className="inline-block">
                  <span className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase">
                    Space {item.id}
                  </span>
                  <div className="h-0.5 w-12 bg-blue-600 dark:bg-blue-400 mt-1" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic border-l-4 border-slate-200 dark:border-slate-800 pl-4">
                  "{item.description}"
                </p>
                
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-500 text-sm font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                  Structured Environment
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300 dark:bg-slate-700 ml-2" />
                  Academic Excellence
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicInfrastructure;
