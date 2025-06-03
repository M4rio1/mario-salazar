import "./App.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div className="bg-black">
        {/* Hero */}
        <Hero />
        {/* About */}
        <About />
        {/* Skills */}
        <Skills />
      </div>
    </>
  );
}

export default App;
