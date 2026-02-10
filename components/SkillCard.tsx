export default function SkillCard({ title, items }: { title: string; items: string[] }) {
return (
<div className="border border-white/10 rounded-2xl p-6">
<h3 className="font-semibold mb-4">{title}</h3>
<ul className="text-gray-400 space-y-2">
{items.map((item) => (
<li key={item}>• {item}</li>
))}
</ul>
</div>
);
}