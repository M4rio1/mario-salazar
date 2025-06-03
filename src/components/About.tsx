export const About = () => {
  return (
    <section
      id="about"
      className="bg-black max-w-5xl mx-auto px-6 py-24 text-white"
      aria-labelledby="about-title"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
        {/* Foto con borde sutil */}
        <div className="flex-shrink-0 w-48 h-48 rounded-full overflow-hidden border-2 border-gray-700 shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
            alt="Foto de perfil"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

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
            digitales limpias, intuitivas y eficientes. Con más de{" "}
            <strong>X años de experiencia</strong>, me especializo en
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
