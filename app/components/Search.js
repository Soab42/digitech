import gsap from "gsap";
import { X } from "lucide-react";
import { LucideSearch } from "lucide-react";
import React, { useEffect } from "react";

export default function Search() {
  const [open, setOpen] = React.useState(false);

  const toggle = () => setOpen(!open);
  useEffect(() => {
    gsap.fromTo(
      ".searchDiv",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [open]);

  return (
    <div className="h-full relative flex items-center  border-x text-slate-200 border-gray-50/20 justify-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div
        onClick={toggle}
        className={`cursor-pointer w-full h-full flex justify-center items-center px-6 p-2 transition-all duration-500 ${
          open ? "bg-slate-800" : ""
        }`}
      >
        {!open ? (
          <LucideSearch size={12} className="buttonDiv" />
        ) : (
          <X size={12} className="buttonDiv" />
        )}
      </div>
      {open && (
        <div className="searchDiv absolute top-20 right-0 w-72 bg-slate-800 items-center px-3 rounded-l-full rounded-br-full border border-gray-50/20 border-t-0 flex">
          <input
            type="Search"
            placeholder="Search"
            className="w-full p-2 bg-transparent  outline-none"
          />
          <LucideSearch size={12} />
        </div>
      )}
    </div>
  );
}
