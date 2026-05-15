import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa6";

import { TbNotes } from "react-icons/tb";

import "./styles/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="icons-section">
      <div className="social-icons">
        <a
          href="https://github.com/adityasarin12"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/aditya-sarin-14a3422a5"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="resume-button"
          href="/resume.pdf"
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
        >
          <TbNotes />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;