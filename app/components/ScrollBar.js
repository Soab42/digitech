"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Star } from "lucide-react";

export default function ScrollBar({ context, fontSize = "2rem" }) {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      x: "-100%",
      duration: 30,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div className="w-full overflow-hidden h-full   text-slate-200 py-16">
      <div ref={marqueeRef} className="flex space-x-16 whitespace-nowrap pl-20">
        {context.map((item, index) => (
          <span
            key={index}
            className="text-4xl flex items-center gap-16"
            style={{
              //  -webkit-text-stroke: 0.1px black; /* Outline width and color */
              //   color: transparent; /* Makes the inside of the text transparent */
              //   -
              fontSize: fontSize,
              // WebkitTextStroke: "1px white",
              // color: "transparent",
              WebkitTextStroke: index % 2 === 0 ? "1px white" : "0px white",
              color: index % 2 === 0 ? "transparent" : "white",
            }}
          >
            {item}{" "}
            <span className="text-3xl text-slate-200">
              <Star />
            </span>
          </span>
        ))}
        {/* Duplicate items for a seamless loop */}
        {context.map((item, index) => (
          <span
            key={index}
            className="text-4xl flex items-center gap-16  font-extrabold"
            style={{
              //  -webkit-text-stroke: 0.1px black; /* Outline width and color */
              //   color: transparent; /* Makes the inside of the text transparent */
              //   -
              fontSize: fontSize,
              // WebkitTextStroke: "1px white",
              // color: "transparent",
              WebkitTextStroke: index % 2 === 0 ? "1px white" : "0px white",
              color: index % 2 === 0 ? "transparent" : "white",
            }}
          >
            {item}{" "}
            <span className="text-3xl text-slate-200">
              <Star />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
