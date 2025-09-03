export const About = () => {
  return (
    <section
      id="about"
      className="bg-black max-w-5xl mx-auto px-6 py-24 text-white"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
        {/* Texto */}
        <div className="max-w-7xl text-center md:text-left">
          {/*   <h2
            id="about-title"
            className="text-4xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md"
          >
            Sobre mí
          </h2> */}
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
              <span className="text-8xl md:text-[9rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
                Sobre Mí
              </span>
              <h2 className="absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize ">
                Sobre Mí
              </h2>
            </div>
            <div className="flex items-center my-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-indigo-500/50"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-indigo-500/50"></div>
            </div>
            <p className="text-base md:text-lg tracking-wider text-gray-300 uppercase max-w-md text-center font-light">
              Mi perfil profesional
            </p>
          </div>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Soy un desarrollador web fullstack con experiencia en la creación de
            aplicaciones web modernas, enfocadas en el rendimiento, la
            escalabilidad y la experiencia del usuario. Trabajo con tecnologías
            como TypeScript, React, Node.js y bases de datos relacionales, lo
            que me permite construir soluciones completas de principio a fin.
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
            Mi enfoque combina diseño minimalista y código limpio para entregar
            productos escalables, con una experiencia de usuario atractiva y un
            diseño espectacular.
          </p>
        </div>
      </div>
    </section>
  );
};
