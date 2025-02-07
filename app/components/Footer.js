import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
export const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/",
    icon: <Facebook size={20} />,
    color: "bg-blue-600",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: <Instagram size={20} />,
    color: "bg-violet-600",
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/",
    icon: <Linkedin size={20} />,
    color: "bg-blue-800",
  },
];

const services = [
  {
    name: "Web Development",
    url: "/services/web-development",
  },
  {
    name: "Branding",
    url: "/services/branding",
  },
  {
    name: "Design",
    url: "/services/design",
  },
];

const quickLinks = [
  {
    name: "About",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Portfolio",
    url: "/portfolio",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
const aboutUs = `Brief description of your organization and its mission.`;
export const contactInfo = {
  email: "0E4a6@example.com",
  phone: "+1 234 567 890",
  address: "Your Organization Address",
};
const Footer = () => {
  return (
    <footer
      className="bg-gray-800 text-white"
      style={{
        backgroundImage: `url('https://infolio1.themescamp.com/original/wp-content/uploads/sites/2/2023/12/bg1.jpg')`,
        backgroundSize: "cover",
        // backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 py-12 w-full ">
        <div>
          <Link
            href="/contact"
            className="text-5xl group  font-bold mb-4 hover:underline underline-offset-8 hover:tracking-widest transition-all duration-300 flex border-b border-gray-800 py-5"
          >
            Lets Connect{" "}
            <ArrowRight className="w-8 h-8 ml-4 text-emerald-400 group-hover:ml-8 -rotate-45 group-hover:rotate-0 transition-all duration-300" />
          </Link>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex justify-between gap-20">
            <div>
              <h3 className="text-lg font-semibold mb-4">
                <Logo />
              </h3>
              <p className="text-gray-300">{aboutUs}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Email: {contactInfo.email}</li>
                <li>Phone: {contactInfo.phone}</li>
                <li>Address: {contactInfo.address}</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between gap-10">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.url}
                      className="text-gray-300 hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.url}
                      className="text-gray-300 hover:text-white"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300 flex items-center justify-between">
          <p>
            &copy; {new Date().getFullYear()} Your Organization. All rights
            reserved.
          </p>
          <div className="flex">
            {socialLinks.map((link) => (
              <Link
                href={link.url}
                key={link.name}
                className={`text-gray-300 hover:text-white hover:${link.color} transition-colors duration-300 p-2 rounded-full mx-2`}
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
