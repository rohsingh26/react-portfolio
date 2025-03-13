import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../assets/logo.jpg";
import animationGif from "../assets/animation.gif";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const [text, setText] = useState("");
  const menuRef = useRef(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  const handleLogoClick = () => {
    setShowAnimation(true);
    setText("");

    setTimeout(() => {
      const fullText = "Thank you for visiting my profile...";
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(interval);
      }, 100);
    }, 200);

    setTimeout(() => {
      window.location.reload();
    }, 4500);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {showAnimation && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
          <img src={animationGif} className="absolute inset-0 w-full h-full object-cover" alt="animation" />
          <div className="absolute bottom-4 text-center text-gray-300 text-2xl font-bold">
            <motion.p
              className="text-xl mt-2"
              initial={{ color: "#D1D5DB" }}
              animate={{ color: "#374151" }}
              transition={{ duration: 2.5 }}
            >
              Oh, you found it!!!
            </motion.p>
            <p className="text-gray-400">{text}</p>
          </div>
        </div>
      )}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black flex items-center justify-between py-4 px-6 shadow-md">
        <div className="flex flex-shrink-0 items-center">
          <img
            className="mx-2 w-8 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-50"
            src={logo}
            alt="logo"
            onClick={handleLogoClick}
          />
        </div>
        <div className="flex items-center gap-3 text-xl">
          <a href="https://www.linkedin.com/in/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-gray-400">
            <FaGithub />
          </a>
          <a href="https://www.leetcode.com/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            <FaCode />
          </a>
          <a href="https://www.twitter.com/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-gray-500">
            <FaSquareXTwitter />
          </a>
          <div className="relative" ref={menuRef}>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              <GiHamburgerMenu />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-gray-900 p-2 shadow-lg">
                <button onClick={() => handleScroll("home")} className="block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">Home</button>
                <button onClick={() => handleScroll("about")} className="block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">About Me</button>
                <button onClick={() => handleScroll("technologies")} className="block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">Technologies</button>
                <button onClick={() => handleScroll("experience")} className="block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">Experience</button>
                <button onClick={() => handleScroll("projects")} className="block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">Projects</button>
                <button onClick={() => handleScroll("contact")} className="block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">Contact Me</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
