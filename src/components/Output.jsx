import React from "react";
import styles from "./output.module.css";
import RenderIcon from "./RenderIcon";
import Forecast from "./Forecast";

const Output = ({ readings }) => {
  function roundToHour(date) {
    const p = 60 * 60 * 1000;
    return new Date(Math.round(date.getTime() / p) * p);
  }

  const date = new Date();
  const currentTime = roundToHour(date).toString().slice(16, 18);

  if (!readings || !readings.days || readings.days.length === 0) {
    return <div className={styles.loading}>Loading weather data...</div>;
  }

  const currentHourData = readings.days[0].hours.find((hour) => {
    const hourTime = hour.datetime.slice(0, 2);
    return hourTime === currentTime;
  });

  if (!currentHourData) {
    return (
      <div className={styles.loading}>No data available for this hour.</div>
    );
  }

  return (
    <div>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.cityAddress}>{readings.address}</h1>
          <h1 className={styles.cityConditions}>
            {currentHourData.conditions}
          </h1>
        </div>
        <RenderIcon icon={currentHourData.icon} />
        <div>
          <h1 className={styles.currentTemp}>{currentHourData.temp}°C</h1>
          <div className={styles.tempContainer}>
            <h3 className={styles.tempMin}>L:{readings.days[0].tempmin}°</h3>
            <h3 className={styles.tempMax}>H:{readings.days[0].tempmax}°</h3>
          </div>
        </div>
      </div>
      <div className={styles.readingDesc}>{readings.days[0].description}</div>
      <Forecast readings={readings} />
    </div>
  );
};

export default Output;
