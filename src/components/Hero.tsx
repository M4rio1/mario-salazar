import { SparklesCore } from "../components/ui/sparkles";
import Switch from "../components/ui/SwitchButton";
import { ShootingStars } from "./ui/ShootingStar";
import { CardEffect } from "./ui/cardEffect";
import InfiniteMenu from "./ui/InfiniteMenu";

export const Hero = () => {
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
    <div className="relative w-full min-h-[110vh] overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 z-10 w-full min-h-screen pointer-events-none [mask-image:radial-gradient(200%_100%_at_50%_120%,transparent_0%,transparent_47%,black_50%,black_100%)] [mask-mode:alpha]">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={30}
          className="w-full h-full fixed "
          particleColor="#FFFFFF"
        />
        <ShootingStars />
      </div>
      <div className="absolute inset-0 z-0 [background:radial-gradient(200%_100%_at_50%_130%,#000_0%,#000_47%,#fff_47.2%,#63e_50%,#020617_65%,#000_90%)]"></div>
      <div className="grid lg:grid-cols-2 gap-8 relative z-10 w-full h-full max-w-[1500px] mx-auto px-6 py-26 mb-20">
        <CardEffect>
          <div className="flex items-center justify-center h-full">
            <div className="bg-black backdrop-blur-xl rounded-2xl p-8 md:p-16 shadow-[0_0_10px_10px_rgba(235,235,235,0.1)]">
              <h1 className="text-4xl md:text-4xl text-white font-bold mb-3">
                Mario David Salazar Melgar
              </h1>
              <h2 className="text-2xl md:text-2xl text-gray-300 font-bold mb-4">
                Desarrollador WEB
              </h2>
              <p className="text-lg md:text-lg text-gray-300 mb-8">
                Soy desarrollador web fullstack con pasión por crear
                aplicaciones modernas, eficientes y centradas en el usuario. Me
                especializo en el desarrollo de soluciones completas, desde el
                frontend atractivo y funcional hasta el backend sólido y
                escalable.
              </p>
              <div className="relative z-10 pointer-events-auto">
                <Switch />
              </div>
            </div>
          </div>
        </CardEffect>
        <div className="relative hidden lg:block">
          <div style={{ height: "400px", position: "relative" }}>
            <InfiniteMenu items={items} />
          </div>
        </div>
      </div>
    </div>
  );
};
