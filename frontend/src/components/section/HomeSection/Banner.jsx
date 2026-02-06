import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ChevronLeft, ChevronRight } from "lucide-react";

const BANNER_DATA = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2670&auto=format&fit=crop",
    headline: "Shaping Young Minds with Knowledge and Values",
    subheadline:
      "A nurturing environment where every child's potential is recognized and celebrated.",
    primaryCta: "Apply for Admission",
    secondaryCta: "Explore School",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop",
    headline: "Fostering Innovation and Collaborative Learning",
    subheadline:
      "Empowering students with modern skills through academic and cultural excellence.",
    primaryCta: "View Our Programs",
    secondaryCta: "Our Activities",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2670&auto=format&fit=crop",
    headline: "A Safe, Caring, and Inspiring Environment",
    subheadline:
      "Where teachers and students work together for a brighter future.",
    primaryCta: "Visit Campus",
    secondaryCta: "Meet Our Faculty",
  },
];


const Banner = () => {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        speed={900}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".banner-next",
          prevEl: ".banner-prev",
        }}
        className="h-full"
      >
        {BANNER_DATA.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.headline}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-[#0d2b5b]/50" />

              {/* Content */}
              <div data-aos="zoom-out" className="relative container mx-auto h-full px-6 flex items-center">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4">
                    {slide.headline}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 text-white/90">
                    {slide.subheadline}
                  </p>

                  <div className="flex gap-4 flex-wrap">
                    <button className="px-8 py-3 bg-secondary text-white rounded-full font-semibold hover:scale-105 transition">
                      {slide.primaryCta}
                    </button>
                    <button className="px-8 py-3 border border-white/40 rounded-full text-white hover:bg-white/10 transition">
                      {slide.secondaryCta}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
      </Swiper>
    </section>
  );
};

export default Banner;
