import { useEffect, useState } from "react";

export const InitialLayer = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen z-[100] flex items-center justify-center overflow-hidden bg-black">
      <div
        className={`flex flex-col items-center justify-center gap-4 w-full h-full transition-all duration-[1200ms] ease-in-out
          ${animate ? "opacity-0 scale-110" : "opacity-100 scale-100"}
        `}
      >
        <h1
          className={`text-white italic text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-bold relative z-[101] transition-all duration-1000 ease-out
            ${
              animate
                ? "opacity-0 translate-y-[-20px]"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          Mario D. Salazar
        </h1>
        <h2
          className={`text-white text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold relative z-[101] transition-all duration-1000 ease-out
            ${
              animate
                ? "opacity-0 translate-y-[20px]"
                : "opacity-100 translate-y-0"
            }
          `}
        >
          Full Stack Developer
        </h2>
      </div>

      <div
        className={`absolute inset-0 bg-black transition-opacity duration-[1200ms] ${
          animate ? "opacity-0" : "opacity-30"
        }`}
      ></div>
    </div>
  );
};
