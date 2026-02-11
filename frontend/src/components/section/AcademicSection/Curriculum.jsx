import React from 'react';
import { BookOpen, GraduationCap, FileText, Download, CheckCircle2 } from 'lucide-react';

const curriculumHighlights = [
    {
        icon: <BookOpen size={20} />,
        title: "Comprehensive Subject Coverage",
        description: "Core subjects including Languages, Mathematics, Sciences, Social Studies, and Arts"
    },
    {
        icon: <GraduationCap size={20} />,
        title: "Skill-Based Learning",
        description: "Focus on critical thinking, problem-solving, creativity, and communication skills"
    },
    {
        icon: <CheckCircle2 size={20} />,
        title: "Age-Appropriate Progression",
        description: "Carefully structured content that builds complexity as students advance through grades"
    }
];

const Curriculum = () => {
    return (
        <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden" id="curriculum">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Academic Framework</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Curriculum &
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            Syllabus Overview
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        A structured academic framework designed to ensure comprehensive learning, skill development, and academic excellence at every grade level.
                    </p>
                </div>

                {/* Main Content - Split Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
                    
                    {/* Left Column - Curriculum Framework */}
                    <div className="space-y-8" data-aos="fade-right" data-aos-duration="1000">
                        
                        {/* Curriculum Framework */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                                    <FileText className="text-primary" size={24} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Curriculum Framework
                                </h3>
                            </div>

                            <div className="space-y-4 pl-0 md:pl-4">
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Our curriculum follows the <span className="font-semibold text-foreground">National Education Board standards</span>, ensuring students receive a well-rounded education that meets recognized academic benchmarks.
                                </p>
                                
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    We emphasize a balanced approach that integrates <span className="font-semibold text-foreground">knowledge acquisition, skill development, and value formation</span>—preparing students not just for exams, but for lifelong learning and responsible citizenship.
                                </p>

                                <div className="pt-4">
                                    <div className="h-[2px] w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                                </div>
                            </div>
                        </div>

                        {/* Syllabus Structure */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-secondary/10 to-primary/10 flex items-center justify-center">
                                    <BookOpen className="text-secondary" size={24} />
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Syllabus Structure
                                </h3>
                            </div>

                            <div className="space-y-4 pl-0 md:pl-4">
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    The syllabus is organized by grade level, with each year building upon the previous foundation. Subject progression is carefully planned to introduce concepts at developmentally appropriate stages.
                                </p>
                                
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Content is designed to be age-appropriate, engaging, and aligned with cognitive development milestones, ensuring students are neither overwhelmed nor under-challenged.
                                </p>

                                <div className="pt-4">
                                    <div className="h-[2px] w-20 bg-gradient-to-r from-secondary to-primary rounded-full" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Image */}
                    <div className="relative group" data-aos="fade-left" data-aos-duration="1000">
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                            <img 
                                src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2670&auto=format&fit=crop"
                                alt="Teacher guiding students through curriculum materials"
                                className="w-full h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Subtle overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        </div>
                        
                        {/* Decorative border */}
                        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/5 scale-[1.02] -z-10" />
                    </div>

                </div>

                {/* Curriculum Highlights */}
                <div className="mb-16 md:mb-20" data-aos="fade-up">
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
                            Key Curriculum Features
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {curriculumHighlights.map((item, index) => (
                                <div 
                                    key={index}
                                    className="relative p-6 rounded-2xl bg-background border border-border/50 hover:border-primary/30 shadow-sm hover:shadow-md transition-all duration-300"
                                    data-aos="fade-up"
                                    data-aos-delay={index * 100}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0">
                                            <div className="text-primary">
                                                {item.icon}
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="text-base md:text-lg font-bold text-foreground">
                                                {item.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Download & Reference Area */}
                <div className="max-w-3xl mx-auto" data-aos="fade-up">
                    <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50">
                        <div className="text-center space-y-6">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                                <Download className="text-primary" size={28} />
                            </div>
                            
                            <div className="space-y-3">
                                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                                    Curriculum Resources
                                </h3>
                                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                                    Detailed syllabus documents and curriculum outlines are available for download. These resources provide comprehensive information about subject content, learning objectives, and assessment patterns for each grade level.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg">
                                    <Download size={20} />
                                    <span>Download Syllabus</span>
                                </button>
                                
                                <button className="group inline-flex items-center gap-3 px-6 py-3 bg-background text-foreground font-semibold rounded-xl border border-border hover:border-primary/50 transition-all duration-300">
                                    <FileText size={20} />
                                    <span>Curriculum Outline</span>
                                </button>
                            </div>

                            <p className="text-sm text-muted-foreground italic pt-2">
                                For detailed academic inquiries, please contact our academic office.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Curriculum;