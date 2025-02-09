"use client";
import React, { useState } from "react";
import { ArrowRight, MessageSquare, Search } from "lucide-react";
import Link from "next/link";
import TitleWithBg from "../components/Title";
import { blogs } from "../db";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const categories = Array.from(
    blogs
      .reduce((map, blog) => {
        if (!map.has(blog.category)) {
          map.set(blog.category, { name: blog.category, amount: 0 });
        }
        map.get(blog.category).amount += 1;
        return map;
      }, new Map())
      .values()
  );
  const tags = [...new Set(blogs.flatMap((blog) => blog.tags))];

  const filterdBlogs = blogs.filter((blog) => {
    const titleMatch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const categoryMatch =
      !selectedCategory || blog.category === selectedCategory;
    const tagMatch = !selectedTag || blog.tags.includes(selectedTag);
    return titleMatch && categoryMatch && tagMatch;
  });

  return (
    <div>
      <TitleWithBg title={"Blogs."} link={"/blog"} name={"Blogs"} />
      <div className="max-w-7xl mx-auto p-10 py-20 grid md:grid-cols-3 gap-10">
        <BlogList blogs={filterdBlogs} />
        <BlogSidebar
          categories={categories}
          tags={tags}
          blogs={blogs}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          selectedTag={selectedTag}
          setSelectedTag={setSelectedTag}
        />
      </div>
    </div>
  );
}

function BlogList({ blogs }) {
  return (
    <div className="col-span-2 px-16">
      {blogs.map((blog) => (
        <div key={blog.id} className="mb-10 relative h-[43rem]">
          <img src={blog.image} alt={blog.title} className="w-full" />
          <div className="absolute bottom-0 left-0 bg-gray-950 rounded-xl p-4 mx-5 space-y-6">
            <div className="flex items-center gap-4 text-center">
              <p className="text-gray-600 mb-2 bg-slate-900 px-2 p-1 rounded-full">
                {blog.date}
              </p>
              <MessageSquare size={15} />
              <p>{blog.comments.length} comments</p>
            </div>
            <h2 className="text-3xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-2">{blog.content}</p>
            <Link
              href={`/blog/${blog.id}`}
              className="flex items-center relative right-0 group px-8 text-xl text-teal-600 transition-all rounded-full mt-10"
            >
              Read more
              <div className="w-6 h-6 ml-5 -rotate-45">
                <ArrowRight className="w-6 h-6" />
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

function BlogSidebar({
  categories,
  tags,
  blogs,
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  selectedTag,
  setSelectedTag,
}) {
  return (
    <div className="w-full">
      <div className="mb-10 flex justify-center px-4 items-center w-full gap-2 border border-gray-500 rounded-full">
        <input
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-transparent p-2 w-full outline-none"
        />
        <Search />
      </div>
      <hr className="mb-10" />
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-2">Categories</h2>
        <ul className="text-gray-600">
          {categories.map((category) => (
            <li
              key={category.name}
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === category.name ? null : category.name
                )
              }
              className={`mb-2 flex justify-between px-4 bg-gray-900 text-gray-200 py-2 rounded-full cursor-pointer ${
                selectedCategory === category.name ? "bg-teal-600" : ""
              }`}
            >
              <span>{category.name}</span>
              <span>{category.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mb-10" />
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-2">Recent Posts</h2>
        <ul className="text-gray-600 space-y-2">
          {blogs.slice(0, 3).map((blog) => (
            <li
              key={blog.id}
              className="mb-2 flex gap-2 px-4 bg-gray-900 text-gray-200 py-2 rounded-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-24 h-24 rounded-lg"
              />
              <div className="flex text-xs flex-col justify-between py-1 gap-2">
                <span className="px-4 bg-slate-800 rounded-full w-fit p-1">
                  {blog.category}
                </span>
                <span className="line-clamp-3">{blog.content}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <hr className="mb-10" />
      <div className="mb-10">
        <h2 className="text-3xl font-semibold mb-2">Tags</h2>
        <ul className="text-gray-600 grid grid-cols-4 gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-2 text-center bg-gray-900 text-gray-200 py-2 rounded-full cursor-pointer ${
                selectedTag === tag ? "bg-teal-600" : ""
              }`}
            >
              <span className="capitalize">{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
