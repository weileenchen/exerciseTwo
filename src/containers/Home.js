import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
//useMemo -- a value that must always be present and updated

const APIKey = `3233b5f7573ad1aa7251b901b584598b`;

//URL Search Params -- i.e. localhost:3000/?city=paris
//Abstract here for easier use
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Home() {
  const [city, setCity] = useState();
  const [weatherData, setWeatherData] = useState();
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKey}`;
  let query = useQuery();

  useEffect(() => {
    const cityValue = query.get("city");
    setCity(cityValue);
  }, []);

  useEffect(() => {
    if (city) {
      axios
        .get(URL)
        .then(function (response) {
          console.log(response);
          setWeatherData(response.data);
          console.log(weatherData);
        })
        .catch(function (error) {
          console.warn(error);
        });
    }
  }, [city]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherDescription,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    if (!weatherData) return {};
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: `${weatherData.main.temp}`,
      highTemp: `${weatherData.main.temp_max}`,
      humidity: weatherData.main.humidity,
      lowTemp: `${weatherData.main.temp_min}`,
      weatherDescription: weatherData.weather[0].description,
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main className="App">
      <div className="Home">
        <header className="WeatherHeader">
          <p>
            <a href="/?city=Brooklyn">Brooklyn</a>
          </p>
          <p>
            <a href="/?city=Cambridge">Cambridge</a>
          </p>
        </header>
        <h1>{city}</h1>
        <WeatherCard
          cloudiness={cloudiness}
          currentTemp={currentTemp}
          highTemp={highTemp}
          humidity={humidity}
          lowTemp={lowTemp}
          weatherType={weatherType}
          weatherDescription={weatherDescription}
          windSpeed={windSpeed}
        />
      </div>
    </main>
  );
}

export default Home;
