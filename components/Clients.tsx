"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading mb-10">
        My
        <span className="text-purple"> work experience</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-20">
        <div
          className=" rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingCards
            items={testimonials}
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
