import { HoverEffect } from "./ui/card-hover-effect";

const projects = [
  {
    image: "/mario-salazar/websites/digitalarchweb.png",
    title: "DIGITAL ARCH",
    description:
      "Un sitio web corporativo que ofrece servicios de desarrollo web, destacando proyectos innovadores y modernos.",
    link: "https://digitalarchgt.com",
  },
  {
    image: "/mario-salazar/websites/samultiserviciosweb.png",
    title: "SA MULTISERVICIOS",
    description:
      "Un sitio web corporativo que ofrece servicios de asesoria contable y fiscal en Guatemala, hecho con un diseño moderno y atractivo.",
    link: "https://samultiservicios.com",
  },
  {
    image: "/mario-salazar/websites/eklipsseweb.png",
    title: "EKLIPSSE",
    description:
      "Un sitio e-commerce que ofrece una amplia gama de productos de belleza y cuidado personal, con un diseño atractivo y funcional.",
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-white flex flex-col items-center gap-8"
      aria-labelledby="projects-title"
    >
      {/* Título */}
      <div className="w-full text-center">
        <div className="relative flex flex-col items-center justify-center">
          {/* Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>

          <span className="text-5xl sm:text-7xl md:text-[9rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
            Proyectos
          </span>

          <h2 className="absolute text-3xl sm:text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize">
            Proyectos
          </h2>
        </div>

        <div className="flex items-center justify-center my-6">
          <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-indigo-500/90"></div>
          <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-indigo-500/90"></div>
        </div>

        <p className="text-center text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Estos son algunos de los proyectos que he desarrollado, enfocados en
          un diseño moderno, atractivo y profesional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 text-sm sm:text-base">
          <p className="text-center text-gray-400">100% Responsive</p>
          <p className="text-center text-gray-400">100% SEO Friendly</p>
          <p className="text-center text-gray-400">100% Optimizados</p>
        </div>
      </div>

      <div className="w-full">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};
