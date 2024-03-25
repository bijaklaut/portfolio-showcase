import Link from "next/link";
import { inter } from "./styles/fonts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hudaa Eka Saputra | Home",
  description: "Personal website to showcase Hudaa Eka Saputra' Portfolios",
};

export default function Home() {
  return (
    <section className="flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-darkprimary to-black">
      <div className="flex -translate-y-3 flex-col items-center gap-4">
        <nav
          className={`${inter.className} flex animate-fade-in gap-8 text-lightgray transition-colors [&>*:hover]:text-white [&>*]:duration-300`}
        >
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about"}>About Me</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <div className="h-px w-screen animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="font-outline z-10 animate-title cursor-default whitespace-nowrap bg-white bg-clip-text text-[80px] font-semibold text-transparent transition-all duration-1000">
          Hudaa Eka Saputra
        </h1>
        <div className="h-px w-screen animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="subtitle animate-fade-in text-xl font-semibold text-lightgray">{`Frontend Web Developer`}</div>
      </div>
    </section>
  );
}
