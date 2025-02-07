import React from "react";
import ScrollBar from "./ScrollBar";
const context = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "Branding",
  "SEO Optimization",
];
export default function ServicesScroller() {
  return (
    <div className="h-48 my-48 ">
      <ScrollBar context={context} fontSize="8rem" />
    </div>
  );
}
