export default function ProjectCard({ title, description, stack }: any) {
return (
<div className="border border-white/10 rounded-2xl p-6 hover:border-white/30 transition">
<h3 className="font-semibold mb-2">{title}</h3>
<p className="text-gray-400 mb-4">{description}</p>
<p className="text-sm text-gray-500">{stack}</p>
</div>
);
}