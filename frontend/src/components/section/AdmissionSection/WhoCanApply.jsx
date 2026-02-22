import React from 'react';
import { GraduationCap, Baby, BookOpen, UserCheck, ArrowRight } from 'lucide-react';

const academicLevels = [
  {
    level: "Early Childhood Development",
    grades: "Nursery to Senior Montessori",
    description: "Montessori-based education integrated with the national ECD curriculum focusing on curiosity, independence, creativity, and social development through activity-based learning.",
    criteria: [
      "Application form submission",
      "Informal child observation",
      "Parent interaction session"
    ],
    accent: "bg-sky-50 dark:bg-sky-950/30",
    textAccent: "text-sky-600 dark:text-sky-400",
    borderAccent: "border-sky-100 dark:border-sky-800",
    icon: <Baby size={32} />
  },
  {
    level: "Primary Level",
    grades: "Grade 1 to Grade 3",
    description: "Grade Teaching Model with Continuous Evaluation System (CES) to build strong academic foundations and consistent learning progress.",
    criteria: [
      "Application form submission",
      "Entrance examination (if required)",
      "Previous academic records"
    ],
    accent: "bg-amber-50 dark:bg-amber-950/30",
    textAccent: "text-amber-600 dark:text-amber-400",
    borderAccent: "border-amber-100 dark:border-amber-800",
    icon: <BookOpen size={32} />
  },
  {
    level: "Lower Secondary Level",
    grades: "Grade 4 to Grade 8",
    description: "Subject Teaching Model with a balanced 50% theory and 50% practical approach including laboratory work, projects, and outdoor learning.",
    criteria: [
      "Entrance examination",
      "Previous academic records",
      "Seat availability"
    ],
    accent: "bg-primary/5 dark:bg-primary/10",
    textAccent: "text-primary dark:text-primary",
    borderAccent: "border-primary/10 dark:border-primary/20",
    icon: <GraduationCap size={32} />
  },
  {
    level: "Secondary Level",
    grades: "Grade 9 & 10",
    description: "NEB-aligned curriculum with 75% theory and 25% practical learning focused on board examination preparation and career awareness.",
    criteria: [
      "Entrance examination",
      "Academic record verification",
      "Limited seat availability"
    ],
    accent: "bg-emerald-50 dark:bg-emerald-950/30",
    textAccent: "text-emerald-600 dark:text-emerald-400",
    borderAccent: "border-emerald-100 dark:border-emerald-800",
    icon: <GraduationCap size={32} />
  },
  {
    level: "Higher Secondary Level",
    grades: "Grade 11 & 12 (Science & Management)",
    description: "Science and Management streams under NEB with 75% theory and 25% practical model, including lab sessions, research work, and career counseling.",
    criteria: [
      "SEE results evaluation",
      "Entrance examination (if required)",
      "Document verification & fee clearance"
    ],
    accent: "bg-rose-50 dark:bg-rose-950/30",
    textAccent: "text-rose-600 dark:text-rose-400",
    borderAccent: "border-rose-100 dark:border-rose-800",
    icon: <GraduationCap size={32} />
  }
];

const WhoCanApply = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="who-can-apply">
      {/* Decorative Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-50" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-secondary/5 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 md:mb-24" data-aos="fade-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-1 w-12 bg-primary rounded-full" />
            <span className="text-primary font-bold text-sm tracking-[0.2em] uppercase">Eligibility Criteria</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-8">
            Who Can
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              Join Our Community?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We welcome students from diverse backgrounds who are ready to embrace our academic standards and contribute to a safe, nurturing environment.
          </p>
        </div>

        {/* The Academic Path - Journey Layout */}
        <div className="relative">
          
          {/* Vertical/Horizontal Progression Line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5 lg:left-0 lg:right-0 lg:top-[50%] lg:bottom-auto lg:h-px lg:bg-gradient-to-r" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {academicLevels.map((item, index) => (
              <div 
                key={index} 
                className="relative flex flex-col items-start h-full"
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Progression Node (Circle) */}
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-background border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center text-primary z-20 mb-8 lg:mx-0">
                  <div className={`inset-0 absolute rounded-full ${item.accent} opacity-50 blur-sm animate-pulse`} />
                  <div className="relative z-30">
                    {item.icon}
                  </div>
                </div>

                {/* Content Container - Curved & Soft */}
                <div className={`w-full flex-1 flex flex-col p-8 md:p-10 rounded-[2.5rem] border ${item.borderAccent} ${item.accent} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 group`}>
                  
                  {/* Level Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase ${item.textAccent} bg-background/80 border ${item.borderAccent}`}>
                      {item.age}
                    </span>
                    <span className="text-primary/20 font-black text-2xl italic">0{index + 1}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {item.level}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <UserCheck size={16} className="text-primary" />
                    <span className="text-sm font-semibold text-muted-foreground">{item.grades}</span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-8 text-base md:text-lg">
                    {item.description}
                  </p>

                  {/* Criteria List */}
                  <div className="space-y-3 pt-6 border-t border-black/5 dark:border-white/5 mt-auto">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-foreground/60 mb-4">Academic Readiness</h4>
                    {item.criteria.map((criterion, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className={`h-1.5 w-1.5 rounded-full ${item.textAccent} bg-current`} />
                        <span>{criterion}</span>
                      </div>
                    ))}
                  </div>

                  {/* Sublte Decorative Element */}
                  <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                    <ArrowRight size={24} className={item.textAccent} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Admission Note */}
        <div className="mt-20 p-8 rounded-[2rem] bg-muted/30 border border-border/50 text-center max-w-4xl mx-auto" data-aos="zoom-in">
           <p className="text-muted-foreground italic">
             <span className="font-bold text-primary not-italic block mb-2">Note:</span>
             All admissions are subject to space availability and the successful completion of our observation process. We prioritize siblings of current students and children of alumni.
           </p>
        </div>

      </div>
    </section>
  );
};

export default WhoCanApply;
