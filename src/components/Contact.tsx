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
      <div className="relative z-10 max-w-7xl mx-auto bg-gray-800/20 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-50 backdrop-contrast-100 rounded-2xl p-10 md:p-16 shadow-2xl border border-white/10">
        <div className="grid grid-cols-1 gap-10 items-center justify-center">
          {/* Texto lado izquierdo */}
          <div className="space-y-4 flex flex-col items-center justify-center">
            <h1
              id="contact-title"
              className="text-4xl font-bold text-white tracking-tight bg-clip-text  bg-gradient-to-b from-neutral-50 to-neutral-400"
            >
              Contáctame
            </h1>
            <p className="text-gray-400 leading-relaxed">
              ¿Tienes un proyecto en mente o deseas colaborar? Estoy disponible
              para nuevas oportunidades.
            </p>
            <div className="mt-6 space-x-4 flex md:flex-row flex-col">
              <a
                href="mailto:mario.salazar@digitalarchgt.com"
                className="text-blue-400 hover:underline"
              >
                mario.salazar@digitalarchgt.com
              </a>
              <a
                href="https://www.linkedin.com/in/mario-d-salazar-677310271"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center pt-16">
        <p className="text-center text-gray-400 mt-4">
          2025 © Mario D. Salazar - Todos los derechos reservados.
        </p>
      </div>
    </section>
  );
};
