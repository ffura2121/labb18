import React from "react";
import "./MyCity.css";
import kyiv1 from "../images/1.jpg";
import kyiv2 from "../images/2.jpg";
import kyiv3 from "../images/3.jpg";

const MyCity = () => {
  return (
    <div className="my-city">
      <h1>Київ — столиця України</h1>
      <p>
      Київ — це місто з багатою історією, де поєднуються стародавня архітектура та сучасні технології.
      </p>
      <p>
      Відомий своїми зеленою природою, численними парками та знаменними пам'ятками, такими як Софійський собор і Києво-Печерська лавра.
      </p>

      <div className="images-grid">
        <img src={kyiv1} alt="Київ 1" />
        <img src={kyiv2} alt="Київ 2" />
        <img src={kyiv3} alt="Київ 3" />
      </div>

      <div className="weather-container">
        <h2>Погода в Києві ☀️</h2>
        <ul className="weather-list">
          <li>Температура: +18°C</li>
          <li>Стан: Сонячно</li>
          <li>Вологість: 50%</li>
          <li>Вітер: 3 м/с</li>
        </ul>
      </div>
    </div>
  );
};

export default MyCity;
