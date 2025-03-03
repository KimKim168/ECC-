"use client"
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyMenuHeader = () => {
  const pathName = usePathname()
  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          {/* <Button variant="outline">Open</Button> */}
          <AlignLeft
            className="bg-white border-2 rounded-md"
            width={40}
            height={40}
          />
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
              <div className="border-t p-2">
                <ul className="flex flex-col justify-center space-y-4 text-start text-black">
                <li
          className={`text-base${
            pathName === "/"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/">Home</Link>
        </li>
        <li
          className={`text-base ${
            pathName === "/about"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/about">About</Link>
        </li>
        <li
          className={`text-base ${
            pathName === "/our-team"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/our-team">Our Team</Link>
        </li>
        <li
          className={`text-base ${
            pathName === "/english-class"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/english-class">English Class</Link>
        </li>
        <li
          className={`text-base ${
            pathName === "https://tefluk.com/partners/ecc-cambodia"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="https://tefluk.com/partners/ecc-cambodia">TEFl</Link>
        </li>
        <li
          className={`text-base ${
            pathName === "/apply"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/apply">Apply</Link>
        </li>
        <li
          className={`text-base ${
            pathName === "/contact"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="/contact">Contact Us</Link>
        </li>
        <li
          className={`text-base ${
            pathName === "https://eccthailand.org/"
              ? "text-primary font-semibold underline underline-offset-4"
              : "hover:underline hover:text-[#5867a5] hover:cursor-pointer hover:underline-offset-4"
          }`}
        >
          <Link href="https://eccthailand.org/">ECC Thailand</Link>
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
          </SheetHeader>
          <SheetFooter></SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MyMenuHeader;
