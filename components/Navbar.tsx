"use client";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Navbar() {
const [active, setActive] = useState<string>("about");


useEffect(() => {
const sections = ["about", "skills", "projects", "contact"];


const onScroll = () => {
const scrollPos = window.scrollY + 120;
for (const id of sections) {
const el = document.getElementById(id);
if (el && el.offsetTop <= scrollPos) {
setActive(id);
}
}
};


window.addEventListener("scroll", onScroll);
return () => window.removeEventListener("scroll", onScroll);
}, []);


const linkClass = (id: string) =>
`transition ${active === id ? "text-white" : "text-gray-400 hover:text-white"}`;


return (
<nav className="fixed top-0 w-full bg-black/60 backdrop-blur-xl border-b border-white/10 z-50 shadow-lg shadow-black/30">
<div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
<span className="font-bold">Dario Sosa</span>
<div className="flex gap-6 text-sm">
<Link href="#about" className={linkClass("about")}>About</Link>
<Link href="#skills" className={linkClass("skills")}>Skills</Link>
<Link href="#projects" className={linkClass("projects")}>Projects</Link>
<Link href="#contact" className={linkClass("contact")}>Contact</Link>
</div>
</div>
</nav>
);
}