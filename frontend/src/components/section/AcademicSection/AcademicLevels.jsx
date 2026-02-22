import { GraduationCap, Users, BookOpen } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const academicLevels = [
    {
        title: "Early Childhood Development",
        grades: "Nursery to Senior Montessori",
        description: "Montessori-based education integrated with the national ECD curriculum, focusing on curiosity, independence, creativity, and activity-based experiential learning.",
        image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2670&auto=format&fit=crop",
        imageAlt: "Students engaged in Montessori-based learning activities",
        icon: <Users size={24} />
    },
    {
        title: "Primary & Lower Secondary Education",
        grades: "Grade 1 to Grade 8",
        description: "Grade Teaching Model (Grade 1–3) with Continuous Evaluation System, followed by Subject Teaching Model (Grade 4–8) using a balanced 50% theory and 50% practical approach including projects, laboratory work, and outdoor learning.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
        imageAlt: "Students actively learning in structured classroom environment",
        icon: <BookOpen size={24} />
    },
    {
        title: "Secondary & Higher Secondary Education",
        grades: "Grade 9 to Grade 12",
        description: "NEB-aligned curriculum with 75% theory and 25% practical learning. Includes Science and Management streams in Grades 11–12, supported by laboratory sessions, research work, career counseling, and exam preparation.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop",
        imageAlt: "Students engaged in focused academic learning",
        icon: <GraduationCap size={24} />
    }
];

const AcademicLevels = () => {
    const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);

    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="academic-levels">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Learning Journey</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Academic Levels
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            & Programs Offered
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        A structured academic journey from early childhood to secondary education, designed to nurture growth at every stage.
                    </p>
                </div>

                {/* Academic Levels - Sectioned Layout */}
                <div className="space-y-20 md:space-y-32" >
                    {academicLevels.map((level, index) => (
                        <div key={index}>
                            {/* Subtle section divider (except for first item) */}
                            {index > 0 && (
                                <div className="flex items-center justify-center mb-20 md:mb-32">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                                </div>
                            )}

                            <div 
                                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                                    index % 2 === 0 ? '' : 'lg:grid-flow-dense'
                                }`}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                            >
                                {/* Image Side */}
                                <div 
                                    className={`relative group ${index % 2 === 0 ? '' : 'lg:col-start-2'}`}
                                    data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                                    data-aos-delay="100"
                                >
                                    <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                        <img 
                                            src={level.image}
                                            alt={level.imageAlt}
                                            className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                        
                                        {/* Floating grade badge */}
                                        <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-card/95 backdrop-blur-md p-4 rounded-xl border border-border/50 shadow-xl">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                                                    <div className="text-white">
                                                        {level.icon}
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-foreground">{level.grades}</p>
                                                    <p className="text-xs text-muted-foreground">{level.ageGroup}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative border */}
                                    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/5 scale-[1.02] -z-10" />
                                </div>

                                {/* Content Side */}
                                <div 
                                    className={`space-y-6 ${index % 2 === 0 ? '' : 'lg:col-start-1 lg:row-start-1'}`}
                                    data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                                    data-aos-delay="200"
                                >
                                    {/* Level number indicator */}
                                    <div className="inline-flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-primary">{index + 1}</span>
                                        </div>
                                        <div className="h-[2px] w-16 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                        {level.title}
                                    </h3>

                                    {/* Grade and age info */}
                                    <div className="flex flex-wrap items-center gap-4">
                                        <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                                            <p className="text-sm font-semibold text-primary">{level.grades}</p>
                                        </div>
                                        <div className="px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20">
                                            <p className="text-sm font-semibold text-secondary">{level.ageGroup}</p>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                        {level.description}
                                    </p>

                                    {/* Decorative accent */}
                                    <div className="flex items-center gap-2 pt-2">
                                        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                                        <div className="h-1 w-1 rounded-full bg-primary/50" />
                                        <div className="h-1 w-1 rounded-full bg-secondary/50" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing statement */}
                <div className="mt-20 md:mt-32 text-center max-w-3xl mx-auto" data-aos="fade-up">
                    <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50">
                        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed">
                            Each academic level is carefully designed to build upon the previous stage, ensuring continuous growth, academic excellence, and personal development throughout your child's educational journey.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AcademicLevels;