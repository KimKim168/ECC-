"use client";
import { Heart } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MyHeader = () => {
  const pathName = usePathname();

  return (
    <div className="hidden lg:block">
      <ul className="flex space-x-2 text-black ">
        <li
          className={`text-base px-4 ${
            pathName === "/"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`text-base px-4  ${
            pathName === "/about"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`text-base px-4  ${
            pathName === "/our-team"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/our-team">Our Team</Link>
        </li>
        <li
          className={`text-base px-4  ${
            pathName === "/english-class"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/english-class">English Class</Link>
        </li>
        <li
          className={`text-base px-4  ${
            pathName === "/tefl"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/tefl">TEFl</Link>
        </li>
        <li
          className={`text-base px-4  ${
            pathName === "/apply"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/apply">Apply</Link>
        </li>
        <li
          className={`text-base px-4  ${
            pathName === "/contact"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/contact">Contact Us</Link>
        </li>
        <li
          className={`text-base px-4  ${
            pathName === "/ecc-thailand"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#34448c] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/ecc-thailand">ECC Thailand</Link>
        </li>
        <li>
          <Link
            href="/donate"
            className="px-4 py-2  hover:bg-[#d75a59] border border-[#d75a59] hover:text-white text-black text-sm hover:shadow-[4px_4px_0px_0px_rgb(230,157,157)] transition duration-200"
          >
            Donate ❤️
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MyHeader;
