import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MySection from "./components/my-section";
import MyHeroSection from "./components/my-hero-section";

const page = () => {
  return (
    <div>
      <Card className="relative w-full rounded-none py-0 aspect-[16/9] md:aspect-[21/9]">
        <Image
          src="/assets/images/slide4.png"
          alt="image"
          width={2100}
          height={900}
          className="w-full h-full object-cover aspect-[16/9] md:aspect-[21/9]"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-white mx-auto md:mx-0 md:p-10 space-y-1 md:space-y-3 text-center md:text-left max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
          <p className="text-base sm:text-3xl md:text-6xl lg:text-6xl font-medium ">
            Education Centre For Community
          </p>
          {/* <p className="text-[10px] sm:text-xl md:text-3xl lg:text-3xl italic">
                    Welcome to Education Centre for Community
                  </p>
                  <p className="text-[10px] sm:text-base md:text-lg">
                    Are you looking for opportunities to volunteer in Siem Reap
                    that really help make a difference? Then this project is for you!
                  </p> */}

          <Link
            href="/apply"
            className="px-2  sm:px-4 sm:py-2 text-center bg-[#34448c] hover:bg-[#394eae] border-2 border-[#ffffff] text-white text-[10px] sm:text-base md:text-lg shadow-[4px_4px_0px_0px_rgb(215,90,89)] transition duration-200"
          >
            Apply Here
          </Link>
        </div>
      </Card>
      {/* Hero section */}
      <MyHeroSection />
      {/*End Hero section */}
    </div>
  );
};

export default page;
