import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const data = [
    {
      id: "1",
      title: "Clean Water Project",
      image: "/assets/images/cleanWater.jpg",
      price: "100$",
    },
    {
      id: "2",
      title: "Food Relief",
      image: "/assets/images/food.jpg",
      price: "100$",
    },
    {
      id: "3",
      title: "School Supplies",
      image: "/assets/images/school.jpg",
      price: "100$",
    },
  ];
  return (
    <div>
      <Card className="relative w-full rounded-none py-0 aspect-[21/8]">
        <Image
          src="/assets/images/ecc.jpg"
          alt="image"
          width={2100}
          height={900}
          className="w-full h-full object-cover aspect-[21/8]"
          priority
        />
        <div className="absolute inset-0 flex flex-col mt-5 md:mt-10 items-center  text-white mx-auto md:mx-0 md:p-10 space-y-1 md:space-y-3 text-center ">
          <p className="text-base sm:text-3xl md:text-4xl lg:text-6xl font-medium ">
            <span className="bg-black/60 px-6">Donate</span> &{" "}
            <span className="bg-black/60 px-6">Help Us</span>
          </p>
        </div>
      </Card>
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-20">
        <h1 className="text-base sm:text-3xl md:text-5xl my-10 text-primary font-medium text-center">
          Your Donations Count!
        </h1>
        <p className="text-base sm:text-xl md:text-2xl my-10 text-primary font-medium text-center justify-center">
          We hope to keep being able to provide free education, food relief and
          access to clean water to disadvantaged members of our community and we
          need your help to continue doing this work!
        </p>
        {/* Component */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.map((item) => (
            <Link href={`/donate/${item.id}`} key={item.id}>
              <div className="relative flex w-full  flex-col rounded-xl bg-white bg-clip-border text-gray-700 hover:shadow-lg duration-300 transition-all border">
                <div className="relative aspect-square mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                  <Image
                    src={item.image}
                    width={1000}
                    height={1000}
                    alt="image"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between">
                    <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {item.title}
                    </h5>
                    <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                    {item.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
