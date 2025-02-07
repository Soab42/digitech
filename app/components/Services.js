import React from "react";

const ServicesPortfolio = () => {
  return (
    <section className="bg-gray-100 p-4 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Services & Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8">
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-4">AI-driven Web Applications</h3>
          <p>
            We create intelligent web applications that leverage AI to enhance
            user experience and drive business growth.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-4">Data Analytics</h3>
          <p>
            Our team provides comprehensive data analytics services to help
            businesses make informed decisions.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow-md">
          <h3 className="font-semibold mb-4">Machine Learning Solutions</h3>
          <p>
            We specialize in developing custom machine learning solutions
            tailored to meet your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesPortfolio;
