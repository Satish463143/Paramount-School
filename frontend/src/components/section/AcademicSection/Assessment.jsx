import React from 'react';
import { ClipboardCheck, Eye, TrendingUp, MessageSquare } from 'lucide-react';
import Structure from '../../../../public/Structure.jpg'

const assessmentAspects = [
    {
        icon: <Eye size={24} />,
        title: "Continuous Evaluation System (CES)",
        description: "At the primary level, student progress is assessed through classwork, assignments, presentations, participation, and regular observation to ensure consistent learning development."
    },
    {
        icon: <ClipboardCheck size={24} />,
        title: "Theory & Practical Balance",
        description: "Lower secondary follows a 50% theory and 50% practical model, while secondary and higher secondary follow a 75% theory and 25% practical structure as per NEB guidelines."
    },
    {
        icon: <TrendingUp size={24} />,
        title: "Laboratory & Project-Based Assessment",
        description: "Students are evaluated through laboratory experiments, project work, research assignments, and applied learning activities to strengthen practical understanding."
    },
    {
        icon: <MessageSquare size={24} />,
        title: "Transparent Evaluation & Board Preparation",
        description: "Assessment aligns with the National Examination Board curriculum, ensuring structured academic preparation, revision programs, and clear performance evaluation."
    }
];

const Assessment = () => {
    return (
        <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden" id="assessment">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Fair & Supportive</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Assessment &
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            Evaluation System
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        A transparent, balanced, and supportive approach to measuring student progress—designed to encourage growth, not create pressure.
                    </p>
                </div>

                {/* Main Content - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 md:mb-20">
                    
                    {/* Image Side */}
                    <div className="relative group order-2 lg:order-1" data-aos="fade-right" data-aos-duration="1000">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img 
                                src={Structure}
                                loading='lazy'
                                alt="Teacher providing supportive feedback to student"
                                className="w-full h-[400px] md:h-[500px] lg:h-[550px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                        
                        {/* Decorative border */}
                        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/5 scale-[1.02] -z-10" />
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8 order-1 lg:order-2" data-aos="fade-left" data-aos-duration="1000">
                        <div className="space-y-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                How We Measure Progress
                            </h3>
                            
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Our evaluation system is designed to provide a complete picture of each student's academic development. We believe assessment should support learning, identify strengths, and guide improvement—never create unnecessary stress or comparison.
                            </p>
                            
                            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                Every evaluation is conducted with care, fairness, and academic responsibility. Parents are kept informed at every stage, ensuring transparency and trust in how their child's progress is monitored and supported.
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
                                "Assessment at Paramount School is not about ranking students—it's about understanding each child's unique learning journey and providing the support they need to succeed."
                            </p>
                        </div>
                    </div>

                </div>

                {/* Assessment Aspects - Grid Layout */}
                <div className="max-w-5xl mx-auto space-y-12">
                    <div className="text-center" data-aos="fade-up">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                            Our Evaluation Framework
                        </h3>
                        <p className="text-base md:text-lg text-muted-foreground">
                            Four key aspects guide how we assess and support student learning.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {assessmentAspects.map((aspect, index) => (
                            <div 
                                key={index}
                                className="group relative"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-background to-background/50 border border-border/50 hover:border-primary/30 shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden">
                                    
                                    {/* Animated gradient background on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    
                                    {/* Decorative corner accent */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                                    
                                    {/* Number badge */}
                                    <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25">
                                        <span className="text-white font-bold text-sm">{index + 1}</span>
                                    </div>
                                    
                                    <div className="relative z-10 space-y-4">
                                        {/* Icon with larger size and gradient background */}
                                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 group-hover:from-primary group-hover:to-secondary transition-all duration-500 group-hover:scale-110">
                                            <div className="text-primary group-hover:text-white transition-colors duration-500">
                                                {React.cloneElement(aspect.icon, { size: 28 })}
                                            </div>
                                        </div>

                                        {/* Title - solid color, no gradient */}
                                        <h4 className="text-xl md:text-2xl font-bold text-foreground transition-colors duration-300">
                                            {aspect.title}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-base text-muted-foreground leading-relaxed">
                                            {aspect.description}
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

                {/* Closing Statement */}
                <div className="mt-20 md:mt-32 max-w-3xl mx-auto" data-aos="fade-up">
                    <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50">
                        <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed text-center">
                            Our assessment system is built on the principle that every child learns and grows at their own pace. We measure progress to guide, support, and celebrate learning—never to create pressure or comparison.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Assessment;