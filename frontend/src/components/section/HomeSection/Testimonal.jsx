import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import Title from '../../common/Title/Title';

import 'swiper/css';
import 'swiper/css/pagination';

const TESTIMONIALS = [
  {
    id: 1,
    message: "The teachers here are truly dedicated to each child's individual growth. My daughter has blossomed both academically and socially. We couldn't be happier with our choice.",
    author: "Anjali Sharma",
    role: "Parent of Grade 4 Student",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 2,
    message: "A perfect balance of discipline and care. The school doesn't just focus on grades but on character building and confidence. The infrastructure is top-notch and very safe.",
    author: "Rajesh Khatri",
    role: "Guardian of Grade 7 Student",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    message: "The extracurricular activities are amazing. My son has discovered a passion for music and sports that he never knew he had. It's a very vibrant and supportive community.",
    author: "Priti Gurung",
    role: "Parent of Grade 2 Student",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 4,
    message: "As a working parent, the safety and communication from the school give me immense peace of mind. The staff are always approachable and genuinely care for the students.",
    author: "Suman Thapa",
    role: "Parent of Grade 5 Student",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
  }
];

const Testimonal = () => {
  return (
    <section className="py-24 bg-muted/20 overflow-hidden relative">
      {/* Decorative quotes background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none">
        <Quote size={600} />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <Title
          title="Voices of Trust"
          subtitle="What Our"
          subtitle2="Parents Say"
          description="Real experiences and feedback from the families who are part of the Paramount Academy community."
        />

        <div className="mt-16" data-aos="fade-up">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {TESTIMONIALS.map((item) => (
              <SwiperSlide key={item.id} className="h-auto">
                <div className="bg-card/50 backdrop-blur-sm p-10 rounded-[2.5rem] border border-border/50 shadow-xl shadow-primary/5 h-full flex flex-col hover:border-primary/20 transition-all duration-500 group">
                  <div className="mb-8 text-primary/20 group-hover:text-primary transition-colors duration-500">
                    <Quote size={40} fill="currentColor" />
                  </div>
                  
                  <blockquote className="flex-1">
                    <p className="text-foreground text-lg italic leading-relaxed mb-10">
                      "{item.message}"
                    </p>
                  </blockquote>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/10 group-hover:border-primary/30 transition-colors duration-500">
                      <img 
                        src={item.avatar} 
                        alt={item.author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground text-lg">{item.author}</h4>
                      <p className="text-muted-foreground text-sm uppercase tracking-widest">{item.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonal;