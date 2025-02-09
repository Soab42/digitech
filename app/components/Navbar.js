"use client";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { Iceland } from "next/font/google";
import Search from "./Search";
import Logo from "./Logo";
import { menuItems } from "../db";
// Iceland;
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  return (
    <nav className="bg-transparent shadow-md fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center  uppercase text-sm">
            {menuItems.map((item) => (
              <div key={item.title} className="relative">
                {item.dropdown ? (
                  <div
                    className="px-3 py-2 text-slate-200 hover:text-emerald-400 cursor-pointer flex items-center "
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown("")}
                  >
                    {item.title}
                    <ChevronDown className="ml-1 h-4 w-4" />

                    {activeDropdown === item.title && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-1">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.title}
                            href={dropItem.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:text-emerald-600"
                          >
                            {dropItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="px-3 py-2 text-slate-200 hover:text-emerald-400"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-5">
            <Search />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.title ? "" : item.title
                        )
                      }
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 flex items-center justify-between"
                    >
                      {item.title}
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    {activeDropdown === item.title && (
                      <div className="pl-4">
                        {item.dropdown.map((dropItem) => (
                          <Link
                            key={dropItem.title}
                            href={dropItem.path}
                            className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                          >
                            {dropItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
