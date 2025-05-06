import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me">
      <p className="one-text" style={{ fontSize: '24px' }}>
        Привіт, мене звати Іван Косенко, мені 19 років. Навчаюсь я Національному Університеті Біоресурсів і Природокористування
        на спеціальності "Комп'ютерні науки", 2 курс
        
      </p>
      <p className="two-text" style={{ fontSize: '18px' }}>
        Цікавлюсь веброзробкою і також зацікавлений у 3d-дизайнта 3d моделювання. На разі працюю з такими технологіями, як <strong>HTML, CSS, JavaScript, React</strong>.
      </p>

      <h2>Мої проєкти</h2>

      <section>
        <h3>HTML + CSS</h3>
        <ul>
          <li>
            <a
              href="https://github.com/ffura2121/css-pratice.git"
              target="_blank"
              rel="noreferrer"
            >
              Laba1 — адаптивна сторінка
            </a>
          </li>
          <li>
            <a
              href="https://github.com/ffura2121/html-css-landing.git"
              target="_blank"
              rel="noreferrer"
            >
              Laba2 — макет портфоліо
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>React</h3>
        <ul>
          <li>
            <a
              href="https://github.com/ffura2121/useEffect.git"
              target="_blank"
              rel="noreferrer"
            >
              React App — використанням хуків
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h3>JavaScript</h3>
        <ul>
          <li>
            <a
              href="https://github.com/ffura2121/js-DOM1.git"
              target="_blank"
              rel="noreferrer"
            >
              JS Projects — робота з масивами, подіями та API
            </a>
          </li>
        </ul>
      </section>

      <h2>Контакти</h2>
      <p>📧 Email: <a href="kn23-i.kosenko@nubip.edu.ua">kn23-i.kosenko@nubip.edu.ua</a></p>
      <p>
        🔗 GitHub:{" "}
        <a
          href="https://github.com/ffura2121"
          target="_blank"
          rel="noreferrer"
        >
          github.com/ffura2121
        </a>
      </p>
    </div>
  );
};

export default AboutMe;
