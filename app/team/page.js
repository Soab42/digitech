import React from "react";
import TitleWithBg from "../components/Title";
import Team, { TeamMember } from "../components/Team";

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
      "https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/11/1-1.jpg",
    social: {
      facebook: "https://www.facebook.com/",
      instagram: "https://www.instagram.com/",
      linkedin: "https://www.linkedin.com/",
    },
  },
];
export default function TeamPage() {
  return (
    <div>
      <TitleWithBg title={"Our Team."} link={"/team"} name={"Team"} />
      <div className="grid grid-cols-3 gap-10 max-w-7xl mx-auto p-10 py-20">
        {team.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
