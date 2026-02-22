import React from 'react';
import { Flag, Building, Globe, Trophy, Rocket, GraduationCap, Calendar, ArrowRight } from 'lucide-react';
import Title from '@/components/common/Title/Title';

const milestones = [
    {
        year: "2004",
        title: "Foundation of Academic Vision",
        desc: "Paramount Academy was established with a commitment to provide quality education through disciplined learning and holistic development.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2622&auto=format&fit=crop",
        icon: <Flag className="text-white" size={20} />,
        color: "from-blue-500 to-cyan-400"
    },
    {
        year: "2008",
        title: "Structured Academic Framework",
        desc: "Programs from Nursery to Grade Twelve were structured under the National Examination Board with balanced theory and practical integration.",
        image: "https://images.unsplash.com/photo-1577896333050-71eec81640a2?q=80&w=2574&auto=format&fit=crop",
        icon: <Building className="text-white" size={20} />,
        color: "from-purple-500 to-pink-500"
    },
    {
        year: "2013",
        title: "Laboratory & ICT Integration",
        desc: "Science laboratories and ICT facilities were strengthened to support practical learning, research assignments, and experiential education.",
        image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2586&auto=format&fit=crop",
        icon: <GraduationCap className="text-white" size={20} />,
        color: "from-orange-500 to-red-500"
    },
    {
        year: "2019",
        title: "Theory & Practical Model",
        desc: "Implementation of the 50% practical model for lower grades and 75% theory model for secondary levels aligned with NEB guidelines.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop",
        icon: <Globe className="text-white" size={20} />,
        color: "from-emerald-500 to-teal-400"
    },
    {
        year: "Present",
        title: "Holistic Institutional Development",
        desc: "Today, Paramount Academy continues to focus on academic excellence, discipline, leadership, and overall student development in a secure and structured environment.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2604&auto=format&fit=crop",
        icon: <Rocket className="text-white" size={20} />,
        color: "from-indigo-500 to-blue-500"
    }
];

const History = () => {
    return (
        <section className="py-24 relative overflow-hidden bg-background" id="history">
            
            {/* Immersive Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                <Title
                  title="Our Legacy"
                  subtitle="A Journey of"
                  subtitle2="Excellence"
                  description="Paramount School has been a beacon of quality education for over two decades, nurturing young minds and shaping future leaders."
                />

                <div className="relative">
                    {/* Central Line (Gradient & Glowing) */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent md:-translate-x-1/2 rounded-full hidden md:block" />
                    <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent rounded-full md:hidden" />

                    <div className="space-y-16 md:space-y-32">
                        {milestones.map((item, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center w-full ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                
                                {/* Date Marker (Center) */}
                                <div className="absolute left-4 md:left-1/2 -translate-x-[18px] md:-translate-x-1/2 flex flex-col items-center justify-center z-20">
                                    <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg shadow-primary/20 ring-4 ring-background transform transition-transform duration-500 hover:scale-125 hover:rotate-12`}>
                                        {item.icon}
                                    </div>
                                    <div className={`hidden md:flex mt-4 items-center gap-2 px-4 py-1 rounded-full bg-background border border-border shadow-sm`}>
                                        <Calendar size={14} className="text-muted-foreground" />
                                        <span className="text-sm font-bold text-foreground">{item.year}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`w-full md:w-[calc(50%-4rem)] pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`} data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                    <div className="group relative perspective-1000">
                                        <div className="relative overflow-hidden rounded-[2rem] bg-white/50 dark:bg-card/50 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                            
                                            {/* Image Section */}
                                            <div className="relative h-48 md:h-64 overflow-hidden">
                                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 mix-blend-overlay z-10`} />
                                                <img 
                                                    src={item.image} 
                                                    alt={item.title} 
                                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                />
                                                
                                                {/* Mobile date badge */}
                                                <div className="md:hidden absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-white text-xs font-bold">
                                                    {item.year}
                                                </div>
                                            </div>

                                            {/* Text Content */}
                                            <div className="p-6 md:p-8 relative">
                                                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                                    {item.title}
                                                </h3>
                                                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                                    {item.desc}
                                                </p>
                                                
                                                <div className={`mt-6 flex items-center gap-2 text-primary font-bold text-sm ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">Read Story</span>
                                                    <div className={`p-2 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all duration-300`}>
                                                        <ArrowRight size={16} />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                {/* Empty space for alternating layout */}
                                <div className="hidden md:block w-[calc(50%-4rem)]" />
                                
                            </div>
                        ))}
                    </div>

                    {/* End Marker */}
                    <div className="absolute left-4 md:left-1/2 bottom-0 w-4 h-4 bg-gradient-to-r from-primary to-secondary rounded-full -translate-x-[10px] md:-translate-x-1/2 animate-pulse" />

                </div>
            </div>
        </section>
    );
};

export default History;