import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import MySection from "./components/my-section";
import MyHeroSection from "./components/my-hero-section";

const page = () => {
  return (
    <div>
      <Card className="relative w-full rounded-none py-0 aspect-[16/9] md:aspect-[21/8]">
        <Image
          src="/assets/images/slide4.png"
          alt="image"
          width={2100}
          height={900}
          className="w-full h-full object-cover aspect-[16/9] md:aspect-[21/8]"
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
             className="flex items-center justify-center px-4 text-lg py-2 text-primary-foreground  bg-primary rounded-md gap-x-1 font-bold active:bg-gray-900 md:inline-flex hover:shadow-none shadow-[5px_5px_0px_0px_rgba(1,1,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
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
