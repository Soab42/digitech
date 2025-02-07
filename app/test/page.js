"use client";
import { useEffect, useRef } from "react";
import { useSmoothScroll } from "../hooks/useSmoothScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const SmoothScroll = () => {
  const containerRef = useRef(null); // Create a ref for the container null;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const smoother = ScrollTrigger.create({
      scroller: container,
      invalidateOnRefresh: true,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      ease: "cubic-bezier(0.25, 0.1, 0.25, 1)", // Custom cubic-bezier easing function
    });

    gsap.to(container, {
      y: () => -(container.scrollHeight - window.innerHeight),
      ease: "bounce.in",
      scrollTrigger: smoother,
    });

    console.log(container.scrollHeight, window.innerHeight);

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      smoother.kill();
      window.removeEventListener("resize", handleResize);
    };
  }, [containerRef?.current?.scrollHeight, window.innerHeight]);
  return (
    <div id="smooth-wrapper" ref={containerRef} className="">
      <div id="smooth-content">
        <section className="h-[100vh] flex justify-center items-center bg-blue-500 section">
          <h1 className="text-white text-4xl">Smooth Scroll 1</h1>
        </section>
        <section className="h-[100vh] flex justify-center items-center bg-green-500 selection">
          <h1 className="text-white text-4xl">Smooth Scroll 2</h1>
        </section>
        <section className="h-[100vh] flex justify-center items-center bg-red-500">
          <h1 className="text-white text-4xl">Smooth Scroll 3</h1>
        </section>
      </div>
    </div>
  );
};

export default SmoothScroll;
