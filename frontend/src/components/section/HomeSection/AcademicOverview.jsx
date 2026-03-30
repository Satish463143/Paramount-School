import React from "react";
import { BookOpen, Users, Compass, ArrowRight } from "lucide-react";
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button"
import { Link } from "react-router-dom";
import four from "../../../../public/four.jpg"
import five from "../../../../public/five.jpg"
import six from "../../../../public/six.jpg"

const ACADEMIC_LEVELS = [
  {
    title: "Early Childhood Development (Nursery to Senior Montessori)",
    subtitle: "Montessori-Based Foundation Stage",
    description:
      "The Early Childhood Development program follows a Montessori-based approach integrated with the National ECD curriculum. Learning is child-centered, activity-based, and experiential, focusing on curiosity, independence, creativity, and social development through sensory activities, storytelling, art, music, guided play, and practical life exercises.",
    image: four,
    icon: Compass,
    highlights: [
      "Language & Early Literacy Development",
      "Basic Numeracy & Logical Reasoning",
      "Motor Skills & Value Education"
    ],
    color: "var(--color-primary)",
    delay: 100,
  },
  {
    title: "Primary & Lower Secondary Level (Grade 1–8)",
    subtitle: "Grade & Subject Teaching Model",
    description:
      "Grades 1–3 follow a Grade Teaching Model with a Continuous Evaluation System (CES) to strengthen academic foundations and teacher–student relationships. From Grades 4–8, students transition to a Subject Teaching Model with a balanced 50% theory and 50% practical approach including laboratory experiments, project-based learning, field visits, and outdoor education.",
    image: six,
    icon: BookOpen,
    highlights: [
      "Continuous Evaluation System (CES)",
      "50% Theory & 50% Practical Learning",
      "Project-Based & Outdoor Education"
    ],
    color: "var(--color-secondary)",
    delay: 200,
  },
  {
    title: "Secondary & Higher Secondary Level (Grade 9–12)",
    subtitle: "NEB-Aligned Academic Excellence",
    description:
      "Grades 9 and 10 follow a 75% theory and 25% practical model aligned with the National Examination Board curriculum, focusing on board examination preparation and career awareness. Grades 11 and 12 offer Science and Management streams with practical lab sessions, research-based assignments, career counseling, leadership development programs, and university guidance support.",
    image: five,
    icon: Users,
    highlights: [
      "75% Theory & 25% Practical Model",
      "Science & Management Streams",
      "Career Counseling & University Guidance"
    ],
    color: "var(--color-primary)",
    delay: 300,
  },
];

const AcademicOverview = () => {
  return (
    <section className="relative py-24 bg-muted/20 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <Title
            title="Pathways to Excellence"
            subtitle="Academic"
            subtitle2="Overview"
            description="At Paramount Academy, we provide a structured learning journey tailored to every stage of a student's development. Our curriculum is designed to inspire curiosity, foster discipline, and prepare students for a changing world."
        />

        {/* Academic Levels Grid */}
        <div className="grid lg:grid-cols-3 gap-8 xl:gap-12">
          {ACADEMIC_LEVELS.map((level, index) => (
            <div
              key={index}
              className="group flex flex-col bg-card rounded-[2rem] overflow-hidden border border-border/50 hover:border-primary/20 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5"
              data-aos="fade-up"
              data-aos-delay={level.delay}
            >
              {/* Image Section */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={level.image}
                  alt={level.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Floating Icon */}
                <div 
                  className="absolute bottom-6 left-6 w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-lg backdrop-blur-md border border-white/20 transition-transform duration-500 group-hover:-translate-y-2"
                  style={{ backgroundColor: level.color }}
                >
                  <level.icon size={24} />
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-6 flex-1">
                  <h4 className="text-[11px] font-bold text-primary uppercase tracking-[0.2em] mb-2">
                    {level.subtitle}
                  </h4>
                  <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {level.title}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">
                    {level.description}
                  </p>
                  
                  {/* Highlights List */}
                  <div className="space-y-3">
                    {level.highlights.map((point, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        <span className="text-xs font-semibold text-muted-foreground/80">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border/50">
                <Link to="/academics#academic-levels">
                  <button className="flex items-center cursor-pointer gap-2 text-primary font-bold text-sm tracking-wide group/btn">
                    LEARN MORE
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </button>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button title="EXPLORE ALL PROGRAMS" link="/academics#academic-levels" />

        {/* Closing Philosophy Statement */}
        <div 
          className="mt-24 p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden group"
          data-aos="zoom-in"
        >
          {/* Background with localized theme colors */}
          <div className="absolute inset-0 bg-primary/10 dark:bg-primary/5 backdrop-blur-sm border border-primary/20" />
          
          {/* Subtle animated gradients */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 group-hover:bg-secondary/20 transition-colors duration-700" />
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            <div className="w-12 h-1 bg-secondary rounded-full mb-8" />
            
            <h3 className="text-foreground text-2xl md:text-4xl font-bold mb-10 leading-[1.2] tracking-tight text-center">
              "Our academic approach balances <span className="text-primary italic">tradition</span> with <span className="text-secondary">innovation</span>, ensuring every learner discovers their unique potential."
            </h3>

            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-0 w-full pt-10 border-t border-border/50">
              <div className="flex flex-col items-center px-4 md:border-r border-border/50">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">20+</div>
                <div className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-[0.25em]">Years of Excellence</div>
              </div>
              
              <div className="flex flex-col items-center px-4 md:border-r border-border/50">
                <div className="text-4xl md:text-5xl font-black text-secondary mb-2 tracking-tighter">100%</div>
                <div className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-[0.25em]">Academic Success</div>
              </div>
              
              <div className="flex flex-col items-center px-4">
                <div className="text-4xl md:text-5xl font-black text-primary mb-2 tracking-tighter">360°</div>
                <div className="text-[10px] md:text-[11px] font-bold text-muted-foreground uppercase tracking-[0.25em]">Holistic Growth</div>
              </div>
            </div>

            <div className="mt-12">
              <p className="text-xs font-bold text-muted-foreground/60 uppercase tracking-[0.4em]">Guided by Leadership & Disciplined Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcademicOverview;