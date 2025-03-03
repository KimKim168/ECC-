"use client";

import React from "react";

// const services = [
//   {
//     title: "DAPP Development",
//     description:
//       "A decentralized application (dapp) is an application built on a decentralized network that combines a smart contract and a frontend user interface.",
//     color: "indigo-500",
//   },
//   {
//     title: "Web 3.0 Development",
//     description:
//       "Web 3.0 is the third generation of Internet services that will focus on understanding and analyzing data to provide a semantic web.",
//     color: "[#e38384]",
//   },
//   {
//     title: "Project Audit",
//     description:
//       "A Project Audit is a formal review of a project, which is intended to assess the extent up to which project management standards are being upheld.",
//     color: "[#e38384]",
//   },
//   {
//     title: "Hacking / RE",
//     description:
//       "A security hacker is someone who explores methods for breaching defenses and exploiting weaknesses in a computer system or network.",
//     color: "[#34448c]",
//   },
//   {
//     title: "Bot/Script Development",
//     description:
//       "Bot development frameworks were created as advanced software tools that eliminate a large amount of manual work and accelerate the development process.",
//     color: "green-500",
//   },
// ];

export default function MyExperience() {
  return (
    <div className="relative max-w-screen-2xl mx-auto px-7 lg:px-20 mt-5">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
      {/* Content 1 */}
      <div className="relative h-full">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#34448c] rounded-lg"></span>
        <div className="relative h-full p-5 bg-white border-2 border-[#34448c] rounded-lg">
          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
            Skandar - Chile Volunteer
          </h3>
          <p className="mt-3 mb-1 text-xs font-medium text-[#34448c] uppercase">
            ------------
          </p>
          <p className="mb-2 text-gray-600">
          Such a nice experience. Starting with the Anthony, what he is doing there is amazing he has a big compromise with the organization and that people depend of him. Shared with kids and local people is one of the best experience ever recommended 100%.
          </p>
        </div>
      </div>
      
      {/* Content 2 */}
      <div className="relative h-full">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#e38384] rounded-lg"></span>
        <div className="relative h-full p-5 bg-white border-2 border-[#e38384] rounded-lg">
          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
            Emilie - Australia Volunteer
          </h3>
          <p className="mt-3 mb-1 text-xs font-medium text-[#e38384] uppercase">
            ------------
          </p>
          <p className="mb-2 text-gray-600">
          I only spent two weeks here but would’ve spent so much longer if I could! Could not recommend this experience more highly – the kids are so sweet and full of life, and most of them really eager to learn. You very much learn on the job from the other volunteers how to best teach and engage the kids, and by the end of your time you are teaching the next lot of volunteers, so it’s an excellent opportunity to improve leadership skills as well as building patience, empathy and effective teaching skills. Anthony the host is so passionate about the organization, so easy to talk to and willing to help.
          </p>
        </div>
      </div>
      
      {/* Content 3 */}
      <div className="relative h-full">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#e38384] rounded-lg"></span>
        <div className="relative h-full p-5 bg-white border-2 border-[#e38384] rounded-lg">
          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
            Sophie - Ireland Volunteer
          </h3>
          <p className="mt-3 mb-1 text-xs font-medium text-[#e38384] uppercase">
            ------------
          </p>
          <p className="mb-2 text-gray-600">
          I really enjoyed my time at the organization Siem Reap. Amazing experience living in Cambodian countryside with local family. Opportunity to meet lots of international volunteers and have fun with the kids at school.
          </p>
        </div>
      </div>
      
      {/* Content 4 */}
      <div className="relative h-full">
        <span className="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-[#34448c] rounded-lg"></span>
        <div className="relative h-full p-5 bg-white border-2 border-[#34448c] rounded-lg">
          <h3 className="my-2 ml-3 text-lg font-bold text-gray-800">
            Sirak - Armenia Volunteer
          </h3>
          <p className="mt-3 mb-1 text-xs font-medium text-[#34448c] uppercase">
            ------------
          </p>
          <p className="mb-2 text-gray-600">
          It was my first volunteering experience and I loved it so much! I’ve my practiced my English as well, communicating with other volunteers. I was teaching English before, but it was my first experience teaching English in English ! It was a little bit challenging sometimes, but definitely incredible experience! I loved the organization so much and I even extended my stay though before coming was thinking «2 weeks! – it’s too much» But no, time really flies! Food is good, don’t worry! &amp; all basic amenities! You’ll have a great time! &amp; also a lot of time to explore surroundings ! Hope to come back again! Thanks!
          </p>
        </div>
      </div>
    </div>
  </div>
  );
}
