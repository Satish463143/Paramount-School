import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote } from 'lucide-react';
import Title from '../../common/Title/Title';
import 'swiper/css';
import 'swiper/css/pagination';
import { useListAllQuery } from '@/api/testimonal.api';


const Testimonal = () => {
  const {data, isLoading, error} = useListAllQuery()
  const testimonials = data?.result || []
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
            {testimonials.map((item) => (
              <SwiperSlide key={item._id} className="h-auto">
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