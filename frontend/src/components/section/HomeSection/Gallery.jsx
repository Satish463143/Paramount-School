import React, { useState } from "react";
import Title from "../../common/Title/Title";
import { Maximize2, X } from "lucide-react";

const ROW1_IMAGES = [
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2670&auto=format&fit=crop", // Classroom
  "https://images.unsplash.com/photo-1544648123-52ee3bd63177?q=80&w=2070&auto=format&fit=crop", // Computer Lab
  "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop", // Library
  "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2070&auto=format&fit=crop", // Science Lab
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop", // Graduation
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2070&auto=format&fit=crop", // Group activity
];

const ROW2_IMAGES = [
  "https://images.unsplash.com/photo-1519766428956-611c9ad8d1ca?q=80&w=2070&auto=format&fit=crop", // Sports
  "https://images.unsplash.com/photo-1514525253361-beed43519173?q=80&w=2070&auto=format&fit=crop", // Culture
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop", // Learning
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop", // Presentation
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2040&auto=format&fit=crop", // Kids playing
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop", // Community
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        <MarqueeRow images={ROW1_IMAGES} direction="left" />
        <MarqueeRow images={ROW2_IMAGES} direction="right" />
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