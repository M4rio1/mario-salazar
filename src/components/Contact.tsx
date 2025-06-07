import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-16 px-4 bg-black overflow-hidden"
      aria-labelledby="contact-title"
    >
      {/* Fondo animado con Framer Motion */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0 bg-gradient-to-br from-indigo-900 via-black to-blue-900 blur-3xl opacity-30"
        initial={{ scale: 1, rotate: 0, x: 0, y: 0 }}
        animate={{
          scale: 1.2,
          rotate: 360,
          x: [0, 20, -20, 0],
          y: [0, -10, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Contenido con efecto glass */}
      <div className="relative z-10 bg-white/10 max-w-7xl mx-auto backdrop-blur-md bg-opacity-10 rounded-2xl p-10 md:p-16 shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Texto lado izquierdo */}
          <div className="space-y-4">
            <h1
              id="contact-title"
              className="text-4xl font-bold text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >
              Contáctame
            </h1>
            <p className="text-gray-400 leading-relaxed">
              ¿Tienes un proyecto en mente o deseas colaborar? Estoy disponible
              para nuevas oportunidades.
            </p>
            <div className="mt-6 space-x-4">
              <a
                href="mailto:mario.salazar@digitalarchgt.com"
                className="text-blue-400 hover:underline"
              >
                mario.salazar@digitalarchgt.com
              </a>
              <a
                href="https://linkedin.com/in/tuusuario"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Formulario lado derecho */}
          <form className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Tu nombre"
              required
              className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Tu correo"
              required
              className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              required
              className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-400 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-md font-semibold hover:from-blue-500 hover:to-indigo-500 transition duration-300 shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
