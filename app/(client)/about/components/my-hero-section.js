import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Play } from "lucide-react"; // Import the play icon
import { MySlide } from "./my-slide";


export default function MyHeroSection() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-2 lg:px-20 flex-grow lg:mt-14">
    {/* Video 1 */}
    <div className="mx-5 lg:mx-0">
      <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-12 lg:pb-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="flex gap-6 items-center mr-2">
            <div className="p-5 rounded-full border border-[#34448c] block">
              <Image src="/assets/images/heart.png" width={40} height={40} alt="image" />
            </div>
            <div>
              <h1 className="max-w-2xl text-[#34448c] mb-2 lg:mb-5 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
               About
              </h1>
              <p className="max-w-2xl font-extrabold text-gray-900 mb-3 lg:mb-5 text-[13px] md:text-lg lg:text-xl">
              ECC (Education Centre for Community)
              </p>
            </div>
          </div>
          <p className="lg:max-w-3xl font-light text-gray-700 text-justify mb-5 text-[13px] lg:mb-10 md:text-lg lg:text-[18px]">
          ECC (Education Centre for Community) is a non-government organization, located in a suburb of Siem Reap, Kingdom of Cambodia, created by Savon and Savuth in 2014. The main goal of ECC is to improve future prospects, enabling students to escape the vicious cycle of poverty that is so prevalent in Cambodia.
          To achieve this, ECC offers free education to everyone, regardless of gender, age, race, religion, or political tendency.
          </p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex xl:ml-5 items-center">
          <MySlide/>
        </div>
      </div>
    </div>
    {/* End Video 1 */}
  
    {/* Video 2 (Reversed) */}
    {/* <div className="mx-5 lg:mx-0">
      <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-12 lg:pb-16 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:flex xl:mr-5 items-center">
          <MyVideos videos={videos2}  />
        </div>
        <div className="ml-auto mt-10 xl:mt-0 place-self-center lg:col-span-7">
          <div className="flex gap-6 items-center">
            <div className="p-5 rounded-full border border-[#34448c] block">
              <Image src="/assets/images/heart.png" width={40} height={40} alt="image" />
            </div>
            <div>
              <h1 className="max-w-2xl text-[#34448c] mb-2 lg:mb-5 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
              Your Volunteer Experience
              </h1>
              <p className="max-w-2xl font-extrabold text-gray-900 mb-3 lg:mb-5 text-[13px] md:text-lg lg:text-xl">
                Are you looking to give something back and want to volunteer in Siem Reap?
              </p>
            </div>
          </div>
          <p className="lg:max-w-3xl font-light text-gray-700 text-justify my-5 text-[13px] lg:mb-10 md:text-lg lg:text-[18px]">
          During your stay in Cambodia you will experience life in the heart of a local village where you will be able to indulge yourself with the local traditions. We ask for around 24 hours per week which will give you lots of free time to explore the area. Siem Reap has lots of attractions including the famous 
          Watch the video and see what other volunteers think about our opportunities to volunteer in Cambodia.
          </p>
        </div>
      </div>
    </div> */}
    {/* End Video 2 */}

      {/* Video 3 */}
      {/* <div className="mx-5 lg:mx-0">
      <div className="grid py-8 mx-auto lg:gap-8 xl:gap-0 lg:pt-12 lg:pb-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <div className="flex gap-6 items-center mr-2">
            <div className="p-5 rounded-full border border-[#34448c] block">
              <Image src="/assets/images/heart.png" width={40} height={40} alt="image" />
            </div>
            <div>
              <h1 className="max-w-2xl text-[#34448c] mb-2 lg:mb-5 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">
              Volunteer Teaching
              </h1>
              <p className="max-w-2xl font-extrabold text-gray-900 mb-3 lg:mb-5 text-[13px] md:text-lg lg:text-xl">
              At ECC we pride ourselves on being a 100% volunteer run project. Without you, the volunteers, none of this would be possible.
              </p>
            </div>
          </div>
          <p className="lg:max-w-3xl font-light text-gray-700 text-justify mb-5 text-[13px] lg:mb-10 md:text-lg lg:text-[18px]">
          you will be paired with another volunteer with experience for classes and government text books will be provided for you to follow the countries curriculum along with flashcards and other pre-planned activities. Our previous volunteers have put a lot of thought into helping the next generation of volunteers easily integrate into our project so it doesn’t get overwhelming. We want your volunteer teaching experience to be a memory that will last a lifetime.
          </p>
        </div>
        <div className="lg:mt-0 lg:col-span-5 lg:flex xl:ml-5 items-center">
          <MyVideos videos={videos3} />
        </div>
      </div>
    </div> */}
    {/* End Video 3 */}
  </div>
  
  );
}
