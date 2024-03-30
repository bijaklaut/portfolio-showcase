"use client";

import { GithubSvg, InstagramSvg, MailSvg, WhatsappSvg } from "../SvgGroup";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/variantsMotion";
import ContactItem from "../ContactItem";

const ContactWrapper = () => {
  return (
    <section className="relative z-0 h-screen w-full bg-gradient-to-b from-darkprimary to-black">
      <div className="contact-wrapper absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1 md:gap-10">
        {/* Github */}
        <ContactItem
          href="https://www.github.com/bijaklaut"
          itemText="Github"
          custom={1}
        >
          <GithubSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </ContactItem>
        {/* Whatsapp */}
        <ContactItem
          href="https://wa.me/62085920051232"
          itemText="Whatsapp"
          custom={2}
        >
          <WhatsappSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </ContactItem>
        {/* Email */}
        <ContactItem
          href="mailto:hudaaputra72@gmail.com"
          itemText="Email"
          custom={1}
        >
          <MailSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </ContactItem>
        {/* Instagram */}
        <ContactItem
          href="https://www.instagram.com/hudaaptr"
          itemText="Instagram"
          custom={2}
        >
          <InstagramSvg className="absolute left-1/2 top-1/2 w-10 -translate-x-1/2 -translate-y-1/2 fill-white md:h-12 md:w-12" />
        </ContactItem>
      </div>
      <motion.a
        variants={fadeIn}
        initial={"hidden"}
        whileInView={"visible"}
        href={"https://www.chronark.com"}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 rounded-md bg-gradient-to-br from-zinc-100/20 via-darkprimary/30 to-zinc-100/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-transform duration-300 hover:-translate-y-2"
      >
        Special thanks to
        <span className="font-semibold text-primary">{" Chronark"}</span>
      </motion.a>
    </section>
  );
};

export default ContactWrapper;
