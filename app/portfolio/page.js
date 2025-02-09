"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import TitleWithBg from "../components/Title";
import { projects } from "../db";

export default function PortfolioPage() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const galleryRef = useRef(null);
  const filterRefs = useRef([]);
  const previousProjectsRef = useRef([]);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const displayedProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  useEffect(() => {
    const galleryElement = galleryRef.current;
    const previousProjectIds = previousProjectsRef.current.map((p) => p.id);
    const currentProjectIds = displayedProjects.map((p) => p.id);

    previousProjectIds.forEach((id) => {
      if (!currentProjectIds.includes(id)) {
        const projectCard = galleryElement.querySelector(
          `.project-card[data-id="${id}"]`
        );
        if (projectCard) {
          gsap.to(projectCard, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => projectCard.remove(),
          });
        }
      }
    });

    currentProjectIds.forEach((id, index) => {
      if (!previousProjectIds.includes(id)) {
        const projectCard = galleryElement.querySelector(
          `.project-card[data-id="${id}"]`
        );
        if (projectCard) {
          gsap.from(projectCard, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
          });
        }
      }
    });

    currentProjectIds.forEach((id, newIndex) => {
      const projectCard = galleryElement.querySelector(
        `.project-card[data-id="${id}"]`
      );
      if (projectCard) {
        const prevIndex = previousProjectIds.indexOf(id);
        if (prevIndex !== -1 && prevIndex !== newIndex) {
          const prevCard = galleryElement.children[prevIndex];
          const currentCard = galleryElement.children[newIndex];

          if (prevCard && currentCard) {
            const prevRect = prevCard.getBoundingClientRect();
            const currentRect = currentCard.getBoundingClientRect();

            const deltaX = prevRect.left - currentRect.left;
            const deltaY = prevRect.top - currentRect.top;

            gsap.set(projectCard, { x: deltaX, y: deltaY });
            gsap.to(projectCard, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: "power2.out",
            });
          }
        }
      }
    });

    previousProjectsRef.current = displayedProjects;
  }, [selectedFilter, displayedProjects]);

  return (
    <div>
      <TitleWithBg title="Our Portfolio." link="/portfolio" name="Portfolio" />
      <div className="mx-auto uppercase filters flex gap-7 justify-center p-2 mt-10">
        Filter By:
        {categories.map((category, index) => (
          <button
            key={index}
            ref={(el) => (filterRefs.current[index] = el)}
            onClick={() => setSelectedFilter(category)}
            className={`${
              selectedFilter === category
                ? "underline underline-offset-4 tracking-widest"
                : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        className="max-w-7xl mx-auto project-gallery text-white p-4 grid grid-cols-1 md:grid-cols-3 gap-6 justify-center"
        ref={galleryRef}
      >
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

const ProjectCard = ({ project }) => {
  return (
    <div
      key={project.id}
      data-id={project.id}
      className="project-card w-96 space-y-1 text-gray-400 p-2"
    >
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p className="text-xs text-gray-700">{project.category}</p>
    </div>
  );
};
