import React from 'react';
import { CheckCircle2, FileText, Info, Files, ShieldCheck } from 'lucide-react';

const mandatoryDocuments = [
  { 
    name: "Previous Academic Records", 
    clarification: "Mark sheets and academic reports from the previously attended institution." 
  },
  { 
    name: "Transfer Certificate", 
    clarification: "Original Transfer Certificate from the previous school." 
  },
  { 
    name: "SEE Mark Sheet & Character Certificate", 
    clarification: "Required for Grade 11 applicants as per NEB guidelines." 
  },
  { 
    name: "Recent Passport-Size Photographs", 
    clarification: "Recent passport-size photographs of the student for official records." 
  },
];

const additionalDocuments = [
  { 
    name: "Migration Certificate", 
    clarification: "Required if applicable, especially for students transferring boards or institutions." 
  },
  { 
    name: "Citizenship Copy", 
    clarification: "Citizenship copy required for record purposes (as mentioned for higher secondary level)." 
  },
  { 
    name: "Completed Admission Form", 
    clarification: "Official admission form to be submitted to the school administration office." 
  },
];

const RequiredDocuments = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden" id="required-documents">
      {/* Decorative Accents */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-primary/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-secondary/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Simplified Header */}
        <div className="max-w-3xl mb-16 md:mb-24" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-[2px] w-12 bg-primary" />
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Checklist</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-foreground mb-8 leading-[1.05]">
            What You'll
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">
              Need to Bring.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A concise list of documents required for a seamless admission process. Please ensure all originals are available for verification.
          </p>
        </div>

        {/* Unified Document Containers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Mandatory Group */}
          <div data-aos="fade-up">
            <div className="flex items-center gap-4 mb-8 pl-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Mandatory</h3>
                <p className="text-xs font-bold text-primary/60 tracking-widest uppercase">Required for all</p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border/50 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/[0.02]">
              <div className="divide-y divide-border/30">
                {mandatoryDocuments.map((doc, index) => (
                  <div 
                    key={index} 
                    className="group flex gap-6 p-8 transition-colors hover:bg-background/50"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-primary/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <CheckCircle2 size={14} className="opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{doc.name}</h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic opacity-80">
                        {doc.clarification}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Group */}
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-4 mb-8 pl-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shadow-lg shadow-secondary/5">
                <Files size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Additional</h3>
                <p className="text-xs font-bold text-secondary/60 tracking-widest uppercase">Specify by case</p>
              </div>
            </div>

            <div className="bg-muted/30 border border-border/50 rounded-[2.5rem] overflow-hidden backdrop-blur-sm shadow-2xl shadow-black/[0.02]">
              <div className="divide-y divide-border/30">
                {additionalDocuments.map((doc, index) => (
                  <div 
                    key={index} 
                    className="group flex gap-6 p-8 transition-colors hover:bg-background/50"
                  >
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-secondary/20 flex items-center justify-center group-hover:border-secondary group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                        <CheckCircle2 size={14} className="opacity-0 group-hover:opacity-100" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-secondary transition-colors">{doc.name}</h4>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic opacity-80">
                        {doc.clarification}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reassuring Footer */}
            <div className="mt-10 mx-4 p-6 rounded-3xl bg-secondary/[0.02] border border-secondary/5 text-center">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Info size={16} className="text-secondary" />
                Need help? Our admin team is here to assist you with paperwork.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default RequiredDocuments;
