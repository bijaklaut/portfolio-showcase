import { Metadata } from "next";
import { Hero } from "@/components/Hero";

export const metadata: Metadata = {
  title: "Hudaa Eka Saputra | Home",
  description: "Personal website to showcase Hudaa Eka Saputra' Portfolios",
};

export default function Home() {
  return (
    <section className="flex h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-darkprimary to-black">
      <Hero />
    </section>
  );
}
