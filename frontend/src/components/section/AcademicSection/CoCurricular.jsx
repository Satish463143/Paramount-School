import React,{ useEffect } from 'react';
import { Palette, Trophy, Globe, Lightbulb } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import art from '../../../../public/art.jpg'
import sport from '../../../../public/sports.jpg'
import four from '../../../../public/four.jpg'
import leadership from '../../../../public/leadership.jpg'

const programs = [
    {
        title: "Arts, Music & Creative Activities",
        description: "Students participate in music, art, and craft activities through dedicated Music Lab and Art & Craft facilities, encouraging creativity, confidence, and self-expression.",
        image: art,
        icon: <Palette size={24} />,
        tag: "CREATIVITY"
    },
    {
        title: "Sports & Physical Education",
        description: "Playground facilities, basketball and volleyball courts, indoor games, athletics training, and annual sports events promote discipline, teamwork, and physical fitness.",
        image: sport,
        icon: <Trophy size={24} />,
        tag: "DISCIPLINE"
    },
    {
        title: "Cultural & Event Programs",
        description: "Annual functions, cultural programs, seminars, workshops, and student presentations provide platforms for talent development and public speaking skills.",
        image: four,
        icon: <Globe size={24} />,
        tag: "VALUES"
    },
    {
        title: "Leadership & Experiential Learning",
        description: "Project-based learning, outdoor educational activities, research assignments, and leadership development initiatives prepare students for future academic and professional challenges.",
        image: leadership,
        icon: <Lightbulb size={24} />,
        tag: "LEADERSHIP"
    }
];

const CoCurricular = () => {
     const location = useLocation();
  
    useEffect(() => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, [location]);
    return (
        <section className="py-24 md:py-32 bg-muted/20 relative overflow-hidden" id="co-curricular">
            
            {/* Subtle background accent */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/2 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Section Header */}
                <div className="max-w-3xl mx-auto text-center mb-20 md:mb-28" data-aos="fade-up">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="h-[2px] w-12 bg-primary" />
                        <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Beyond Academics</span>
                        <div className="h-[2px] w-12 bg-primary" />
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-6">
                        Co-Curricular &
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            Enrichment Programs
                        </span>
                    </h2>
                    
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                        Nurturing creativity, confidence, and character through structured programs that complement formal education and foster holistic development.
                    </p>
                </div>

                {/* Programs - Alternating Rows */}
                <div className="space-y-24 md:space-y-32">
                    {programs.map((program, index) => (
                        <div 
                            key={index}
                            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                            }`}
                        >
                            {/* Image Side */}
                            <div 
                                className={`relative group ${index % 2 !== 0 ? 'lg:order-2' : ''}`}
                                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                                data-aos-duration="1000"
                            >
                                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                                    <img 
                                        src={program.image}
                                        alt={program.title}
                                        className="w-full h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Subtle overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                                    
                                    {/* Tag Badge */}
                                    <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-md border border-border shadow-lg">
                                        <p className="text-xs font-black text-primary tracking-widest">{program.tag}</p>
                                    </div>
                                </div>
                                
                                {/* Decorative border */}
                                <div className="absolute inset-0 rounded-[2.5rem] border-2 border-primary/5 scale-[1.02] -z-10" />
                            </div>

                            {/* Content Side */}
                            <div 
                                className={`space-y-6 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}
                                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                                data-aos-delay="200"
                                data-aos-duration="1000"
                            >
                                {/* Program Index & Icon */}
                                <div className="flex items-center gap-4">
                                    <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-primary">
                                        {program.icon}
                                    </div>
                                    <div className="h-[2px] w-12 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
                                </div>

                                <div className="space-y-4">
                                    <h3 className="text-3xl md:text-4xl font-bold text-foreground">
                                        {program.title}
                                    </h3>
                                    
                                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                                        {program.description}
                                    </p>
                                </div>

                                {/* Divider or Accent */}
                                <div className="pt-4 flex items-center gap-3">
                                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
                                    <div className="h-1 w-1 rounded-full bg-primary/40" />
                                    <div className="h-1 w-1 rounded-full bg-secondary/40" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Final Reassurance Card */}
                <div 
                    className="mt-24 md:mt-32 max-w-4xl mx-auto p-10 md:p-14 rounded-[3rem] bg-gradient-to-br from-primary/5 via-background to-secondary/5 border border-border/50 text-center relative overflow-hidden"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <div className="relative z-10 space-y-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                            A Balanced Learning Journey
                        </h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Our enrichment programs are carefully integrated into the school schedule to ensure a healthy balance between classroom learning and developmental activities. We aim to build well-rounded individuals who are academically strong and emotionally resilient.
                        </p>
                    </div>
                    
                    {/* Decorative Background Element */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                </div>

            </div>
        </section>
    );
};

export default CoCurricular;