import React from "react";

const AboutMe = () => {
  return (
    <section className="bg-white p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        As a tech company focused on AI and web applications, we are dedicated
        to creating cutting-edge solutions that drive innovation in our field.
        Our team of experts combines deep expertise with the latest technologies
        to deliver exceptional results.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <img
          src="https://via.placeholder.com/150"
          alt="About Me Image"
          className="w-32 rounded-full mb-4 md:mb-0 mr-8"
        />
        <div>
          <h3 className="text-lg font-semibold">Our Mission</h3>
          <p>
            We aim to empower businesses with AI-driven solutions that enhance
            productivity and profitability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
