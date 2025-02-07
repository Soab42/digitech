import React from "react";
import Link from "next/link";
import HorizontalScroll from "./ScrollBar";
import { Play } from "lucide-react";
import Blinck from "./Blinck";
export default function ExpeienceSection() {
  const context = [
    "Web Development",
    "UI/UX Design",
    "Digital Marketing",
    "Branding",
    "SEO Optimization",
  ];
  return (
    <div className="relative h-[120vh] max-w-7xl mx-auto ">
      <div className="absolute -top-52 left-10 rotate-3 opacity-20 w-full overflow-clip">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1528 1401"
          fill="none"
          className="w-full scale-150"
        >
          <path
            stroke="white"
            d="M-43 773.821C160.86 662.526 451.312 637.01 610.111 733.104C768.91 829.197 932.595 1062.9 602.782 1098.75C272.969 1134.6 676.888 25.4306 1852 1"
            style={{ strokeDasharray: "3246.53, 0" }} // stroke-dasharray: 3246.53, 0"
          ></path>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto space-y-10">
        <div className="flex  justify-between w-full mt-40 ">
          <p className="text-3xl w-1/2 text-balance  p-5 tracking-wide leading-10">
            If you’re looking for a specialist to build a meaningful digital
            project you can easily reach us by clicking{" "}
            <Link href={"/contact"} className="text-teal-500">
              here
            </Link>
          </p>
          <p className="text-md w-1/2  mt-5  text-balance px-16">
            Whether you are a development agency looking to outsource design
            work, a company in search of a Product Designer or Product Team, a
            marketing agency that needs a landing page, a startup that wants to
            launch an app, or an enterprise that plans to rebrand or redesign
            its website, we welcome any challenge with our arms wide open.
          </p>
        </div>
        <div className="flex  justify-between items-center w-full">
          <p className="text-lg w-1/2 text-balance uppercase  p-5 space-x-5">
            <span className="font-bold text-7xl">28</span>
            <span className="font-thin text-sm tracking-[0.3em]">
              years of experience
            </span>
          </p>
          <div className="w-1/2 p-4 px-20 ">
            <HorizontalScroll context={context} />
          </div>
        </div>
        <div>
          <div className="relative max-w-7xl mx-auto flex justify-between items-center bg-gray-950  ">
            <div className="flex items-baseline text-xl w-1/2">
              <div className="relative w-32">
                <button className="absolute bottom-24 left-10 w-56 h-10 p-2 -rotate-90   px-4 flex gap-3 rounded-full font-bold tracking-widest border border-teal-500/30 text-sm justify-center items-center">
                  <Play className="text-purple-600" fill="#9333ea" />
                  <div className="absolute top-1 left-0">
                    <Blinck />
                  </div>
                  WATCH INTRO
                </button>
              </div>
              <img
                src="https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/12/04.jpg"
                className="h-[30rem] rounded-3xl -rotate-12 ml-16"
              />
            </div>
            <div className="w-1/2 bg-gray-950 rounded-3xl">
              <div>
                <p className="text-lg text-teal-500  p-5 tracking-wide leading-10">
                  WHY CHOOSE US
                </p>
                <h1 className="text-5xl p-5">
                  Best creative & modern digital agency.
                </h1>
              </div>
              <div className="p-10 space-y-10 px-20">
                <h2 className="font-thin text-gray-500">
                  Taken possession of my entire soul, like these sweet mornings
                  of spring which i enjoy with my whole.
                </h2>
                <hr></hr>
                <div className="flex justify-between">
                  <p className="flex gap-5 justify-center items-center">
                    <span className="font-thin text-5xl"> 52</span>
                    <span className="w-24 tracking-widest text-sm">
                      ROJECTS COMPLETED
                    </span>
                  </p>

                  <p className="flex gap-5 justify-center items-center">
                    <span className=" font-thin text-5xl"> 6k+</span>
                    <span className="w-24 tracking-widest text-sm">
                      CUSTOMER SATISFACTION
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
