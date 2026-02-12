"use-client";


export default function Contact() {
  return (
    <section id="contact" className="relative py-40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Let’s Work Together</h2>

          <p className="text-gray-400 mb-10">
            Open to freelance, product collaborations and full-time roles.
          </p>

          <div className="flex justify-center gap-8">
            <a className="hover:text-blue-400 transition" href="mailto:dariosb96@gmail.com">Email</a>
            <a className="hover:text-blue-400 transition" href="https://www.linkedin.com/in/dario-sosa-lopez-58425615a/">LinkedIn</a>
            <a className="hover:text-blue-400 transition" href="https://github.com/dariosb96">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
