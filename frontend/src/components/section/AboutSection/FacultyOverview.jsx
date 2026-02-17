import React from 'react';
import { GraduationCap, Award, Heart, ArrowRight, Sparkles, Star } from 'lucide-react';
import Title from '@/components/common/Title/Title';
import { useListAllQuery } from '@/api/team.api';


const FacultyOverview = () => {
    const {data, isLoading, error} = useListAllQuery({page: 1, limit: 100})
    const teachers = data?.result || []
    console.log(teachers)
    return (
        <section className="py-20 md:py-32 bg-background relative overflow-hidden" id="faculty">
            
            {/* Playful Background Elements */}
            <div className="absolute top-20 right-10 w-40 h-40 bg-yellow-300/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-32 left-20 w-48 h-48 bg-pink-300/10 rounded-full blur-3xl animate-bounce duration-[4000ms]" />
            <div className="absolute top-1/2 right-1/4 w-36 h-36 bg-blue-300/10 rounded-full blur-2xl animate-pulse delay-1000" />
            
            {/* Floating Decorations */}
            <Star className="absolute top-32 left-1/4 text-yellow-400 w-6 h-6 animate-spin-slow opacity-20" />
            <Sparkles className="absolute bottom-40 right-1/3 text-pink-400 w-5 h-5 animate-pulse opacity-30" />
            <GraduationCap className="absolute top-1/3 right-20 text-blue-400 w-8 h-8 animate-bounce opacity-20" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <Title
                    title="Our Amazing Teachers"
                    subtitle="Meet the Heroes Who"
                    subtitle2="Guide Your Journey"
                    description="Our teachers are not just educators—they're mentors, friends, and cheerleaders who believe in every student's potential! 🌟"
                />

                {/* Faculty Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12">
                    {teachers.map((teacher, index) => (
                        <div 
                            key={index}
                            className="group"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-card border-2 border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                                
                                {/* Image Section */}
                                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900">
                                    <div className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-300 opacity-20 mix-blend-overlay`} />
                                    <img 
                                        src={teacher.image}
                                        alt={teacher.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Decorative Badge */}
                                    <div className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg">
                                        <Heart className="text-red-400 w-5 h-5 animate-pulse" fill="currentColor" />
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 text-center relative">
                                    
                                    {/* Decorative Shape */}
                                    <div className={`absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-300 rotate-45 shadow-lg`} />
                                    
                                    <div className="mt-4">
                                        <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                            {teacher.name}
                                        </h3>
                                        <p className={`text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent mb-2`}>
                                            {teacher.role}
                                        </p>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {teacher.qualification}
                                        </p>
                                    </div>

                                    {/* Decorative Bottom Blob */}
                                    <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-400 to-cyan-300 opacity-10 rounded-tl-[100%] -z-10`} />
                                </div>

                                {/* Sparkle Effect on Hover */}
                                <Sparkles className="absolute top-6 left-6 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FacultyOverview;