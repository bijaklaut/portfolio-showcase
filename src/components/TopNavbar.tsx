"use client";

import Link from "next/link";
import { LongArrowLeftSvg } from "./SvgGroup";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export const TopNavbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState("");

  const scrollHandler = useCallback(() => {
    if (navbarRef.current) {
      if (window.scrollY > 0) {
        navbarRef.current.classList.replace("rest-navbar", "fixed-navbar");
      } else {
        navbarRef.current.classList.replace("fixed-navbar", "rest-navbar");
      }
    }
  }, [navbarRef]);

  const getPrevPath = useCallback(() => {
    const splittedPath = pathname.split("/");
    splittedPath.pop();

    if (splittedPath.join("/")) {
      setPrevPath(splittedPath.join("/"));
    } else {
      setPrevPath("/");
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  useEffect(() => {
    getPrevPath();
  }, [pathname]);

  return (
    <nav
      ref={navbarRef}
      className="rest-navbar fixed z-10 flex h-16 w-full justify-between px-16 py-5 text-white/60 transition-all duration-300"
    >
      <div className="[&>*:hover]:text-white [&>*]:transition-all [&>*]:duration-300">
        <Link href={prevPath}>
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
