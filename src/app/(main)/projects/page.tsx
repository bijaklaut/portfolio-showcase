import { ProjectTypes } from "@/utils/types";
import { promises as fs } from "fs";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hudaa Eka Saputra | Projects",
  description: "Personal website to showcase Hudaa Eka Saputra' Portfolios",
};

export default async function Projects() {
  const file = await fs.readFile(process.cwd() + "/src/projects.json", "utf8");
  const projects: ProjectTypes[] = JSON.parse(file);

  return (
    <section className="bg-gradient-to-b from-darkprimary to-black py-16">
      <div className="mx-auto w-full max-w-[1280px] p-5">
        <div className="header flex flex-col gap-10">
          <h1 className="text-5xl font-semibold">Projects</h1>
          <p className="text-lightgray">
            Hall of projects. Contains all my works, part of my web developing
            journey
          </p>
        </div>
        <hr className="my-12 border-lightgray/30" />
        <div className="projects-container flex flex-wrap justify-center gap-5">
          {projects.map((project, index) => {
            return (
              <div
                key={index}
                className="card relative flex w-fit max-w-[400px] flex-col justify-between gap-5 rounded-md border border-lightgray/50 p-5 text-lightgray"
              >
                <div className="mb-5 flex flex-col gap-5">
                  <span className="text-lightgray/60">
                    {project.creation_date}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    {project.project_name}
                  </h3>
                  <p className="my-5">{project.short_desc}</p>
                </div>
                <div className="flex items-center gap-5 text-sm">
                  {project.demo_link && (
                    <div className="group relative box-content cursor-pointer overflow-hidden rounded-lg border border-white px-3 py-1">
                      <span className="absolute bottom-0 left-0 right-0 block h-0 w-full rounded-t-[20%] bg-white transition-all duration-300 group-hover:h-[120%]"></span>
                      <Link
                        href={project.demo_link}
                        className="relative text-white transition-all duration-300 group-hover:text-darkgray"
                      >
                        Live Demo
                      </Link>
                    </div>
                  )}
                  <Link
                    href={`projects/${project.slug}`}
                    className="transition-all duration-300 hover:text-white"
                  >
                    Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
