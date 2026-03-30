import React from 'react';
import { Layout, Beaker, Library, Laptop } from 'lucide-react';
import Excellence from '../../../../public/Excellence.jpg'
import Laboratory from '../../../../public/Laboratory.jpg'
import one from '../../../../public/one.jpg'
import Outdoor from '../../../../public/three.jpg'

const resources = [
  {
    title: "Safe & Structured Learning Environment",
    description: "Classrooms operate within a supervised and disciplined campus supported by controlled entry systems and CCTV surveillance to ensure a focused academic atmosphere.",
    image: Excellence,
    icon: <Layout size={24} />,
    tag: "ENVIRONMENT"
  },
  {
    title: "Science & ICT Laboratories",
    description: "Fully equipped science laboratories for Physics, Chemistry, and Biology, along with an ICT & Computer Lab supporting practical training, internet access, and multimedia learning.",
    image: Laboratory,
    icon: <Beaker size={24} />,
    tag: "EXPLORE"
  },
  {
    title: "Library & Resource Center",
    description: "A well-managed library providing academic books, reference materials, newspapers, magazines, and dedicated reading space for independent study and research.",
    image: one,
    icon: <Library size={24} />,
    tag: "KNOWLEDGE"
  },
  {
    title: "Outdoor & Co-Curricular Facilities",
    description: "Outdoor learning spaces, sports grounds, music and art facilities, and event areas support experiential learning and holistic student development.",
    image: Outdoor,
    icon: <Laptop size={24} />,
    tag: "DEVELOPMENT"
  }
];

const LearningResources = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="learning-resources">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/2 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-secondary/2 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Title Area */}
        
        <div className="max-w-3xl mb-16 md:mb-20" data-aos="fade-up">
            <div className="flex items-center gap-2 mb-6">
                <div className="h-[2px] w-12 bg-primary" />
                <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Academic Infrastructure</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                Resources for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                    Deep Learning.
                </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A structured environment equipped with the tools and spaces necessary to support a rigorous curriculum and effective student engagement.
            </p>
        </div>

        {/* New Layered Resource Sections */}
        <div className="space-y-40 md:space-y-56">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="relative"
            >
              {/* Vertical Index Line (Desktop) */}
              <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-border/50 via-primary/20 to-border/50" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-start">
                
                {/* Content Side */}
                <div className="lg:col-span-5 lg:pr-12 pt-8" data-aos="fade-right">
                  <div className="flex items-start gap-6 mb-8">
                    <div className="flex-shrink-0 w-16 h-16 rounded-[1.25rem] bg-background border-2 border-primary/20 flex items-center justify-center text-primary shadow-xl shadow-primary/5">
                      {resource.icon}
                    </div>
                    <div className="pt-2">
                       <span className="text-primary/40 font-black text-4xl mb-2 block italic">0{index + 1}</span>
                       <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {resource.title}
                       </h3>
                    </div>
                  </div>
                  
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                    {resource.description}
                  </p>

                  <div className="flex items-center gap-4 py-4 px-6 rounded-2xl bg-muted/30 border border-border/50 inline-flex">
                    <span className="text-primary font-bold text-sm tracking-widest">{resource.tag}</span>
                    <div className="h-1 w-12 bg-primary/20 rounded-full overflow-hidden">
                      <div className="h-full bg-primary w-2/3" />
                    </div>
                  </div>
                </div>

                {/* Visual Side - Overlapping Layout */}
                <div className="lg:col-span-7 relative" data-aos="fade-left">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-4 md:-inset-8 bg-gradient-to-br from-primary/5 to-transparent rounded-[3rem] -z-10" />
                  
                  {/* Main Image with custom corner */}
                  <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-4 border-background group">
                    <img 
                      src={resource.image} 
                      alt={resource.title}
                      className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Floating Info Badge */}
                    <div className="absolute bottom-8 right-8 p-6 rounded-3xl bg-background/90 backdrop-blur-xl border border-white/20 shadow-2xl max-w-[240px] hidden md:block translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <p className="text-sm font-medium text-foreground leading-snug italic">
                        "Optimized for students to reach their full potential."
                      </p>
                    </div>
                  </div>

                  {/* Aesthetic Shadow Element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl -z-10" />
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Final Integrated Statement */}
        <div className="mt-40 md:mt-56 relative" data-aos="fade-up">
          <div className="absolute inset-0 bg-primary/[0.02] rounded-[4rem] border border-primary/5 -z-10" />
          <div className="max-w-4xl mx-auto py-20 px-8 text-center">
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight italic">
              Built for <span className="text-primary">Academic Excellence.</span>
            </h3>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We consistently invest in our academic infrastructure to ensure that student environments remain conducive to learning. Every resource is carefully selected to support our commitment to delivering a high-quality educational experience.
            </p>
            <div className="mt-12 flex justify-center items-center gap-4 text-primary">
              <div className="h-px w-20 bg-primary/20" />
              <div className="h-2 w-2 rounded-full bg-primary" />
              <div className="h-px w-20 bg-primary/20" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningResources;