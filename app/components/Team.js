import Link from "next/link";

import { FacebookIcon, InstagramIcon } from "lucide-react";

import { ArrowRight, Linkedin } from "lucide-react";

const team = [
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/1-1.jpg",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/2-2.jpg",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
  {
    name: "John Doe",
    position: "CEO",
    image:
      "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/3-1.jpg",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];
export default function Team() {
  return (
    <div className="max-w-7xl mx-auto space-y-5 my-28">
      <div>
        <p className="uppercase text-xl text-teal-600 ml-20">OUR TEAM</p>
        <div className="flex justify-between border-r border-t border-gray-800 p-10 rounded-full">
          <h1 className="text-5xl">Meet our legends</h1>
          <Link
            href="/team "
            className="flex group items-center relative right-0 group  px-8 text-xl text-teal-600  transition-all rounded-full"
          >
            <div className="w-0 h-10 transition-all group-hover:w-full  flex justify-center items-center bg-teal-500/10 duration-500 rounded-full absolute left-2"></div>
            Join Us
            <div className="">
              {/* <Blinck /> */}
              <ArrowRight className="w-6 h-6 ml-5 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-10 h-[26rem]  p-5bg-slate-500 overflow-hidden">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
}

export const TeamMember = ({ name, position, image, social }) => {
  return (
    <div className="relative group w-fit ">
      <div className="h-[18rem]  glass rounded-xl p-4 w-full absolute  top-16 left-0 transition-all duration-500 group-hover:left-12 group-hover:rotate-[10deg] ">
        <div className="flex flex-col gap-2 absolute top-4  w-8 right-2">
          <Link
            href="#0"
            className="  border border-gray-600 p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
          >
            <FacebookIcon size={15} />
          </Link>
          <Link
            href="#0"
            className="border border-gray-600 p-2 rounded-full hover:bg-blue-800 transition-colors duration-300"
          >
            <Linkedin size={15} />
          </Link>
          <Link
            href="#0"
            className="  border border-gray-600 p-2 rounded-full hover:bg-violet-600   transition-colors duration-300"
          >
            <InstagramIcon size={15} />
          </Link>
        </div>
      </div>

      <div className="h-[30rem] overflow-hidden relative">
        <img
          src={image}
          alt=""
          className="w-80 h-[25rem] object-cover rounded-3xl group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute left-0 bg-black/10 rounded-sm group-hover:bottom-20 -bottom-5 transition-all duration-500 w-full h-20 backdrop-blur-xl p-2 capitalize text-center">
          <p>{position}</p>
          <p className="text-2xl text-gray-200"> {name}</p>
        </div>
      </div>
    </div>
  );
};
