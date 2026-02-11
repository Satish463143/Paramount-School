import React, { useState } from 'react';

const noticesData = [
  {
    id: 1,
    date: '10 Feb',
    year: '2026',
    category: 'Academic',
    title: 'Final Examination Schedule - Q1',
    summary: 'The comprehensive schedule for the first quarter final examinations is now available for all grades. Please ensure students prepare as per the revised syllabus guidelines.',
    priority: 'high',
    color: 'emerald',
  },
  {
    id: 2,
    date: '08 Feb',
    year: '2026',
    category: 'Administrative',
    title: 'Revised Summer Timings',
    summary: 'Starting April 1st, school hours will be 7:30 AM to 12:30 PM to ensure student comfort during peak heat hours. Bus routes will be adjusted accordingly.',
    priority: 'normal',
    color: 'sky',
  },
  {
    id: 3,
    date: '05 Feb',
    year: '2026',
    category: 'Events',
    title: 'Sports Day Registration',
    summary: 'The portal for individual and team event registrations for the Annual Sports Meet is now open. All participants must submit their entries by the end of this week.',
    priority: 'normal',
    color: 'purple',
  },
  {
    id: 4,
    date: '01 Feb',
    year: '2026',
    category: 'Academic',
    title: 'Digital Library Expansion',
    summary: 'We have successfully integrated a new digital collection featuring over 500 peer-reviewed journals and 2,000+ interactive e-books for research.',
    priority: 'normal',
    color: 'indigo',
  },
  {
    id: 5,
    date: '28 Jan',
    year: '2026',
    category: 'Policy',
    title: 'Transport Safety Protocol',
    summary: 'Introduction of real-time GPS tracking for all school buses. Parents can now monitor their child’s commute via the official school mobile application.',
    priority: 'high',
    color: 'rose',
  },
];

const LatestNotices = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Academic', 'Administrative', 'Events', 'Policy'];

  const filteredNotices = noticesData.filter((notice) => 
    filter === 'All' || notice.category === filter
  );

  return (
    <section className="py-32 bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decor - Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20" data-aos="fade-up">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-[2px] bg-slate-400" />
              <span className="text-slate-500 font-bold text-xs tracking-[0.4em] uppercase">Official Bulletin</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-[0.9]">
              Latest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-500 to-slate-900 dark:from-white dark:via-slate-400 dark:to-white">Notices</span>
            </h2>
            <p className="text-lg text-muted-foreground font-medium max-w-lg">
              Important institutional circulars and academic updates curated for the Paramount community.
            </p>
          </div>

          {/* Filter Bar - Floating Glass Pill */}
          <div className="inline-flex p-1.5 bg-white/50 dark:bg-slate-950/50 backdrop-blur-xl border border-slate-200/50 dark:border-slate-800/50 rounded-2xl shadow-sm">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' 
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Notice Board Grid - Designerly Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredNotices.map((notice, index) => (
            <div 
              key={notice.id} 
              className="group relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* The "Notice Pin" accent */}
              <div className={`absolute -top-3 left-10 w-6 h-6 rounded-full bg-${notice.color}-500/20 border-2 border-${notice.color}-500 z-30 shadow-lg shadow-${notice.color}-500/20 group-hover:scale-125 transition-transform`} />

              <div className="relative h-full bg-white dark:bg-slate-950 p-8 md:p-10 rounded-[3rem] border border-slate-100 dark:border-slate-800 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 flex flex-col overflow-hidden">
                
                {/* Floating Date Badge */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex flex-col">
                    <span className={`text-4xl font-black text-${notice.color}-600 dark:text-${notice.color}-400 leading-none tracking-tighter`}>
                      {notice.date.split(' ')[0]}
                    </span>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
                      {notice.date.split(' ')[1]} {notice.year}
                    </span>
                  </div>
                  
                  {/* Category Glow Tag */}
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                    notice.priority === 'high' 
                      ? 'bg-rose-500/10 text-rose-600 border border-rose-500/20' 
                      : `bg-${notice.color}-500/10 text-${notice.color}-600 border border-${notice.color}-500/20`
                  }`}>
                    {notice.priority === 'high' ? 'Priority' : notice.category}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                   <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                     {notice.title}
                   </h3>
                   <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                     {notice.summary}
                   </p>
                </div>

                {/* Decorative Bottom Corner Element */}
                <div className={`absolute -bottom-10 -right-10 w-32 h-32 bg-${notice.color}-500 opacity-[0.03] rounded-full blur-2xl group-hover:opacity-10 transition-opacity`} />
              </div>

              {/* High Priority Ripple Effect */}
              {notice.priority === 'high' && (
                <div className="absolute -inset-1 bg-rose-500/5 rounded-[3.2rem] blur-xl animate-pulse pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* Dynamic Empty State */}
        {filteredNotices.length === 0 && (
          <div className="py-40 text-center">
             <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
             </div>
             <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">No Recent Postings Found</p>
          </div>
        )}

        {/* Archive Link */}
        <div className="mt-24 text-center" data-aos="fade-up">
           <button className="group inline-flex items-center gap-4 text-slate-900 dark:text-white">
              <span className="w-10 h-[2px] bg-slate-200 dark:bg-slate-800 group-hover:w-16 transition-all" />
              <span className="text-xs font-black uppercase tracking-[0.3em]">Full Archive View</span>
           </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNotices;