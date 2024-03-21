import type { Metadata } from "next";
import Navbar from "../../../components/Navbar";

export const metadata: Metadata = {
  title: "Bijaklaut | Personal Website",
  description: "Personal website to showcase Hudaa Eka Saputra' Portfolios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex min-h-screen w-full flex-col">
      <Navbar />
      <main className="mx-auto mt-16 w-full max-w-[1280px] p-5">
        {children}
      </main>
    </div>
  );
}
