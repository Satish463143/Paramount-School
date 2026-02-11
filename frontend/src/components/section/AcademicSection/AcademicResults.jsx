import React from 'react';
import { Award, TrendingUp, CheckCircle2, Star } from 'lucide-react';

const resultMetrics = [
  {
    title: "Performance Overview",
    description: "Our students consistently demonstrate a strong command of the curriculum across all academic phases. We focus on ensuring that foundational concepts are mastered before progressing to advanced topics.",
    highlights: ["Consistent academic performance across grade levels", "High engagement in core STEM and Humanities subjects"]
  },
  {
    title: "Examination Outcomes",
    description: "Academic outcomes at the secondary level reflect a disciplined approach to learning and structured assessment. Our students meet and often exceed the standards set by the national board.",
    highlights: ["Strong examination outcomes aligned with national board standards", "Excellence in analytical and problem-solving assessments"]
  },
  {
    title: "Progress & Growth",
    description: "We measure success through individual student growth. Our academic tracking systems monitor progress throughout the year, ensuring that every student reaches their full potential.",
    highlights: ["Transparent tracking of year-on-year academic growth", "Supportive feedback loops for continuous improvement"]
  },
  {
    title: "Academic Recognitions",
    description: "Our institution celebrates academic participation and intellectual curiosity. Recognitions are based on scholarly effort, research projects, and contributions to the academic community.",
    highlights: ["Recognitions for scholarly effort and research", "Emphasis on intellectual curiosity and participation"]
  }
];

const AcademicResults = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/10 relative overflow-hidden" id="academic-results">
      
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-20" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-6">
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Outcomes & Excellence</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                Academic Results
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                    & Achievements.
                </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Presenting student outcomes and academic accomplishments in a transparent and factual manner, reflecting our commitment to academic responsibility.
            </p>
        </div>

        {/* Editorial-style Content Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            
            {/* Left Side: Factual Sections */}
            <div className="lg:col-span-12 space-y-20">
              {resultMetrics.map((metric, index) => (
                <div 
                  key={index} 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="lg:col-span-4 pt-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {metric.title}
                    </h3>
                    <div className="h-1 w-12 bg-primary/20 rounded-full" />
                  </div>
                  
                  <div className="lg:col-span-8 space-y-6">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                      {metric.description}
                    </p>
                    
                    {/* Factual Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                      {metric.highlights.map((highlight, hIndex) => (
                        <div key={hIndex} className="flex items-start gap-3 p-4 rounded-2xl bg-background border border-border/50 shadow-sm">
                          <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={18} />
                          <span className="text-sm md:text-base text-foreground font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Supporting Image Row */}
        <div className="mt-24 md:mt-32" data-aos="fade-up">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://media.istockphoto.com/id/826212832/photo/two-girls-celebrating-exam-results-in-school-corridor.jpg?s=612x612&w=0&k=20&c=Nn5XLgCFyQNl9Wd8REneqRAD6wxqjFAtsxW1z7Nw-5c=" 
              alt="Academic Recognition" 
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            
            {/* Factual Statement Overlay */}
            <div className="absolute inset-y-0 left-0 flex items-center p-8 md:p-16 max-w-2xl">
              <div className="p-8 md:p-10 rounded-[2rem] bg-background/90 backdrop-blur-xl border border-white/20 shadow-2xl">
                <p className="text-lg md:text-xl text-foreground font-bold leading-relaxed italic">
                  "Excellence is not an act, but a habit. Our academic results are the outcome of consistent effort, structured planning, and a supportive learning environment."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Integrated Reassurance */}
        <div className="mt-24 md:mt-32 max-w-4xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 mb-8">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-primary font-bold text-xs tracking-widest uppercase">Institution Focus</span>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            dignified & evidence-based reporting
          </h3>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            At Paramount School, we take pride in the collective achievements of our student body. We remain committed to transparency in our academic reporting, ensuring that progress and outcomes are communicated with accuracy and professional integrity.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AcademicResults;