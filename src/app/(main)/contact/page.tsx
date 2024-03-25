"use client";

import Link from "next/link";
import {
  GithubSvg,
  InstagramSvg,
  MailSvg,
  WhatsappSvg,
} from "../../../../components/SvgGroup";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative z-0 h-screen w-full bg-gradient-to-b from-darkprimary to-black">
      <div className="contact-wrapper absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 md:gap-10">
        {/* Github */}
        <motion.a
          variants={contact}
          initial={"rest"}
          whileHover={"hover"}
          custom={1}
          className="github relative h-96 w-20 cursor-pointer"
          href="https://www.github.com/bijaklaut"
          target="_blank"
        >
          <motion.div className="absolute left-1/2 top-1/2 h-60 w-16 -translate-x-1/2 -translate-y-1/2 -skew-y-[20deg] rounded-md border border-lightgray md:h-72 md:w-20">
            <motion.div
              variants={hoverBackdrop}
              className="absolute left-0 right-0 top-0 w-full rounded-md bg-white"
            ></motion.div>
          </motion.div>
          <motion.p
            variants={text}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold text-primary md:text-3xl"
          >
            Github
          </motion.p>
          <GithubSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </motion.a>

        {/* Whatsapp */}
        <motion.a
          variants={contact}
          initial={"rest"}
          whileHover={"hover"}
          custom={2}
          className="whatsapp relative h-96 w-20 cursor-pointer"
          href="https://wa.me/62085920051232"
          target="_blank"
        >
          <motion.div className="absolute left-1/2 top-1/2 h-60 w-16 -translate-x-1/2 -translate-y-1/2 -skew-y-[20deg] rounded-md border border-lightgray md:h-72 md:w-20">
            <motion.div
              variants={hoverBackdrop}
              className="absolute bottom-0 left-0 right-0 w-full rounded-md bg-white"
            ></motion.div>
          </motion.div>
          <motion.p
            variants={text}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold text-primary md:text-3xl"
          >
            Whatsapp
          </motion.p>
          <WhatsappSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </motion.a>

        {/* Email */}
        <motion.a
          variants={contact}
          initial={"rest"}
          whileHover={"hover"}
          custom={1}
          className="relative h-96 w-20 cursor-pointer"
          href="mailto:hudaaputra72@gmail.com"
          target="_blank"
        >
          <motion.div className="absolute left-1/2 top-1/2 h-60 w-16 -translate-x-1/2 -translate-y-1/2 -skew-y-[20deg] rounded-md border border-lightgray md:h-72 md:w-20">
            <motion.div
              variants={hoverBackdrop}
              className="absolute left-0 right-0 top-0 w-full rounded-md bg-white"
            ></motion.div>
          </motion.div>
          <motion.p
            variants={text}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold text-primary md:text-3xl"
          >
            Email
          </motion.p>
          <MailSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </motion.a>

        {/* Instagram */}
        <motion.a
          variants={contact}
          initial={"rest"}
          whileHover={"hover"}
          custom={2}
          className="whatsapp relative h-96 w-20 cursor-pointer"
          href="https://www.instagram.com/hudaaptr"
          target="_blank"
        >
          <motion.div className="absolute left-1/2 top-1/2 h-60 w-16 -translate-x-1/2 -translate-y-1/2 -skew-y-[20deg] rounded-md border border-lightgray md:h-72 md:w-20">
            <motion.div
              variants={hoverBackdrop}
              className="absolute bottom-0 left-0 right-0 w-full rounded-md bg-white"
            ></motion.div>
          </motion.div>
          <motion.p
            variants={text}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-2xl font-semibold text-primary md:text-3xl"
          >
            Instagram
          </motion.p>
          <InstagramSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </motion.a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-white/80 px-3 py-1 text-sm text-zinc-900 backdrop-blur-md transition-transform duration-300 hover:-translate-y-2">
        <span>{"Special thanks to "}</span>
        <Link className="font-semibold" href={"https://www.chronark.com"}>
          Chronark
        </Link>
      </div>
    </section>
  );
}

const contact = {
  rest: (i: number) =>
    i == 2
      ? {
          translateY: "-35px",
        }
      : {
          translateY: "35px",
        },
  hover: {
    translateY: "0px",
    transition: {
      duration: 0.4,
    },
  },
};

const hoverBackdrop = {
  rest: {
    height: "0",
  },
  hover: {
    height: "100%",
    transition: {
      duration: 0.4,
    },
  },
};

const text = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};
