import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

import ScrollIndicator from "./components/ui/ScrollIndicator";

function App() {
  return (
    <>
      <Navbar />
      <ScrollIndicator />
      <div className="bg-black">
        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Skills */}
        <Skills />
        {/* Projects */}
        <Projects />
        {/* Contact */}
        <Contact />
      </div>
    </>
  );
}

export default App;
