"use client";

import Link from "next/link";
import {
  AboutSvg,
  BlankCodeSvg,
  ContactSvg,
  LongArrowLeftSvg,
} from "./SvgGroup";
import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import cx from "classnames";

export const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const [prevPath, setPrevPath] = useState("");

  const mobileNavClass = useCallback(
    (url: string) =>
      cx({
        "group flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200":
          true,
        "bg-primary cursor-default": pathname.includes(url),
        "hover:bg-primary/50": !pathname.includes(url),
      }),
    [pathname],
  );

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
    <>
      <nav
        ref={navbarRef}
        className="rest-navbar fixed z-10 hidden h-16 w-full justify-between border-b py-5 text-white/60 transition-all duration-200 sm:flex sm:px-8 lg:px-16"
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
      <nav className="fixed bottom-3 left-1/2 z-10 w-full max-w-[325px] -translate-x-1/2 rounded-xl bg-gradient-to-br from-black/10 via-white/30 to-black/10 px-5 py-3 backdrop-blur-md sm:hidden">
        <div className="flex w-full justify-center gap-8 text-white">
          <Link href={prevPath} className={mobileNavClass("none")}>
            <LongArrowLeftSvg className="h-6 w-6 stroke-current" />
          </Link>
          <Link href={"/projects"} className={mobileNavClass("/projects")}>
            <BlankCodeSvg className="h-6 w-6 fill-current" />
          </Link>
          <Link href={"/about"} className={mobileNavClass("/about")}>
            <AboutSvg className="h-6 w-6 fill-current" />
          </Link>
          <Link href={"/contact"} className={mobileNavClass("/contact")}>
            <ContactSvg className="h-6 w-6 fill-current" />
          </Link>
        </div>
      </nav>
    </>
  );
};
