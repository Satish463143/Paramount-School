import React from 'react';
import { BookOpen, Users, Lightbulb, Target } from 'lucide-react';
import Foundation from '../../../../public/Foundation.jpg'

const philosophyAreas = [
    {
        icon: <Lightbulb size={24} />,
        title: "Learning Through Doing",
        description: "Guided by the philosophy of 'Quality Education through Learning and Doing,' students are encouraged to apply knowledge practically through activities, projects, and experiential learning."
    },
    {
        icon: <Users size={24} />,
        title: "Student-Centered Approach",
        description: "Teaching is structured around active participation, interactive learning, and continuous academic engagement to support holistic student development."
    },
    {
        icon: <Target size={24} />,
        title: "Balanced Theory & Practical Model",
        description: "Lower levels follow a 50% theory and 50% practical structure, while secondary levels follow a 75% theory and 25% practical model under NEB guidelines."
    },
    {
        icon: <BookOpen size={24} />,
        title: "Continuous Evaluation System",
        description: "Student progress is assessed through regular classwork, assignments, presentations, laboratory work, and structured evaluations aligned with the curriculum."
    }
];

const Philosophy = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="academic-philosophy">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mb-16 md:mb-20" data-aos="fade-up">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Our Approach</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Academic Philosophy
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            & Teaching Practice
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        At Paramount School, we believe education is more than delivering lessons—it's about nurturing curious minds, building strong foundations, and preparing students for lifelong learning.
                    </p>
                </div>

                {/* Main Content - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    
                    {/* Image Side */}
                    <div className="order-1 lg:order-2 relative group" data-aos="fade-left" data-aos-duration="1000">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img 
                                src={Foundation}
                                loading='lazy'
                                alt="Teacher explaining concepts to engaged students in classroom"
                                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                        
                        {/* Decorative border */}
                        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/5 scale-[1.02] -z-10" />
                        
                        {/* Floating badge */}
                        <div className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-white dark:bg-card p-6 rounded-2xl shadow-xl border border-border/50" data-aos="fade-up" data-aos-delay="200">
                            <div className="flex items-center gap-4">
                                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <BookOpen className="text-white" size={28} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-foreground">25+</p>
                                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-2 lg:order-1 space-y-8" data-aos="fade-right" data-aos-duration="1000">
                        
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                How We Teach Every Day
                            </h3>
                            
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Our academic approach is rooted in proven pedagogical principles, adapted to meet the unique needs of each student. We create an environment where learning is engaging, structured, and supportive.
                            </p>
                            
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Teachers at Paramount School are not just instructors—they are mentors who inspire curiosity, encourage exploration, and provide the guidance students need to excel academically and personally.
                            </p>
                        </div>

                        {/* Accent divider */}
                        <div className="flex items-center gap-3">
                            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
                            <div className="h-[1px] flex-1 bg-gradient-to-r from-border to-transparent" />
                        </div>

                        {/* Key highlight */}
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-border/50">
                            <p className="text-base md:text-lg text-foreground font-medium leading-relaxed">
                                "We don't just prepare students for exams—we prepare them for life. Our teaching philosophy emphasizes understanding, application, and the development of lifelong learning skills."
                            </p>
                        </div>

                    </div>
                </div>

                {/* Philosophy Areas - Enhanced Grid Design */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto" data-aos="fade-up">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            Our Teaching Principles
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Four core principles guide every lesson, every day, in every classroom.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {philosophyAreas.map((area, index) => (
                            <div 
                                key={index}
                                className="group relative"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/30 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    
                                    {/* Animated gradient background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                                    
                                    {/* Number badge */}
                                    <div className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                                        <span className="text-white font-bold text-sm">{index + 1}</span>
                                    </div>
                                    
                                    <div className="relative z-10 space-y-4 pt-8">
                                        {/* Icon with larger size and gradient background */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                            <div className="text-primary group-hover:text-white transition-colors duration-500">
                                                {React.cloneElement(area.icon, { size: 32 })}
                                            </div>
                                        </div>

                                        {/* Title with gradient on hover */}
                                        <h4 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                                            {area.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {area.description}
                                        </p>

                                        {/* Decorative bottom accent */}
                                        <div className="flex items-center gap-2 pt-2">
                                            <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-24 transition-all duration-500" />
                                            <div className="h-1 w-1 rounded-full bg-primary/50" />
                                            <div className="h-1 w-1 rounded-full bg-secondary/50" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Philosophy;