"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/variantsMotion";
import { CodeSvg, DatabaseSvg } from "../SvgGroup";

const AboutWrapper = () => {
  return (
    <section className="pb-24">
      <div className="about items-center bg-gradient-to-b from-darkprimary to-black px-8 py-16 sm:mb-10 sm:px-16 sm:pt-32 md:mb-20 md:p-40 lg:px-32 lg:py-48 xl:mb-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false }}
          className="mx-auto flex w-full max-w-[1024px] flex-col items-center lg:flex-row lg:gap-10"
        >
          <motion.div
            variants={fadeIn}
            className="mb-20 text-center text-4xl font-semibold sm:min-w-[40%] sm:text-5xl"
          >
            About Me
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="text-pretty text-justify text-lightgray"
          >
            A Front-End Developer with over 3 years of learning experience
            website application development. Skilled in designing and developing
            web applications using up-to-date technologies. Proficiently using
            Javascript (Typescript), HTML, CSS (Tailwind CSS), MongoDB, Next JS,
            and Express JS. Currently studying at Mercu Buana University with
            current GPA 3.69.
            <br />
            <br />I love creating things especially one that help other people,
            and web developing makes that possible. In the process of developing
            a website, Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ullam dolore libero quaerat esse facere ipsa sed sit perspiciatis
            minima possimus? Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Aliquam qui cum at accusamus odio laudantium voluptatem
            deserunt, voluptate obcaecati tenetur.
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col items-center justify-center px-5 pt-16">
        <motion.h3
          variants={slideIn}
          initial="hidden"
          whileInView={"visible"}
          className="mb-20 text-center text-4xl font-semibold"
        >
          Super
          <motion.span
            initial={{ color: "rgb(255,255,255)" }}
            whileInView={{ color: "rgb(146,89,227)" }}
            transition={{ duration: 2 }}
          >
            powers
          </motion.span>
        </motion.h3>
        <motion.div
          variants={slideIn}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false }}
          className="flex w-full flex-col items-stretch justify-center gap-5 sm:gap-14 lg:flex-row lg:gap-5"
        >
          <motion.div
            variants={slideIn}
            className="mx-auto flex w-full max-w-[450px] flex-col items-center gap-3 rounded-lg bg-darkprimary px-5 py-14 text-lightgray lg:mx-0"
          >
            <motion.div
              variants={slideIn}
              className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white text-darkprimary"
            >
              <CodeSvg className="h-12 w-12 fill-current" />
            </motion.div>
            <motion.span
              variants={slideIn}
              className="text-center text-xl font-semibold text-white"
            >
              Frontend Web Development
            </motion.span>
            <motion.span variants={slideIn} className="my-3">
              Here lies, the essence of creativities
            </motion.span>
            <motion.h3 variants={slideIn} className="font-semibold text-white">
              Got experience on :
            </motion.h3>
            <div className="flex flex-col items-center">
              <motion.span variants={slideIn}>HTML</motion.span>
              <motion.span variants={slideIn}>CSS (Tailwind CSS)</motion.span>
              <motion.span variants={slideIn}>
                Javascript (Typescript)
              </motion.span>
              <motion.span variants={slideIn}>React JS</motion.span>
              <motion.span variants={slideIn}>Next JS</motion.span>
              <motion.span variants={slideIn}>Daisy UI</motion.span>
              <motion.span variants={slideIn}>Bootstrap</motion.span>
            </div>
          </motion.div>
          <motion.div
            variants={slideIn}
            className="mx-auto flex w-full max-w-[450px] flex-col items-center gap-3 rounded-lg bg-darkprimary px-5 py-14 text-lightgray lg:mx-0"
          >
            <motion.div
              variants={slideIn}
              className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white text-darkprimary"
            >
              <DatabaseSvg className="h-10 w-10 stroke-current" />
            </motion.div>
            <motion.span
              variants={slideIn}
              className="text-center text-xl font-semibold text-white"
            >
              Backend Web Development
            </motion.span>
            <motion.span variants={slideIn} className="my-3">
              This is my so-so backend skills
            </motion.span>
            <motion.h3 variants={slideIn} className="font-semibold text-white">
              Got experience on :
            </motion.h3>
            <motion.div className="flex flex-col items-center">
              <motion.span variants={slideIn}>Node JS</motion.span>
              <motion.span variants={slideIn}>Express JS</motion.span>
              <motion.span variants={slideIn}>Mongo DB (Mongoose)</motion.span>
              <motion.span variants={slideIn}>MySQL</motion.span>
              <motion.span variants={slideIn}>Git</motion.span>
              <motion.span variants={slideIn}>AWS S3 Storage</motion.span>
              <motion.span variants={slideIn}>
                Midtrans Payment Gateway
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWrapper;
