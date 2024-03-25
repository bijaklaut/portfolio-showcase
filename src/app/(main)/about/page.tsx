import { Metadata } from "next";
import { CodeSvg, DatabaseSvg } from "../../../../components/SvgGroup";

export const metadata: Metadata = {
  title: "Hudaa Eka Saputra | About",
  description: "Personal website to showcase Hudaa Eka Saputra' Portfolios",
};

export default function About() {
  return (
    <section className="pb-20">
      <div className="about mb-20 flex w-full items-center gap-10 bg-gradient-to-b from-darkprimary to-black px-32 py-32">
        <div className="min-w-[40%] text-center text-5xl font-semibold">
          About Me
        </div>
        <div className="text-justify text-lightgray">
          A Front-End Developer with over 3 years of learning experience website
          application development. Skilled in designing and developing web
          applications using up-to-date technologies. Proficiently using
          Javascript (Typescript), HTML, CSS (Tailwind CSS), MongoDB, Next JS,
          and Express JS. Currently studying at Mercu Buana University with
          current GPA 3.69.
          <br />
          <br />I love creating things especially one that help other people,
          and web developing makes that possible. In the process of developing a
          website, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Ullam dolore libero quaerat esse facere ipsa sed sit perspiciatis
          minima possimus? Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Aliquam qui cum at accusamus odio laudantium voluptatem
          deserunt, voluptate obcaecati tenetur.
        </div>
      </div>
      <div className="flex items-stretch justify-center gap-14">
        <div className="flex w-full max-w-[450px] flex-col items-center gap-3 rounded-lg bg-darkprimary px-5 py-14 text-lightgray">
          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white text-darkprimary">
            <CodeSvg className="h-12 w-12 fill-current" />
          </div>
          <span className="text-xl font-semibold text-white">
            Frontend Web Development
          </span>
          <span className="my-3">Here lies, the essence of creativities</span>
          <h3 className="font-semibold text-white">Got experience on :</h3>
          <div className="flex flex-col items-center">
            <span>HTML</span>
            <span>CSS (Tailwind CSS)</span>
            <span>Javascript (Typescript)</span>
            <span>React JS</span>
            <span>Next JS</span>
            <span>Daisy UI</span>
            <span>Bootstrap</span>
          </div>
        </div>
        <div className="flex w-full max-w-[450px] flex-col items-center gap-3 rounded-lg bg-darkprimary px-5 py-14 text-lightgray">
          <div className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white text-darkprimary">
            <DatabaseSvg className="h-10 w-10 stroke-current" />
          </div>
          <span className="text-xl font-semibold text-white">
            Backend Web Development
          </span>
          <span className="my-3">This is my so-so backend skills</span>
          <h3 className="font-semibold text-white">Got experience on :</h3>
          <div className="flex flex-col items-center">
            <span>Node JS</span>
            <span>Express JS</span>
            <span>Mongo DB (Mongoose)</span>
            <span>MySQL</span>
            <span>Git</span>
            <span>AWS S3 Storage</span>
            <span>Midtrans Payment Gateway</span>
          </div>
        </div>
      </div>
    </section>
  );
}
