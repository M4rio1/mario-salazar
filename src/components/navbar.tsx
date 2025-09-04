import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import GlassSurface from "./ui/LiquidGlass";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    /*     <motion.nav
      className="bg-gradient-to-b from-gray-800/60 to-gray-900/60 text-white bg-clip-padding backdrop-filter backdrop-blur bg-opacity-10 backdrop-saturate-50 backdrop-contrast-100 p-4 m-5 top-0 left-0 right-0 z-50 rounded-4xl fixed w-fit mx-auto px-8"
      initial={{ opacity: 0, width: "fit-content" }}
      animate={{ opacity: 1, width: "fit-content" }}
      transition={{
        opacity: { duration: 0.6 },
        width: { duration: 0.8, delay: 1 },
      }}
    > */
    <nav className=" py-5 px-12 fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center">
      <GlassSurface
        borderRadius={50}
        displace={1}
        distortionScale={-150}
        redOffset={5}
        greenOffset={15}
        blueOffset={25}
        brightness={60}
        opacity={0.8}
        mixBlendMode="screen"
        className="min-w-[90vw] md:min-w-[95vw] lg:min-w-5xl"
      >
        <div className="flex items-center gap-10 relative ">
          <div
            className="text-2xl font-bold whitespace-nowrap  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            MARIO SALAZAR
          </div>

          <button
            className="md:hidden flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Resto del contenido */}
          <motion.div
            className="hidden md:flex items-center gap-10"
            initial={{ opacity: 0, x: 20, width: 0, pointerEvents: "none" }}
            animate={{ opacity: 1, x: 0, width: "auto", pointerEvents: "auto" }}
            exit={{ opacity: 0, x: 20, width: 0, pointerEvents: "none" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            style={{ overflow: "hidden" }}
          >
            <ul className="flex space-x-6 text-white font-semibold whitespace-nowrap">
              <li>
                <a href="#about" className="hover:text-indigo-400">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-indigo-400">
                  Contacto
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-4 md:hidden lg:flex">
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
                href="https://www.linkedin.com/in/mario-d-salazar-677310271"
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
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-full left-0 mt-4 w-full bg-gradient-to-b from-gray-900 to-gray-950 rounded-xl p-6 flex flex-col gap-6 shadow-xl md:hidden z-100 border border-gray-700 backdrop-blur-md"
              >
                <ul className="flex flex-col gap-3 text-white font-semibold text-lg">
                  <li>
                    <a
                      href="#about"
                      className="hover:text-indigo-400 transition-colors duration-200"
                    >
                      Sobre mí
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      className="hover:text-indigo-400 transition-colors duration-200"
                    >
                      Habilidades
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      className="hover:text-indigo-400 transition-colors duration-200"
                    >
                      Proyectos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      className="hover:text-indigo-400 transition-colors duration-200"
                    >
                      Contacto
                    </a>
                  </li>
                </ul>
                <div className="flex justify-start gap-5 text-2xl">
                  <a
                    href="https://github.com/M4rio1"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mario-d-salazar-677310271"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </GlassSurface>
    </nav>
  );
};
