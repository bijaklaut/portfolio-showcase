import { motion } from "framer-motion";
import { contact, hoverBackdrop, text } from "@/utils/variantsMotion";
import { ReactNode } from "react";

const ContactItem = ({
  children,
  itemText,
  href,
  custom,
}: {
  children: ReactNode;
  itemText: string;
  custom: number;
  href: string;
}) => {
  return (
    <motion.a
      variants={contact}
      initial={"hidden"}
      whileInView={"rest"}
      whileHover={"hover"}
      custom={custom}
      className="relative h-96 w-20 cursor-pointer"
      href={href}
      target="_blank"
    >
      <motion.div className="absolute left-1/2 top-1/2 h-60 w-16 -translate-x-1/2 -translate-y-1/2 -skew-y-[20deg] rounded-md border border-lightgray md:h-72 md:w-20">
        <motion.div
          variants={hoverBackdrop}
          className="absolute left-0 right-0 top-0 w-full rounded-md bg-white"
        />
      </motion.div>
      <motion.p
        variants={text}
        className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 -rotate-90 text-xl font-semibold text-primary md:text-2xl"
      >
        {itemText}
      </motion.p>
      {children}
    </motion.a>
  );
};

export default ContactItem;
