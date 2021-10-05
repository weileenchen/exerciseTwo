import React, { useMemo, useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import WeatherCard from "../components/WeatherCard";
import API_Key from "../components/API_KEY";
//useMemo -- a value that must always be present and updated

const APIKey = API_Key();

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
    weatherType,
    windSpeed,
  } = useMemo(() => {
    if (!weatherData) return {};
    return {
      cloudiness: weatherData.clouds.all,
      currentTemp: Math.round(weatherData.main.temp),
      highTemp: Math.round(weatherData.main.temp_max),
      humidity: weatherData.main.humidity,
      lowTemp: Math.round(weatherData.main.temp_min),
      weatherType: weatherData.weather[0].main,
      windSpeed: weatherData.wind.speed,
    };
  }, [weatherData]);

  return (
    <main className="App">
      <div className="Home">
        <header className="WeatherHeader">
          <nav className="Navigation">
            <a
              href="/?city=Brooklyn"
              className={city === "Brooklyn" && "Active"}
            >
              Brooklyn
            </a>
            <a
              href="/?city=Cambridge"
              className={city === "Cambridge" && "Active"}
            >
              Cambridge
            </a>
          </nav>
        </header>
        <h1 className="City">{city}</h1>
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
