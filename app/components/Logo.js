import { Iceland } from "next/font/google";
import Link from "next/link";
import React from "react";
const iceland = Iceland({ subsets: ["latin"], weight: "400" });

export default function Logo() {
  return (
    <Link
      href="/"
      className={`text-4xl font-bold text-slate-200 ${iceland.className}`}
    >
      DigiTech
    </Link>
  );
}
