import React from "react";
import "./Footer.module.css";
import { FaInstagram, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div>
        <a
          href="https://www.instagram.com/jorgitoalgiza_/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size="1.5em" color="#ffffff" />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/Jorge-Giraldo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="1.5em" color="#ffffff" />
        </a>
      </div>
      <div>
        <a
          href="http://discordapp.com/users/617394071891345408"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size="1.5em" color="#ffffff" />
        </a>
      </div>
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=+573217713526&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20el%20proyecto."
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp size="1.5em" color="#ffffff" />
        </a>
      </div>
    </footer>
  );
}
