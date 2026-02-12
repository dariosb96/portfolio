import SkillCard from "./SkillCard";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiSequelize,
  SiExpress,
  SiJsonwebtokens,
  SiVercel,
  SiNetlify,
  SiTypescript,
  SiCloudinary,
} from "react-icons/si";
export default function Skills() {
  return (
    <section id="skills" className="relative py-40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Tech Stack
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <SkillCard
            title="Frontend"
            skills={[
              { name: "HTML", icon: <FaHtml5 /> },
              { name: "CSS", icon: <FaCss3Alt /> },
              { name: "JavaScript", icon: <SiJavascript /> },
              { name: "TypeScript", icon: <SiTypescript /> },
              { name: "React", icon: <FaReact /> },
              { name: "Next.js", icon: <SiNextdotjs /> },
              { name: "Tailwind", icon: <SiTailwindcss /> },
            ]}
          />

          <SkillCard
            title="Backend"
            skills={[
              { name: "Node.js", icon: <FaNodeJs /> },
              { name: "Express", icon: <SiExpress /> },
              { name: "PostgreSQL", icon: <SiPostgresql /> },
              { name: "Sequelize", icon: <SiSequelize /> },
              { name: "JWT", icon: <SiJsonwebtokens /> },
              { name: "AWS S3", icon: <FaAws /> },
              { name: "Cloudinary", icon: <SiCloudinary /> },
            ]}
          />

          <SkillCard
            title="Tools & DevOps"
            skills={[
              { name: "Git", icon: <FaGitAlt /> },
              { name: "GitHub", icon: <FaGithub /> },
              { name: "Vercel", icon: <SiVercel /> },
              { name: "Netlify", icon: <SiNetlify /> },
            ]}
          />
        </div>
      </div>
    </section>
  );
}
