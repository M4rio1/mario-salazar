export const About = () => {
  return (
    <section
      id="about"
      className="bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-white"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col  items-center md:items-center gap-12 md:gap-20">
        {/* Contenido principal */}
        <div className="flex-1 max-w-3xl text-center md:text-center">
          {/* Título decorativo */}
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 px-4">
            <div className="relative flex flex-col items-center justify-center w-full max-w-3xl mx-auto">
              {/* Glow decorativo */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>

              <span className="text-5xl sm:text-7xl md:text-[9rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
                Sobre Mí
              </span>
              <h2 className="absolute text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize">
                Sobre Mí
              </h2>
            </div>

            {/* Divider */}
            <div className="flex items-center my-4 sm:my-6">
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-indigo-500/50"></div>
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-indigo-500/50"></div>
            </div>

            {/* Subtítulo */}
            <p className="text-sm sm:text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">
              Mi perfil profesional
            </p>
          </div>

          {/* Texto descriptivo */}
          <p className="text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed mb-6">
            Soy un desarrollador web fullstack con experiencia en la creación de
            aplicaciones web modernas, enfocadas en el rendimiento, la
            escalabilidad y la experiencia del usuario. Trabajo con tecnologías
            como TypeScript, React, Node.js y bases de datos relacionales, lo
            que me permite construir soluciones completas de principio a fin.
          </p>

          <p className="text-gray-400 text-sm sm:text-base md:text-base leading-relaxed">
            Mi enfoque combina diseño minimalista y código limpio para entregar
            productos escalables, con una experiencia de usuario atractiva y un
            diseño espectacular.
          </p>
        </div>
      </div>
    </section>
  );
};
