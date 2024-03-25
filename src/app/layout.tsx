import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./styles/fonts";

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
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
