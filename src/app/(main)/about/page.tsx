import { Metadata } from "next";
import AboutWrapper from "@/components/Wrapper/AboutWrapper";

export const metadata: Metadata = {
  title: "Hudaa Eka Saputra | About",
  description: "Personal website to showcase Hudaa Eka Saputra' Portfolios",
};

export default function About() {
  return <AboutWrapper />;
}
