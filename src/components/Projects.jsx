import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity:1, y:0 }}
        initial={{ opacity:0, y:-100 }}
        transition={{ duration:0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity:1, x:0 }}
              initial={{ opacity:0, x:-100 }}
              transition={{ duration:1 }}
              className="w-full lg:w-1/4"
            >
              <img 
                src={project.image} 
                width={200} 
                height={200} 
                alt={project.title} 
                className="hover:scale-110 transition-all duration-200 ease-in-out mb-6 rounded" 
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity:1, x:0 }}
              initial={{ opacity:0, x:100 }}
              transition={{ duration:1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h5 className="mb-2 font-semibold">{project.title}</h5>
              <p className="mb-4 text-neutral-400 text-justify w-full">{project.description}</p>
              <div className="mb-4">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex space-x-4">
                <a 
                  href={project.repo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-200 ease-in-out bg-stone-300 hover:bg-stone-400 text-stone-800 px-2 py-1 text-xs rounded shadow-sm transition-all"
                >
                  Open Repository
                </a>
                {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-all duration-200 ease-in-out bg-green-200 hover:bg-green-300 text-green-800 px-2 py-1 text-xs rounded shadow-sm transition-all"
                >
                  Live Demo
                </a>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
