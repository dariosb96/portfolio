"use client";
import { motion } from "framer-motion";


export default function Hero() {
return (
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
<motion.h1
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="relative text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent"
>
Full Stack Web Developer
</motion.h1>


<motion.p
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.2, duration: 0.6 }}
className="relative max-w-2xl text-gray-300 mb-10"
>
I build scalable web applications using JavaScript, React and Node.js,
focused on clean architecture and real business needs.
</motion.p>


<motion.div
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ delay: 0.4, duration: 0.6 }}
className="flex gap-4"
>
<a className="px-6 py-3 bg-white text-black rounded-2xl" href="#projects">
View Projects
</a>
<a className="px-6 py-3 border border-white/20 rounded-2xl" href="#contact">
Contact Me
</a>
</motion.div>
</section>
);
}