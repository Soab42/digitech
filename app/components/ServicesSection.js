"use client";
import {
  ChevronLeft,
  ChevronRight,
  Cloud,
  Code,
  Database,
  MonitorSmartphone,
  Server,
  ShieldCheck,
  Wand,
} from "lucide-react";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";
const ServicesSection = () => {
  const scrollRef = useRef(null);
  const services = [
    {
      logo: <Code className="w-16 h-16 text-teal-500" />,
      title: "Web Development",
      description:
        "Custom websites and web apps tailored to your business needs.",
      link: "/services/web-development",
    },
    {
      logo: <Cloud className="w-16 h-16 text-blue-500" />,
      title: "Cloud Solutions",
      description:
        "Seamless cloud migration and scalable cloud architecture solutions.",
      link: "/services/cloud-solutions",
    },
    {
      logo: <ShieldCheck className="w-16 h-16 text-red-500" />,
      title: "Cybersecurity",
      description:
        "Robust security solutions to protect your data and IT infrastructure.",
      link: "/services/cybersecurity",
    },
    {
      logo: <Server className="w-16 h-16 text-gray-500" />,
      title: "DevOps & Server Management",
      description:
        "Streamlined CI/CD pipelines and reliable server management.",
      link: "/services/devops",
    },
    {
      logo: <MonitorSmartphone className="w-16 h-16 text-green-500" />,
      title: "Mobile App Development",
      description:
        "Cross-platform and native mobile applications for Android & iOS.",
      link: "/services/mobile-app-development",
    },
    {
      logo: <Database className="w-16 h-16 text-purple-500" />,
      title: "Data Analytics & AI",
      description:
        "Leverage AI and analytics to drive data-driven decision-making.",
      link: "/services/data-analytics",
    },
    {
      logo: <Wand className="w-16 h-16 text-yellow-500" />,
      title: "IT Consulting",
      description:
        "Expert guidance to optimize and future-proof your IT infrastructure.",
      link: "/services/it-consulting",
    },
  ];
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" }); // Adjust scrolling distance
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 mb-10">
      <p className="uppercase text-xl text-teal-600 ml-20">OUR SPECIALIZE</p>
      <div className="flex justify-between border-r border-t border-gray-800 p-10 rounded-full ">
        <h1 className="text-5xl">Comprehensive Services.</h1>
        <div className="flex items-center gap-2">
          <button
            onClick={scrollLeft}
            className="bg-gray-800/50 rounded-full p-3 w-12 h-12"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={scrollRight}
            className="bg-gray-800/50 rounded-full p-3 w-12 h-12"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-screen overflow-x-auto hide-scrollbar"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
          WebkitOverflowScrolling: "touch", // Smooth scrolling on iOS
        }}
      >
        <div className="flex gap-10 w-fit mr-[30rem]">
          {services.map((service, index) => (
            <ServiceCard
              description={service.description}
              logo={service.logo}
              title={service.title}
              link={service.link}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
