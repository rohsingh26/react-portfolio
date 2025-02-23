import { useState, useEffect, useRef } from "react";
import { FaLinkedin, FaGithub, FaCode } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi"; // Import hamburger icon
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference to the menu

  // Function to handle smooth scrolling
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Close menu after clicking
  };

  // Function to refresh the page when clicking on the RSI logo
  const handleLogoClick = () => {
    window.location.reload();
  };

  // Close menu when clicking outside
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
    <nav className="mb-6 flex items-center justify-between py-4">
      {/* Logo - Refreshes Page on Click */}
      <div className="flex flex-shrink-0 items-center">
        <img
          className="mx-2 w-8 cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-50"
          src={logo}
          alt="logo"
          onClick={handleLogoClick} // Refresh on click
        />
      </div>

      <div className="m-6 flex items-center justify-center gap-3 text-xl">
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

        {/* Hamburger Menu */}
        <div className="relative" ref={menuRef}>
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            <GiHamburgerMenu />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-40 rounded-md bg-gray-900 p-2 shadow-lg">
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
  );
};

export default Navbar;