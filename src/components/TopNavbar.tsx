"use client";

import Link from "next/link";
import { LongArrowLeftSvg } from "./SvgGroup";
import { useCallback, useEffect, useRef } from "react";

export const TopNavbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const scrollHandler = useCallback(() => {
    if (navbarRef.current) {
      if (window.scrollY > 0) {
        navbarRef.current.classList.replace("rest-navbar", "fixed-navbar");
      } else {
        navbarRef.current.classList.replace("fixed-navbar", "rest-navbar");
      }
    }
  }, [navbarRef]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="rest-navbar fixed z-10 flex h-16 w-full justify-between px-16 py-5 text-white/60 transition-all duration-300"
    >
      <div className="[&>*:hover]:text-white [&>*]:transition-all [&>*]:duration-300">
        <Link href={"/"}>
          <LongArrowLeftSvg className="h-8 w-8 stroke-current" />
        </Link>
      </div>
      <div className="flex gap-8 [&>*:hover]:text-white [&>*]:transition-all [&>*]:duration-300">
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/about"}>About Me</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
    </nav>
  );
};
