export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/60 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-semibold tracking-wider text-white">
          Dario Sosa
        </span>

        <div className="flex gap-8 text-sm text-gray-400">
          {["about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-white transition-colors"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
