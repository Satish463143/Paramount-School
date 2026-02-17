import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useListForHomeQuery } from "@/api/banner.api";


const Banner = () => {
  const {data, isLoading, error } = useListForHomeQuery()
  if(isLoading) return <div className="flex items-center justify-center h-screen">Loading...</div>
  if(error) return <div className="flex items-center justify-center h-screen">Error: {error.message}</div>

  const bannerList = data?.result
  

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
        {bannerList?.map((slide) => (
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
                      <Link to={slide.primaryCtaLink}>{slide.primaryCta}</Link>
                    </button>
                    {slide.secondaryCta && (
                      <button className="px-8 py-3 border border-white/40 rounded-full text-white hover:bg-white/10 transition">
                        <Link to={slide.secondaryCtaLink}>{slide.secondaryCta}</Link>
                      </button>
                    )}
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
