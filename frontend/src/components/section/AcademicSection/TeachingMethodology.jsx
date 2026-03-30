import React from 'react';
import { MessageCircle, Users, Lightbulb, Target } from 'lucide-react';
import vision from '../../../../public/vision.jpg'

const methodologyThemes = [
    {
        icon: <Lightbulb size={24} />,
        title: "Student-Centered Teaching",
        description: "Instruction is structured around active participation and engagement, encouraging students to think critically and take responsibility for their learning."
    },
    {
        icon: <MessageCircle size={24} />,
        title: "Activity & Experiential Learning",
        description: "Montessori-based methods, classroom activities, projects, and outdoor learning experiences strengthen understanding through practical exposure."
    },
    {
        icon: <Target size={24} />,
        title: "Balanced Theory & Practical Structure",
        description: "Grades 4–8 follow a 50% theory and 50% practical model, while secondary levels follow a 75% theory and 25% practical structure aligned with NEB guidelines."
    },
    {
        icon: <Users size={24} />,
        title: "Continuous Evaluation System",
        description: "Regular assessments through classwork, assignments, laboratory sessions, and research projects ensure structured academic monitoring and progress."
    }
];
const TeachingMethodology = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="teaching-methodology">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Inside The Classroom</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Teaching
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            Methodology
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        A structured, interactive, and student-focused approach to daily classroom learning that ensures every child is guided, supported, and engaged.
                    </p>
                </div>

                {/* Main Image */}
                <div className="max-w-5xl mx-auto mb-16 md:mb-24" data-aos="fade-up" data-aos-duration="1000">
                    <div className="relative group rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <img 
                            src={vision}
                            loading='lazy'
                            alt="Teacher explaining concepts to engaged students in interactive classroom"
                            className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    
                    {/* Decorative border */}
                    <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/5 scale-[1.02] -z-10" />
                </div>

                {/* Methodology Themes - Flow-based Layout */}
                <div className="max-w-4xl mx-auto space-y-16 md:space-y-20">
                    {methodologyThemes.map((theme, index) => (
                        <div key={index}>
                            {/* Subtle divider (except for first item) */}
                            {index > 0 && (
                                <div className="flex items-center justify-center mb-16 md:mb-20">
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
                                </div>
                            )}

                            <div 
                                className="space-y-6"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* Theme Header */}
                                <div className="flex items-start gap-4">
                                    <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0">
                                        <div className="text-primary">
                                            {theme.icon}
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                                            {theme.title}
                                        </h3>
                                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                            {theme.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Decorative accent */}
                                <div className="flex items-center gap-2 pl-[72px]">
                                    <div className="h-1 w-16 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Statement */}
                <div className="mt-20 md:mt-32 max-w-3xl mx-auto" data-aos="fade-up">
                    <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50">
                        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed text-center">
                            Our teaching methodology is designed to create a classroom environment where students feel safe to ask questions, explore ideas, and develop a genuine love for learning—guided every step of the way by dedicated, experienced teachers.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TeachingMethodology;