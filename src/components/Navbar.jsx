import logo from "../assets/logo.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Navbar = () => {
  return (
  <nav className="mb-10 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 item-center">
        <img className="mx-2 w-10 transition-transform duration-300 ease-in-out hover:scale-110 hover:brightness-50" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex item-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
      <a href="https://www.github.com/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-gray-400"><FaGithub /></a>
      <a href="https://www.leetcode.com/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-yellow-500"><FaCode /></a>
      <a href="https://www.twitter.com/rohsingh26" target="blank" rel="noopener noreferrer" className="hover:text-gray-500"><FaSquareXTwitter /></a>
    </div>
  </nav>
  );
};

export default Navbar;