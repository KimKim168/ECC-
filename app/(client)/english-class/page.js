import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MySlide } from "../english-class/components/my-slide";

const page = () => {
  return (
    <section>
      <div>
        <Card className="relative w-full rounded-none py-0 aspect-[16/9] md:aspect-[21/8]">
          <Image
            src="/assets/images/image.png"
            alt="image"
            width={2100}
            height={900}
            className="w-full h-full object-cover aspect-[16/9] md:aspect-[21/8]"
            priority
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center md:items-start text-white mx-auto md:mx-0 md:p-10 space-y-1 md:space-y-3 text-center md:text-left max-w-[90%] md:max-w-[60%] lg:max-w-[50%]">
            <p className="text-base sm:text-3xl md:text-6xl lg:text-6xl font-medium ">
              Providing Free English Classes In Siem Reap
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
               className="flex items-center justify-center px-4 text-[10px] sm:text-lg py-2 text-primary-foreground  bg-primary rounded-md gap-x-1 font-bold active:bg-gray-900 md:inline-flex hover:shadow-none shadow-[5px_5px_0px_0px_rgba(1,1,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
            >
              Join Us !
            </Link>
          </div>
        </Card>
      </div>
      <div className="mx-auto max-w-screen-xl px-6">
        <h2 className="text-4xl font-bold text-[#34448c] text-center my-10 dark:text-white">
          Free English Class
        </h2>
        <div className="mt-15 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Content 1 */}
          <div className="relative h-full">
            <h3 className="mb-4 text-3xl font-bold text-black dark:text-white">
              English Classes For All
            </h3>
            <p className="mb-2 text-gray-600 ">
              ECC School offers free English classes at its location and
              provides volunteer English teachers to 2 local schools Siem Reap
              Province. Our primary campus is the ECC School campus, where the
              volunteers are fortunate enough to be able to offer a personalized
              education to over 100 students. There are 18 classes offered at
              ECC, divided into 10 levels that follow an ESL curriculum, based
              on the UK ESL curriculum. The curriculum has been adapted to
              support future education and career paths in Cambodia with all
              vocabulary being relevant to Cambodia.
            </p>
            <p className="mb-2 text-gray-600 ">
              Upon arriving at the school, future students (and/or their
              parents) have an informal discussion with the Teaching
              Co-Ordinator to determine their goals for studying English. A
              formal assessment of prior learning is then conducted and a
              decision is made with the student on the best class(es) for them.
              Our classes range from Kindergarten/Creche/Preschool to Adult
              classes, with a focus on job skills for our adult and older teen
              students.
            </p>
            <p className="mb-2 text-gray-600 ">
              The local public school partnered with ECC in September 2016,
              allowing ECC to teach 6 English classes a day at the primary
              school. Each class has 40-50 students, aged 7-14, who follow a
              curriculum designed by a qualified native English teacher. 75% of
              students in Cambodia will leave school by the age 14 to seek
              employment. As such, the curriculum is designed to ensure that all
              students graduate public school with the vocabulary and grammar to
              gain employment in tourism and hospitality.
            </p>
            <p className="mb-2 text-gray-600 ">
              Our third campus is a partnership with another local elementary
              school in the local village offering the same principles values we
              have grown from.
            </p>
          </div>
          {/* Content 2 */}
          <div className="relative h-full ">
            <MySlide />
          </div>
        </div>
        <div className="flex justify-center items-center py-5 md:py-10">
          <Link
            href="/apply"
             className="flex items-center justify-center px-4 text-[10px] sm:text-lg py-2 text-primary-foreground  bg-primary rounded-md gap-x-1 font-bold active:bg-gray-900 md:inline-flex hover:shadow-none shadow-[5px_5px_0px_0px_rgba(1,1,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
          >
            Join Us
          </Link>
      </div>
      </div>
      
    </section>
  );
};

export default page;
