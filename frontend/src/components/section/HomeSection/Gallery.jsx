import React, { useState } from "react";
import Title from "../../common/Title/Title";
import { Maximize2, X } from "lucide-react";
import { useListAllQuery } from "@/api/gallery.api";

const Gallery = () => {
  const [page] = useState(1)
  const [limit] = useState(1000)
  const [search] = useState('')
  const { data: galleriesData, isLoading: galleriesLoading, error: galleriesError } = useListAllQuery({ page, limit, search })
  
  const galleries = galleriesData?.result || []
  const allImages = galleries.map(item => item.image).filter(Boolean)
  
  // Split images into two rows
  const midPoint = Math.ceil(allImages.length / 2)
  const row1Images = allImages.slice(0, midPoint)
  const row2Images = allImages.slice(midPoint)

  const [selectedImage, setSelectedImage] = useState(null);

  if (galleriesLoading) return <div className="py-24 text-center">Loading gallery...</div>
  if (allImages.length === 0) return null // Hide section if no images

  const MarqueeRow = ({ images, direction = "left" }) => {
    // Duplicate images for infinite loop
    const displayImages = [...images, ...images];
    const animationClass = direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

    return (
      <div className="flex overflow-hidden group/marquee py-4">
        <div className={`flex flex-nowrap gap-4 whitespace-nowrap ${animationClass}`}>
          {displayImages.map((src, idx) => (
            <div
              key={idx}
              className="relative h-48 md:h-72 flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-border/50 group/img shadow-md hover:shadow-xl transition-all duration-500"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt="School moment"
                className="h-full w-auto object-cover transition-transform duration-700 group-hover/img:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white transform scale-90 group-hover/img:scale-100 transition-transform duration-500">
                  <Maximize2 size={24} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12">
        <Title
          title="Moments"
          subtitle="Life at Our"
          subtitle2="School"
          description="A visual journey through our campus, classrooms, and community celebrations that make Paramount Academy a second home."
        />
      </div>

      <div className="space-y-4">
        {row1Images.length > 0 && <MarqueeRow images={row1Images} direction="left" />}
        {row2Images.length > 0 && <MarqueeRow images={row2Images} direction="right" />}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors duration-300"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          
          <img
            src={selectedImage}
            alt="School moment preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-500"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;