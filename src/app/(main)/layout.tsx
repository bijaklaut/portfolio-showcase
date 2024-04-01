import { Navbar } from "@/components/Navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bijaklaut | Personal Website",
  description: "Personal website to showcase Hudaa Eka Saputra' Portfolios",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative min-h-screen w-full">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
