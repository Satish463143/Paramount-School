import React from "react";
import Title from "../../common/Title/Title";
import Button from "../../common/Button/Button";
import { Calendar, Bell, FileText, Pin, ExternalLink } from "lucide-react";

const NOTICES = [
  {
    id: 1,
    title: "Annual Sports Meet 2026 - Schedule & Participation",
    description:
      "The annual sports meet is scheduled to begin next week. All students are requested to register for their respective events with their class teachers.",
    date: "Feb 15, 2026",
    category: "Events",
    isPriority: true,
  },
  {
    id: 2,
    title: "Final Examination Timetable - Grade 5 to 10",
    description: "Please download the final examination timetable for the upcoming academic session. Ensure all students check their specific subjects.",
    date: "Feb 10, 2026",
    category: "Academic",
    isPriority: false,
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting (PTM) Notice",
    description: "The quarterly PTM is scheduled for this Saturday. Parents are encouraged to attend to discuss their child's progress.",
    date: "Feb 05, 2026",
    category: "Notice",
    isPriority: false,
  },
  {
    id: 4,
    title: "School Re-opening After Spring Break",
    description: "We are excited to welcome students back after the spring break. Please note the updated school timings starting Monday.",
    date: "Feb 01, 2026",
    category: "General",
    isPriority: false,
  },
];

const Notice = () => {
  const featuredNotice = NOTICES.find((n) => n.isPriority) || NOTICES[0];
  const recentNotices = NOTICES.filter((n) => n.id !== featuredNotice.id);

  return (
    <section className="py-24 bg-muted/30 overflow-hidden relative">
      {/* Subtle background icon for texture */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-[0.02] -z-10 rotate-12">
        <Bell size={400} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <Title
          title="School Bulletin"
          subtitle="Latest Notice &"
          subtitle2="Announcements"
          description="Stay updated with the latest news, events, and important academic announcements from Paramount Academy official board."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Featured Notice Column (Left) */}
          <div 
            className="lg:col-span-12 xl:col-span-5"
            data-aos="fade-right"
          >
            <div className="group relative bg-card rounded-3xl p-8 md:p-10 border-2 border-primary/20 shadow-2xl shadow-primary/5 h-full flex flex-col">
              <div className="absolute top-6 right-6">
                <div className="flex items-center gap-2 px-3 py-1 bg-secondary text-white text-[10px] font-bold rounded-full uppercase tracking-widest animate-pulse">
                  <Pin size={12} />
                  Featured
                </div>
              </div>

              <div className="mb-8 p-4 rounded-2xl bg-primary/5 inline-flex self-start border border-primary/10">
                <Bell size={32} className="text-primary" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                  <Calendar size={14} />
                  {featuredNotice.date}
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {featuredNotice.category}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors duration-300">
                  {featuredNotice.title}
                </h3>
                
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {featuredNotice.description}
                </p>
              </div>

              <div className="mt-auto">
                <button className="flex items-center gap-3 px-8 py-3 bg-primary text-primary-foreground rounded-full font-bold text-sm tracking-wide hover:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20">
                  READ FULL NOTICE
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Recent Notices Column (Right) */}
          <div 
            className="lg:col-span-12 xl:col-span-7"
            data-aos="fade-left"
          >
            <div className="space-y-4">
              {recentNotices.map((notice, index) => (
                <div
                  key={notice.id}
                  className="group bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:-translate-x-2"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    {/* Date Block */}
                    <div className="flex-shrink-0 flex md:flex-col items-center justify-center p-4 rounded-xl bg-muted/50 border border-border/80 min-w-[100px] text-center">
                      <span className="text-primary font-black text-2xl tracking-tighter">
                        {notice.date.split(' ')[1].replace(',', '')}
                      </span>
                      <span className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.2em] md:mt-1">
                        {notice.date.split(' ')[0]}
                      </span>
                    </div>

                    {/* Content Block */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-primary/5 border border-primary/10">
                          {notice.category}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {notice.title}
                      </h4>
                      <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
                        {notice.description}
                      </p>
                    </div>

                    {/* Action */}
                    <div className="hidden md:block">
                      <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                        <FileText size={18} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex justify-center xl:justify-start">
              <Button title="VIEW ALL ANNOUNCEMENTS" link="/notices" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Notice;