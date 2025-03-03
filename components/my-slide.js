"use client";
import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function MySlide() {
  const images = [
    { id: "1", image: "/assets/images/slide4.png", alt: "Slide 1" },
    { id: "2", image: "/assets/images/slide3.png", alt: "Slide 2" },
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
              <Card className="relative w-full rounded-none py-0 aspect-[16/9] md:aspect-[21/8]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={2100}
                  height={900}
                  className="w-full h-full object-cover aspect-[16/9] md:aspect-[21/8]"
                  priority
                />
                <div
                  key={item.id}
                  className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-white mx-auto md:mx-0 md:p-10 space-y-1 md:space-y-3 text-center md:text-left max-w-[90%] md:max-w-[60%] lg:max-w-[50%]"
                >
                  <p className="text-base sm:text-3xl md:text-6xl lg:text-6xl font-medium ">
                    Volunteer In Siem Reap
                  </p>
                  <p className="text-[10px] sm:text-xl md:text-3xl lg:text-3xl italic">
                    Welcome to Education Centre for Community
                  </p>
                  <p className="text-[10px] sm:text-base md:text-lg">
                    Are you looking for opportunities to volunteer in Siem Reap
                    that really help make a difference? Then this project is for you!
                  </p>

                  <Link
                    href="/apply"
                     className="flex items-center justify-center px-4 text-lg py-2 text-primary-foreground  bg-primary rounded-md gap-x-1 font-bold active:bg-gray-900 md:inline-flex hover:shadow-none shadow-[5px_5px_0px_0px_rgba(1,1,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
                  >
                    Apply Here
                  </Link>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
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
