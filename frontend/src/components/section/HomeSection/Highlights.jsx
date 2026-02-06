import React from "react";
import {
  UserCheck,
  ShieldCheck,
  GraduationCap,
  School,
} from "lucide-react";
import Title from "@/components/common/Title/Title";

const highlightItems = [
  {
    title: "Qualified Teachers",
    description:
      "Experienced, trained, and dedicated educators guiding students with care and professionalism.",
    icon: UserCheck,
  },
  {
    title: "Safe & Disciplined Environment",
    description:
      "A secure campus fostering discipline, respect, and a peaceful learning atmosphere.",
    icon: ShieldCheck,
  },
  {
    title: "Holistic Academic Approach",
    description:
      "Balanced focus on academics, character development, and extracurricular growth.",
    icon: GraduationCap,
  },
  {
    title: "Modern Learning Facilities",
    description:
      "Well-equipped classrooms, laboratories, and resources that support quality education.",
    icon: School,
  },
];

const Highlights = () => {
  return (
    <section className="relative py-20 bg-background overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <Title 
          title="Highlights"
          subtitle="Why Choose "
          subtitle2="Our School"
          description="A nurturing academic environment built on discipline, care, and educational excellence, preparing students for a bright future."
        />
        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlightItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative bg-card border border-border/50 rounded-2xl px-6 py-10 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 hover:border-primary/20"
              >
                {/* Icon Container */}
                <div className="mb-8 flex items-center justify-center">
                  <div className="relative">
                    <div className="h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                      <Icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                    {/* Subtle accent dot */}
                    <div className="absolute -top-1 -right-1 h-3 w-3 bg-secondary rounded-full border-2 border-card" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground text-center mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
