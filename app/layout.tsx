import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dario Sosa | Full Stack Web Developer",
  description:
    "Full Stack Web Developer specialized in React, Next.js, Node.js and PostgreSQL. Building scalable, production-ready web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "PostgreSQL",
  ],
  authors: [{ name: "Dario Sosa" }],
  openGraph: {
    title: "Dario Sosa | Full Stack Web Developer",
    description:
      "Full Stack Web Developer specialized in React, Next.js, Node.js and PostgreSQL.",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="en" className="scroll-smooth">

    <body
  className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
>

        {children}
      </body>
    </html>
  );
}
