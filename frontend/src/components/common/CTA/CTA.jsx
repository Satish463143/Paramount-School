import React from 'react';
import { Calendar, ArrowRight, Zap, GraduationCap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-color-muted-foreground">
      {/* Dynamic Animated Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] animate-bounce duration-[10000ms]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Emotional Imagery & Decorative Elements */}
          <div className="lg:w-1/2 relative" data-aos="fade-right">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-700">
              <img 
                src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2670&auto=format&fit=crop" 
                alt="Happy students at Paramount Academy" 
                className="w-full h-[500px] md:h-[600px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
              
              {/* Floating Stat Badge */}
              <div className="absolute bottom-8 left-8 bg-white/20 backdrop-blur-xl border border-white/30 p-6 rounded-3xl text-white animate-float">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="text-3xl font-bold">500+</p>
                    <p className="text-[10px] uppercase tracking-widest opacity-80">Students Guided</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Decorative Rings */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-secondary/20 rounded-full -z-10 animate-spin-slow" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 border-4 border-primary/10 rounded-full -z-10" />
          </div>

          {/* Right Side: Content & Action */}
          <div className="lg:w-1/2 text-left" data-aos="fade-left">
            <div className="relative">
              {/* Heading Tag */}
              <div className="flex items-center gap-2 mb-6">
                <div className="h-[2px] w-12 bg-secondary" />
                <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase">Join Our Legacy</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-[1.1]">
                Where Every Child <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Belongs.
                </span>
              </h2>

              <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-xl">
                Education is about more than just grades. It's about finding one's place in the 
                world. At Paramount Academy, we discover the potential in every student through 
                personalised care and academic excellence.
              </p>

              {/* Main CTA Card (Floating Glassmorphism style) */}
              <div className="bg-card/40 backdrop-blur-xl border border-border/50 p-8 rounded-[2.5rem] shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                      <GraduationCap className="text-secondary" />
                      Admissions Open 2026
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Enroll today to secure your child's placement for the upcoming session.
                    </p>
                  </div>
                  <Link to="/admissions">
                  <button className="group cursor-pointer relative px-10 py-5 bg-primary text-white rounded-2xl font-bold text-xs tracking-[0.2em] overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                    <span className="relative z-10 flex items-center gap-2">
                      APPLY NOW
                      <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 bg-secondary translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                  </button>
                  </Link>
                </div>
              </div>

              {/* Secondary Actions */}
              <div className="mt-10 flex flex-wrap items-center gap-8 pl-4">
                <Link to="/contact-us" className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-secondary transition-colors group">
                  <Zap size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                  Request Prospectus
                </Link>
                <Link to="/about-us" className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-secondary transition-colors group">
                  <Calendar size={16} className="text-secondary group-hover:scale-110 transition-transform" />
                  Schedule Visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
