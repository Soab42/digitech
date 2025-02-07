import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white px-4 py-3 flex justify-between">
      <div>
        <h1 className="text-lg font-semibold">Tech Company</h1>
      </div>
      <nav className="flex gap-x-4">
        <Link href="/about" className="hover:text-blue-500">
          About Me
        </Link>
        <Link href="/services" className="hover:text-blue-500">
          Services/Portfolio
        </Link>
        <Link href="/testimonials" className="hover:text-blue-500">
          Testimonials
        </Link>
      </nav>
    </header>
  );
};

export default Header;
