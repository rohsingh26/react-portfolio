import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/profile.jpg";
import { motion } from "framer-motion";
const container= (delay) => ({
    hidden: {x: -100, opacity:0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    whileInView={{x:[-50,0], y:[-50,0], opacity:[0,1]}}
                    transition={{duration:0.5}}
                    whileHover={{ scale:1.1 }} whileTap={{scale:1.2}} drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl origin-left">Rohit Singh</motion.h1>
                    <motion.span variants={container(0.5)}
                    initial="hidden"
                    animate="visible"
                    whileInView={{x:[-50,0], opacity:[0,1]}}
                    transition={{duration:0.5}}
                    whileHover={{ scale:1.1 }} whileTap={{scale:1.2}} drag="x" dragConstraints={{left: 0, right: 0 }}  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent origin-left">Software Engineer<br /> <motion.p variants={container(0)}
                    initial="hidden"
                    animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-sm tracking-tight text-transparent origin-left">Full Stack Developer</motion.p> </motion.span>
                    <motion.p variants={container(1)}
                    initial="hidden"
                    animate="visible" 
                    whileInView={{x:[-50,0], opacity:[0,1]}}
                    transition={{duration:1}}
                    className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify w-full">{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img
                    initial={{x:100, opacity:0}}
                    whileInView={{x:0, opacity:1}}
                    transition={{duration:1, delay:0.2}}
                     className="rounded-2xl" src={profilePic} alt="Rohit Singh " />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;
