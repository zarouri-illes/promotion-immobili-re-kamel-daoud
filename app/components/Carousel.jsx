"use client"

import React, { useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  const nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className={`flex transition ease-out duration-500`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return <img src={s} key={i} className="rounded-[15px]" />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center text-white px-10 text-5xl flex">
        <button onClick={previousSlide}>
          <IoIosArrowDropleftCircle />
        </button>
        <button onClick={nextSlide}>
          <IoIosArrowDroprightCircle />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-5 w-full">
        {slides.map((s, i) => {
          return (
            <div
              key={"circle" + i}
              className={`rounded-full w-5 h-5 ${
                i == current ? "bg-primary" : "bg-white"
              }`}
              onClick={() => setCurrent(i)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
