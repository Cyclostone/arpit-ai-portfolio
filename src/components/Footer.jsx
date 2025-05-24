import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaCode } from "react-icons/fa";
import { SiKaggle, SiHuggingface } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="w-full z-40 bg-navbar-bg backdrop-blur-lg border-t border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 font-mono">
        
        <div className="mb-4 md:mb-0 text-white font-bold text-xl">
          <a href="https://arpitshrotriya.dev">
            Arpit<span className="text-blue-500">Shrotriya</span>
          </a>
          <div className="text-sm font-normal text-gray-400 mt-1">AI/ML Engineer</div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-4 md:mb-0">
          <a
            href="#home"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 text-xl">
          <a
            href="https://github.com/cyclostone"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-transform"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/arpit-shrotriya/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-transform"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://huggingface.co/cyclostone"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-transform"
            title="HuggingFace"
          >
            <SiHuggingface />
          </a>
          <a
            href="https://kaggle.com/arpitshrotriya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:scale-110 transition-transform"
            title="Kaggle"
          >
            <SiKaggle />
          </a>
          <a
            href="mailto:as8931@njit.edu"
            className="hover:text-white hover:scale-110 transition-transform"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 py-2 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Arpit Shrotriya. All rights reserved.</p>
      </div>
    </footer>
  );
};
