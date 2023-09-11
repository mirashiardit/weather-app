function WeatherCard(props) {
  return props.weatherData ? (
    <div className="weather-data-container">
      <h5>{props.weatherData.text}</h5>
      <img src={props.weatherData.icon} />
    </div>
  ) : props.weatherError ? (
    <div>{props.weatherError}</div>
  ) : (
    <div>No data found</div>
  );
}

export default WeatherCard;
