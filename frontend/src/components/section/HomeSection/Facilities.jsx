import React from "react";
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";
import { Link } from "react-router-dom";
import { 
  Beaker, 
  Book, 
  Laptop,  
  ArrowRight 
} from "lucide-react";

const FACILITIES_DATA = [
  {
    name: "Modern Science Laboratory",
    description:
      "Fully equipped laboratory supporting practical learning in Physics, Chemistry, and Biology for Grades 6–12. Includes modern scientific instruments, laboratory safety equipment, practical experiment materials, and guided lab sessions under trained teachers.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop",
    icon: Beaker,
    delay: 100
  },
  {
    name: "Library & Resource Center",
    description:
      "A well-managed library providing a quiet, resource-rich environment with a wide collection of academic books, reference materials, storybooks, novels, newspapers, magazines, and dedicated reading space to promote independent learning.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop",
    icon: Book,
    delay: 300
  },
  {
    name: "ICT & Computer Lab",
    description:
      "Modern computer lab equipped with updated systems and internet access. Supports practical computer classes, basic to advanced ICT training, multimedia learning tools, research projects, and digital presentation practice.",
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
                  <Link to="/facilities">VIEW DETAILS</Link>
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
