"use client";
import { gsap } from "gsap";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const context = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO of XYZ Company",
    image:
      "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/t1.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quos.",
  },
  {
    id: 2,
    name: "John Doe 2",
    title: "CEO of XYZ Company",
    image:
      "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/t2.jpg",
    testimonial:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, quos.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? context.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === context.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-between max-w-7xl mx-auto relative">
      <div className="absolute top-28 -left-60 rotate-3 opacity-20 w-96 overflow-clip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1728 1101"
          fill="none"
        >
          <path
            stroke="white"
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: "346.53, 0" }} // stroke-dasharray: 3246.53, 0"
            strokeWidth={2}
          ></path>
        </svg>
      </div>
      <div className="w-1/2">
        <p className="uppercase text-teal-600">Testimonials</p>
        <h1 className="text-4xl">What people say?</h1>
      </div>
      <div className="flex items-center pl-20 ">
        <TestimonialCard {...context[currentIndex]} key={currentIndex} />
      </div>
      <div className="flex gap-3 items-center absolute bottom-10 right-0">
        <button
          className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </button>
        <button
          className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;

const TestimonialCard = ({ name, title, image, testimonial }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    // Trigger the animation when the component mounts
    gsap.from(cardRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
      ease: "power3.out",
    });
    gsap.to(cardRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  return (
    <div ref={cardRef} className="relative mt-12 space-y-5">
      <div className="absolute -top-16 -left-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="156.721"
          height="108.227"
          viewBox="0 0 256.721 208.227"
          className="qout-svg"
        >
          <path
            dataName="Path 76570"
            d="M-23.723-530.169v97.327H-121.05v-68.7q0-40.076,13.359-73.472T-62.845-639.9l36.259,28.625Q-63.8-570.244-68.57-530.169Zm158.395,0v97.327H37.345v-68.7q0-40.076,13.359-73.472T95.55-639.9l36.259,28.625Q94.6-570.244,89.825-530.169Z"
            transform="translate(121.55 640.568)"
            strokeWidth="1"
            stroke="white"
            opacity="0.192"
          ></path>
        </svg>
      </div>
      <p className="text-gray-600 text-3xl leading-10 text-pretty">
        {testimonial}
      </p>
      <div className="w-full border-b border-slate-600" />
      <div className="flex justify-between p-5">
        <div className="flex items-center gap-4">
          <div>
            <img src={image} alt="profile" className="w-20 h-20 rounded-full" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-400">{name}</h3>
            <p className="text-emerald-600">{title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
