import React from 'react';
import { Shield, Heart, Lightbulb, Users, Award, BookOpen, Sparkles, Star } from 'lucide-react';
import Title from '@/components/common/Title/Title';
import Excellence from '../../../../public/Excellence.jpg'
import Discipline from '../../../../public/Discipline.jpg'
import Holistic from '../../../../public/Holistic.jpg'
import Leadership from '../../../../public/Leadership.jpg'
import Moral from '../../../../public/Moral.jpg'

const values = [
    {
        title: "Academic Excellence",
        desc: "Commitment to high academic standards through disciplined study, structured evaluation, and nationally aligned curriculum.",
        icon: <Award size={28} />,
        image: Excellence,
        color: "from-purple-400 to-violet-300",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
        accentColor: "bg-purple-400"
    },
    {
        title: "Discipline & Responsibility",
        desc: "A structured learning environment that fosters accountability, self-control, and respect for institutional values.",
        icon: <Shield size={28} />,
        image: Discipline,
        color: "from-blue-400 to-cyan-300",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        accentColor: "bg-blue-400"
    },
    {
        title: "Holistic Development",
        desc: "Balanced emphasis on intellectual, social, emotional, moral, and physical growth to prepare responsible citizens.",
        icon: <Users size={28} />,
        image: Holistic,
        color: "from-green-400 to-emerald-300",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        accentColor: "bg-green-400"
    },
    {
        title: "Leadership & Confidence",
        desc: "Encouraging initiative, teamwork, and decision-making skills that prepare students for future responsibilities.",
        icon: <Lightbulb size={28} />,
        image: Leadership,
        color: "from-yellow-400 to-orange-300",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
        accentColor: "bg-yellow-400"
    },
    {
        title: "Moral & Ethical Values",
        desc: "Strong emphasis on integrity, respect, and social responsibility as foundations of character development.",
        icon: <Heart size={28} />,
        image: Moral,
        color: "from-pink-400 to-rose-300",
        bgColor: "bg-pink-100 dark:bg-pink-900/30",
        accentColor: "bg-pink-400"
    }
];

const CoreValues = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden" id="core-values">
            
            {/* Playful Background Shapes */}
            <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute top-1/4 right-20 w-40 h-40 bg-pink-300/20 rounded-full blur-3xl animate-bounce duration-[3000ms]" />
            <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute bottom-10 right-10 w-36 h-36 bg-purple-300/20 rounded-full blur-2xl animate-bounce duration-[4000ms]" />
            
            {/* Floating Stars */}
            <Star className="absolute top-20 right-1/4 text-yellow-400 w-8 h-8 animate-spin-slow opacity-30" />
            <Sparkles className="absolute bottom-32 left-1/3 text-pink-400 w-6 h-6 animate-pulse opacity-40" />
            <Star className="absolute top-1/3 left-20 text-blue-400 w-6 h-6 animate-bounce opacity-30" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <Title
                    title="Our Core Values"
                    subtitle="What Makes Us"
                    subtitle2="Special"
                    description="These are the superpowers that make our school amazing! Every day, we practice these values to become the best versions of ourselves."
                />

                {/* Values Grid - Playful Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20">
                    {values.map((value, index) => (
                        <div 
                            key={index} 
                            className="group"
                            data-aos="zoom-in"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-full overflow-hidden rounded-[3rem] bg-white dark:bg-gray-800 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 hover:rotate-1">
                                
                                {/* Image Section with Organic Shape */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-30 mix-blend-multiply`} />
                                    <img 
                                        src={value.image} 
                                        alt={value.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Floating Icon Badge */}
                                    <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-xl rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                                        {value.icon}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 pt-10 text-center">
                                    <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                        {value.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-sm">
                                        {value.desc}
                                    </p>
                                </div>

                                {/* Decorative Blob */}
                                <div className={`absolute top-0 right-0 w-20 h-20 ${value.bgColor} rounded-bl-[100%] opacity-50 -z-10`} />
                                <div className={`absolute bottom-0 left-0 w-24 h-24 ${value.bgColor} rounded-tr-[100%] opacity-50 -z-10`} />
                                
                                {/* Sparkle on Hover */}
                                <Sparkles className={`absolute top-4 right-4 w-5 h-5 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Teaching Philosophy - Playful Version */}
                <div className="relative" data-aos="fade-up">
                    <div className="max-w-5xl mx-auto relative">
                        
                        {/* Decorative Blobs Around Card */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-20 blur-2xl animate-pulse" />
                        <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-20 blur-2xl animate-pulse delay-1000" />
                        
                        <div className="relative p-8 md:p-12 rounded-[3rem] bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-4 border-white dark:border-gray-700 shadow-2xl overflow-hidden">
                            
                            {/* Decorative Corner Shapes */}
                            <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-900 dark:to-cyan-900 rounded-br-[100%] opacity-30" />
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-200 to-purple-200 dark:from-pink-900 dark:to-purple-900 rounded-tl-[100%] opacity-30" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center justify-center gap-3 mb-6">
                                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg rotate-6 hover:rotate-0 transition-transform">
                                        <BookOpen className="text-white" size={32} />
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black text-foreground">How We Teach</h3>
                                    <Star className="text-yellow-400 w-8 h-8 animate-spin-slow" />
                                </div>

                                <div className="space-y-4 text-muted-foreground text-lg leading-relaxed text-center max-w-3xl mx-auto">
                                    <p className="text-xl font-medium text-foreground">
                                        🌟 Learning should be fun, exciting, and full of discovery!
                                    </p>
                                    <p>
                                        We create a magical space where every child feels safe to dream big, ask "why?" a million times, and learn at their own pace. Our teachers are like friendly guides on an amazing adventure!
                                    </p>
                                    <p className="font-bold text-primary text-xl">
                                        Together, we grow, we laugh, we learn, and we become the best we can be! 🚀
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CoreValues;