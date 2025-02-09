import Link from "next/link";
import ContactForm from "../components/ContactForm";
import { contactInfo, socialLinks } from "../components/Footer";
import TitleWithBg from "../components/Title";
// import DarkModeMap from "../components/Map";

export default function ContactPage() {
  return (
    <div>
      <TitleWithBg title={"Contact Us."} link={"/contact"} name={"Contact"} />

      <div className="p-10 max-w-7xl mx-auto flex justify-center items-center">
        <div
          style={{
            backgroundImage:
              "url('https://infolio1.themescamp.com/inner-pages/wp-content/uploads/sites/9/2023/12/map.png')",
            backgroundSize: "cover",
          }}
          className="w-1/2 h-full bg-blue-600 shadow-2xl shadow-blue-600/70 rounded-xl bg-center p-8 py-16 space-y-12"
        >
          <h1 className="text-2xl underline  mt-10 p-3">{contactInfo.phone}</h1>
          <div className="border-b border-gray-300 p-3">
            <h1 className="text-2xl">Address</h1>
            <p className="text-gray-300">{contactInfo.address}</p>
          </div>
          <div className="border-b border-gray-300 p-3">
            <h1 className="text-2xl ">Email</h1>
            <p>{contactInfo.email}</p>
          </div>
          <div className="flex items-center ">
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
        <ContactForm />
      </div>
      {/* <DarkModeMap /> */}
      <div className="w-full h-[50vh] mt-28 ">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          loading="lazy"
          src="https://maps.google.com/maps?q=Dhaka&amp;t=m&amp;z=11&amp;output=embed&amp;iwloc=near"
          title="Los Angeles, CA, USA"
          aria-label="Los Angeles, CA, USA"
        ></iframe>
      </div>
    </div>
  );
}
