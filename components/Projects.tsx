"use client";
import { motion } from "framer-motion";
import ProjectCard from "./projectCard";


export default function Projects() {
return (
<section id="projects" className="max-w-6xl mx-auto px-6 py-32">
<h2 className="text-3xl font-bold mb-12">Projects</h2>
<div className="grid md:grid-cols-2 gap-8">
<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
<ProjectCard
title="DADDO – Inventory & Catalog Manager"
description="Full stack platform for inventory management, analytics dashboards and product control for small businesses."
stack="React, Node.js, Express, PostgreSQL, JWT"
bullets={[
"Designed REST API with modular architecture",
"Implemented authentication and role-based access",
"Built admin dashboard with real-time metrics",
]}
/>
</motion.div>


<motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
<ProjectCard
title="E-commerce API"
description="Scalable backend API for e-commerce platforms, focused on clean architecture and performance."
stack="Node.js, Express, PostgreSQL, Sequelize"
bullets={[
"Product, category and order management",
"JWT authentication and refresh tokens",
"Prepared for scalability and production deployment",
]}
/>
</motion.div>
</div>
</section>
);
}