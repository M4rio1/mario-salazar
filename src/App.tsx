import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import { InitialLayer } from "./components/InitialLayer";

import ScrollIndicator from "./components/ui/ScrollIndicator";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {isLoading && <InitialLayer />}
      <Navbar />
      <ScrollIndicator />
      <div className="bg-black">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;
