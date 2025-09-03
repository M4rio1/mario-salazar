import { useEffect, useState } from "react";

export const InitialLayer = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen z-[100] flex items-center justify-center overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-1/2 h-full bg-black transform transition-transform duration-1000 ease-in-out ${
          animate ? "-translate-x-full" : "translate-x-0"
        }`}
      ></div>

      <div
        className={`absolute top-0 right-0 w-1/2 h-full bg-black transform transition-transform duration-1000 ease-in-out ${
          animate ? "translate-x-full" : "translate-x-0"
        }`}
      ></div>

      <div className="flex flex-col items-center justify-center gap-4">
        <h1
          className={`text-white italic text-3xl font-bold relative z-[101] transition-opacity duration-700 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
        >
          Mario D. Salazar
        </h1>
        <h2
          className={`text-white text-xl font-bold relative z-[101] transition-opacity duration-700 ${
            animate ? "opacity-0" : "opacity-100"
          }`}
        >
          Full Stack developer
        </h2>
      </div>
    </div>
  );
};
