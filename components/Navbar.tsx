"use client";


import Link from "next/link";

export default function Navbar() {
return (
<nav className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-white/10 z-50">
<div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
<span className="font-bold">Dario Sosa</span>
<div className="flex gap-6 text-sm text-gray-300">
<Link href="#about">About</Link>
<Link href="#skills">Skills</Link>
<Link href="#projects">Projects</Link>
<Link href="#contact">Contact</Link>
</div>
</div>
</nav>
);
}
