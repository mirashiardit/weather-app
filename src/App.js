import WeatherContainer from "./components/WeatherContainer";
import TitleWrapper from "./components/TitleWrapper";

function App() {
  return (
    <TitleWrapper title="Weather App">
      <WeatherContainer />
    </TitleWrapper>
  );
}

export default App;

// "http://api.weatherapi.com/v1/current.json?key=0f91b89bc1944b9fb4a75218230809&q=Paris"
