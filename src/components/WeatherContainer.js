import SearchInput from "./SearchInput";
import WeatherCard from "./WeatherCard";

import { useState, useEffect } from "react";

function WeatherContainer() {
  const [cityName, setCityName] = useState("");

  const [weatherData, setWeatherData] = useState(null);

  const [weatherError, setWeatherError] = useState(null);

  const getCurrenWeatherForCity = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=0f91b89bc1944b9fb4a75218230809&q=${cityName}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setWeatherData(null);
          setWeatherError(data.error.message);
        } else {
          setWeatherData(data.current.condition);
          setWeatherError(null);
        }
      });
  };

  useEffect(() => {
    if (cityName.length > 1) getCurrenWeatherForCity();
  }, [cityName]);

  return (
    <div className="weather-container">
      <SearchInput
        setCityName={setCityName}
        getCurrenWeatherForCity={getCurrenWeatherForCity}
      />
      <WeatherCard weatherData={weatherData} weatherError={weatherError} />
    </div>
  );
}

export default WeatherContainer;
