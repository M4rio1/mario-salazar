export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black max-w-7xl mx-auto px-6 py-24 text-white flex flex-col items-center gap-8"
      aria-labelledby="skills-title"
    >
      <div className="w-full px-4 py-12">
        <div className="mb-12 text-center">
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="relative flex flex-col items-center justify-center w-full max-w-4xl mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-3xl"></div>
              <span className="text-8xl md:text-[9rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
                Habilidades
              </span>
              <h2 className="absolute text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize ">
                Mis habilidades
              </h2>
            </div>
            <div className="flex items-center my-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent to-indigo-500/90"></div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent to-indigo-500/90"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-20">
          {/* Frontend */}
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl text-white/80 uppercase">frontend</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  nombre: "HTML5",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
                },
                {
                  nombre: "CSS3",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
                },
                {
                  nombre: "JavaScript",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg",
                },
                {
                  nombre: "TypeScript",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                },
                {
                  nombre: "React",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
                },
                {
                  nombre: "Vite",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/vitejs/vitejs-original.svg",
                },
                {
                  nombre: "Next.js",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
                },
                {
                  nombre: "TailwindCSS",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
                },
              ].map((skill) => (
                <div
                  className="rounded-md py-3 flex gap-5 items-center justify-center"
                  key={skill.nombre}
                >
                  <img src={skill.icono} alt="" className="w-8 h-8" />
                  <p className="text-center text-gray-100 text-xl font-semibold ">
                    {skill.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl text-white/80 uppercase">backend</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  nombre: "Node.js",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
                },
                {
                  nombre: "Express.js",
                  icono: "https://cdn.simpleicons.org/express/white",
                },
                {
                  nombre: "Nest.js",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nestjs/nestjs-original.svg",
                },
                {
                  nombre: "TypeScript",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                },
                {
                  nombre: "MySQL",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
                },
                {
                  nombre: "PostgreSQL",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
                },
                {
                  nombre: "Sequelize",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/sequelize/sequelize-original.svg",
                },
                {
                  nombre: "Prisma",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg",
                },
                {
                  nombre: "Zod",
                },
              ].map((skill) => (
                <div
                  className="rounded-md py-3 flex gap-5 items-center justify-center"
                  key={skill.nombre}
                >
                  {skill.icono && (
                    <img src={skill.icono} alt="" className="w-8 h-8" />
                  )}
                  <p className="text-center text-gray-100 text-xl font-semibold ">
                    {skill.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Adicional */}
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl text-white/80">DevOps & Otros</h1>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                {
                  nombre: "UX/UI",
                },
                {
                  nombre: "REST API",
                },
                {
                  nombre: "SEO",
                },
                {
                  nombre: "Git",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
                },
                {
                  nombre: "Github",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
                },
                {
                  nombre: "Docker",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
                },
                {
                  nombre: "Postman",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg",
                },
                {
                  nombre: "Linux",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
                },
                {
                  nombre: "Nginx",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nginx/nginx-original.svg",
                },
                {
                  nombre: "PM2",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/pm2/pm2-original.svg",
                },
                {
                  nombre: "Vercel",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg",
                },
                {
                  nombre: "PNPM",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/pnpm/pnpm-original.svg",
                },
                {
                  nombre: "Yaml",
                  icono:
                    "https://raw.githubusercontent.com/devicons/devicon/master/icons/yaml/yaml-original.svg",
                },
              ].map((skill) => (
                <div
                  className="rounded-md py-3 flex gap-5 items-center justify-center"
                  key={skill.nombre}
                >
                  {skill.icono && (
                    <img src={skill.icono} alt="" className="w-8 h-8" />
                  )}
                  <p className="text-center text-gray-100 text-xl font-semibold ">
                    {skill.nombre}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
