import ProjectsWrapper from "@/components/Wrapper/ProjectsWrapper";
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

  return <ProjectsWrapper projects={projects} />;
}
