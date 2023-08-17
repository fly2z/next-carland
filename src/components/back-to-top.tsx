"use client";

import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function BackToTop() {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Link
      to="home"
      smooth={true}
      className={`${
        !isActive && "hidden"
      } fixed bg-accent hover:bg-accent-hover w-12 h-12 right-16
     bottom-11 z-10 cursor-pointer flex justify-center items-center text-white
     border-2 border-white rounded-full`}
    >
      <FaChevronUp className="" />
    </Link>
  );
}
