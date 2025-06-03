import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <motion.nav
      className="bg-gray-500/40 text-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-50 backdrop-contrast-100 p-4 m-5 top-0 left-0 right-0 z-50 rounded-4xl fixed w-fit mx-auto px-8 overflow-hidden"
      initial={{ opacity: 0, width: "fit-content" }}
      animate={{ opacity: 1, width: "fit-content" }}
      transition={{
        opacity: { duration: 0.6 },
        width: { duration: 0.8, delay: 1 },
      }}
    >
      <div className="flex items-center gap-10">
        {/* Nombre sin animación */}
        <div className="text-2xl font-bold whitespace-nowrap">
          Mario Salazar
        </div>

        {/* Resto del contenido */}
        <motion.div
          className="flex items-center gap-10"
          initial={{ opacity: 0, x: 20, width: 0, pointerEvents: "none" }}
          animate={{ opacity: 1, x: 0, width: "auto", pointerEvents: "auto" }}
          exit={{ opacity: 0, x: 20, width: 0, pointerEvents: "none" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
          style={{ overflow: "hidden" }}
        >
          <ul className="flex space-x-6 text-white font-medium whitespace-nowrap">
            <li>
              <a href="#about" className="hover:text-indigo-400">
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-400">
                Proyectos
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-400">
                Habilidades
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-400">
                Contacto
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/M4rio1"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="GitHub"
              title="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/mario-salazar..."
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-white"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};
