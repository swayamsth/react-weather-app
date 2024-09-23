import React, { useEffect, useState } from "react";
import Output from "./Output";

const Api = ({ city, apiKey }) => {
  const [readings, setReadings] = useState(null);
  const currentDate = new Date().toISOString().slice(0, 10);
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${URL}/${city}/${currentDate}?unitGroup=metric&key=${apiKey}`
      );
      const data = await response.json();
      setReadings(data);
    }
    fetchData();
  }, [city]);

  console.log(readings);

  return (
    <div>
      <Output readings={readings} />
    </div>
  );
};

export default Api;
