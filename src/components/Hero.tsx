"use client";

import { inter } from "@/app/styles/fonts";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex -translate-y-3 flex-col items-center gap-4">
      <nav
        className={`${inter.className} flex animate-fade-in gap-5 text-sm text-lightgray transition-colors sm:text-base lg:gap-8 lg:text-lg [&>*:hover]:text-white [&>*]:duration-300`}
      >
        <Link href={"/projects"}>Projects</Link>
        <Link href={"/about"}>About Me</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
      <div className="h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="font-outline z-10 w-full animate-title cursor-default whitespace-nowrap bg-white bg-clip-text text-center text-3xl font-semibold text-transparent transition-all duration-1000 sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[80px]">
        Hudaa Eka Saputra
      </h1>
      <div className="h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="subtitle animate-fade-in text-base font-semibold text-lightgray sm:text-lg lg:text-2xl">{`Frontend Web Developer`}</div>
    </div>
  );
};
