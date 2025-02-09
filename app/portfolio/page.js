"use client";
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import TitleWithBg from "../components/Title";

// src/projects.js
export const projects = [
  {
    id: 1,
    title: "Aevoe",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/1.jpg",
    category: "Branding",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/aevoe/",
  },
  {
    id: 2,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/2-4.jpg",
    category: "Art",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design/",
  },
  {
    id: 3,
    title: "Nice guy",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/3.jpg",
    category: "Branding",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/nice-guy/",
  },
  {
    id: 4,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/4-3.jpg",
    category: "Marketing",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-2/",
  },
  {
    id: 5,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/5.jpg",
    category: "Art",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-3/",
  },
  {
    id: 6,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/6.jpg",
    category: "Design",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-4/",
  },
  {
    id: 7,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/7-1.jpg",
    category: "Branding",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-5/",
  },
  {
    id: 8,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/8-1.jpg",
    category: "Design",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-6/",
  },
  {
    id: 9,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/9.jpg",
    category: "Design",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-7/",
  },
];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const projectGalleryRef = useRef(null);
  const filterButtonsRef = useRef([]);
  const prevFilteredProjectsRef = useRef([]);

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  // GSAP Animations
  useEffect(() => {
    const projectGallery = projectGalleryRef.current;

    // Get the previous and current project IDs
    const prevProjectIds = prevFilteredProjectsRef.current.map((p) => p.id);
    const currentProjectIds = filteredProjects.map((p) => p.id);

    // Animate removed projects (scale down and fade out)
    prevProjectIds.forEach((id) => {
      if (!currentProjectIds.includes(id)) {
        const projectCard = projectGallery.querySelector(
          `.project-card[data-id="${id}"]`
        );
        if (projectCard) {
          gsap.to(projectCard, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
            onComplete: () => {
              projectCard.remove(); // Remove the card from the DOM after animation
            },
          });
        }
      }
    });

    // Animate added projects (pop up)
    currentProjectIds.forEach((id, index) => {
      if (!prevProjectIds.includes(id)) {
        const projectCard = projectGallery.querySelector(
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

    // Animate repositioned projects (slide from original position to current position)
    currentProjectIds.forEach((id, newIndex) => {
      const projectCard = projectGallery.querySelector(
        `.project-card[data-id="${id}"]`
      );
      if (projectCard) {
        const prevIndex = prevProjectIds.indexOf(id);
        if (prevIndex !== -1 && prevIndex !== newIndex) {
          // Calculate the difference in position
          const prevCard = projectGallery.children[prevIndex];
          const currentCard = projectGallery.children[newIndex];

          if (prevCard && currentCard) {
            const prevRect = prevCard.getBoundingClientRect();
            const currentRect = currentCard.getBoundingClientRect();

            const deltaX = prevRect.left - currentRect.left;
            const deltaY = prevRect.top - currentRect.top;

            // Set the initial position to the previous position
            gsap.set(projectCard, {
              x: deltaX,
              y: deltaY,
            });

            // Animate to the current position
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

    // Update the previous filtered projects reference
    prevFilteredProjectsRef.current = filteredProjects;
  }, [filter, filteredProjects]);

  return (
    <div>
      <TitleWithBg
        title={"Our Portfolio."}
        link={"/portfolio"}
        name={"Portfolio"}
      />
      <div className="mx-auto uppercase  filters flex gap-7 justify-center p-2 mt-10">
        Filter By:
        {categories.map((category, index) => (
          <button
            key={index}
            ref={(el) => (filterButtonsRef.current[index] = el)}
            onClick={() => setFilter(category)}
            className={`${
              filter === category
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
        ref={projectGalleryRef}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            data-id={project.id}
            className="project-card w-96 space-y-1 text-gray-400 p-2"
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p className="text-xs">{project.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
