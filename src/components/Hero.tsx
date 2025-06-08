import { SparklesCore } from "../components/ui/sparkles";
import Switch from "../components/ui/SwitchButton";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { ShootingStars } from "./ui/ShootingStar";
import { CardEffect } from "./ui/cardEffect";

export const Hero = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden flex justify-center items-center">
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
      {/* 🌍 Planeta visible debajo */}.
      <div className="absolute inset-0 z-0 [background:radial-gradient(200%_100%_at_50%_130%,#000_0%,#000_47%,#fff_47.2%,#63e_50%,#020617_65%,#000_90%)]"></div>
      <div className="grid lg:grid-cols-2 gap-8 relative z-10 w-full h-full max-w-[1500px] mx-auto px-6 py-26">
        <div className="relative">
          <div className="flex items-center justify-center h-full">
            <CardContainer className="inter-var">
              <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem translateZ="100" className="w-full mt-4">
                  <img
                    src="/mario-salazar/mariosalazarm.png"
                    height="1000"
                    width="1000"
                    className="h-90 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-white mt-4"
                >
                  Mario David Salazar Melgar
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Desarrollador WEB
                </CardItem>
              </CardBody>
            </CardContainer>
          </div>
        </div>

        <CardEffect>
          <div className="flex items-center justify-center h-full">
            <div className="bg-gray-800/40 bg-clip-padding backdrop-filter  backdrop-blur bg-opacity-10 backdrop-saturate-50 backdrop-contrast-100 rounded-2xl p-8 md:p-16 shadow-xl">
              <h1 className="text-4xl md:text-4xl text-white font-bold mb-3">
                <span className="inline-flex items-center w-8 h-8 mr-2">
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 122.88 116.87"
                  >
                    <defs>
                      {" "}
                      <style>
                        {`
      .cls-1 { fill: #10a64a; fill-rule: evenodd; }
      .cls-2 { fill: #fff; }
    `}
                      </style>
                      <path className="cls-1" d="..." />
                      <path className="cls-2" d="..." />
                    </defs>
                    <title>verified-symbol</title>
                    <polygon
                      className="cls-1"
                      points="61.37 8.24 80.43 0 90.88 17.79 111.15 22.32 109.15 42.85 122.88 58.43 109.2 73.87 111.15 94.55 91 99 80.43 116.87 61.51 108.62 42.45 116.87 32 99.08 11.73 94.55 13.73 74.01 0 58.43 13.68 42.99 11.73 22.32 31.88 17.87 42.45 0 61.37 8.24 61.37 8.24"
                    />
                    <path
                      className="cls-2"
                      d="M37.92,65c-6.07-6.53,3.25-16.26,10-10.1,2.38,2.17,5.84,5.34,8.24,7.49L74.66,39.66C81.1,33,91.27,42.78,84.91,49.48L61.67,77.2a7.13,7.13,0,0,1-9.9.44C47.83,73.89,42.05,68.5,37.92,65Z"
                    />
                  </svg>
                </span>{" "}
                Mario David Salazar Melgar
              </h1>
              <h2 className="text-2xl md:text-2xl text-gray-300 font-bold mb-4">
                Desarrollador WEB
              </h2>
              <p className="text-lg md:text-lg text-gray-300 mb-8">
                Soy un apasionado desarrollador web con experiencia en la
                creación de aplicaciones modernas y eficientes. Me encanta
                trabajar con tecnologías como React, TypeScript y Node.js para
                construir soluciones innovadoras que mejoren la experiencia del
                usuario.
              </p>
              <div className="relative z-10 pointer-events-auto">
                <Switch />
              </div>
            </div>
          </div>
        </CardEffect>
      </div>
    </div>
  );
};
