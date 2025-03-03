import Link from "next/link";
import React from "react";

const teamMembers = [
  {
    name: "Savuth Em",
    role: "Executive Director",
    description:
      "Savuth is the husband of Savon and is the executive director and co-founder along with his wife of the N.G.O Education Centre For Community which first opened it’s doors in 2014. A skilled engineer who can design and build whatever is needed.",
    image: "/assets/images/member1.jpg",
  },
  {
    name: "Savon Pouk",
    role: "Director of Communications",
    description:
      "Savon is the wife of Savuth and the Director of communications but is mostly known for being the head of the home at ECC and is everyone’s MAMA! When she is not at the helm of the household you will find her at the meetings with other N.G.O’s.",
    image: "/assets/images/member2.jpg",
  },
  {
    name: "Channa Von",
    role: "Chief Of Administration",
    description:
      "Channa is a perfect example of why gaining a good knowledge of other languages can help further development. The daughter of Savuth and Savon, Channa was a student at ECC and is now attending University in Sisaket, Thailand.",
    image: "/assets/images/member3.jpeg",
  },
  {
    name: "Anthony Jackson",
    role: "Cofounder/Consultant",
    description:
      "Anthony is one of the founding members and has been helping ECC since opening bringing a wealth of knowledge from setting up various social projects in Cambodia, Thailand and Bali in schools, hospitals and farms.",
    image: "/assets/images/member5.jpg",
  },
  {
    name: "Karen Austin",
    role: "Assistant Head",
    description:
      "A retired deputy head of a school in the UK, Karen has been able to help us improve on the current curriculum and implement a structure throughout the schools to help the children and the volunteer teachers.",
    image: "/assets/images/member6.jpg",
  },
  {
    name: "Michael Austin",
    role: "Builder, Carpenter, Caretaker",
    description:
      "Mick is the perfect handy man/caretaker that can turn his hand to most jobs with a passion for building and creating ideas.",
    image: "/assets/images/member7.jpg",
  },
];

export default function page() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 lg:px-20">
      <h2 className="text-4xl font-bold text-[#34448c] text-center my-10 dark:text-white">
        Contact
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {/* Content 1 */}
        <div className="relative h-full">
          <div className="relative h-full p-5">
            <h3 className="my-2 text-3xl font-bold text-[#34448c] dark:text-white">
              Skandar - Chile Volunteer
            </h3>
            <p className="mb-2 text-gray-600">
              Such a nice experience. Starting with the Anthony, what he is
              doing there is amazing he has a big compromise with the
              organization and that people depend of him. Shared with kids and
              local people is one of the best experience ever recommended 100%.
            </p>
          </div>
        </div>

        {/* Content 2 */}
        <div className="relative h-full">
          <div className="relative h-full p-5 ">
            <h3 className="my-2 text-3xl font-bold text-[#34448c] dark:text-white">
              Emilie - Australia Volunteer
            </h3>
            <p className="mb-2 text-gray-600">
              I only spent two weeks here but would’ve spent so much longer if I
              could! Could not recommend this experience more highly – the kids
              are so sweet and full of life, and most of them really eager to
              learn. You very much learn on the job from the other volunteers
              how to best teach and engage the kids, and by the end of your time
              you are teaching the next lot of volunteers, so it’s an excellent
              opportunity to improve leadership skills as well as building
              patience, empathy and effective teaching skills. Anthony the host
              is so passionate about the organization, so easy to talk to and
              willing to help.
            </p>
          </div>
        </div>
      </div>
      <section id="our-team" className="pt-16  ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-primary">
            "Join us in our mission to provide free education to children in
            need. Together, we can make a difference and empower these young
            minds for a better tomorrow. "
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 my-4 "
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl text-primary font-semibold  mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700 mb-2">Role: {member.role}</p>
                <p className="text-gray-900 justify-center">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex justify-center items-center py-5 md:py-10">
          <Link
            href="/apply"
            className="flex items-center justify-center px-4 text-[10px] sm:text-lg py-2 text-primary-foreground  bg-primary rounded-md gap-x-1 font-bold active:bg-gray-900 md:inline-flex hover:shadow-none shadow-[5px_5px_0px_0px_rgba(1,1,1)] hover:translate-x-1 hover:translate-y-1 transition-all duration-300"
          >
            Apply Here
          </Link>
      </div>
    </div>
  );
}
