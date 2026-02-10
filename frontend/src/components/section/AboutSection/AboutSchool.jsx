import React from 'react';
import { Sparkles, Quote, BookOpen, Users, ArrowRight } from 'lucide-react';

const AboutSchool = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden" id="about-school">
            {/* Ambient Background Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Image Composition */}
                    <div className="order-1 lg:order-1 relative group" data-aos="fade-right" data-aos-duration="1000">
                        {/* Main Image */}
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.01]">
                            <img
                                src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop"
                                alt="Engaged students in a modern learning environment"
                                className="w-full h-[500px] lg:h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>

                        {/* Decorative Borders */}
                        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/10 scale-[1.03] -z-10" />
                        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-secondary/10 scale-[1.06] -z-20" />

                        {/* Floating Glass Card - Quote */}
                        <div className="absolute -bottom-8 -right-8 md:bottom-12 md:-right-12 max-w-[320px] w-[90%]" data-aos="fade-up" data-aos-delay="200">
                            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Glass shine effect */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none" />
                                
                                <Quote size={40} className="text-secondary/80 mb-4 stroke-2" />
                                <p className="text-white text-lg font-medium leading-relaxed mb-4 relative z-10">
                                    "We don't just teach minds; we touch hearts and shape futures."
                                </p>
                                <div className="flex items-center gap-3 relative z-10">
                                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xs shadow-lg">
                                        PS
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm tracking-wide">Principal's Vision</p>
                                        <p className="text-white/60 text-xs uppercase tracking-wider">Since 1995</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content & Story */}
                    <div className="order-2 lg:order-2 space-y-10" data-aos="fade-left" data-aos-duration="1000">

                        {/* Header Group */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-6">
    <div className="h-[2px] w-12 bg-secondary" />
    <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase">Join Our Legacy</span>
    </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1]">
                                A Tradition of <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                                    Excellence & Care
                                </span>
                            </h2>

                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                                At Paramount School, education goes beyond textbooks. We foster a vibrant community where curiosity is sparked, talents are nurtured, and every child feels safe to explore their potential.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-colors duration-300">
                                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <BookOpen size={24} className="text-primary group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-2">Academic Mastery</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Rigorous curriculum designed to challenge and inspire critical thinking.
                                </p>
                            </div>

                            <div className="group p-5 rounded-2xl bg-card border border-border/50 hover:border-secondary/50 transition-colors duration-300">
                                <div className="h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                                    <Users size={24} className="text-secondary group-hover:text-white transition-colors" />
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-2">Focus on Character</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Instilling values of empathy, integrity, and resilience in every student.
                                </p>
                            </div>
                        </div>

                        {/* Action Area */}
                        <div className="flex flex-wrap items-center gap-6 pt-4">
                            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden transition-transform active:scale-95 shadow-lg shadow-primary/25 hover:shadow-primary/40">
                                <span className="relative z-10">Discover Our Story</span>
                                <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            </button>
                            
                            <div className="flex items-center gap-4">
                                <div className="flex -space-x-3">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className={`h-10 w-10 rounded-full border-2 border-background bg-gray-200 overflow-hidden`}>
                                            <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="Avatar" className="h-full w-full object-cover" />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-sm">
                                    <p className="font-bold text-foreground">1,200+ Students</p>
                                    <p className="text-xs text-muted-foreground">Trust Paramount School</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSchool
