import React from 'react';
import { GraduationCap, Heart, Shield, Sparkles } from 'lucide-react';

const reasons = [
    {
        title: "Individual Attention & Care",
        description: "Every child is unique, and we honor that. Our small class sizes ensure each student receives personalized guidance, allowing teachers to understand their strengths, challenges, and learning styles. We don't just teach—we mentor, support, and celebrate every milestone.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
        imageAlt: "Teacher giving individual attention to student",
        position: "left"
    },
    {
        title: "Dedicated & Qualified Teachers",
        description: "Our educators are more than instructors—they are passionate mentors committed to your child's growth. With advanced qualifications and years of experience, they bring warmth, expertise, and genuine care to every classroom. Your child will be guided by teachers who truly invest in their success.",
        image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?q=80&w=2574&auto=format&fit=crop",
        imageAlt: "Qualified teachers in classroom setting",
        position: "right"
    },
    {
        title: "Balanced Academics & Values",
        description: "We believe education extends beyond textbooks. While academic excellence is our foundation, we equally prioritize character development, critical thinking, and emotional intelligence. Your child will grow into a well-rounded individual prepared for both academic challenges and life's complexities.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop",
        imageAlt: "Students engaged in balanced learning activities",
        position: "left"
    },
    {
        title: "Safe & Nurturing Environment",
        description: "Your peace of mind matters to us. Our campus is designed with safety as a priority—from secure facilities to trained staff who maintain a watchful, caring presence. We've created a space where children feel protected, valued, and free to explore their potential without fear.",
        image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2673&auto=format&fit=crop",
        imageAlt: "Safe and welcoming school environment",
        position: "right"
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="why-choose-us">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/4 rounded-full blur-[100px] pointer-events-none" />
            
            {/* Subtle decorative curve */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted/20 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Your Child's Future</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Why Parents Choose
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            Paramount School
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Making the right choice for your child's education is one of the most important decisions you'll make. Here's what sets us apart.
                    </p>
                </div>

                {/* Reason Rows - Alternating Layout */}
                <div className="space-y-20 md:space-y-32 mb-20">
                    {reasons.map((reason, index) => (
                        <div 
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center ${
                                reason.position === 'right' ? 'lg:grid-flow-dense' : ''
                            }`}
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            {/* Image Side */}
                            <div 
                                className={`relative group ${reason.position === 'right' ? 'lg:col-start-2' : ''}`}
                                data-aos={reason.position === 'left' ? 'fade-right' : 'fade-left'}
                                data-aos-delay="100"
                            >
                                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl">
                                    <img 
                                        src={reason.image}
                                        alt={reason.imageAlt}
                                        className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle overlay for better text contrast if needed */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                                </div>
                                
                                {/* Decorative soft border */}
                                <div className="absolute inset-0 rounded-[2rem] md:rounded-[3rem] border-2 border-primary/5 scale-[1.02] -z-10" />
                            </div>

                            {/* Text Side */}
                            <div 
                                className={`space-y-6 ${reason.position === 'right' ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                                data-aos={reason.position === 'left' ? 'fade-left' : 'fade-right'}
                                data-aos-delay="200"
                            >
                                {/* Small decorative element */}
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <div className="h-2 w-2 rounded-full bg-primary" />
                                    </div>
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-border to-transparent" />
                                </div>

                                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                                    {reason.title}
                                </h3>
                                
                                <div className="space-y-4">
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>

                                {/* Subtle visual separator */}
                                <div className="pt-4">
                                    <div className="h-1 w-16 bg-gradient-to-r from-primary to-secondary rounded-full" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Closing Statement */}
                <div 
                    className="max-w-4xl mx-auto text-center relative"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    {/* Soft background card */}
                    <div className="relative p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50 overflow-hidden">
                        
                        {/* Decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/5 rounded-full blur-2xl" />
                        
                        <div className="relative z-10 space-y-6">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10">
                                    <Heart className="text-primary" size={32} />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                A Decision You Can Feel Confident About
                            </h3>
                            
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                At Paramount School, we understand the trust you place in us. We're committed to honoring that trust every single day, ensuring your child receives not just an education, but a foundation for a bright, meaningful future.
                            </p>

                            {/* Subtle decorative line */}
                            <div className="flex items-center justify-center gap-2 pt-4">
                                <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary/50 rounded-full" />
                                <Sparkles className="text-primary/50" size={16} />
                                <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary/50 rounded-full" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;