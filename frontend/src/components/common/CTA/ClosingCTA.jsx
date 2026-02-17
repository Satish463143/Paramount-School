import React from 'react';
import { ArrowRight, Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ClosingCTA = () => {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
            
            {/* Soft Background Elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
            
            {/* Subtle decorative line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                
                {/* Main Content - Centered */}
                <div className="max-w-3xl mx-auto text-center space-y-8" data-aos="fade-up" data-aos-duration="1000">
                    
                    {/* Decorative Element */}
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-primary/50 rounded-full" />
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-primary/50 rounded-full" />
                    </div>

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                        Ready to Learn More About
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
                            Paramount School?
                        </span>
                    </h2>

                    {/* Supporting Text */}
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        We'd be honored to welcome your family into our community. Explore our admission process or reach out—we're here to answer any questions you may have.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6" data-aos="fade-up" data-aos-delay="200">
                        
                        {/* Primary Action */}
                        <Link 
                            to="/admissions" 
                            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full overflow-hidden transition-all duration-300 active:scale-95 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 w-full sm:w-auto justify-center"
                        >
                            <span className="relative z-10">Explore Admissions</span>
                            <ArrowRight size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                        </Link>

                        {/* Secondary Action */}
                        <Link 
                            to="/contact-us" 
                            className="group inline-flex items-center gap-3 px-8 py-4 bg-background text-foreground font-semibold rounded-full border-2 border-border hover:border-primary/50 transition-all duration-300 active:scale-95 w-full sm:w-auto justify-center"
                        >
                            <Phone size={20} className="text-primary transition-transform duration-300 group-hover:rotate-12" />
                            <span>Contact the School</span>
                        </Link>
                    </div>

                    {/* Optional Tertiary Link */}
                    <div className="pt-4" data-aos="fade-up" data-aos-delay="300">
                        <Link 
                            to="#" 
                            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-300 group"
                        >
                            <FileText size={16} className="transition-transform duration-300 group-hover:translate-y-[-2px]" />
                            <span className="border-b border-transparent group-hover:border-primary transition-all">
                                Download our prospectus
                            </span>
                        </Link>
                    </div>

                    {/* Reassurance Text */}
                    <div className="pt-8 border-t border-border/50">
                        <p className="text-sm text-muted-foreground italic">
                            No pressure, no rush. Take your time to explore what makes Paramount School the right choice for your child.
                        </p>
                    </div>

                </div>

            </div>

            {/* Subtle decorative line at bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />
        
        </section>
    );
};

export default ClosingCTA;