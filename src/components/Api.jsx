import React from "react";

const Api = ({ city }) => {
  const API_KEY = "WYU84EMN9R37UVQHYNJVGRXAJ";
  const currentDate = new Date().toISOString().slice(0, 10);
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${currentDate}?key=${API_KEY}`;
  return <div>{city}</div>;
};

export default Api;
