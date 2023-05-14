import React from "react";
import style from "./Home.module.css";
import { FaUser, FaStar, FaBook } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className={style.portada}>
        <h1>¡Hola!, Soy Jorge Giraldo</h1>
        <h2>Un Desarrollador Web</h2>
      </div>

      {/* Bienvenida y frase */}

      <section id={style.contenedorBienvenida}>
        <article id={style.bienvenida}>
          <h3>¡Bienvenido a mi página web personal!</h3>
          <p>
            Me complace compartir contigo mis proyectos, habilidades y
            experiencia profesional en esta plataforma. Mi objetivo es brindarle
            a las empresas una visión detallada sobre mi perfil y cómo puedo
            contribuir en su crecimiento y éxito.
          </p>
          <p>
            En este sitio encontrarás información sobre mis logros académicos,
            proyectos personales y profesionales, y habilidades técnicas.
            Además, podrás conocer mi trayectoria laboral, así como las áreas en
            las que me he desempeñado con mayor éxito.
          </p>
          <p>
            Creo en la importancia de la transparencia y el compromiso, por lo
            que encontrarás una descripción detallada de cada uno de mis
            proyectos, incluyendo su proceso de desarrollo y los resultados
            alcanzados. De esta manera, espero transmitir la confianza y
            seguridad que necesitas para contar conmigo en tus próximos
            proyectos.
          </p>
          <p>
            Agradezco tu visita y te invito a explorar mi página. Si tienes
            alguna pregunta o inquietud, no dudes en contactarme. Estoy ansioso
            por escuchar tus comentarios y conocer más sobre tus necesidades.
          </p>
          <h3>¡Gracias por visitar mi sitio!</h3>
        </article>
        <article id={style.contenedorFrase}>
          <div id={style.background}>
            <p id={style.frase}>
              " Una persona que nunca cometió un error nunca intento nada nuevo.
              "
            </p>
            <p id={style.autor}>- Albert Einstein</p>
          </div>
        </article>
      </section>

      <section className={style.contenedorDesc}>
        <div class={style.contenedor}>
          <div class={style.texto}>
            <hr />
            <h3 class={style.subtitulo}>Chequea mi CV</h3>
            <p>
              Allí conoceras algunos de mis conocimientos y mis experiencias a
              lo largo de mi carrera y fuera de ella.
            </p>
          </div>
          <div class={style.icon}>
            <FaUser size="2.2em" color="#ffffff" />
          </div>
        </div>

        <div class={style.contenedor}>
          <div class={style.texto}>
            <hr />
            <h3 class={style.subtitulo}>Consulta mis Skills</h3>
            <p>
              Sabrás cuales son mis habilidades, las tecnologias que domino y
              las que estoy a punto de dominar.
            </p>
          </div>
          <div class={style.icon}>
            <FaStar size="2.2em" color="#ffffff" />
          </div>
        </div>

        <div class={style.contenedor}>
          <div class={style.texto}>
            <hr />
            <h3 class={style.subtitulo}>¡No me basta con Aprender!</h3>
            <p>
              Me gusta investigar mucho mas y practicar en mis tiempos libres,
              siempre estoy en constante formacion.
            </p>
          </div>
          <div class={style.icon}>
            <FaBook size="2.2em" color="#ffffff" />
          </div>
        </div>
      </section>
    </>
  );
}
