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
              ECC is an officially registered NGO and was founded on the 10th of February 2014 at the Ministry of Interior, Cambodia.
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
    <div className="text-center px-5 py-10">
  <h2 className="text-[#34448c] mb-2 lg:mb-5 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">Who We Are</h2>
  <p className="mt-4 text-gray-700">
    ECC (Education Centre for Community) is an organization established to develop, support, 
    and promote education in a better way for children and youths in rural and remote communities, 
    regardless of their social status, enhancing their standard of living.
  </p>
  <p className="mt-4 text-gray-700">
    ECC believes that every child deserves the right to build their identity in a safe environment, 
    free from prejudice and discrimination of any kind.
  </p>
  <div className="mt-6">
    <img src="/assets/images/image.png" alt="ECC Community" className="w-full aspect-video object-cover" />
  </div>
  <h2 className="text-[#34448c] mt-10 mb-2 lg:mb-5 text-xl font-extrabold tracking-tight leading-none md:text-3xl xl:text-4xl">Our Mission Statement</h2>
  <div className="text-start px-5 ">
  <ul className="mt-4 text-gray-700 space-y-3 list-disc list-inside">
    <li>To improve child and youth education, from all walks of life, in our targeted communities.</li>
    <li>To encourage their development through education and increase their self-confidence.</li>
    <li>To create a place where individuals are motivated to become the best version of themselves and confident enough to take charge of their own future.</li>
    <li>To offer computer skills and language training for everyone.</li>
    <li>To work with the local community on key environmental issues and promote eco-tourism in local communities as a means of income to ease poverty.</li>
    <li>To promote cultural learning through conversations with local communities. Introducing small-scale agriculture projects and handicraft skills workshops to preserve Cambodian heritage.</li>
  </ul>
</div>

  </div>
</div>

   
  
  );
}
