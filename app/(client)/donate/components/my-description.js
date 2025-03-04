"use client";
import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import { ArrowUpDown } from "lucide-react";

const Descriptions = ({ description }) => {
  return (
    <>
      <Accordion
        className="mt-10"
        defaultValue="description"
        type="single"
        collapsible
      >
        <AccordionItem value="description" className="border-none">
          {/* Trigger Section */}
          <AccordionTrigger className="border-b-2  w-full mb-8 hover:no-underline border-black pb-0 flex justify-between items-center">
            <span className="text-[12px] mb-1 sm:text-[16px] md:text-[17px] border-double text-black">
              Descriptions
            </span>
            <ArrowUpDown />
          </AccordionTrigger>

          {/* Content Section */}
          <AccordionContent className="text-base transition-all duration-300 ease-in-out">
            <div
              className="product-description prose max-w-none overflow-hidden"
              dangerouslySetInnerHTML={{ __html: description }}
            >
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default Descriptions;
