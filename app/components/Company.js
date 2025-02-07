import React from "react";

const companyList = [
  "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/b1.png",
  "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/b2.png",
  "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/b3.png",
  "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/b5.png",
  "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/b6.png",
];
export default function Company() {
  return (
    <div className="max-w-7xl mx-auto h-full py-10">
      <div className="">
        <div className="w-full border-t border-gray-800 relative">
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-fit  h-10 border border-gray-800 px-20 bg-gray-950 rounded-full flex items-center justify-center gap-5">
            More than 200+ companies trusted us worldwide
          </div>
        </div>
        <CompanyCarousel companyList={companyList} />
      </div>
    </div>
  );
}

const CompanyCarousel = ({ companyList }) => {
  return (
    <div
      style={{
        overflowX: "auto",
        whiteSpace: "nowrap",
        scrollbarWidth: "none", // Firefox
        msOverflowStyle: "none", // IE & Edge
      }}
      className="relative w-full mt-20"
    >
      <div className="flex items-center gap-32 justify-center">
        {companyList.map((company, index) => (
          <img
            key={index}
            src={company}
            className="object-contain w-24 h-8"
            alt="Company Logo"
          />
        ))}
      </div>
    </div>
  );
};
