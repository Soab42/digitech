"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
const ProjectCard = ({ item, onMouseEnter, onMouseLeave, selectedProject }) => (
  <div className="p-1">
    <img
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      src={item.image}
      alt={item.title}
      className={`rounded-3xl object-cover w-[26rem] h-[40rem] transition-all duration-300 ${
        selectedProject && selectedProject?.id !== item?.id && "blur-sm"
      }`}
    />
  </div>
);
const ProjectModal = ({ selectedProject, onMouseLeave }) => {
  const modalRef = useRef(null);
  const categoryRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (selectedProject) {
      gsap.fromTo(
        categoryRef.current,
        { opacity: 0, y: -30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.2,
        }
      );

      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.2,
        }
      );
    }
  }, [selectedProject]);

  return (
    <div
      ref={modalRef}
      className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-20 pointer-events-none" // Prevent modal from blocking mouse events
    >
      <div
        className="p-10 h-28  overflow-hidden rounded-3xl flex flex-col justify-center items-center gap-5 pointer-events-auto" // Allow mouse events on modal content
        onMouseLeave={onMouseLeave}
      >
        <p ref={categoryRef} className="text-sm">
          {selectedProject.category}
        </p>
        <p ref={titleRef} className="text-7xl">
          {selectedProject.title}
        </p>
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const context = [
    {
      id: 1,
      title: "Web Development 3",
      category: "UI/UX Design",
      image:
        "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/1-4.jpg",
      link: "/services/web-development",
    },
    {
      id: 2,
      title: "Web Development",
      category: "UI/UX Design",
      image:
        "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/2-5.jpg",
      link: "/services/web-development",
    },
    {
      id: 3,
      title: "Web Development 2",
      category: "UI/UX Design",
      image:
        "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/3-compressed.jpg",
      link: "/services/web-development",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-5 mb-20">
      <p className="uppercase text-xl text-teal-600 ml-20">OUR PORTFOLIO</p>
      <div className="flex justify-between border-r border-t border-gray-800 p-10 rounded-full">
        <h1 className="text-5xl">Our featured projects</h1>
      </div>
      <div>
        <div
          className="grid grid-cols-3 gap-5 px-10 relative "
          onMouseLeave={() => setSelectedProject(null)}
        >
          {context.map((item) => (
            <ProjectCard
              key={item.id}
              item={item}
              onMouseEnter={() => setSelectedProject(item)}
              selectedProject={selectedProject}
            />
          ))}
          {selectedProject && (
            <ProjectModal
              selectedProject={selectedProject}
              onMouseLeave={() => setSelectedProject(null)}
            />
          )}
        </div>
      </div>
      <div className="h-48 flex items-center">
        <div className="w-full border-t border-gray-800 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-fit  h-10 border border-gray-800 px-20 bg-gray-950 rounded-full flex items-center justify-center gap-5">
            Here are some select projects that showcase.{" "}
            <Link href="/portfolio" className="text-sm text-emerald-500">
              View All
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
