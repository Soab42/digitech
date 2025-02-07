import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ServiceCard({ logo, title, description, link }) {
  return (
    <div className="border border-gray-800 rounded-xl p-8 flex flex-col gap-6 w-full sm:w-[25rem] h-[25rem] flex-shrink-0 hover:shadow-lg transition-shadow duration-300">
      <div>{logo}</div>
      <p className="text-2xl font-semibold mt-10">{title}</p>
      <p className="text-sm text-gray-400">{description}</p>
      <Link
        href={link}
        className="flex items-center gap-2 tracking-[.4rem] mt-5 text-teal-500 hover:text-teal-600 transition-colors duration-300 group"
        aria-label={`Read more about ${title}`}
      >
        Read More{" "}
        <ChevronsRight className="w-4 h-4  transition-transform duration-300 group-hover:translate-x-3" />
      </Link>
    </div>
  );
}
