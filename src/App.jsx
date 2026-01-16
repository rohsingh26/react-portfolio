import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";

// Lazy load heavy components
const Technologies = lazy(() => import("./components/Technologies"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Globe = lazy(() => import("./components/Globe"));

// Helper component to lazy load on scroll
const LazySection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return <div ref={ref}>{inView ? children : null}</div>;
};

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Main container */}
      <div className="container mx-auto px-8">
        <Navbar />

        {/* Critical components load instantly */}
        <section id="home" className="mt-20 scroll-mt-20"><Hero /></section>
        <section id="about" className="mt-20 scroll-mt-20"><About /></section>
        <section id="experience" className="mt-20 scroll-mt-20"><Experience /></section>

        {/* Heavy components lazy load on scroll */}
        <section id="technologies" className="mt-20 scroll-mt-20">
          <Suspense fallback={<div>Loading Technologies...</div>}>
            <LazySection>
              <Technologies />
            </LazySection>
          </Suspense>
        </section>

        <section id="projects" className="mt-20 scroll-mt-20">
          <Suspense fallback={<div>Loading Projects...</div>}>
            <LazySection>
              <Projects />
            </LazySection>
          </Suspense>
        </section>

        <section id="contact" className="mt-20 scroll-mt-20">
          <Suspense fallback={<div>Loading Contact...</div>}>
            <LazySection>
              <Contact />
            </LazySection>
          </Suspense>
        </section>
      </div>

      {/* Globe component lazy load */}
      <Suspense fallback={null}>
        <LazySection>
          <Globe />
        </LazySection>
      </Suspense>
    </div>
  );
};

export default App;
