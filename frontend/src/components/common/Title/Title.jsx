import React from 'react'

const Title = ({title,subtitle,subtitle2,description}) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border border-primary/10">
        {title}
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
        {subtitle} <span className="text-primary italic">{subtitle2}</span>
        </h2>
        <div className="mx-auto h-1.5 w-16 bg-secondary rounded-full mb-8" />
        <p className="text-muted-foreground text-lg leading-relaxed">
        {description}
        </p>
    </div>
  )
}

export default Title