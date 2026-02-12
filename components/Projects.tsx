export default function Projects() {
  return (
    <section id="projects" className="relative py-40 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ===================== DADDO ===================== */}
          <div className="group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
              DADDO – Inventory & Catalog Platform
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Production-ready full-stack inventory and e-commerce system built 
              with Next.js, Node.js, Express and PostgreSQL. 
              Includes advanced filtering, pagination, soft delete, 
              JWT authentication and role-based access control 
              (Super Admin, Admin, Employee).
            </p>

            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Integrated Cloudinary for secure image management and developed 
              an admin dashboard with key business metrics. 
              Deployed in production.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 text-xs text-gray-400">
              {[
                "Next.js",
                "React",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Sequelize",
                "JWT",
                "Cloudinary",
                "Tailwind"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="https://daddo.vercel.app/"
              target="_blank"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
            >
              Live Demo
            </a>
          </div>


          {/* ===================== WMS ===================== */}
          <div className="group relative rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-10 hover:border-blue-500/40 hover:-translate-y-2 transition-all duration-300">

            <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
              Warehouse Management System
            </h3>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Independent full-stack project built with Node.js, Express and 
              PostgreSQL. Designed RESTful APIs and implemented 
              role-based access control with secure JWT authentication.
            </p>

            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Managed relational data using Sequelize, built a dynamic 
              role-based frontend with React and Redux, 
              and implemented cloud image storage with AWS S3.
              Developed and deployed independently across the full lifecycle.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 text-xs text-gray-400">
              {[
                "React",
                "Redux",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Sequelize",
                "JWT",
                "AWS S3",
                "Tailwind",
                "Axios"
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Si tienes demo o repo lo agregamos aquí */}
            {/* 
            <a
              href="#"
              target="_blank"
              className="inline-block px-6 py-3 rounded-xl border border-white/20 hover:border-blue-500/40 transition text-sm font-medium"
            >
              View Project
            </a>
            */}
          </div>

        </div>
      </div>
    </section>
  );
}
