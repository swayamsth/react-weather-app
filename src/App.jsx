import React, { useEffect, useState } from "react";
import Search from "./components/Search";
import Output from "./components/Output";
import { apiKey } from "./components/config.js";
import "./App.css";

function App() {
  const [city, setCity] = useState("Sydney");
  const [readings, setReadings] = useState(null);
  const [isDayTime, setIsDayTime] = useState(true);
  const currentDate = new Date().toISOString().slice(0, 10);
  const forecastDays = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);
  const URL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline`;

  const date = new Date();
  const currentTime = roundToHour(date).toString().slice(16, 18);

  function roundToHour(date) {
    const p = 60 * 60 * 1000;
    return new Date(Math.round(date.getTime() / p) * p);
  }

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `${URL}/${city}/${currentDate}/${forecastDays}?unitGroup=metric&key=${apiKey}`
      );
      const data = await response.json();
      setReadings(data);

      const sunrise = data.days[0].sunrise.slice(0, 2);
      const sunset = data.days[0].sunset.slice(0, 2);

      setIsDayTime(currentTime >= sunrise && currentTime <= sunset);
    }
    fetchData();
  }, [city]);

  useEffect(() => {
    const body = document.body;
    const dayGradient = "linear-gradient(to top, #00d4ff, #6dd5fa, #2980b9);";
    const nightGradient = "linear-gradient(to top, #000428, #004e92)";

    body.style.background = isDayTime ? dayGradient : nightGradient;

    return () => {
      body.style.background = "";
    };
  }, [isDayTime]);

  if (!readings) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Search setCity={setCity} />
      <Output readings={readings} currentTime={currentTime} />
    </>
  );
}

export default App;
