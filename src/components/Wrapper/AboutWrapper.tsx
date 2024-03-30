"use client";

import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/utils/variantsMotion";
import { CodeSvg, DatabaseSvg } from "../SvgGroup";

const AboutWrapper = () => {
  return (
    <section className="pb-20">
      <div className="about mb-32 items-center bg-gradient-to-b from-darkprimary to-black px-32 py-32">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false }}
          className="flex w-full items-center gap-10"
        >
          <motion.div
            variants={fadeIn}
            className="min-w-[40%] text-center text-5xl font-semibold"
          >
            About Me
          </motion.div>
          <motion.div variants={fadeIn} className="text-justify text-lightgray">
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
      <div className="flex flex-col items-center justify-center gap-20">
        <motion.h3
          variants={slideIn}
          initial="hidden"
          whileInView={"visible"}
          className="text-center text-4xl font-semibold"
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
          className="flex w-full items-stretch justify-center gap-14"
        >
          <motion.div
            variants={slideIn}
            className="flex w-full max-w-[450px] flex-col items-center gap-3 rounded-lg bg-darkprimary px-5 py-14 text-lightgray"
          >
            <motion.div
              variants={slideIn}
              className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white text-darkprimary"
            >
              <CodeSvg className="h-12 w-12 fill-current" />
            </motion.div>
            <motion.span
              variants={slideIn}
              className="text-xl font-semibold text-white"
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
            className="flex w-full max-w-[450px] flex-col items-center gap-3 rounded-lg bg-darkprimary px-5 py-14 text-lightgray"
          >
            <motion.div
              variants={slideIn}
              className="mb-7 flex h-16 w-16 items-center justify-center rounded-full bg-white text-darkprimary"
            >
              <DatabaseSvg className="h-10 w-10 stroke-current" />
            </motion.div>
            <motion.span
              variants={slideIn}
              className="text-xl font-semibold text-white"
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
