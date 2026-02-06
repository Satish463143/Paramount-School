import React from "react";
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";
import { 
  Beaker, 
  Book, 
  Laptop,  
  ArrowRight 
} from "lucide-react";

const FACILITIES_DATA = [
  {
    name: "Science Laboratory",
    description: "Equipped for hands-on exploration and practical scientific discovery.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    icon: Beaker,
    delay: 100
  },
  {
    name: "Library & Resource Center",
    description: "A vast collection of resources and a peaceful space for reading and research.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
    icon: Book,
    delay: 300
  },
  {
    name: "Smart Classrooms",
    description: "Technology-enabled learning environments for interactive engagement.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2670&auto=format&fit=crop",
    icon: Laptop,
    delay: 400
  },
];

const Facilities = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <Title
          title="Modern Infrastructure"
          subtitle="School"
          subtitle2="Facilities"
          description="We provide a safe, well-equipped, and inspiring environment that supports every child's academic and personal growth."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FACILITIES_DATA.map((facility, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2"
              data-aos="fade-up"
              data-aos-delay={facility.delay}
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={facility.image}
                  alt={facility.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon Overlay */}
                <div className="absolute bottom-4 left-4 p-3 bg-card/90 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg text-primary transform transition-transform duration-500 group-hover:scale-110">
                  <facility.icon size={20} />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {facility.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {facility.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-wider group/btn cursor-pointer">
                  VIEW DETAILS
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                </div>
              </div>

              {/* Decorative Accent Line */}
              <div className="absolute bottom-0 left-0 h-1 bg-secondary w-0 group-hover:w-full transition-all duration-700" />
            </div>
          ))}
        </div>
        <Button title="EXPLORE ALL FACILITIES" link="/facilities" />
      </div>
    </section>
  );
};

export default Facilities;
