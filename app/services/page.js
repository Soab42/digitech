"use client";
import { Flower, Rocket, Undo2 } from "lucide-react";
import Link from "next/link";
import Blogs from "../components/Blogs";
import ServicesScroller from "../components/ServicesScroller";
import Testimonials from "../components/Testimonials";
import TitleWithBg from "../components/Title";
import { services, process } from "../db";

function ServicesPage() {
  return (
    <div className="">
      <TitleWithBg title="Services" link="/services" name="Services" />
      <WhatWeOffer />
      <ServicesScroller />
      <Pricing />
      <Process />
      <Testimonials />
      <Blogs />
    </div>
  );
}

function WhatWeOffer() {
  return (
    <div className="max-w-7xl mx-auto mt-20">
      <p className="uppercase text-xl text-teal-600 ml-20">our specializes</p>
      <div className="flex justify-between border-r border-t border-gray-800 p-10 rounded-full">
        <h1 className="text-5xl">
          What we <span className="text-teal-600">offer</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-4 gap-5 mt-10">
        {services.map((service, i) => (
          <ServiceCard key={service.name} service={service} i={i} />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ service, i }) {
  return (
    <div
      style={{ marginTop: i % 2 === 0 ? 20 : 0 }}
      className="flex flex-col group justify-between py-20  gap-3 border border-gray-800 p-10 rounded-xl h-[30rem]"
    >
      {service.icon}
      <div className="flex flex-col gap-2 translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
        <h1 className="text-2xl">{service.name}</h1>
        <p className="desc group-hover:opacity-100 opacity-0 transition-all duration-300 text-gray-600">
          {service.description}
        </p>
      </div>
      <Link href={service.url} className="text-teal-600">
        Read More
      </Link>
    </div>
  );
}

function Pricing() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 my-28 items-center">
      <div className="flex flex-col  gap-5 w-full">
        <p className="uppercase text-xl text-teal-600">
          Over 150,000 Satisfied Clients
        </p>
        <h1 className="text-3xl">
          Affordable pricing.
          <br /> Easy scaling.
        </h1>
        <p className="text-gray-600">
          We grow your brands through bold service we’re providing fusce
          vulputate eleifend sapien. Etiam sollicitudin, ipsum.
        </p>
        <hr className="border-gray-800" />
        <ul className="list-disc space-y-2 p-2">
          <li className="flex gap-2 p-1">
            <Undo2 className="w-6 h-6 text-teal-500 rotate-180" />
            Custom websites and web apps tailored to your business needs.
          </li>
          <li className="flex gap-2 p-1">
            <Undo2 className="w-6 h-6 text-teal-500 rotate-180" />
            Seamless cloud migration and scalable cloud architecture solutions.
          </li>
          <li className="flex gap-2 p-1">
            <Undo2 className="w-6 h-6 text-teal-500 rotate-180" />
            Robust security solutions to protect your data and IT
            infrastructure.
          </li>
          <li className="flex gap-2 p-1">
            <Undo2 className="w-6 h-6 text-teal-500 rotate-180" />
            Streamlined CI/CD pipelines and reliable server management.
          </li>
        </ul>
      </div>
      <div className="grid w-full gap-10 ">
        <div className="flex flex-col md:flex-row gap-5 border border-gray-800 p-10 rounded-xl">
          <div>
            <Flower className="w-24 h-24 md:w-16 text-teal-500" />
            <h1 className="text-2xl">Advanced</h1>
          </div>
          <ul className="list-disc space-y-2 p-2 px-6 ">
            <li>Custom websites and web apps</li>
            <li>Seamless cloud migration</li>
            <li>Robust security solutions</li>
            <li>Streamlined CI/CD pipelines</li>
          </ul>
          <div className="flex flex-col gap-5 md:items-center justify-center">
            <p>
              $ <span className="text-5xl">19</span>
            </p>
            <button className="border border-teal-500 px-5 text-xs py-2 rounded-full">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-5 border bg-teal-600 border-gray-800 p-10 rounded-xl">
          <div>
            <Rocket className="w-24  md:w-16 h-24 text-gray-200" />
            <h1 className="text-2xl">Enterprise</h1>
          </div>
          <ul className="list-disc space-y-2 p-2 px-6">
            <li>Custom websites and web apps</li>
            <li>Seamless cloud migration</li>
            <li>Robust security solutions</li>
            <li>Streamlined CI/CD pipelines</li>
          </ul>
          <div className="flex flex-col gap-5 md:items-center  md:justify-center">
            <p>
              $ <span className="text-5xl">19</span>
            </p>
            <button className=" border border-teal-500 px-5 py-2 text-xs rounded-full">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Process() {
  return (
    <div className="max-w-7xl mx-auto">
      <p className="uppercase text-xl text-teal-600 ml-20">our process</p>
      <div className="flex justify-between border-r border-t border-gray-800 p-10 rounded-full">
        <h1 className="text-5xl">
          How we <span className="text-teal-600">work</span>
        </h1>
      </div>
      <div className="grid md:grid-cols-4 gap-5">
        {process.map((service, i) => (
          <ServiceCard key={service.name} service={service} i={i} />
        ))}
      </div>
    </div>
  );
}

export default ServicesPage;
