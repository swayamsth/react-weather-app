import { useState } from "react";
import Api from "./components/api";
import Search from "./components/Search";

function App() {
  const [city, setCity] = useState("");
  return (
    <>
      <Search setCity={setCity} />
      <Api city={city} />
    </>
  );
}

export default App;
