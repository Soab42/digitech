"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useSmoothScroll = () => {
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
  }, []);

  return containerRef;
};
