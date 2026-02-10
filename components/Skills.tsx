import SkillCard from "./SkillCard";

export default function Skills() {
return (
<section id="skills" className="bg-white/5 py-32">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-bold mb-12">Skills</h2>
<div className="grid md:grid-cols-3 gap-8">
<SkillCard title="Frontend" items={["JavaScript", "React", "Next.js", "HTML", "Tailwind CSS"]} />
<SkillCard title="Backend" items={["Node.js", "Express", "PostgreSQL", "Sequelize", "JWT"]} />
<SkillCard title="Tools" items={["Git", "GitHub", "REST APIs", "Vercel", "Netlify"]} />
</div>
</div>
</section>
);
}

