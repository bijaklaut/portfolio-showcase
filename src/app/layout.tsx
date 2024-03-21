import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "400", "600"],
});

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
      <body className={`${poppins.className} bg-darkprimary`}>{children}</body>
    </html>
  );
}
