import React from "react";
import styles from "./output.module.css";
import RenderIcon from "./RenderIcon";

const Output = ({ readings }) => {
  if (!readings || !readings.days || readings.days.length === 0) {
    return <div className={styles.loading}>Loading weather data...</div>;
  }
  return (
    <div>
      <div className={styles.mainContainer}>
        <div>
          <h1 className={styles.cityAddress}>{readings.address}</h1>
          <h1 className={styles.cityConditions}>
            {readings.days[0].conditions}
          </h1>
        </div>
        <RenderIcon icon={readings.days[0].icon} />
        <div>
          <h1 className={styles.currentTemp}>{readings.days[0].temp}°C</h1>
          <div className={styles.tempContainer}>
            <h3 className={styles.tempMin}>L:{readings.days[0].tempmin}°</h3>
            <h3 className={styles.tempMax}>H:{readings.days[0].tempmax}°</h3>
          </div>
        </div>
      </div>
      <div className={styles.readingDesc}>{readings.days[0].description}</div>
    </div>
  );
};

export default Output;
