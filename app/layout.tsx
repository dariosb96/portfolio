import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dario Sosa | Full Stack Developer",
  description:
    "Full Stack Web Developer specialized in React, Next.js and Node.js. Building scalable and production-ready web applications.",
  keywords: [
    "Dario Sosa",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Web Developer Mexico",
  ],
  authors: [{ name: "Dario Sosa" }],
  creator: "Dario Sosa",
  openGraph: {
    title: "Dario Sosa | Full Stack Developer",
    description:
      "Full Stack Web Developer specialized in React, Next.js and Node.js.",
    url: "https://TU-DOMINIO.com",
    siteName: "Dario Sosa Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dario Sosa Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dario Sosa | Full Stack Developer",
    description:
      "Full Stack Web Developer specialized in React, Next.js and Node.js.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased selection:bg-blue-500/30">
        {children}
      </body>
    </html>
  );
}
