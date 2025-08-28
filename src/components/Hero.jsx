import { HERO_CONTENT } from "../constants";
import ProfilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiExternalLink } from "react-icons/fi";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35 mt-20">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    whileInView={{ x: [-50, 0], y: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} drag dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                    className="pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl origin-left">Rohit Singh</motion.h1>
                    <motion.span variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.2 }} drag="x" dragConstraints={{ left: 0, right: 0 }} className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent origin-left">Software Engineer<br /> <motion.p
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-sm tracking-tight text-transparent origin-left">
                    <Typewriter
                      words={["Full Stack Developer", "Problem Solver", "Python Backend Developer", "AI/ML Enthusiast", "Tech Innovator"]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={50}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </motion.p> </motion.span>
                    <a
                      href="https://drive.google.com/file/d/1iRL_iHjqf994r934aIFHh6eHV-XH5dxH/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 flex items-center gap-2 text-neutral-400 text-lg font-medium hover:text-white transform hover:scale-110 transition-all duration-500 ease-in-out origin-left"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        <FiExternalLink size={18} />
                        Download Resume
                    </a>
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible" 
                    whileInView={{ x: [-50, 0], opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    className=" whitespace-pre-line my-2 max-w-xl py-6 font-light tracking-tighter text-justify w-full">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 flex items-center justify-center">
              <motion.img
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="rounded-2xl max-w-full h-auto object-cover mb-8"
              src={ProfilePic}
              alt="Rohit Singh" />
            </div>
        </div>
    </div>
  );
};

export default Hero;
