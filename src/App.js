import { useEffect, useState } from "react";

function App() {
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

  return (
    <div className="weather-container">
      <input
        type="text"
        onChange={(event) => {
          setCityName(event.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          getCurrenWeatherForCity();
        }}
      >
        Search
      </button>

      {weatherData ? (
        <div className="weather-data-container">
          <h5>{weatherData.text}</h5>
          <img src={weatherData.icon} />
        </div>
      ) : weatherError ? (
        <div>{weatherError}</div>
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
}

export default App;

// "http://api.weatherapi.com/v1/current.json?key=0f91b89bc1944b9fb4a75218230809&q=Paris"
