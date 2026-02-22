import React from 'react';
import { ClipboardCheck, FileText, Users, MailCheck, GraduationCap } from 'lucide-react';

const admissionSteps = [
  {
    number: "01",
    title: "Application Submission",
    description: "Submit the completed admission form at the school administration office during official working hours.",
    icon: <MailCheck size={24} />,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30 dark:text-blue-400"
  },
  {
    number: "02",
    title: "Entrance Assessment",
    description: "Students (Grade 1 and above) may appear for an entrance examination to assess academic readiness as per NEB guidelines.",
    icon: <FileText size={24} />,
    color: "text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30 dark:text-emerald-400"
  },
  {
    number: "03",
    title: "Interaction / Counseling",
    description: "Interaction session with student and parents. For Grade 11–12, counseling is provided for Science or Management stream selection.",
    icon: <Users size={24} />,
    color: "text-amber-600 bg-amber-50 dark:bg-amber-950/30 dark:text-amber-400"
  },
  {
    number: "04",
    title: "Document Verification",
    description: "Submission and verification of required academic documents including mark sheets, transfer certificates, and other necessary records.",
    icon: <ClipboardCheck size={24} />,
    color: "text-rose-600 bg-rose-50 dark:bg-rose-950/30 dark:text-rose-400"
  },
  {
    number: "05",
    title: "Admission Confirmation",
    description: "Admission is confirmed based on entrance results, eligibility criteria, seat availability, and fee clearance.",
    icon: <GraduationCap size={24} />,
    color: "text-primary bg-primary/5 dark:bg-primary/20 dark:text-primary"
  }
];

const AdmissionProcess = () => {
  return (
    <section className="py-24 md:py-32 bg-muted/30 relative overflow-hidden" id="admission-process">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs tracking-widest uppercase mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Clear & Simple
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-8 leading-tight">
            Our Admission <span className="text-primary">Journey.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We've streamlined our admission process to be as welcoming and transparent as possible. Follow these simple steps to become a part of our community.
          </p>
        </div>

        {/* Step Progression Flow */}
        <div className="relative">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-border/50">
            <div className="h-full bg-primary/20 w-0 animate-grow-width origin-left" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6">
            {admissionSteps.map((step, index) => (
              <div 
                key={index} 
                className="relative group text-center lg:text-left flex flex-col items-center lg:items-start"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                {/* Step Indicator & Icon */}
                <div className="relative z-20 mb-8">
                  <div className={`w-20 h-20 rounded-3xl ${step.color} border border-border/50 flex items-center justify-center shadow-xl shadow-black/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border-2 border-primary text-xs font-black text-primary flex items-center justify-center shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="max-w-[240px] lg:max-w-none">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Vertical Decorative Line (Mobile/Tablet) */}
                {index !== admissionSteps.length - 1 && (
                  <div className="lg:hidden absolute top-24 bottom-0 left-1/2 w-px h-12 bg-border/50 -translate-x-1/2 mt-4" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA or Note */}
        <div className="mt-24 text-center" data-aos="fade-up">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10">
            <div className="px-8 py-6 rounded-xl bg-background border border-white/20 backdrop-blur-xl">
              <p className="text-foreground font-semibold mb-2">Ready to take the first step?</p>
              <p className="text-sm text-muted-foreground mb-0">Our admission office is open Monday to Friday, 9:00 AM — 4:00 PM.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AdmissionProcess;