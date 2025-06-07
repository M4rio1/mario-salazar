import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Oculta el indicador cuando el usuario ha hecho scroll
      if (window.scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Añade el event listener para el scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed z-50 bottom-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          {/* Indicador de scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-indigo-600 rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-3 bg-indigo-600 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <style>
        {`
          .chevrons {
            padding: 6px 0 0 0;
            margin-left: -6px;
            margin-top: 8px;
            width: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 16px;
          }

          .chevrondown {
            margin-top: -7px;
            position: relative;
            border: solid #38bdf8;
            border-width: 0 3px 3px 0;
            display: inline-block;
            width: 20px;
            height: 20px;
            transform: rotate(45deg);
          }

          .chevrondown:nth-child(odd) {
            animation: pulse54012 500ms ease infinite alternate;
          }

          .chevrondown:nth-child(even) {
            animation: pulse54012 500ms ease infinite alternate 250ms;
          }

          @keyframes pulse54012 {
            from {
              opacity: 0;
            }

            to {
              opacity: 0.5;
            }
          }
        `}
      </style>
    </>
  );
}
