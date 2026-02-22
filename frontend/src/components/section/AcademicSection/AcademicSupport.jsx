import React from 'react';
import { BookOpen, Users, MessageCircle, HeartHandshake, GraduationCap, Home } from 'lucide-react';

const supportServices = [
    {
        icon: <BookOpen size={24} />,
        title: "Library & Academic Resources",
        description: "A well-managed library with academic books, reference materials, newspapers, and magazines supports independent study and research."
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Continuous Assessment Support",
        description: "Continuous Evaluation System (CES) and structured assessment help monitor student progress and strengthen academic foundations."
    },
    {
        icon: <MessageCircle size={24} />,
        title: "Academic & Career Counseling",
        description: "Guidance for subject selection, stream selection (Science & Management), and university preparation for higher secondary students."
    },
    {
        icon: <Home size={24} />,
        title: "Parent–School Communication",
        description: "Regular parent–teacher interaction and transparent evaluation systems ensure collaborative academic development."
    },
    {
        icon: <Users size={24} />,
        title: "Co-Curricular & Leadership Development",
        description: "Students participate in sports, arts, music, community-based learning, and leadership activities for holistic growth."
    },
    {
        icon: <HeartHandshake size={24} />,
        title: "Health & First Aid Support",
        description: "Basic first aid facilities and health awareness support ensure student well-being within a safe campus environment."
    }
];

const AcademicSupport = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="academic-support">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">We're Here to Help</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Academic Support
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            & Student Services
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Comprehensive support systems designed to ensure every student receives the guidance, resources, and encouragement they need to succeed academically and personally.
                    </p>
                </div>

                {/* Support Services Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {supportServices.map((service, index) => (
                            <div 
                                key={index}
                                className="group relative"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                {/* New Card Style */}
                                <div className="relative h-full p-8 rounded-[2.5rem] bg-background border-2 border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    
                                    {/* Subtle Number Indicator */}
                                    <div className="absolute top-8 right-8">
                                        <span className="text-4xl font-black text-muted/10 group-hover:text-primary/10 transition-colors duration-500 italic">
                                            0{index + 1}
                                        </span>
                                    </div>
                                    
                                    <div className="relative z-10 space-y-6">
                                        {/* Icon Container */}
                                        <div className="relative">
                                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1.25rem] bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                                                {React.cloneElement(service.icon, { size: 30 })}
                                            </div>
                                            
                                            {/* Decorative glow on hover */}
                                            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                                        </div>

                                        {/* Content */}
                                        <div className="space-y-3">
                                            <h3 className="text-xl md:text-2xl font-bold text-primary transition-colors duration-300">
                                                {service.title}
                                            </h3>

                                            <p className="text-base text-muted-foreground leading-relaxed">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Refined Bottom Accent */}
                                        <div className="pt-4 flex items-center gap-3">
                                            <div className="h-[2px] w-12 bg-primary/20 group-hover:w-20 group-hover:bg-primary transition-all duration-500 rounded-full" />
                                            <div className="h-1.5 w-1.5 rounded-full bg-secondary/30 group-hover:bg-secondary transition-all duration-500" />
                                        </div>
                                    </div>

                                    {/* Hover Reveal Gradient */}
                                    <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Closing Statement */}
                <div className="mt-20 md:mt-32 max-w-3xl mx-auto" data-aos="fade-up">
                    <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50">
                        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed text-center">
                            At Paramount School, we understand that every child's learning journey is unique. Our comprehensive support systems ensure that no student faces academic challenges alone—help is always available, guidance is always accessible, and success is always within reach.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AcademicSupport;