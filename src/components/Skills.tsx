import InfiniteMenu from "./ui/InfiniteMenu";

export const Skills = () => {
  const items = [
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/css3/css3-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-plain.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/json/json-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/linux/linux-original.svg ",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/mysql/mysql-original-wordmark.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nextjs/nextjs-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nginx/nginx-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/sequelize/sequelize-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/vitejs/vitejs-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/postman/postman-original.svg",
    },
    {
      image:
        "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/docker/docker-original.svg",
    },
  ];
  return (
    <section
      id="skills"
      className="bg-black max-w-7xl mx-auto px-6 py-24 text-white flex flex-col items-center gap-8"
      aria-labelledby="skills-title"
    >
      <div className="w-full px-4 py-12">
        <div className="mb-12 text-center">
          <h2
            id="skills-title"
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Mis habilidades técnicas
          </h2>
        </div>

        <div className="flex flex-col gap-10">
          {/* Frontend */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "React",
                "TypeScript",
                "TailwindCSS",
              ].map((skill) => (
                <p
                  key={skill}
                  className="text-center text-gray-400 bg-white/5 rounded-md py-2"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Node.js",
                "Express.js",
                "MySQL",
                "Sequelize",
                "PostgreSQL",
              ].map((skill) => (
                <p
                  key={skill}
                  className="text-center text-gray-400 bg-white/5 rounded-md py-2"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>

          {/* Adicional */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Adicional</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {["UX/UI", "REST API", "SEO", "Github", "Docker", "..."].map(
                (skill) => (
                  <p
                    key={skill}
                    className="text-center text-gray-400 bg-white/5 rounded-md py-2"
                  >
                    {skill}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: "600px", position: "relative" }}>
        <InfiniteMenu items={items} />
      </div>
    </section>
  );
};
