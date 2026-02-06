import React from "react";
import { Quote } from "lucide-react";

const Message = () => {
  return (
    <section className="relative py-20 lg:py-24 bg-background overflow-hidden border-b border-border/50">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 opacity-70" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Portrait Column */}
          <div 
            className="relative order-2 lg:order-1 flex justify-center lg:justify-end"
            data-aos="fade-right"
          >
            <div className="relative group max-w-sm w-full mx-auto lg:mx-0">
              {/* Decorative Artistic Frames */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] -rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              <div className="absolute -inset-4 border-2 border-primary/10 rounded-[2.5rem] rotate-3 transition-transform group-hover:rotate-0 duration-700" />
              
              {/* Image Container */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-muted aspect-[4/5] border-4 border-card z-10">
                <img
                  src="https://images.unsplash.com/photo-1544168190-79c17527004f?q=80&w=1976&auto=format&fit=crop"
                  alt="Principal Dr. Sunita Rajbhandari"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                
                {/* Academic Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-card/90 backdrop-blur-md border border-border/50 shadow-xl transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-8 bg-secondary rounded-full" />
                    <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Leadership</p>
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">
                    Guided by values, driven by excellence since 2001.
                  </p>
                </div>
              </div>

              {/* Decorative dots pattern */}
              <div className="absolute -top-6 -right-6 flex flex-wrap w-20 gap-2 opacity-20">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full" />
                ))}
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div data-aos="fade-up">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold mb-6 border border-primary/20 tracking-wider uppercase">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Message from the Principal
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 leading-[1.15] tracking-tight">
                  Nurturing <span className="text-primary italic">Potential</span>, <br />
                  Inspiring <span className="text-secondary">Leaders</span>
                </h2>
                <div className="h-1.5 w-20 bg-secondary rounded-full mb-10" />
              </div>

              <div 
                className="relative space-y-6"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Quote className="absolute -top-6 -left-8 md:-left-12 h-16 w-16 text-primary/5 -z-10" />
                
                <div className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium italic mb-6">
                  "At Paramount Academy, we don't just teach modules; we shape futures. Our mission is to provide an environment where 
                  discipline meets curiosity, and academic responsibility goes hand-in-hand with moral integrity."
                </div>

                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p>
                    Since our inception in 2001, we have remained steadfast in our commitment to academic excellence. 
                    We believe that every child is a unique seed that requires a nurturing soil of trust and 
                    the sunlight of professional guidance to blossom into a responsible citizen.
                  </p>
                  <p>
                    Our approach is holistic, blending modern pedagogical techniques with timeless traditional values. 
                    I invite you to be a part of this transformative journey where we strive to make every learner 
                    not just better, but their best self.
                  </p>
                </div>
              </div>

              <div 
                className="pt-8 mt-10 border-t border-border/60 flex items-center justify-between"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="flex items-center gap-5">
                  <div className="flex flex-col">
                    <h4 className="text-2xl font-bold text-foreground tracking-tight">Dr. Sunita Rajbhandari</h4>
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-widest mt-0.5">
                      <span>Principal</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span>Paramount Academy</span>
                    </div>
                  </div>
                </div>
                
                {/* Signature Placeholder/Styling */}
                <div className="hidden sm:block opacity-30 select-none">
                  <span className="font-serif italic text-3xl font-light text-primary tracking-tighter">S.Rajbhandari</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Message;
