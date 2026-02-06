import { Target, Eye, Heart, CheckCircle } from "lucide-react";
import school from "../../../assets/school.jpg"
const About = () => {
  const values = [
    { icon: Target, label: "Academic Excellence" },
    { icon: Heart, label: "Character Building" },
    { icon: Eye, label: "Holistic Growth" },
  ];
  const highlights = [
    "Child-centered learning approach",
    "Emphasis on cultural values and ethics",
    "Modern facilities with traditional values",
    "Experienced and caring faculty",
  ];
  return (
    <section className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <div 
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src={school} 
                alt="Paramount Academy Campus" 
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10 animate-pulse" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-2xl -z-10" />
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2">
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-color-ring text-sm font-medium mb-4"
              data-aos="fade-left" style={{color:'var(--color-primary)'}}
            >
              About Our School
            </div>
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              A Legacy of Excellence in{" "}
              <span style={{color:'var(--color-primary)'}}>Education</span>
            </h2>
            <p 
              className="text-muted-foreground mb-6 leading-relaxed"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              Since 2001, Paramount Academy has been nurturing young minds with a 
              perfect blend of modern education and traditional values. We believe 
              that every child is unique and deserves an environment where they can 
              discover their potential and grow into responsible citizens.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div 
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-color-ring/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-color-ring transition-colors duration-300">
                    <Target style={{color:'var(--color-primary)'}} className="h-5 w-5 text-color-ring group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To provide quality education that empowers students to achieve 
                  academic excellence while developing strong moral values.
                </p>
              </div>

              <div 
                className="p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <Eye className="h-5 w-5 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  To be a leading institution that shapes future leaders with 
                  knowledge, character, and a sense of social responsibility.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="flex flex-wrap gap-3 mb-8">
              {values.map((value, index) => (
                <div
                  key={value.label}
                  data-aos="fade-up"
                  data-aos-delay={500 + (index * 100)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/20 text-color-ring text-sm font-semibold transition-transform hover:scale-105 border border-color-ring/10"
                >
                  <value.icon className="h-4 w-4 text-color-ring" style={{color:'var(--color-primary)'}}/>
                  {value.label}
                </div>
              ))}
            </div>

            {/* Highlights List */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
              {highlights.map((highlight, index) => (
                <li
                  key={highlight}
                  data-aos="fade-up"
                  data-aos-delay={800 + (index * 100)}
                  className="flex items-center gap-3 text-muted-foreground group"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors duration-300">
                    <CheckCircle className="h-3.5 w-3.5 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm font-medium">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;