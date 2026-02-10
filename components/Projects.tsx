import ProjectCard from "./projectCard";

export default function Projects() {
return (
<section id="projects" className="max-w-6xl mx-auto px-6 py-32">
<h2 className="text-3xl font-bold mb-12">Projects</h2>
<div className="grid md:grid-cols-2 gap-8">
<ProjectCard
title="DADDO – Inventory & Catalog Manager"
description="Full stack application for product management, inventory control and analytics dashboards."
stack="React, Node.js, Express, PostgreSQL"
/>
</div>
</section>
);
}

