import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

import Link from "next/link";


import type { Metadata } from "next";


export const metadata: Metadata = {
title: "Dario Sosa | Full Stack Web Developer",
description:
"Full Stack Web Developer specializing in React, Next.js, Node.js and PostgreSQL. Building scalable web applications.",
openGraph: {
title: "Dario Sosa | Full Stack Web Developer",
description:
"Full Stack Web Developer specializing in React, Next.js, Node.js and PostgreSQL.",
type: "website",
},
};


export default function Home() {
return (
<main className="bg-black text-white min-h-screen">
<Navbar />
<Hero />
<About />
<Skills />
<Projects />
<Contact />
</main>
);
}