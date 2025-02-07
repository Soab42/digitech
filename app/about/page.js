import Link from "next/link";
import Blogs from "../components/Blogs";
import ServicesScroller from "../components/ServicesScroller";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import TitleWithBg from "../components/Title";

export default function AboutPage() {
  return (
    <div className="relative overflow-hidden">
      <TitleWithBg title={"About Us."} link={"/about"} name={"About"} />
      <div className="relative w-full h-[40vh]">
        <img
          src="https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/12/4.jpg"
          className="w-[70vW] h-[60vh] z-10 absolute -top-20 right-0 object-cover"
        />
      </div>
      <div className="relative">
        <div className="absolute left-[20%] top-80 rotate-3 opacity-20 w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 3528 4401"
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

        <div className="max-w-7xl mx-auto space-y-10 px-5">
          <div className="flex justify-between items-center w-full mt-40">
            <div className="flex justify-between w-full">
              <p className="text-xl text-emerald-600">About Company</p>
              <p className="text-2xl w-2/3 text-pretty p-5 tracking-wide leading-10">
                If you’re looking for a specialist to build a meaningful digital
                project you can easily reach us by clicking{" "}
                <Link href="/contact" className="text-teal-500">
                  here
                </Link>
                . We are a creative studio that specializes in providing
                high-quality design and branding solutions to businesses and
                individuals. Our team of experts combines deep expertise with
                the latest technologies to deliver exceptional results. We are
                dedicated to creating cutting-edge solutions that drive
                innovation in our field. Our mission is to empower businesses
                with AI-driven solutions that enhance productivity and
                profitability. Whether you need a custom web application, a
                mobile app, or a complex software solution, we have the
                expertise to help.
              </p>
            </div>
          </div>
        </div>
        <ServicesScroller />
        <div className="max-w-7xl mx-auto  px-5 grid grid-cols-8 w-full ">
          <div className="col-span-3 ">
            <div className="p-4 h-96 pl-32 flex flex-col justify-center  space-y-4 border-r border-gray-800 border-b w-full">
              <h1 className="text-8xl font-bold">1.</h1>
              <p className="text-2xl">Our Mission</p>
              <p>
                We are a creative studio that specializes in providing
                high-quality design and branding solutions to businesses and
                individuals.
              </p>
            </div>
            <div className="border-r border-gray-800  h-96  pl-28">
              <img
                src="https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/12/1.jpg"
                className="w-full p-4 object-cover h-full"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="border-b border-r border-gray-800  h-96">
              <img
                src="https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/12/2.jpg"
                className="w-full p-4 object-cover h-full"
              />
            </div>
            <div className="p-4 h-96 flex flex-col justify-center space-y-4 border-r  border-gray-800">
              <h1 className="text-8xl font-bold">2.</h1>
              <p className="text-2xl">Our Vision</p>
              <p>
                We are a creative studio that specializes in providing
                high-quality design and branding solutions to businesses and
                individuals.
              </p>
            </div>
          </div>
          <div className="col-span-3 mt-10 border-gray-800 border-t pr-16">
            <div className="p-4  h-96 flex flex-col justify-center pr-16 space-y-4 border-gray-800">
              <h1 className="text-8xl font-bold">3.</h1>
              <p className="text-2xl">Our Values</p>
              <p>
                We are a creative studio that specializes in providing
                high-quality design and branding solutions to businesses and
                individuals.
              </p>
            </div>
            <div className="border-gray-800  h-64  pr-20 px-4  ">
              <div
                style={{
                  background:
                    "url('https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/12/dots.png')",
                }}
                className="w-full pl-24 p-4 object-cover h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-48 max-w-7xl mx-auto px-5">
        <Testimonials />
        <Team />
        <Blogs />
      </div>
    </div>
  );
}
