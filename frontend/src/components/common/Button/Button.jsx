import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const Button = ({title, link}) => {
  return (
    <div className="mt-16 flex justify-center" data-aos="fade-up" data-aos-delay="400">
        <button className="group relative px-10 py-4 bg-primary text-primary-foreground rounded-full overflow-hidden font-bold text-sm tracking-[0.2em] shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1">
        <span className="relative z-10 flex items-center gap-2">
            <Link to={link}>{title}</Link>
            <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
        <div className="absolute inset-0 rounded-full bg-secondary scale-x-0 origin-right transition-transform duration-500 group-hover:scale-x-100 group-hover:origin-left" />
        </button>
    </div>
  )
}

export default Button