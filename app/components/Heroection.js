import React from "react";
import BgQrapper from "./BgQrapper";

const HeroSection = () => {
  return (
    <BgQrapper>
      <div className="max-w-7xl mx-auto p-4 space-y-4 pt-20">
        <p className="text-3xl my-16 text-right pr-32">
          We are a creative studio that specializes in <br />
          providing high-quality design and branding
          <br /> solutions to businesses and individuals.
        </p>
        <div className="flex justify-between text-xl">
          <p>BUILIDNG DIGITAL DESIGN</p>
          <p>CREATIVE STUDIO</p>
        </div>
        <h1 className="text-[10rem] leading-[8rem] py-10 absolute z-20">
          CREATIVE <br />
          AGENCY
        </h1>
        <div className="flex justify-between text-xl absolute left-0 px-10">
          <img
            src="https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/12/21.jpg"
            className="mt-60 z-10"
          />
        </div>
      </div>
    </BgQrapper>
  );
};

export default HeroSection;
