import React, { useState } from 'react';
import { Send, CheckCircle2, User, Mail, MessageSquare, Phone } from 'lucide-react';

const ContactForm = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, success
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setTimeout(() => setFormState('idle'), 5000);
    }, 1500);
  };

  const inputClasses = "w-full px-6 py-5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all duration-300";

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
          
          {/* Form Context */}
          <div className="lg:w-1/3 space-y-8" data-aos="fade-right">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Connect With Us
             </div>
             <h2 className="text-5xl md:text-6xl font-black text-foreground leading-none tracking-tighter">
               Send us a <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary animate-gradient">Message</span>
             </h2>
             <p className="text-lg text-muted-foreground font-medium">
               Have a specific question or want to schedule a visit? Fill out the form and our team will get back to you within 24 hours.
             </p>
             <div className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Response Time</p>
                <div className="flex items-center gap-4 text-2xl font-black text-foreground">
                   <CheckCircle2 className="w-8 h-8 text-emerald-500" />
                   Less than 24h
                </div>
             </div>
          </div>

          {/* Actual Form */}
          <div className="lg:w-2/3" data-aos="fade-left">
            <div className="relative p-8 md:p-12 rounded-[4rem] bg-white dark:bg-slate-900 shadow-2xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 overflow-hidden">
               {formState === 'success' ? (
                 <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in fade-in duration-500">
                    <div className="w-24 h-24 rounded-full bg-emerald-500/10 flex items-center justify-center mb-8">
                       <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                    </div>
                    <h3 className="text-4xl font-black text-foreground mb-4">Message Sent!</h3>
                    <p className="text-muted-foreground font-medium max-w-sm">
                      Thank you for reaching out. We've received your inquiry and will contact you shortly.
                    </p>
                    <button 
                      onClick={() => setFormState('idle')}
                      className="mt-8 px-10 py-4 rounded-2xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform"
                    >
                      Send Another
                    </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2">Full Name</label>
                          <div className="relative">
                             <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                             <input 
                               type="text" 
                               placeholder="John Doe" 
                               className={`${inputClasses} pl-16`} 
                               required
                               onChange={e => setFormData({...formData, name: e.target.value})}
                             />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2">Email Address</label>
                          <div className="relative">
                             <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                             <input 
                               type="email" 
                               placeholder="john@example.com" 
                               className={`${inputClasses} pl-16`} 
                               required
                               onChange={e => setFormData({...formData, email: e.target.value})}
                             />
                          </div>
                       </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2">Phone Number</label>
                          <div className="relative">
                             <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                             <input 
                               type="tel" 
                               placeholder="+91 00000 00000" 
                               className={`${inputClasses} pl-16`}
                               onChange={e => setFormData({...formData, phone: e.target.value})}
                             />
                          </div>
                       </div>
                       <div className="space-y-2">
                          <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2">Subject</label>
                          <input 
                            type="text" 
                            placeholder="Admissions Inquiry" 
                            className={inputClasses} 
                            required
                            onChange={e => setFormData({...formData, subject: e.target.value})}
                          />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-sm font-bold text-slate-500 dark:text-slate-400 ml-2">Your Message</label>
                       <div className="relative">
                          <MessageSquare className="absolute left-6 top-7 w-5 h-5 text-slate-400" />
                          <textarea 
                            rows="5" 
                            placeholder="Tell us how we can help..." 
                            className={`${inputClasses} pl-16 resize-none`}
                            required
                            onChange={e => setFormData({...formData, message: e.target.value})}
                          />
                       </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full py-6 rounded-3xl bg-primary text-white font-black text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {formState === 'sending' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-6 h-6" />
                          Send Message
                        </>
                      )}
                    </button>
                 </form>
               )}

               {/* Decorative background circle */}
               <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
