import { useState } from "react";
import Api from "./components/api";
import Search from "./components/Search";
import { apiKey } from "./components/config.js";

function App() {
  const [city, setCity] = useState("Sydney");
  return (
    <>
      <Search setCity={setCity} />
      <Api city={city} apiKey={apiKey} />
    </>
  );
}

export default App;
