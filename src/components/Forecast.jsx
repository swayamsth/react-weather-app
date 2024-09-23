import React from "react";
import styles from "./forecast.module.css";
import RenderIcon from "./RenderIcon";

const Forecast = ({ readings }) => {
  const days = readings.days;

  return (
    <div>
      <div className={styles.forecastContainer}>
        {days.map((day, index) => {
          const date = new Date(day.datetime).toDateString().slice(0, 3);
          if (day.datetime !== readings.days[0].datetime) {
            return (
              <div key={index} className={styles.itemContainer}>
                <RenderIcon icon={day.icon} />
                <div className={styles.tempContainer}>
                  <p>L: {day.tempmin}°</p>
                  <p>H: {day.tempmax}°</p>
                </div>
                <p className={styles.currentDate}>{date}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Forecast;
