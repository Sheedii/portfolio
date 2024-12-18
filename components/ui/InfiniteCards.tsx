"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const InfiniteMovingCards = ({
  items,
  className,
}: {
  items: {
    quote: string;
    quote2: string;
    quote3: string;
    name: string;
    title: string;
    img: string;
    period: string,

  }[];
  className?: string;
}) => {
  return (
    <div className={cn("cards-container relative z-20 w-full", className)}>
      <ul className="flex flex-col gap-6 py-4 w-full">
        {items.map((item, idx) => (
          <li
            className="w-full max-w-full relative rounded-2xl border border-b-0
             border-slate-800 p-4 md:p-12 bg-gradient-to-r from-gray-900 to-gray-800"
            key={idx}
          >
            <blockquote>

              <div className="relative z-20 mb-6 flex flex-row items-center">
                <div className="me-3 w-[4rem]">
                  <img src={item.img} alt="profile" />
                </div>

                <div className="text-xl w-full font-bold leading-[1.6] text-white flex flex-row justify-between items-center ">
                  <span className="flex flex-col gap-1 ">
                    <span>{item.name}</span>
                    <span className="text-sm leading-[1.6] text-white-200 font-normal">
                      {item.title}
                    </span>
                  </span>
                  <span className="font-normal">{item.period}</span>
                </div>

              </div>

              <div className="px-[50px] flex flex-col gap-2 lg:gap-4">
                <span className="relative z-20 text-sm md:text-lg text-white font-normal text-justify">
                  {item.quote}
                </span>
                <span className="relative z-20 text-sm md:text-lg text-white font-normal text-justify">
                  {item.quote2}
                </span>
                <span className="relative z-20 text-sm md:text-lg text-white font-normal text-justify">
                  {item.quote3}
                </span>
              </div>

            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
