import React from 'react';
import { Calendar, Clock, Bell, Info } from 'lucide-react';

const milestones = [
  {
    day: "15",
    month: "FEB",
    year: "2026",
    title: "Admission Opening",
    description: "Online and physical applications for the new academic session officially commence.",
    type: "primary"
  },
  {
    day: "20",
    month: "MAR",
    year: "2026",
    title: "Application Deadline",
    description: "Last date for submission of completed application forms and required documents.",
    type: "secondary"
  },
  {
    day: "25",
    month: "MAR",
    year: "2026",
    title: "Student Assessment",
    description: "Interactive sessions and academic assessments for prospective candidates.",
    type: "primary"
  },
  {
    day: "02",
    month: "APR",
    year: "2026",
    title: "Final Confirmation",
    description: "Selected candidates list published on the school website and notice board.",
    type: "primary"
  },
  {
    day: "15",
    month: "APR",
    year: "2026",
    title: "Session Start",
    description: "Official commencement of classes for the 2026 academic year.",
    type: "primary"
  }
];

const ImportantDates = () => {
  return (
    <section className="py-24 md:py-40 bg-background relative overflow-hidden" id="important-dates">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none">
         <div className="absolute top-20 -right-20 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
         <div className="absolute bottom-20 -left-20 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px]" />
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Modern High-Impact Header */}
        <div className="max-w-4xl mx-auto text-center mb-24 md:mb-32" data-aos="fade-up">
           <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-muted border border-border/50">
            <Calendar className="text-secondary" size={16} />
            <span className="text-foreground/80 font-bold text-[10px] tracking-[0.3em] uppercase">2026 Academic Calendar</span>
          </div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-8 tracking-tighter">
            Key <span className="text-primary italic">Milestones</span> to Remember.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto italic">
            "Planning for the future starts with marking the right dates today. Stay on track for your child's educational journey."
          </p>
        </div>

        {/* Staggered Journey Layout */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Decorative Rail (Desktop) */}
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] bg-gradient-to-b from-transparent via-border/50 to-transparent -translate-x-1/2 hidden lg:block" />

          <div className="space-y-12 md:space-y-0">
            {milestones.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center justify-center lg:min-h-[280px] ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Visual Connector (Mobile) */}
                <div className="lg:hidden absolute left-8 top-12 bottom-0 w-[2px] bg-border/30" />

                {/* Date Badge (The "Wow" Element) */}
                <div className={`relative z-20 flex-shrink-0 mb-8 lg:mb-0 lg:mx-20`} data-aos="zoom-in" data-aos-delay={index * 100}>
                  <div className={`w-28 h-28 rounded-[2rem] p-px bg-gradient-to-br transition-all duration-500 hover:rotate-6 ${
                    item.type === 'secondary' 
                    ? 'from-secondary via-secondary/50 to-transparent shadow-2xl shadow-secondary/20' 
                    : 'from-primary via-primary/50 to-transparent shadow-2xl shadow-primary/20'
                  }`}>
                    <div className="w-full h-full bg-background rounded-[1.95rem] flex flex-col items-center justify-center relative overflow-hidden">
                       {/* Glass overlay */}
                       <div className="absolute inset-0 bg-muted/30 opacity-50" />
                       
                       <span className={`relative text-4xl font-black leading-none tracking-tighter ${
                         item.type === 'secondary' ? 'text-secondary' : 'text-primary'
                       }`}>
                         {item.day}
                       </span>
                       <span className="relative text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mt-2">
                         {item.month}
                       </span>

                       {/* Year Indicator */}
                       <div className="absolute top-2 right-2 flex gap-0.5">
                         {[1,2,3].map(i => (
                           <div key={i} className={`w-1 h-1 rounded-full ${item.type === 'secondary' ? 'bg-secondary/20' : 'bg-primary/20'}`} />
                         ))}
                       </div>
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div 
                  className={`w-full lg:w-[40%] pl-16 lg:pl-0 ${
                    index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'
                  }`}
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={index * 150}
                >
                  <div className="group relative p-8 md:p-10 rounded-[2.5rem] bg-muted/20 border border-border/50 hover:bg-background hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                    <div className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] ${
                       item.type === 'secondary' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                    }`}>
                       {item.type === 'secondary' && <Clock size={12} className="animate-pulse" />}
                       {item.title}
                    </div>
                    <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                       {item.description}
                    </p>

                    {/* Decorative Corner Icon */}
                    <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity">
                      <Calendar size={48} />
                    </div>
                  </div>
                </div>

                {/* Floating Shadow Year (Institutional Touch) */}
                 <div className={`hidden xl:block absolute top-1/2 -translate-y-1/2 text-[12rem] font-black text-foreground/[0.02] select-none pointer-events-none ${
                    index % 2 === 0 ? 'right-0 -mr-20' : 'left-0 -ml-20'
                }`}>
                    {item.year}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Informative Footer */}
        <div className="mt-24 md:mt-32 max-w-xl mx-auto" data-aos="fade-up">
           <div className="p-8 rounded-[2rem] bg-muted border border-dashed border-border flex items-start gap-6">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <Info size={24} />
              </div>
              <div>
                <h5 className="font-bold text-foreground mb-1 italic">Important Note</h5>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Dates mentioned above are tentative and subject to change based on Ministry of Education directives. Registered parents will be notified via SMS/Email for any updates.
                </p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default ImportantDates;
