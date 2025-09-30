import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./sections/Navigation";

const opensans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Rotaract Club of Chandivali, Mumbai | District 3141",
  description:
    "Official website of Rotaract Club of Chandivali, Mumbai. Empowering youth through service, leadership, and projects under Rotary District 3141.",
  keywords: [
    "Rotaract Mumbai",
    "Rotaract District 3141",
    "Rotaract Club Chandivali",
    "Rotary Youth Leadership",
    "Rotaract Projects Mumbai",
    "District 3141",
    "Chandivali",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={opensans.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
