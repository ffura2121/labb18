import React from "react";
import "./Footer.css";
import { FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://elearn.nubip.edu.ua/user/profile.php" className="footer-link">
          <FaEnvelope className="icon" /> kn23-i.kosenko@nubip.edu.ua
        </a>
        <a
          href="https://github.com/ffura2121"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          <FaGithub className="icon" /> GitHub: ffura2121
        </a>
      </div>
    </footer>
  );
};

export default Footer;
