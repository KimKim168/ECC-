"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function MySlide() {
  const images = [
    { id: "2", image: "/assets/images/study1.jpg", alt: "Slide 2" },
    { id: "3", image: "/assets/images/slide1.jpeg", alt: "Slide 3" },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  return (
    <div className="relative w-full mx-auto">
      {/* Carousel */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((item) => (
            <div key={item.id} className="flex-[0_0_100%]">
              <Card className="relative w-full rounded-none py-0 aspect-square">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover "
                  priority
                />
                
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition ${
              index === selectedIndex ? "bg-[#ff1e1e]" : "bg-gray-300"
            }`}
            onClick={() => emblaApi && emblaApi.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
