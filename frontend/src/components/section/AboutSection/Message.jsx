import React from 'react';
import { Quote, Feather } from 'lucide-react';

const Message = () => {
    return (
        <section className="py-20 md:py-28 bg-background relative overflow-hidden" id="leadership-message">
            
            {/* Soft Background Blobs for Warmth */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/4 translate-y-1/4" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Column: Leadership Portrait (Mobile: Top) */}
                    <div className="w-full md:w-2/5 flex justify-center md:justify-end order-1" data-aos="fade-right">
                        <div className="relative">
                            
                            {/* Organic Blob Frame for Image */}
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 bg-secondary/10 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-blob" />
                                <div className="absolute inset-0 bg-primary/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] animate-blob animation-delay-2000" />
                                
                                {/* Image Container */}
                                <div className="absolute inset-2 overflow-hidden rounded-[50%_50%_50%_50%/50%_50%_50%_50%] border-4 border-white dark:border-gray-800 shadow-xl">
                                    <img 
                                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" 
                                        alt="Principal Mrs. Sarah Johnson" 
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Floating Decorative Icon */}
                                <div className="absolute -bottom-2 -right-2 bg-white dark:bg-card p-3 rounded-full shadow-lg border border-border/50 animate-bounce-slow">
                                    <Feather className="text-primary w-6 h-6" />
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Message Content */}
                    <div className="w-full md:w-3/5 text-center md:text-left order-2" data-aos="fade-left">
                        
                        <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase">
                            Message from Ownership
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-2">
                           Mukunda Pd. Pandey
                        </h2>
                        <h3 className="text-lg text-secondary font-medium mb-8">
                            Principal, Paramount Academy
                        </h3>

                        <div className="relative">
                            <Quote className="absolute -top-6 -left-8 text-primary/10 w-16 h-16 transform -scale-x-100 hidden md:block" />
                            
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed relative z-10">
                                <p>
                                    “At Paramount Academy, we are committed to academic excellence, discipline, and holistic development. Guided by our philosophy of ‘Quality Education through Learning and Doing,’ we encourage students to grow intellectually and morally in a structured academic environment.”
                                </p>
                                <p>
                                    “Our programs from Nursery to Grade Twelve follow the National Examination Board guidelines, combining theory and practical learning. With dedicated teachers, continuous evaluation, and strong institutional values, we strive to shape responsible, confident, and capable individuals.”
                                </p>
                                <p>
                                    "Together, let's build a future filled with hope, joy, and endless possibilities for your little ones."
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Message;