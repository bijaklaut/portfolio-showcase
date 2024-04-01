import { Metadata } from "next";
import { ProjectTypes } from "@/utils/types";
import { promises as fs } from "fs";
import ProjectDetailWrapper from "@/components/Wrapper/ProjectDetailWrapper";

export const metadata: Metadata = {
  title: "Project | Project Name",
  description: "Project-Name details from Hudaa Eka Saputra Personal Portfolio",
};

export default async function ProjectDetail({
  params,
}: {
  params: { projectName: string };
}) {
  console.log("CWD: ", process.cwd());
  const file = await fs.readFile(process.cwd() + "/src/projects.json", "utf8");
  const projects: ProjectTypes[] = JSON.parse(file);
  const project = projects.find((item) => item.slug == params.projectName);

  return <>{project && <ProjectDetailWrapper project={project} />}</>;
}
