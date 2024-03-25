import type { Metadata } from "next";
import { TopNavbar } from "../../../components/TopNavbar";

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
    <div className="relative min-h-screen w-full">
      <TopNavbar />
      <main>{children}</main>
    </div>
  );
}
