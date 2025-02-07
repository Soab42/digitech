import React from "react";

export default function BgQrapper({ children, className = "h-[143.5vh]" }) {
  return (
    <div
      className={`bg-gray-700 bg-cente text-slate-200 ${className}`}
      style={{
        backgroundImage: `url('https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/12/bg1.jpg')`,
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
        // backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
}
