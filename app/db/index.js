import {
  Cloud,
  Code,
  Flower,
  HeartHandshake,
  Lightbulb,
  Microscope,
  MonitorCog,
  Rocket,
  Server,
  ShieldCheck,
  Undo2,
} from "lucide-react";
export const services = [
  {
    id: 1,
    name: "Web Development",
    url: "/services/1",
    icon: <Code className="w-24 h-24 text-teal-500" />,
    description:
      "Custom websites and web apps tailored to your business needs. ",
  },
  {
    id: 2,
    name: "Cloud Solutions",
    url: "/services/2",
    icon: <Cloud className="w-24 h-24 text-blue-500" />,
    description:
      "Seamless cloud migration and scalable cloud architecture solutions.",
  },
  {
    id: 3,
    name: "Cybersecurity",
    url: "/services/3",
    icon: <ShieldCheck className="w-24 h-24 text-red-500" />,
    description:
      "Robust security solutions to protect your data and IT infrastructure.",
  },
  {
    id: 4,
    name: "DevOps & Server Management",
    url: "/services/4",
    icon: <Server className="w-24 h-24 text-gray-500" />,
    description: "Streamlined CI/CD pipelines and reliable server management.",
  },
];
export const process = [
  {
    name: "Research",
    url: "/services/process/research",
    icon: <Microscope className="w-20 h-20 text-teal-500" />,
    description:
      "We conduct research to understand your business and target your needs. ",
  },
  {
    name: "Concept",
    url: "/services/process/concept",
    icon: <Lightbulb className="w-20 h-20 text-teal-500" />,
    description: "We develop a concept that aligns with your goals and goals. ",
  },
  {
    name: "Implementation",
    url: "/services/process/implementation",
    icon: <MonitorCog className="w-20 h-20 text-teal-500" />,
    description:
      "We implement the concept to create a solution that meets your needs. ",
  },
  {
    name: "Handover",
    url: "/services/process/handover",
    icon: <HeartHandshake className="w-20 h-20 text-teal-500" />,
    description:
      "We handover the solution to you for ongoing support and maintenance. ",
  },
];

export const menuItems = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
    // dropdown: [
    //   { title: "Our Services", path: "/services" },
    //   { title: "Service Details", path: "/services/details" },
    // ],
  },
  {
    title: "Portfolio",
    path: "/portfolio",
  },
  {
    title: "Team",
    path: "/team",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

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

export const projects = [
  {
    id: 1,
    title: "Aevoe",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/1.jpg",
    category: "Branding",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/aevoe/",
  },
  {
    id: 2,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/2-4.jpg",
    category: "Art",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design/",
  },
  {
    id: 3,
    title: "Nice guy",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/3.jpg",
    category: "Branding",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/nice-guy/",
  },
  {
    id: 4,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/4-3.jpg",
    category: "Marketing",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-2/",
  },
  {
    id: 5,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/5.jpg",
    category: "Art",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-3/",
  },
  {
    id: 6,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/6.jpg",
    category: "Design",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-4/",
  },
  {
    id: 7,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/7-1.jpg",
    category: "Branding",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-5/",
  },
  {
    id: 8,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/8-1.jpg",
    category: "Design",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-6/",
  },
  {
    id: 9,
    title: "Digital Design",
    image:
      "https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/11/9.jpg",
    category: "Design",
    link: "https://infolio1.themescamp.com/inner-pages/portfolio/digital-design-7/",
  },
];
