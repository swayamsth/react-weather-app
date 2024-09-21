import React from "react";

const Api = ({ city, apiKey }) => {
  const currentDate = new Date().toISOString().slice(0, 10);
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${currentDate}?key=${apiKey}`;
  return <div>{city}</div>;
};

export default Api;
