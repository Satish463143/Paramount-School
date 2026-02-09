import React from 'react';
import { Home, ChevronRight, GraduationCap, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommonBanner = ({ title, subtitle,subtitle2, bgImage }) => {
  return (
    <section className="relative h-[400px] md:h-[450px] w-full overflow-hidden bg-primary/5 flex items-center justify-center">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage || "https://img.freepik.com/free-photo/smiling-primary-students-sitting-class_1098-3953.jpg?semt=ais_hybrid&w=740&q=80"} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply transition-colors duration-500 dark:bg-primary/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      {/* Animated Background Elements (School Themed) */}
      <div className="absolute top-10 left-10 text-white/10 animate-spin-slow duration-[20s]">
        <Sparkles size={120} />
      </div>
      <div className="absolute bottom-10 right-10 text-white/10 animate-bounce duration-[8s] delay-700">
        <GraduationCap size={150} />
      </div>
      
      <div className="absolute top-1/4 right-[15%] w-32 h-32 bg-secondary/20 rounded-full blur-[60px] animate-pulse" />
      <div className="absolute bottom-1/4 left-[15%] w-40 h-40 bg-white/10 rounded-full blur-[60px] animate-pulse delay-1000" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        
        {/* Decorative Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase animate-fade-in-up">
          <BookOpen size={14} className="text-secondary" />
          <span>Paramount School</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight leading-tight animate-fade-in-up delay-100 drop-shadow-lg">
          {title} <span style={{color:"#38bdf8"}}>{subtitle2}</span>
        </h1>

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-white/90 text-sm md:text-base font-medium animate-fade-in-up delay-200">
          <Link to="/" className="hover:text-secondary transition-colors flex items-center gap-1">
            <Home size={16} />
            <span>Home</span>
          </Link>
          <ChevronRight size={14} className="opacity-60" />
          <span className="text-secondary font-bold">{title}</span>
        </div>
        
        {subtitle && (
           <p className="mt-6 text-white/80 max-w-2xl mx-auto text-lg leading-relaxed animate-fade-in-up delay-300 hidden md:block">
             {subtitle} 
           </p>
        )}

      </div>
      
      {/* Bottom Wave/Curve Decoration */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]" style={{transform:"rotate(180deg)"}}>
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
        </svg>
      </div>

    </section>
  );
};

export default CommonBanner;