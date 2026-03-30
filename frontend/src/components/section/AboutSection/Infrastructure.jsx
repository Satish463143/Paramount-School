import React from 'react';
import { Building2, FlaskConical, BookOpen, Dumbbell, Shield, Bus, Sparkles, Star, Heart } from 'lucide-react';
import Title from '@/components/common/Title/Title';
import seven from '../../../../public/seven.jpg'
import two from '../../../../public/two.jpg'
import twelve from '../../../../public/twelve.jpg'
import one from '../../../../public/one.jpg'
import three from '../../../../public/three.jpg'
import Structure from '../../../../public/Structure.jpg'

const facilities = [
    {
        title: "Safe & Structured Campus",
        description: "A disciplined learning environment supported by CCTV surveillance and controlled entry systems to ensure student safety.",
        image: seven,
        icon: <Shield size={32} />,
        color: "from-red-400 to-pink-300",
        bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
        title: "Science Laboratories",
        description: "Well-equipped Physics, Chemistry, and Biology laboratories that promote practical experiments and research-based learning.",
        image: two,
        icon: <FlaskConical size={32} />,
        color: "from-purple-400 to-violet-300",
        bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
        title: "ICT & Computer Lab",
        description: "Modern computer facilities providing practical ICT training, internet access, and multimedia-supported learning.",
        image: twelve,
        icon: <Building2 size={32} />,
        color: "from-blue-400 to-cyan-300",
        bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
        title: "Library & Resource Center",
        description: "A dedicated academic space offering books, reference materials, newspapers, and magazines to support independent study.",
        image: one,
        icon: <BookOpen size={32} />,
        color: "from-amber-400 to-orange-300",
        bgColor: "bg-amber-50 dark:bg-amber-900/20"
    },
    {
        title: "Sports & Co-Curricular Facilities",
        description: "Outdoor learning spaces, sports grounds, music and art activities, and event areas that support holistic student development.",
        image: three,
        icon: <Dumbbell size={32} />,
        color: "from-green-400 to-emerald-300",
        bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
        title: "Auditorium & Activity Hall",
        description: "A dedicated space for assemblies, cultural programs, academic presentations, and institutional events.",
        image: Structure,
        icon: <Building2 size={32} />,
        color: "from-indigo-400 to-blue-300",
        bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    }
];

const Infrastructure = () => {
    return (
        <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden" id="infrastructure">
            
            {/* Playful Background Shapes */}
            <div className="absolute top-20 left-10 w-40 h-40 bg-blue-300/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-32 right-20 w-48 h-48 bg-purple-300/10 rounded-full blur-3xl animate-bounce duration-[4000ms]" />
            <div className="absolute top-1/2 left-1/4 w-36 h-36 bg-pink-300/10 rounded-full blur-2xl animate-pulse delay-1000" />
            
            {/* Floating Decorations */}
            <Star className="absolute top-40 right-1/4 text-yellow-400 w-6 h-6 animate-spin-slow opacity-20" />
            <Sparkles className="absolute bottom-48 left-1/3 text-pink-400 w-5 h-5 animate-pulse opacity-30" />
            <Heart className="absolute top-1/3 left-20 text-red-400 w-6 h-6 animate-bounce opacity-20" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <Title
                    title="Our Learning Spaces"
                    subtitle="Where Dreams Take"
                    subtitle2="Shape"
                    description="Every corner of our campus is designed with care, safety, and inspiration in mind. Explore the spaces where your child will learn, play, and grow! 🏫"
                />

                {/* Infrastructure Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
                    {facilities.map((facility, index) => (
                        <div 
                            key={index}
                            className="group"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="relative h-full overflow-hidden rounded-[2.5rem] bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                
                                {/* Image Section */}
                                <div className="relative h-64 md:h-72 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} opacity-20 mix-blend-overlay z-10`} />
                                    <img 
                                        src={facility.image}
                                        alt={facility.title}
                                        loading='lazy'
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    
                                    {/* Floating Icon Badge */}
                                    <div className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${facility.color} flex items-center justify-center text-white shadow-xl rotate-6 group-hover:rotate-0 group-hover:scale-110 transition-all duration-300 z-20`}>
                                        {facility.icon}
                                    </div>

                                    {/* Sparkle Effect */}
                                    <Sparkles className="absolute top-6 right-6 w-6 h-6 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse z-20" />
                                </div>

                                {/* Content Section */}
                                <div className="p-6 md:p-8 relative">
                                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary transition-all">
                                        {facility.title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                                        {facility.description}
                                    </p>

                                    {/* Decorative Corner Blob */}
                                    <div className={`absolute bottom-0 right-0 w-24 h-24 ${facility.bgColor} rounded-tl-[100%] opacity-50 -z-10`} />
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="mt-16 text-center" data-aos="fade-up">
                    <div className="relative inline-block">
                        {/* Decorative Blobs */}
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-20 blur-xl animate-pulse" />
                        <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 blur-xl animate-pulse delay-1000" />
                        
                        <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-2 border-border/50 rounded-[2rem] p-8 md:p-10 shadow-xl max-w-3xl">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Star className="text-yellow-400 w-8 h-8 animate-spin-slow" />
                                <h3 className="text-2xl md:text-3xl font-black text-foreground">Visit Us!</h3>
                                <Heart className="text-red-400 w-8 h-8 animate-pulse" fill="currentColor" />
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We'd love to show you around! Schedule a campus tour and see firsthand how we create a nurturing, inspiring environment for every child. 🌟
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Infrastructure;