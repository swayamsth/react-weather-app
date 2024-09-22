import React from "react";
import styles from "./output.module.css";

const Output = ({ readings }) => {
  if (
    !readings ||
    !readings.currentConditions ||
    !readings.days ||
    readings.days.length === 0
  ) {
    return <div className={styles.loading}>Loading weather data...</div>;
  }
  return (
    <div>
      <div>
        <h1 className={styles.cityAddress}>{readings.address}</h1>
        <h1 className={styles.cityConditions}>
          {readings.currentConditions.conditions}
        </h1>
      </div>
      Icons
      <div>
        <h1>{readings.currentConditions.temp}</h1>
        <h3>{readings.days[0].tempmax}</h3>
        <h3>{readings.days[0].tempmin}</h3>
      </div>
      <div>{readings.days[0].description}</div>
    </div>
  );
};

export default Output;
