import Link from "next/link";
// import { inter } from "./styles/fontss"

export default function Home() {
  return (
    <section className="flex h-screen w-full items-center justify-center">
      <div className="flex -translate-y-3 flex-col items-center gap-4">
        <nav
          className={`mb-3 flex gap-8 text-lightgray transition-colors [&>*:hover]:text-white [&>*]:duration-300`}
        >
          <Link href={"/projects"}>Projects</Link>
          <Link href={"/about"}>About Me</Link>
          <Link href={"/contact"}>Contact</Link>
        </nav>
        <div className="hero text-[80px] font-bold">{`Hudaa Eka Saputra`}</div>
        <div className="subtitle text-xl font-semibold text-lightgray">{`Front-end Web Developer`}</div>
      </div>
    </section>
  );
}
