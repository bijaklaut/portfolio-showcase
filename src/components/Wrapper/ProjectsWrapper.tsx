"use client";

import { ProjectTypes } from "@/utils/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/variantsMotion";

const ProjectsWrapper = ({ projects }: { projects: ProjectTypes[] }) => {
  return (
    <section className="bg-gradient-to-b from-darkprimary to-black pb-16 pt-10 sm:py-16">
      <motion.div
        variants={slideIn}
        initial="hidden"
        whileInView={"visible"}
        className="mx-auto w-full max-w-[1400px] p-5 sm:p-8 lg:px-16"
      >
        <motion.div variants={slideIn} className="header flex flex-col gap-10">
          <h1 className="text-5xl font-semibold">Projects</h1>
          <p className="text-lightgray">
            Hall of projects. Contains all my works, part of my web developing
            journey
          </p>
        </motion.div>
        <motion.hr className="my-12 border-lightgray/30" />
        <motion.div
          variants={slideIn}
          className="projects-container flex w-full flex-wrap justify-center gap-5"
        >
          {projects.map((project, index) => {
            return (
              <motion.div
                variants={slideIn}
                key={index}
                className="card relative flex w-full max-w-[500px] flex-col justify-between gap-5 rounded-md border border-lightgray/50 bg-darkprimary/20 p-5 text-lightgray md:max-w-[48%] xl:max-w-[32%]"
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
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectsWrapper;
