import React from "react";
import WeatherImage from "./WeatherImage";

function WeatherCard({
  cloudiness = "Unknown",
  currentTemp = "Unknown",
  highTemp = "Unknown",
  humidity = "Unknown",
  lowTemp = "Unknown",
  weatherType = "Unknown",
  windSpeed = "Unknown",
}) {
  return (
    <section className="WeatherCard">
      <div class="WeatherImageWrapper">
        <WeatherImage weatherType={weatherType} />
      </div>
      <div className="CurrentTemperatureWrapper">
        <h2 className="">Current Temperature:</h2>
        <p>
          <strong>{currentTemp}</strong>
        </p>
      </div>
      <p>
        Weather Type: <strong>{weatherType}</strong>
      </p>
      <p>
        Highest Temperature: <strong>{highTemp}</strong>
      </p>
      <p>
        Lowest Temperature: <strong>{lowTemp}</strong>
      </p>
      <p>
        Cloudiness: <strong>{cloudiness}</strong>
      </p>
      <p>
        Humidity: <strong>{humidity}</strong>
      </p>
      <p>
        Wind Speed: <strong>{windSpeed}</strong>
      </p>
    </section>
  );
}

export default WeatherCard;
