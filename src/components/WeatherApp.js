import { useState, useEffect } from "react";
import Icon from "./Icon";
import Description from "./Description";
import Temperature from "./Temperature";
import Humidity from "./Humidity";
import Location from "./Location";

const WeatherApp = ({ city }) => {
  const [conditions, setConditions] = useState({});
  const [description, setDescription] = useState("");
  const [iconID, setIconID] = useState("");
  const [location, setLocation] = useState("");
  const { mainTemp, feelsLike, humidity } = conditions;
  //const [apiCallsCount, setApiCallsCount] = useState(0);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric&lang=fr`;

    fetch(url)
      .then((response) => {
        //setApiCallsCount((a) => a + 1);

        console.log(response);
        if (!response.ok) {
          throw new Error("Météo untrouvable");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setConditions({
          mainTemp: Math.round(data.main.temp),
          feelsLike: Math.round(data.main.feels_like),
          humidity: Math.round(data.main.humidity),
          //humidity: data.main.humidity,
        });
        setDescription(data.weather[0].description);
        setIconID(data.weather[0].icon);
        setLocation(`${data.name}, ${data.sys.country}`);
      })
      .catch((error) => {
        alert(error.message);
      });
    // }, [city, apiCallsCount]);
  }, [city]);

  return (
    <section className="text-center">
      <Icon iconID={iconID} />
      <Location location={location} />
      <Description description={description} />
      <Temperature mainTemp={mainTemp} feelsLike={feelsLike} />
      <Humidity humidity={humidity} />
    </section>
  );
};

export default WeatherApp;
//<p>Pendant cette session vous avez fait {apiCallsCount} appels à l'API openweathermap</p>;
