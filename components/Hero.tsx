"use client";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Full Stack Web Developer
      </h1>

      <p className="max-w-2xl text-gray-400 mb-6">
        Desarrollo aplicaciones web modernas, escalables y orientadas a negocio
        usando JavaScript, React y Node.js.
      </p>

      <div className="flex gap-4">
        <a className="px-6 py-2 bg-white text-black rounded-xl" href="https://github.com/dariosb96">
          GitHub
        </a>
        <a className="px-6 py-2 border rounded-xl" href="/contact">
          Contacto
        </a>
      </div>
    </section>
  );
}
