import React, { useEffect } from "react";

const Api = ({ city, apiKey }) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${URL}/${city}/${currentDate}?key=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, [city]);

  return <div>{city}</div>;
};

export default Api;
