"use client";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: React.ReactNode;
}

export default function SkillCard({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
}) {
  return (
    <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-8 hover:border-blue-500/30 transition-all duration-300">
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />

      <h3 className="text-xl font-semibold mb-10 tracking-wide">
        {title}
      </h3>

      <div className="grid grid-cols-3 gap-8">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="group flex flex-col items-center text-center cursor-pointer"
          >
            <div className="text-4xl text-gray-400 group-hover:text-blue-400 transition-all duration-300">
              {skill.icon}
            </div>
            <span className="mt-3 text-xs tracking-wider text-gray-400 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
