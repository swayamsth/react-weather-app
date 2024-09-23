import React from "react";
import clearDay from "./assets/clear-day.png";
import clearNight from "./assets/clear-night.png";
import cloudy from "./assets/cloudy.png";
import fog from "./assets/fog.png";
import partlyCloudyDay from "./assets/partly-cloudy-day.png";
import partlyCloudyNight from "./assets/partly-cloudy-night.png";
import rain from "./assets/rain.png";
import snow from "./assets/snow.png";
import wind from "./assets/wind.png";
import styles from "./rendericon.module.css";

const RenderIcon = ({ icon }) => {
  switch (icon) {
    case "clear-day":
      return <img src={clearDay} alt="clear-day" />;
    case "clear-night":
      return <img src={clearNight} alt="clear-night" />;
    case "cloudy":
      return <img src={cloudy} alt="cloudy" />;
    case "fog":
      return <img src={fog} alt="fog" />;
    case "partly-cloudy-night":
      return <img src={partlyCloudyNight} alt="partly-cloudy-night" />;
    case "rain":
      return <img src={rain} alt="rain" />;
    case "snow":
      return <img src={snow} alt="snow" />;
    case "wind":
      return <img src={wind} alt="wind" />;
    default:
      return <img src={partlyCloudyDay} alt="partly-cloudy-day" />;
  }
};

export default RenderIcon;
