import React from "react";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className={style.header}>
        <div>
          <Link exact to="/">
            <FaHome size="2em" color="#ffffff" />
          </Link>
        </div>
        <nav>
          <Link className={style.link} to="/cv">
            CV
          </Link>
          <Link className={style.link} to="/skills">
            Skills
          </Link>
          <Link className={style.link} to="/proyects">
            Mis Proyectos
          </Link>
          <Link className={style.link} to="/contact">
            Contáctame
          </Link>
        </nav>
      </div>
    </>
  );
}
