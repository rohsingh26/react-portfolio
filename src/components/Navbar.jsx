import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { FaEnvelope, FaSquareXTwitter } from "react-icons/fa6";
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
      const fullText = "Thanks for visiting my profile!...";
      let i = 0;
      const interval = setInterval(() => {
        setText(fullText.slice(0, i + 1));
        i++;
        if (i === fullText.length) clearInterval(interval);
      }, 120);
    }, 150);
    setTimeout(() => {
      setShowAnimation(false);
    }, 4600);
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
              Oh, you found it!
            </motion.p>
            <p className="text-gray-400">{text}
            <span className="animate-blink">|</span>
            </p>
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
          <a href="mailto:rohsingh26@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:scale-110 transition-all duration-200 ease-in-out">
            <FaEnvelope />
          </a>
          <a href="https://www.linkedin.com/in/rohsingh26" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 hover:scale-110 transition-all duration-200 ease-in-out">
            <FaLinkedin />
          </a>
          <a href="https://www.github.com/rohsingh26" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 hover:scale-110 transition-all duration-200 ease-in-out">
            <FaGithub />
          </a>
          <a href="https://www.leetcode.com/rohsingh26" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500 hover:scale-110 transition-all duration-200 ease-in-out">
            <FaCode />
          </a>
          <a href="https://www.twitter.com/rohsingh26" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 hover:scale-110 transition-all duration-200 ease-in-out">
            <FaSquareXTwitter />
          </a>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`hover:text-gray-300 hover:scale-110 text-white focus:outline-none relative top-0.5 transition-transform duration-300 ${menuOpen ? "rotate-90" : ""}`}
            >
              <GiHamburgerMenu />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-gray-900 p-2 shadow-lg">
                {[
                  "home",
                  "about",
                  "experience",
                  "technologies",
                  "projects",
                  "contact",
                  "Resume",
                ].map((item) =>
                  item === "Resume" ? (
                    <a
                      key={item}
                      href="https://drive.google.com/file/d/128aX-o1XeTTpMjkgszr7XhyWZRDW-vQL/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:scale-110 transition-all duration-200 ease-in-out block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">
                      {item}
                    </a>
                  ) : (
                    <button
                      key={item}
                      onClick={() => handleScroll(item)}
                      className="hover:scale-110 transition-all duration-200 ease-in-out block w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700">
                      {item.charAt(0).toUpperCase() + item.slice(1).replace("_", " ")}
                    </button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;