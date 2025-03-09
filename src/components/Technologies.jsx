import { RiReactjsLine } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiGooglecloud } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaVuejs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiLatex } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { SiPycharm } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiNumpy } from "react-icons/si";
import { SiAngular } from "react-icons/si";
import { SiPostman } from "react-icons/si";



const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10,-10],
    transition: {
      duration: duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
       className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaVuejs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAngular className="text-7xl text-red-600" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-[#339933]" />
        </motion.div>
        <motion.div
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiExpress className="text-7xl text-neutral-600" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }} className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-blue-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMongodb className="text-7xl text-[#47A248]" />
        </motion.div>
        
        <motion.div variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }} className="rounded-2xl border-4 border-neutral-800 p-4">
            <DiDjango className="text-7xl text-green-500" />
        </motion.div>
        
        <motion.div variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }} className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaPython className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div variants={iconVariants(3)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }} className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }} className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>
        <motion.div variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }} className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaHtml5 className="text-7xl text-red-500" />
        </motion.div>
        <motion.div variants={iconVariants(1.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }} className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaCss3Alt className="text-7xl text-indigo-500" />
        </motion.div>
        
        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGit className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaLinux className="text-7xl text-yellow-300" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiOpencv className="text-7xl text-green-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiNumpy className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <VscVscode className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPycharm className="text-7xl text-lime-500" />
        </motion.div>

        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiLatex className="text-7xl text-blue-700" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiPostman className="text-7xl text-[#FF6C37]" />
        </motion.div>
        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGithub className="text-7xl text-gray-400" />
        </motion.div>
        <motion.div
        variants={iconVariants(1.5)}
        initial="initial"
        animate="animate" drag dragConstraints={{top:0, bottom:0, left: 0, right: 0 }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiGooglecloud className="text-7xl text-red-700" />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Technologies;