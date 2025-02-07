import HeroSection from "./components/Heroection";

import ExpeienceSection from "./components/ExpeienceSection";
import Projects from "./components/Projects";
import ScrollBar from "./components/ScrollBar";
import ServicesSection from "./components/ServicesSection";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Blinck from "./components/Blinck";
import Link from "next/link";
import { Link2 } from "lucide-react";
import Blogs from "./components/Blogs";
import Company from "./components/Company";
import ServicesScroller from "./components/ServicesScroller";

export default function HomePage() {
  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <ExpeienceSection />
      <ServicesSection />
      <ServicesScroller />
      <Projects />
      <Testimonials />
      <Team />
      <Blogs />
      <Company />
    </div>
  );
}
