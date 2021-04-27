import { useState } from "react";
import WeatherApp from "./components/WeatherApp";
import CityForm from "./components/CityForm";
import "./App.css";

function App() {
  const [city, setCity] = useState("Paris");
  return (
    <div className="container my-4">
      <h1 className="display-2 text-center text-white mb-4">Météo Actuelle</h1>
      <WeatherApp city={city} />
      <CityForm city={city} setCity={setCity} />
    </div>
  );
}

export default App;
