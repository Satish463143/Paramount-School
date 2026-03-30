import React from 'react';
import { Compass, Target, Heart, Star, Sun, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import vision from '../../../../public/vision.jpg'

const VisionAndMission = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden" id="vision-mission">
            
            {/* Playful Background Elements */}
            <div className="absolute top-10 left-[-100px] w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-60 animate-pulse" />
            <div className="absolute bottom-10 right-[-100px] w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-60 animate-pulse delay-1000" />

            {/* Floating Shapes using CSS */}
            <div className="absolute top-[15%] right-[10%] w-12 h-12 border-4 border-yellow-400/30 rounded-full animate-bounce duration-[3000ms]" />
            <div className="absolute bottom-[20%] left-[10%] w-8 h-8 bg-blue-400/20 rounded-lg rotate-12 animate-spin-slow" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Column: Vision (Visual + Story) */}
                    <div className="relative order-2 lg:order-1" data-aos="fade-right">
                        
                        {/* Main Image with Organic Shape */}
                        <div className="relative z-10">
                            <div className="relative rounded-[3rem] rounded-tl-[8rem] rounded-br-[6rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 transform rotate-[-2deg] hover:rotate-0 transition-all duration-500">
                                <img 
                                    src={vision}
                                    loading='lazy'
                                    alt="Happy students learning together" 
                                    className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                
                                {/* Overlay Text on Image */}
                                <div className="absolute bottom-0 left-0 p-8 text-white">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="p-2 bg-white/20 backdrop-blur-md rounded-full">
                                            <Compass className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold tracking-wide">Our Vision</h3>
                                    </div>
                                    <p className="text-lg md:text-xl font-medium leading-relaxed opacity-90">
                                        "To create a world where every child feels loved, valued, and inspired to reach for the stars."
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Floating Elements around Image */}
                            <div className="absolute -top-6 -left-6 bg-yellow-400 text-yellow-900 p-4 rounded-full shadow-lg animate-bounce z-20">
                                <Sun size={32} strokeWidth={2.5} />
                            </div>
                            <div className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-4 rounded-[2rem] shadow-xl z-20 max-w-[200px] border border-gray-100 dark:border-gray-700">
                                <div className="flex items-center gap-2 mb-1">
                                    <Heart className="text-red-500 fill-red-500" size={16} />
                                    <span className="font-bold text-xs text-foreground">Parent Approved</span>
                                </div>
                                <p className="text-[10px] text-muted-foreground leading-tight">
                                    Trusted by over 1000+ families for our nurturing environment.
                                </p>
                            </div>
                        </div>

                        {/* Background Blotches for Image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 rounded-[4rem] -rotate-6 -z-10" />
                    </div>

                    {/* Right Column: Mission (Playful Card) */}
                    <div className="relative order-1 lg:order-2" data-aos="fade-left">
                        <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/10 rounded-[3rem] p-8 md:p-12 shadow-xl relative overflow-hidden group hover:border-primary/20 transition-colors duration-300">
                            
                            {/* Decorative Corner Shape */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-secondary/10 to-transparent rounded-bl-[100%] rounded-tr-[2.5rem]" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6">
                                    <Target size={16} />
                                    <span>OUR MISSION</span>
                                </div>

                                <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-tight">
                                    Growing Hearts & <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                        Building Dreams
                                    </span>
                                </h2>

                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                                    We believe education is an adventure! Our mission is to guide every little learner on a journey of discovery, blending academic excellence with the joy of childhood.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        {
                                            icon: <Star className="text-yellow-500 fill-yellow-500" size={20} />,
                                            title: "Spark Creativity",
                                            desc: "Encouraging imagination through arts and play."
                                        },
                                        {
                                            icon: <Heart className="text-red-500 fill-red-500" size={20} />,
                                            title: "Nurture Kindness",
                                            desc: "Building a community of caring friends and leaders."
                                        },
                                        {
                                            icon: <Sparkles className="text-blue-500 fill-blue-500" size={20} />,
                                            title: "Inspire Excellence",
                                            desc: "Making learning fun and meaningful every day."
                                        }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 border border-border/50 hover:bg-background hover:shadow-md transition-all duration-300 group/item">
                                            <div className="p-3 rounded-xl bg-white dark:bg-gray-800 shadow-sm group-hover/item:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-foreground text-base">{item.title}</h4>
                                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="mt-8 pt-4 border-t border-border/50 flex flex-wrap gap-4 items-center justify-between">
                                     <button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all active:scale-95">
                                        <Link to="/contact-us"><span>Join our Family</span></Link>
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default VisionAndMission;