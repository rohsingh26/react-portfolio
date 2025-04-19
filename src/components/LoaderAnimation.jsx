import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiLoader } from "react-icons/fi";

const LoaderAnimation = () => {
  const [stage, setStage] = useState("loading");
  const [showWelcome, setShowWelcome] = useState(false);
  const [welcomeText, setWelcomeText] = useState("");

  useEffect(() => {
    const timers = [];

    timers.push(
      setTimeout(() => {
        setShowWelcome(true);

        const fullText = "Welcome...";
        let i = 0;
        const interval = setInterval(() => {
          setWelcomeText(fullText.slice(0, i + 1));
          i++;
          if (i === fullText.length) clearInterval(interval);
        }, 150);
      }, 500)
    );

    timers.push(
      setTimeout(() => setStage("done"), 3200)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  if (stage === "done") return null;

  return (
    <div className="fixed inset-0 z-50 bg-black text-white overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src="/launch.gif"
          alt="Rocket Launch"
          className="w-full h-full object-cover scale-[1.4] filter brightness-80 contrast-200 saturate-150 sharpen-[20px]"
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      {showWelcome && (
        <div className="absolute bottom-[25%] z-30 text-center w-full">
          <motion.h1
            initial={{
            color: "#FDD835",
            textShadow: "0 0 10px rgba(255, 235, 59, 0.8)",
            }}
            animate={{
            color: "#F44336",
            textShadow: "0 0 10px rgba(244, 67, 54, 0.8)",
            }}
            transition={{
            duration: 1,
            delay: 1,
            ease: "easeOut",
            }}
            className="text-4xl font-extrabold drop-shadow-md font-mono">
              {welcomeText}
              <span className="animate-blink">|</span>
          </motion.h1>
        </div>
      )}
      <div className="absolute bottom-[5%] z-20 flex flex-col items-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          className="text-4xl text-cyan-400"
        >
          <FiLoader />
        </motion.div>
        <p className="mt-2 text-lg text-neutral-200">Loading...</p>
      </div>
    </div>
  );
};

export default LoaderAnimation;
