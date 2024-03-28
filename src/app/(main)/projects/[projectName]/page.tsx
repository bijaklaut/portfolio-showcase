import { Metadata } from "next";
import Link from "next/link";
import { GithubSvg, RedirectArrowSvg } from "../../../../components/SvgGroup";
import { Slider } from "../../../../components/Slider";
import { ProjectTypes } from "@/utils/types";
import { promises as fs } from "fs";

export const metadata: Metadata = {
  title: "Project | Project Name",
  description: "Project-Name details from Hudaa Eka Saputra Personal Portfolio",
};

export default async function ProjectDetail({
  params,
}: {
  params: { projectName: string };
}) {
  const file = await fs.readFile(process.cwd() + "/src/projects.json", "utf8");
  const projects: ProjectTypes[] = JSON.parse(file);
  const project = projects.find((item) => item.slug == params.projectName);
  return (
    <section className="min-h-screen">
      {project ? (
        <>
          <div className="header w-full bg-gradient-to-b from-darkprimary to-black py-32">
            <div className="header-content mx-auto flex w-full max-w-[1024px] flex-col gap-10">
              <h1 className="text-center text-5xl font-semibold">
                {project.project_name}
              </h1>
              <p className="my-5 text-justify text-lightgray">
                {project.long_desc} Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Vel iusto placeat voluptatem unde doloremque.
                Praesentium ipsa neque optio in corrupti aliquam repellendus
                expedita non consequatur sapiente ipsam, eos at nemo
                voluptatibus nihil tempore est ex eligendi maxime libero
                dignissimos odio esse, voluptate accusamus. Dignissimos,
                voluptatem mollitia.
              </p>
              <div className="flex items-center justify-center gap-5">
                {project.demo_link && (
                  <Link
                    href={project.demo_link}
                    className="flex items-center justify-center gap-2 rounded-md border border-primary/70 px-4 py-1 text-center transition-all duration-300 hover:bg-primary"
                  >
                    <span>Live Demo</span>
                    <RedirectArrowSvg className="h-5 w-5 stroke-current" />
                  </Link>
                )}
                {project.repo_link && (
                  <Link
                    href={project.repo_link}
                    className="flex items-center justify-center gap-2 rounded-md border border-primary/70 px-4 py-1 text-center transition-all duration-300 hover:bg-primary"
                  >
                    <span>See Repository</span>
                    <GithubSvg className="h-5 w-5 fill-current" />
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="mx-auto grid w-full max-w-[1024px] grid-cols-2 items-center gap-10 rounded-md px-10 py-32 text-center">
            <h3 className="text-3xl font-semibold text-white/90">
              Tech & Languages
            </h3>
            <div className="mx-auto flex w-full max-w-[700px] flex-wrap items-center justify-stretch gap-2 text-lightgray">
              {project.tech.map((item, index) => (
                <div
                  key={index}
                  className="cursor-default rounded-lg border border-primary px-3 py-px text-white transition-all duration-200 hover:bg-primary"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="mx-auto my-32 flex min-h-[300px] w-full flex-col items-center justify-center gap-12 bg-darkprimary/80 px-10 py-20 text-center">
            <h3 className="text-3xl font-semibold text-white/90">Features</h3>
            <ol className="mx-auto flex w-full max-w-[600px] flex-col gap-2 text-left text-lightgray">
              {project.features.map((item, index) => (
                <li key={index} className="list-disc ps-5">
                  {item}
                </li>
              ))}
            </ol>
          </div>

          <div className="snapshot w-full bg-gradient-to-t from-darkprimary to-black pb-40 pt-10">
            <div className="snapshot-content mx-auto flex w-full max-w-[1024px] flex-col items-center justify-center gap-14">
              <h2 className="text-center text-3xl font-semibold">Snapshot</h2>
              <div className="flex gap-4 px-5 py-2 [&>*:has(:checked)]:bg-primary/80 [&>*:not(:has(:checked)):hover]:bg-darkprimary/100 [&>*:not(:has(:checked))]:bg-darkprimary/50 [&>*]:cursor-pointer [&>*]:rounded-xl [&>*]:px-8 [&>*]:py-2 [&>*]:transition-all [&>*]:duration-300">
                <label htmlFor="mobile">
                  <input
                    className="hidden"
                    type="radio"
                    name="breakpoint"
                    id="mobile"
                  />
                  <span>Mobile</span>
                </label>
                <label htmlFor="tablet">
                  <input
                    className="hidden"
                    type="radio"
                    name="breakpoint"
                    id="tablet"
                  />
                  <span>Tablet</span>
                </label>
                <label htmlFor="desktop">
                  <input
                    className="hidden"
                    type="radio"
                    name="breakpoint"
                    id="desktop"
                  />
                  <span>Desktop</span>
                </label>
              </div>
              <Slider images={images} />
            </div>
          </div>
        </>
      ) : (
        "Loading"
      )}
    </section>
  );
}

const images = [
  {
    url: `/img/slide_1.jpg`,
    author: "Sea Sage",
    title: "Groot",
  },
  {
    url: `/img/slide_2.jpg`,
    author: "Sea Sage",
    title: "Ironman",
  },
  {
    url: `/img/slide_3.jpg`,
    author: "Sea Sage",
    title: "Antman",
  },
  {
    url: `/img/slide_4.jpg`,
    author: "Sea Sage",
    title: "Dr. Strange",
  },
  {
    url: `/img/slide_5.jpg`,
    author: "Sea Sage",
    title: "Black Panther",
  },
];
