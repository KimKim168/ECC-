import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-16" id="contact">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Contact</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          We are always ready to support you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Details */}
        <div className="space-y-6">
          {[ 
            { title: "Mail", details: ["info@ecccambodia.org"], image: "/assets/images/letter.png" },
            { title: "Address", details: ["Road 63 Po Village, Krung Siem Reap 3735"], image: "/assets/images/google-maps.png" },
            { title: "Contact", details: ["Phone: +855 12 335 043", "Fax: +44 7512 091 873"], image: "/assets/images/phone.png" },
            { title: "Working Hours", details: ["Monday - Friday: 07:30 - 18:00", "Sunday: 7:30 - 11:10"], image: "/assets/images/time.png" },
          ].map((item, index) => (
            <div key={index} className="flex items-center p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
              <div className="flex-shrink-0 p-3 bg-[#34448c] rounded-lg">
                <Image src={item.image} width={32} height={32} alt={item.title} />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                {item.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 dark:text-gray-400">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="p-6 bg-white dark:bg-gray-900 shadow-lg rounded-lg">
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34448c]" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34448c]" />
            <textarea placeholder="Your Message" className="w-full px-4 py-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-[#34448c]"></textarea>
            <button className="w-full py-3 text-lg font-semibold text-white bg-[#34448c] rounded-lg hover:bg-[#3956d3] transition-all">Submit</button>
          </form>
        </div>
      </div>

      {/* Google Map */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Location</h2>
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509364!2d144.95592531531688!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1633956031103!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default page;
