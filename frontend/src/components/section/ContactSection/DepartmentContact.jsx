import React from 'react';
import { ShieldCheck, GraduationCap, Laptop, Building, ArrowRight } from 'lucide-react';

const departments = [
  {
    name: 'Admissions Office',
    head: 'Ms. Sarah Johnson',
    email: 'admissions@paramount.edu',
    phone: '+91 98765 43210',
    icon: GraduationCap,
    color: 'emerald',
  },
  {
    name: 'Aministration',
    head: 'Mr. Robert Wilson',
    email: 'admin@paramount.edu',
    phone: '+91 11 2345 6789',
    icon: Building,
    color: 'sky',
  },
  {
    name: 'Technical Support',
    head: 'IT Helpdesk',
    email: 'support@paramount.edu',
    phone: '+91 11 2345 6700',
    icon: Laptop,
    color: 'indigo',
  },
  {
    name: 'Security & Safety',
    head: 'Maj. David Miller',
    email: 'safety@paramount.edu',
    phone: '+91 11 2345 6755',
    icon: ShieldCheck,
    color: 'rose',
  },
];

const DepartmentContact = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-12" data-aos="fade-up">
           <div className="h-[2px] w-12 bg-primary" />
           <span className="text-primary font-bold text-xs tracking-[0.4em] uppercase">Departmental Inquiries</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, idx) => (
            <div 
              key={idx}
              className="p-8 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500 group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className={`w-16 h-16 rounded-2xl bg-${dept.color}-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                 <dept.icon className={`w-8 h-8 text-${dept.color}-600 dark:text-${dept.color}-400`} />
              </div>
              
              <h4 className="text-xl font-black text-foreground mb-1">{dept.name}</h4>
              <p className="text-sm font-bold text-primary mb-6">{dept.head}</p>
              
              <div className="space-y-4 pt-6 border-t border-slate-200 dark:border-slate-800">
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Email</span>
                    <a href={`mailto:${dept.email}`} className="text-sm font-bold text-foreground hover:text-primary transition-colors truncate">
                       {dept.email}
                    </a>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Phone</span>
                    <a href={`tel:${dept.phone}`} className="text-sm font-bold text-foreground hover:text-primary transition-colors">
                       {dept.phone}
                    </a>
                 </div>
              </div>

              <button className="mt-8 w-full py-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 flex items-center justify-center gap-2 text-xs font-black uppercase tracking-widest group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                Quick Action <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentContact;
