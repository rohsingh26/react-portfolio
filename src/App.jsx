import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Technologies from "./components/Technologies";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Globe from "./components/Globe";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <section id="home" className="mt-20 scroll-mt-20"><Hero /></section>
        <section id="about" className="mt-20 scroll-mt-20"><About /></section>
        <section id="technologies" className="mt-20 scroll-mt-20"><Technologies /></section>
        <section id="experience" className="mt-20 scroll-mt-20"><Experience /></section>
        <section id="projects" className="mt-20 scroll-mt-20"><Projects /></section>
        <section id="contact" className="mt-20 scroll-mt-20"><Contact /></section>
      </div>
      <Globe />
    </div>
  );
};

export default App;
