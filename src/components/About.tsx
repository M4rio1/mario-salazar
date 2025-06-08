export const About = () => {
  return (
    <section
      id="about"
      className="bg-black max-w-5xl mx-auto px-6 py-24 text-white"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
        {/* Texto */}
        <div className="max-w-xl text-center md:text-left">
          <h2
            id="about-title"
            className="text-4xl font-extrabold mb-6 tracking-tight text-white drop-shadow-md"
          >
            Sobre mí
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Soy un desarrollador web fullstack apasionado por crear experiencias
            digitales limpias, intuitivas y eficientes. Me especializo en
            transformar ideas complejas en soluciones elegantes y funcionales.
          </p>

          <p className="text-gray-400 text-base leading-relaxed">
            Mi enfoque combina diseño minimalista y código limpio para entregar
            productos escalables que superan las expectativas. Disfruto trabajar
            en equipos colaborativos y siempre busco aprender nuevas tecnologías
            y mejores prácticas.
          </p>
        </div>
      </div>
    </section>
  );
};
