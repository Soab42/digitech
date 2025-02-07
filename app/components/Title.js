import React from "react";
import BgQrapper from "./BgQrapper";
import Link from "next/link";

export default function TitleWithBg({ title, link, name }) {
  return (
    <BgQrapper className="h-[50vh]" backgroundSize="contain">
      <div className="w-full h-full flex justify-center items-center flex-col gap-10">
        <h1 className="text-7xl tracking-wider mt-10 uppercase">{title}</h1>
        <div className=" flex gap-5 items-center ">
          <Link
            href="/"
            className="text-lg text-gray-200 hover:text-gray-400 transition-colors duration-300"
          >
            Home
          </Link>{" "}
          |
          <Link href={link} className="text-lg text-emerald-600">
            {name}
          </Link>
        </div>
      </div>
    </BgQrapper>
  );
}
