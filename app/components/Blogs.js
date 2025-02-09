import { Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { blogs } from "../db";

export default function BlogList() {
  return (
    <div className="max-w-7xl mx-auto space-y-5 bg-gray-950 py-28">
      <div>
        <p className="uppercase text-xl text-teal-600 ml-20">OUR BLOG</p>
        <div className="flex justify-between border-r border-t border-gray-800 p-10 rounded-full">
          <h1 className="text-5xl">Read Latest News</h1>
          <Link
            href="/team"
            className="flex items-center relative right-0 group px-8 text-xl text-teal-600 transition-all rounded-full"
          >
            <div className="w-0 h-10 transition-all group-hover:w-full flex justify-center items-center bg-teal-500/10 duration-500 rounded-full absolute left-2" />
            View all posts
            <Link2 className="w-6 h-6 ml-5 -rotate-45" />
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {blogs.slice(0, 2).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}

const BlogCard = ({ blog }) => {
  return (
    <div>
      <div className="relative group w-[37rem] h-[14rem] bg-slate-700/20 rounded-xl  flex justify-center items-center overflow-hidden">
        <div className="absolute  gap-2 justify-center items-center rounded-tl-lg rounded-br-lg transition-all  duration-500 top-0 -left-[10rem]  flex group-hover:left-0 w-40 h-16  bg-teal-500/10 backdrop-blur-xl">
          <img
            src={blog.image}
            className="w-12 h-12 rounded-full object-cotain"
          />
          <div className="text-xs capitalize">
            <p>posted By</p>
            <h1>{blog.author}</h1>
          </div>
        </div>
        <img src={blog.image} className="w-72 h-54 rounded-xl" />
        <div className="flex flex-col gap-2 p-4 h-full  w-full">
          <p className="bg-gray-800  rounded-full text-sm w-28 p-1 text-center">
            {blog.category}
          </p>
          <h1 className="text-2xl">{blog.title}</h1>
          <p className="uppercase text-sm mt-10">{blog.date}</p>
        </div>
      </div>
    </div>
  );
};
