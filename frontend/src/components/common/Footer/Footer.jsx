import React from 'react';
import logo from "/logo.png"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight,
  Send
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '/' },
      { name: 'About Us', href: '/about-us' },
      { name: 'Admissions', href: '/admissions' },
      { name: 'Academic Life', href: '/academics' },
      { name: 'Latest News', href: '/events-notices' },
    ],
    programs: [
      { name: 'Pre-Primary', href: '/academics#academic-levels' },
      { name: 'Primary School', href: '/academics#academic-levels' },
      { name: 'Secondary School', href: '/academics#academic-levels' },
      { name: 'Extracurriculars', href: '/academics#co-curricular' },
      { name: 'Sports Academy', href: '/academics#co-curricular' },
    ]
  };

  return (
    <footer className="bg-muted/30 border-t border-border/50 text-foreground pt-24 pb-12 overflow-hidden relative transition-colors duration-500">
      {/* Decorative blurs for depth */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-12 mb-20">
          
          {/* Column 1: Institutional Identity */}
          <div className="space-y-10">
            <div className="flex items-center flex-col gap-4">
              <img src={logo} className="w-24 h-24"  alt="" />
              <h2 className="text-2xl font-black tracking-tight mb-6">
                PARAMOUNT <span className="text-secondary italic">ACADEMY</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed max-w-xs">
                Empowering the innovators and leaders of tomorrow through holistic education and a commitment to excellence since 1995.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-11 h-11 rounded-full bg-background border border-border flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-500 group shadow-sm"
                >
                  <Icon size={18} className="transition-transform group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <div className="mb-8 relative inline-block">
              <h4 className="text-sm font-black tracking-[0.2em] uppercase text-foreground mb-1">Navigation</h4>
              <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-secondary rounded-full" />
            </div>
            <ul className="space-y-4 pt-4">
              {footerLinks.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-muted-foreground hover:text-secondary text-sm flex items-center gap-1 group transition-colors">
                    <span className="relative overflow-hidden">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                    </span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Levels */}
          <div>
            <div className="mb-8 relative inline-block">
              <h4 className="text-sm font-black tracking-[0.2em] uppercase text-foreground mb-1">Programs</h4>
              <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-secondary rounded-full" />
            </div>
            <ul className="space-y-4 pt-4">
              {footerLinks.programs.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-muted-foreground hover:text-secondary text-sm flex items-center gap-1 group transition-colors">
                    <span className="relative overflow-hidden">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-secondary translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                    </span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Engagement */}
          <div className="space-y-10">
            <div>
              <div className="mb-8 relative inline-block">
                <h4 className="text-sm font-black tracking-[0.2em] uppercase text-foreground mb-1">Get in Touch</h4>
                <div className="absolute -bottom-2 left-0 w-8 h-[2px] bg-secondary rounded-full" />
              </div>
              <ul className="space-y-5 pt-4">
                <li className="flex items-start gap-4 text-sm text-muted-foreground group">
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <MapPin size={16} />
                  </div>
                  <span className="leading-relaxed">Education Drive, Paramount Hill, Kathmandu, Nepal</span>
                </li>
                <li className="flex items-center gap-4 text-sm text-muted-foreground group">
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Phone size={16} />
                  </div>
                  <span>+977 1 4455667</span>
                </li>
                <li className="flex items-center gap-4 text-sm text-muted-foreground group">
                  <div className="w-9 h-9 shrink-0 rounded-xl bg-muted flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Mail size={16} />
                  </div>
                  <span>info@paramount.edu.np</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 border-t border-border/50">
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Newsletter Signup" 
                  className="w-full bg-background border border-border rounded-2xl py-4 px-6 text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20 transition-all pr-14 shadow-sm"
                />
                <button className="absolute right-2 top-2 h-10 w-10 bg-secondary text-white rounded-xl flex items-center justify-center hover:bg-secondary/90 shadow-lg shadow-secondary/20 transition-all hover:scale-105 active:scale-95">
                  <Send size={16} />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Credit Bar */}
        <div className="pt-12 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-bold tracking-[0.1em] text-muted-foreground/60 uppercase">
          <p>© {currentYear} Paramount Academy. Made with Academic Excellence.</p>
          <div className="flex items-center gap-10">
            <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-secondary transition-colors">Cookies</a>
          </div>
          <p>Design and Developed by <span className="text-secondary"><Link to="https://bhrigutechnology.com" target="_blank">Bhrigu Technology</Link></span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;