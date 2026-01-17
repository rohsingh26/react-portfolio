import React, { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Loader from "./components/Loader";

const Technologies = lazy(() => import("./components/Technologies"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Globe = lazy(() => import("./components/Globe"));

const LazySection = ({ children }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return <div ref={ref}>{inView ? children : null}</div>;
};

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
        <section id="experience" className="mt-20 scroll-mt-20"><Experience /></section>

        <section id="technologies" className="mt-20 scroll-mt-20">
          <Suspense fallback={<Loader />}>
            <LazySection>
              <Technologies />
            </LazySection>
          </Suspense>
        </section>

        <section id="projects" className="mt-20 scroll-mt-20">
          <Suspense fallback={<Loader />}>
            <LazySection>
              <Projects />
            </LazySection>
          </Suspense>
        </section>

        <section id="contact" className="mt-20 scroll-mt-20">
          <Suspense fallback={<Loader />}>
            <LazySection>
              <Contact />
            </LazySection>
          </Suspense>
        </section>
      </div>

      <Suspense fallback={<Loader />}>
        <LazySection>
          <Globe />
        </LazySection>
      </Suspense>
    </div>
  );
};

export default App;
