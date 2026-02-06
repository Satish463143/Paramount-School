import React from "react";
import { UserCheck, ShieldCheck, GraduationCap, School, Sparkles, CheckCircle2 } from "lucide-react";

const HIGHLIGHT_ITEMS = [
  {
    title: "Qualified Teachers",
    description: "Experienced, trained, and dedicated educators guiding students with master-level expertise.",
    icon: UserCheck,
    delay: 100,
  },
  {
    title: "Safe & Disciplined",
    description: "A secure campus fostering mutual respect and a peaceful, structured learning atmosphere.",
    icon: ShieldCheck,
    delay: 200,
  },
  {
    title: "Holistic Academic Approach",
    description: "Balanced focus on academics, character building, and creative extracurricular growth.",
    icon: GraduationCap,
    delay: 300,
  },
  {
    title: "Modern Learning Facilities",
    description: "Well-equipped smart classrooms and advanced laboratories for high-quality education.",
    icon: School,
    delay: 400,
  },
];

const Highlights = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background transition-colors duration-500">
      {/* Dynamic Animated Blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Asymmetric Hero Image & Text */}
          <div className="lg:col-span-6 space-y-10" data-aos="fade-right">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/5 dark:bg-primary/10 text-primary text-[10px] font-black tracking-[0.3em] uppercase rounded-full border border-primary/10">
                <Sparkles size={12} className="text-secondary" />
                The Paramount Difference
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-foreground mb-8 leading-[1.1] tracking-tighter">
                Why Chose <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary italic">Our School.</span>
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed max-w-xl">
                We provide a nurturing academic environment built on leadership, 
                excellence, and genuine care for every student's future.
              </p>
            </div>

            {/* Sub-features list */}
            <div className="space-y-4 py-6 border-y border-border/50">
              {["Ranked #1 for Holistic Growth", "Global Curriculum Standards", "Elite Faculty Personnel"].map((list, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground/80 font-bold">
                  <CheckCircle2 size={20} className="text-secondary" />
                  <span>{list}</span>
                </div>
              ))}
            </div>

            {/* High Impact Image Card */}
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1571210862729-78a52d3779a2?q=80&w=2070&auto=format&fit=crop" 
                alt="Happy Students" 
                className="w-full h-[400px] object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-4 rounded-2xl flex items-center gap-4 text-white">
                  <div className="h-12 w-12 rounded-full bg-secondary flex items-center justify-center text-white font-black">100%</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest leading-none mb-1">Success Rate</p>
                    <p className="text-[10px] text-white/70">Academic Excellence Year on Year</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Staggered Highlight Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 lg:pt-20">
            {HIGHLIGHT_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                  className={`group relative p-8 bg-card/40 backdrop-blur-xl border border-border/50 rounded-[2.5rem] transition-all duration-500 hover:bg-card hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 ${index % 2 !== 0 ? 'lg:translate-y-12' : ''}`}
                >
                  <div className="mb-6 h-16 w-16 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-secondary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles size={16} className="text-secondary/50" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Highlights;
