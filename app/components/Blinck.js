import React from "react";

export default function Blinck() {
  return (
    <div className="w-8 h-8 flex justify-center items-center relative">
      <div className="w-4 h-4 flex justify-center items-center bg-teal-500 rounded-full absolute left-2 animate-ping"></div>{" "}
      <div className="w-2 h-2 flex justify-center items-center  bg-teal-500 rounded-full absolute left-[.75rem] animate-pulse "></div>{" "}
      <div className="w-4 h-4 flex justify-center items-center border  border-green-500 rounded-full absolute left-[.48rem] "></div>{" "}
    </div>
  );
}
