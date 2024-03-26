import { Metadata } from "next";
import Link from "next/link";
import {
  GithubSvg,
  RedirectArrowSvg,
} from "../../../../../components/SvgGroup";
import { Slider } from "../../../../../components/Slider";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Project | Project Name",
  description: "Project-Name details from Hudaa Eka Saputra Personal Portfolio",
};

export default function ProjectDetail() {
  return (
    <section className="min-h-screen">
      <div className="header w-full bg-gradient-to-b from-darkprimary to-black py-32">
        <div className="header-content mx-auto flex w-full max-w-[1024px] flex-col gap-10">
          <h1 className="text-center text-5xl font-semibold">
            Heymale Clone E-Commerce
          </h1>
          <p className="my-5 text-center text-lightgray">
            This project is a modified clone version of Heymale Official
            website. The creation of this project is for personal use only.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia qui
            asperiores quo nesciunt reiciendis maiores nulla consectetur quidem
            ducimus quis. Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Sit, dicta eos! Expedita, placeat assumenda corrupti nobis
            voluptatibus magnam eaque alias.
          </p>
          <div className="flex items-center justify-center gap-5">
            <Link
              href={"#"}
              className="flex items-center justify-center gap-2 rounded-md border border-primary/70 px-4 py-1 text-center transition-all duration-300 hover:bg-primary"
            >
              <span>Live Demo</span>
              <RedirectArrowSvg className="h-5 w-5 stroke-current" />
            </Link>
            <Link
              href={"#"}
              className="flex items-center justify-center gap-2 rounded-md border border-primary/70 px-4 py-1 text-center transition-all duration-300 hover:bg-primary"
            >
              <span>See Repository</span>
              <GithubSvg className="h-5 w-5 fill-current" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto mb-20 flex w-full max-w-[1024px] items-stretch justify-center gap-8">
        <div className="flex w-full max-w-[500px] flex-col rounded-md bg-darkprimary px-10 py-14 text-center">
          <h3 className="mb-7 text-[22px] font-semibold text-white/90">
            Features
          </h3>
          <ul className="flex flex-col gap-2 text-lightgray">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum</li>
            <li>dolor sit amet.</li>
            <li>ipsum dolor sit amet.</li>
            <li>sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div className="flex w-full max-w-[500px] flex-col rounded-md bg-darkprimary px-10 py-14 text-center">
          <h3 className="mb-7 text-[22px] font-semibold text-white/90">
            Tech / Languages
          </h3>
          <ul className="flex flex-col gap-2 text-lightgray">
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript (Typescript)</li>
            <li>Next JS</li>
            <li>Daisy UI</li>
          </ul>
        </div>
      </div>
      <div className="snapshot w-full bg-gradient-to-t from-darkprimary to-black py-20">
        <div className="snapshot-content mx-auto flex w-full max-w-[1024px] flex-col items-center justify-center gap-20">
          <h2 className="text-center text-3xl font-semibold">Snapshot</h2>
          <div className="flex gap-4 px-5 py-2 [&>*:has(:checked)]:bg-primary/80 [&>*:not(:has(:checked)):hover]:bg-darkprimary/100 [&>*:not(:has(:checked))]:bg-darkprimary/50 [&>*]:cursor-pointer [&>*]:rounded-xl [&>*]:px-10 [&>*]:py-2 [&>*]:transition-all [&>*]:duration-300">
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
