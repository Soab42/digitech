import React from "react";
import TitleWithBg from "../components/Title";
import { Search } from "lucide-react";
import { MessageSquare } from "lucide-react";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";
import { ArrowRight } from "lucide-react";
export const blogs = [
  {
    id: 1,
    title: "10 Tips for Effective Branding",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/1.jpg",
    category: "Branding",
    tags: ["branding", "marketing", "design"],
    author: "John Doe",
    date: "2023-10-15",
    content:
      "Branding is more than just a logo or a tagline. It's the entire experience your customers have with your company. Here are 10 tips to help you create a strong brand identity...",
    comments: [
      {
        id: 1,
        name: "Jane Smith",
        comment: "Great article! Really helped me understand branding better.",
        date: "2023-10-16",
      },
      {
        id: 2,
        name: "Mike Johnson",
        comment:
          "I especially liked the tip about consistency. Very insightful!",
        date: "2023-10-17",
      },
    ],
  },
  {
    id: 2,
    title: "The Future of Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/2-4.jpg",
    category: "Design",
    tags: ["design", "technology", "trends"],
    author: "Emily Brown",
    date: "2023-09-28",
    content:
      "Digital design is evolving rapidly, with new tools and trends emerging every year. In this post, we explore what the future holds for digital design and how you can stay ahead...",
    comments: [
      {
        id: 1,
        name: "Chris Evans",
        comment: "Exciting stuff! Can't wait to see where design is headed.",
        date: "2023-09-29",
      },
    ],
  },
  {
    id: 3,
    title: "Art and Creativity in Modern Marketing",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/3.jpg",
    category: "Art",
    tags: ["art", "creativity", "marketing"],
    author: "Laura Wilson",
    date: "2023-08-10",
    content:
      "Art and creativity play a crucial role in modern marketing. From visual storytelling to emotional connections, learn how to leverage art in your marketing strategies...",
    comments: [
      {
        id: 1,
        name: "Sarah Lee",
        comment: "This was such an inspiring read. Thank you!",
        date: "2023-08-11",
      },
      {
        id: 2,
        name: "David Green",
        comment: "I never thought about art in this way. Great perspective!",
        date: "2023-08-12",
      },
    ],
  },
  {
    id: 4,
    title: "The Role of Design in User Experience",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/4-3.jpg",
    category: "Design",
    tags: ["design", "ux", "ui"],
    author: "Michael Clark",
    date: "2023-07-22",
    content:
      "Design is at the heart of user experience. In this post, we discuss how good design can enhance usability, accessibility, and overall user satisfaction...",
    comments: [
      {
        id: 1,
        name: "Anna White",
        comment: "Very informative. I learned a lot about UX design!",
        date: "2023-07-23",
      },
    ],
  },
  {
    id: 5,
    title: "Creative Marketing Strategies for 2024",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/5.jpg",
    category: "Marketing",
    tags: ["marketing", "strategy", "trends"],
    author: "Sophia Martinez",
    date: "2023-06-15",
    content:
      "As we approach 2024, it's time to rethink your marketing strategies. Here are some creative ideas to help you stand out in a crowded marketplace...",
    comments: [
      {
        id: 1,
        name: "Daniel Harris",
        comment: "These strategies are spot on. Thanks for sharing!",
        date: "2023-06-16",
      },
    ],
  },
];
export default function BlogsPage() {
  const categories = [
    ...new Set(
      blogs.map((blog) => {
        return {
          name: blog.category,
          amount: blogs.filter((b) => b.category === blog.category).length,
        };
      })
    ),
  ];
  const tags = [
    ...new Set(
      ...blogs.map((blog) => {
        return blog.tags.map((tag) => tag);
      })
    ),
  ];
  return (
    <div>
      <TitleWithBg title={"Blogs."} link={"/blog"} name={"Blogs"} />
      <div className="max-w-7xl mx-auto p-10 py-20 grid md:grid-cols-3 gap-10">
        {/* contetnt */}
        <div className="col-span-2 px-16">
          {blogs.map((blog) => (
            <div key={blog.id} className="mb-10 relative h-[43rem]">
              <img src={blog.image} alt={blog.title} className="w-full" />
              <div className="absolute bottom-0 left-0 bg-gray-950 rounded-xl p-4 mx-5 space-y-6">
                <div className="flex  items-center gap-4 text-center">
                  <p className="text-gray-600 mb-2 bg-slate-900 px-2 p-1 rounded-full">
                    {blog.date}
                  </p>
                  <MessageSquare size={15} />
                  <p>{blog.comments.length} comments</p>
                </div>
                <h2 className="text-3xl font-semibold mb-2 ">{blog.title}</h2>

                <p className="text-gray-600 mb-2">{blog.content}</p>
                <Link
                  href={`/blog/${blog.id}`}
                  className="flex items-center relative right-0 group  px-8 text-xl text-teal-600  transition-all rounded-full mt-10"
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
        {/* menu, search, filter */}
        <div className="w-full">
          {/* search */}
          <diV className="mb-10 flex justify-center px-4 items-center w-full gap-2  border border-gray-500 rounded-full">
            <input
              type="search"
              placeholder="Search"
              className="bg-transparent p-2 w-full outline-none"
            />
            <Search />
          </diV>

          <hr className="mb-10" />
          {/* category */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-2">Categories</h2>
            <ul className="text-gray-600">
              {categories.map((blog) => (
                <li
                  key={blog.name}
                  className="mb-2 flex justify-between px-4 bg-gray-900 text-gray-200 py-2 rounded-full"
                >
                  <span>{blog.name}</span>
                  <span>{blog.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          <hr className="mb-10" />
          {/* recents posts */}
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
                    <span className="px-4 bg-slate-800  rounded-full w-fit p-1">
                      {blog.category}
                    </span>
                    <span className="line-clamp-3">{blog.content}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <hr className="mb-10" />
          {/* tags */}
          <div className="mb-10">
            <h2 className="text-3xl font-semibold mb-2">Tags</h2>
            <ul className="text-gray-600 grid grid-cols-4 gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className=" px-2 text-center  bg-gray-900 text-gray-200 py-2 rounded-full"
                >
                  <span className="capitalize">{tag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
