import React, { useMemo } from "react";
import WeatherCard from "../components/WeatherCard";
//useMemo -- a value that must always be present and updated

function Home() {
  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    return {
      cloudiness: 100,
      currentTemp: `76`,
      highTemp: `80`,
      humidity: 100,
      lowTemp: `80`,
      weatherType: "Cloudy",
      windSpeed: `10mph`,
    };
  }, []);

  return (
    <main className="App">
      <div className="Home">
        <header className="WeatherHeader">Weather App</header>
        <WeatherCard
          cloudiness={cloudiness}
          currentTemp={currentTemp}
          highTemp={highTemp}
          humidity={humidity}
          lowTemp={lowTemp}
          weatherType={weatherType}
          windSpeed={windSpeed}
        />
      </div>
    </main>
  );
}

export default Home;
