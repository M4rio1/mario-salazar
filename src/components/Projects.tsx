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
      "Un sitio web corporativo que ofrece servicios de asesoria contable y fiscal en guatemala, hecho con un diseño moderno y atractivo.",
    link: "https://samultiservicios.com",
  },
  {
    image: "/mario-salazar/websites/eklipsseweb.png",
    title: "EKLIPSSE",
    description:
      "Un sitio e-commerce que ofrece una amplia gama de productos de belleza y cuidado personal, con un diseño atractivo y funcional.",
    link: "https://eklipsse.com",
  },
  {
    image: "https://www.inkyy.com/wp-content/uploads/2019/12/1-1.png",
    title: "CV Express",
    description:
      "Un sitio web que ofrece servicios de creación de currículums vitae personalizados, con un diseño moderno y fácil de usar.",
    link: "https://cvexpress.com",
  },
  {
    image: "https://www.inkyy.com/wp-content/uploads/2019/12/1-1.png",
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    image: "https://www.inkyy.com/wp-content/uploads/2019/12/1-1.png",
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black max-w-7xl mx-auto px-6 py-24 text-white flex flex-col items-center gap-8"
      aria-labelledby="projects-title"
    >
      <div className="mb-16">
        <h2 id="projects-title" className="text-3xl font-bold text-center">
          Mis proyectos:
        </h2>
        <p className="text-center text-gray-400 mt-4">
          Estos son algunos de los proyectos que he desarrollado, enfocados en
          un diseño moderno, atractivo y profesional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <p className="text-center text-gray-400 mt-4">100% Responsive</p>
          <p className="text-center text-gray-400 mt-4">100% SEO Friendly</p>
          <p className="text-center text-gray-400 mt-4">100% Optimizados</p>
        </div>
      </div>
      <div className="">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
};
